import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { getActionMovies, getComedyMovies, getDramaMovies } from '../actions/movies';
import Category from './Category';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './shared/MovieCard';

export default function Categories() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isComdeyLoaded, setIsComdeyLoaded] = useState(false);
  const [isActionLoaded, setIsActionLoaded] = useState(false);
  const dispatch = useDispatch();    
  const {drama_movies, comedy_movies, action_movies} = useSelector(state => state.movie);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      partialVisibilityGutter: 20
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      partialVisibilityGutter: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      partialVisibilityGutter: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2
    }
  };

  useEffect(() => {
    dispatch(getDramaMovies())
    .then(() => {
      setIsLoaded(true);
    })
    .catch(() => {
      setIsLoaded(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(getComedyMovies())
    .then(() => {
      setIsComdeyLoaded(true);
    })
    .catch(() => {
      setIsComdeyLoaded(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(getActionMovies())
    .then(() => {
      setIsActionLoaded(true);
    })
    .catch(() => {
      setIsActionLoaded(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <ContentBox>
        {/* This slider dont use react-multi-carousel library */}
          <ActionCategories>
            <CategoryTitle>Action Movies</CategoryTitle>
            {
              isActionLoaded && 
              <Carousel
              ssr
              partialVisbile
              itemClass="image-item"
              responsive={responsive}
              style={{marginLeft: '20px'}}
            >
              {action_movies.map((movie,i) => {
                return (
                  <MovieCard key={i} movie={movie} draggable={false} />
                );
              })}
            </Carousel>}
        </ActionCategories>
        {/* This slider use react-multi-carousel library */}
        <DramaCategories>
          <CategoryTitle>Drama Movies</CategoryTitle>
          {
            isLoaded && 
            <Carousel
              ssr
              partialVisbile
              itemClass="image-item"
              responsive={responsive}
            >
              {drama_movies.map((movie,i) => {
                return (
                  <MovieCard key={i} movie={movie} draggable={false} />
                );
              })}
            </Carousel>}
        </DramaCategories>
        {/* This slider dont use react-multi-carousel library */}
        <ComedyCategories>
          <CategoryTitle>Comedy Movies</CategoryTitle>
          {
            isComdeyLoaded && 
            <Category movies={comedy_movies} categorytype="comedy_movies"></Category>
          }
        </ComedyCategories>
    </ContentBox>
  )
}

const ContentBox = styled.div`
  display: grid;
  height:100%;
  width: 90%;
  margin: 0 auto;
  grid-area: content;
  grid-template-rows:0.8fr 0.8fr 0.8fr;
  grid-template-areas:
    "action_ategories"
    "drama_categories"
    "comedy_ategories";
  align-items: center;
  text-align:center;    
  transition: all 0.25s ease-in-out;
  justify-content: start;
  @media (max-width: 550px) {
    flex-direction: column;
    padding: 0rem;
  }
`;
const CategoryContent = styled.div`
  grid-area:category;
  display: grid;
  grid-template-rows:0.2fr 1.8fr;
  grid-template-areas:
    "category_title"
    "movie_list";
  padding: 0.25rem;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const CategoryTitle = styled.h2`
  grid-area:category_title;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
  text-align:left;
`;

const DramaCategories = styled(CategoryContent)`
  grid-area:drama_categories;
`;
const ComedyCategories = styled(CategoryContent)`
  grid-area:comedy_ategories;
`;

const ActionCategories = styled(CategoryContent)`
  grid-area:action_ategories;
`;