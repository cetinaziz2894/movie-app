import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { getMovieById } from '../actions/movies';

export default function MovieDetail() {
    let {id} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [movie, setMovie] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieById(id))
        .then((result) => {
            setMovie(result);   
            setIsLoaded(true);
            const stars = document.getElementById(id).getElementsByClassName("fa-star");
                for (let index = 0; index < result.rating; index++) {
                    stars[index].style.color="orange";
                }
        })
        .catch(() => {
          setIsLoaded(false);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <Container>
            {
                isLoaded && <>
                <MovieInfo>
                    <MovieInfoImage src={`/images/slider_mobil/${movie.image}`} alt={movie?.name}/>
                    <MovieInfoText>
                    <span><b>Category : </b>{movie?.category}</span>
                    <span><b>Duration : </b>{movie?.duration} min.</span>
                    </MovieInfoText>
                    <MovieInfoRate>
                        <RateImg id={movie?.id}>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </RateImg>
                    </MovieInfoRate>
                </MovieInfo>
                <MovieDetails>
                    <MovieDetailTitle>{movie?.name}</MovieDetailTitle>
                    <MovieDetailDesc>{movie?.description}</MovieDetailDesc>
                </MovieDetails>
                </>
            }
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    height:100%;
    width: 80%;
    margin: 0 auto;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
        "movie_info"
        "movie_desc";
    text-align:center;
    transition: all 0.25s ease-in-out;
    @media (max-width: 550px) {
        display:grid;
        height:100%;
        width: 80%;
        margin: 0 auto;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
          "movie_info"
          "movie_desc";
      }
`;

const MovieInfo = styled.div`
    grid-area:movie_info;
    display:grid;
    height:100%;
    width: 100%;
    grid-template-rows:1fr 0.1fr 0.1fr;
    grid-template-areas:
        "image"
        "text"
        "rating";
    text-align:center;
    transition: all 0.25s ease-in-out;
    padding:10px 10px;
    @media (max-width: 550px) {
        display:grid;
        height:100%;
        width: 300px;
        grid-template-columns: 1fr;
        grid-template-rows:1fr 0.2fr 0.2fr;
        grid-template-areas:
        "image"
        "text"
        "rating";
      }
`
const MovieInfoImage = styled.img`
    display:grid;  
    grid-area:image;
    width:90%;
    height:100%;
`;

const Text = styled.div`
    display:grid;   
    text-align:left;
`;

const MovieInfoText = styled(Text)`
    grid-area:text;
    margin:10px 0;
`;

const MovieInfoRate = styled(Text)` 
    grid-area:rating;
    bottom:10;
    left:10px;
`;

const MovieDetails = styled.div`
    grid-area:movie_desc;
    display:grid;
    height:100%;
    width: 100%;
    grid-template-rows:0.4fr 3.3fr;
    grid-template-areas:
        "title"
        "desc";
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

const MovieDetailTitle = styled.h1`
    display:grid;  
    grid-area:title;
    text-align:left;
    font-weight:600;
`;

const MovieDetailDesc = styled.p`
    display:grid;        
    grid-area:desc;
    text-align:left;
`;