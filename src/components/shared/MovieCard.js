import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

export default function MovieCard({movie}) {
    const [startPoint, setStartPoint] = useState(0);

    const history = useHistory();

    const mouseDown = (event) => {
        setStartPoint(event.pageX);
      }

    const mouseUp = (event, id) => {
        if(Math.abs(event.pageX - startPoint) <15){
            navigate(id)
        }
    };

    const navigate = (item) => {
        history.push(`/movie/${item}`);
    }

    useEffect(() => {
        if(movie){
            const stars = document.getElementById(movie?.id).getElementsByClassName("fa-star");
            for (let index = 0; index < movie.rating; index++) {
                stars[index].style.color="orange";
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Content 
            id={movie?.id}
            onMouseDown={(e)=>mouseDown(e)}  
            onMouseUp={(e)=>mouseUp(e, movie?.id)}
        >
            <ContentOverlay />
            <ContentImage src={`/images/slider_mobil/${movie.image}`} alt={movie?.name}/>
            <ContentDetail>
                <ContentTitle>{movie?.name}</ContentTitle>
                <ContentDesc>{movie?.description}</ContentDesc>
                <ContentBottom>
                    <ContentRate>
                        <RateImg>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </RateImg>
                    </ContentRate>
                    <ContentDuration><p>{movie?.duration}min.</p></ContentDuration>
                </ContentBottom>
            </ContentDetail>
        </Content>
    )
}

const Content = styled.div`
position:relative;
min-width: 180px;
min-height: auto!important;
height: auto;
width:180px;
margin-right:10px;
overflow: hidden;
border-radius:5px;
text-align: center;
font-size: 18px;
background: #fff;
justify-content: center;
align-items: center;

@media (max-width: 1440px) {
    min-width: 100px;
    width: 166px;
    padding: 0rem;
  }

@media (max-width: 992px) {
    min-width: 100px;
    width: 145px;
    padding: 0rem;
  }

  @media (max-width: 762px) {
    min-width: 100px;
    width: 135px;
    padding: 0rem;
  }

@media (max-width: 464px) {
    min-width: 100px;
    width:145px;
    padding: 0rem;
  }
`;

const ContentOverlay = styled.div`
background: rgba(0,0,0,0.7);
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
opacity: 0;
-webkit-transition: all 0.4s ease-in-out 0s;
-moz-transition: all 0.4s ease-in-out 0s;
transition: all 0.4s ease-in-out 0s;

${Content}:hover & {
    opacity: 1;
}
`;

const ContentImage = styled.img`
display: block;
width: 100%;
height: 250px;
`;
const ContentDetail = styled.div`
display:grid;
height:100%;
grid-template-rows: 0.2fr 1.5fr 0.1fr;
grid-template-areas:
  "content_title"
  "content_desc"
  "content_bottom";
align-items:start;
justify-content:center;
position:absolute;
max-width: 100%;
max-height: 100%;
text-align:center;
top: 50%;
opacity: 0;

${Content}:hover & {
    top: 0;
    opacity: 1;
}
`;

const ContentTitle = styled.h3`
display: grid;
grid-area:content_title;
color:#fff;
font-weight:400;
letter-spacing:0.15em;
`;
const ContentDesc = styled.p`
display: grid;
grid-area:content_desc;
color:#fff;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
`;

const ContentBottom = styled.div`
    display:flex;
    width:100%;
    grid-area:content_bottom;
    grid-template-column: 2fr 1fr;
    grid-template-areas:
    "content_rate"
    "content_duration";
`;

const ContentRate = styled.div`
    grid-area:content_rate;
    bottom:10;
    left:10px;
`;

const RateImg = styled.div`
display: flex;
height:100%;
width:100%;
fill: yellow;
> span {
    color:white;
}
`;

const ContentDuration = styled.div`
    display: grid;
    grid-area:content_duration;
    display: flex;
    height:100%;
    width:100%;
    margin-left:10px;
    margin-bottom:10px;
    text-align:center;
    justify-content:center;
    align-items:center;

    > p {
        margin-bottom: 0px;
        margin-top: -4px;
    }
`;