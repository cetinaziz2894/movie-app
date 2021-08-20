import React, { useEffect, useState } from 'react';
import '../assets/carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getSlider } from '../actions/slider';
import { useHistory } from 'react-router-dom';

const SlideItem  = styled.div`
background-image:url("images/slider/${props => props.name}.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
filter: blur(15px);
`;

export default function Slider() {
    const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState('slider');
    const dispatch = useDispatch();
    const { slider } = useSelector(state => state.slider);

    const history = useHistory();

    const navigateTo = (route) => {
        history.push(route);
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(window.innerWidth);
          }
          window.addEventListener('resize', handleResize);

          if(windowDimensions < 750){
            setImageSrc('slider_mobil');
            }else{setImageSrc('slider'); 
        }

        dispatch(getSlider())
        .then(() => {
          setIsLoaded(true);
        })
        .catch(() => {
          setIsLoaded(false);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowDimensions])
    return (
        <Carousel 
            autoPlay
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            className="carousel-wrapper"
            dynamicHeight={false}
        >
            {
               isLoaded && slider.map((item,i) =><div key={i} onClick={()=> navigateTo(`/movie/${item.id}`)}>
                        <SlideItem name={item.name}></SlideItem>
                        <img 
                        src={`images/${imageSrc}/${item.name}.jpg`} 
                        alt={item.name} 
                     />
                </div>)
            }
        </Carousel>
    )
}
