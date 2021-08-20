import React, { useState } from 'react'
import styled from "styled-components";
import MovieCard from './shared/MovieCard';

export default function Category(props) {
    const {categorytype, movies} = props;
    const [startPoint, setStartPoint] = useState(0);
    const [enableDrag, setEnableDrag] = useState(false)
    const [marginLeftStart, setMarginLeftStart] = useState(0); 

    const mouseDown = (event) => {
      setMarginLeftStart(parseInt(getComputedStyle(document.getElementById("list_"+categorytype)).marginLeft));
      setEnableDrag(true);
      setStartPoint(event.pageX);
    }
    
    const mouseMove = (event) => {
      let sliderWidth = document.getElementById("slider_"+categorytype).offsetWidth;
      let listWidth = document.getElementById("list_"+categorytype).scrollWidth;
      if(enableDrag){
        let delta = event.pageX - startPoint;
        let scroll = marginLeftStart+delta;
        if(scroll-165 > -listWidth && -scroll+sliderWidth < listWidth){
          document.getElementById(`list_${categorytype}`).style.marginLeft = `${scroll}px`;
        }
        if(scroll-165 === -listWidth){
          document.getElementById(`list_${categorytype}`).style.marginLeft = `${sliderWidth-(scroll)}px`;
        }
        if(scroll >=0){
          document.getElementById(`list_${categorytype}`).style.marginLeft = "0px";
        }
        event.preventDefault();
      }
    }
  
    const mouseUp = () => {
      if(enableDrag){
        setEnableDrag(false);
      }
    };
  
    const mouseOut = () => {
      setEnableDrag(false);
    };

    return (
        <Slider id={`slider_${categorytype}`}>
        <MovieList id={`list_${categorytype}`} 
          onMouseOut={(e) => {mouseOut(e)}} 
          onMouseDown={(e)=>mouseDown(e)} 
          onMouseMove={(e) => mouseMove(e)} 
          onMouseUp={(e)=>mouseUp(e)}>
          {
            movies && movies.map((movie,i) =>
            <MovieCard key={i} movie={movie} />)
          }
        </MovieList>
      </Slider>
    )
}

const Slider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  overflow-x: hidden;
  cursor:pointer;

  @media (max-width:768px) {
    overflow-x: scroll;
  }
`;

const MovieList = styled.div`
  grid-area:movie_list;
  position: relative;
  width: 100%;
  z-index: 1;
  margin-left:0px;
  display: flex;
  box-sizing: content-box;
  -webkit-box-align: start;
  align-items: flex-start;
  transition-property: transform,height;
`;