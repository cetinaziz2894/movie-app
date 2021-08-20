import {
  GET_ACTION_MOVIES,
    GET_COMEDY_MOVIES,
    GET_DRAMA_MOVIES, GET_MOVIE_BY_ID
  } from "../actions/types";

  const initialState = { movies:null };

  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
      const {type, payload } = action;

      switch (type) {
        case GET_DRAMA_MOVIES:
          return {
            ...state,
            drama_movies:payload.movies.filter(movie => movie.category === "Drama")
          };
        case GET_COMEDY_MOVIES:
        return {
            ...state,
            comedy_movies:payload.movies.filter(movie => movie.category === "Comedy")
        };
        case GET_ACTION_MOVIES:
        return {
            ...state,
            action_movies:payload.movies.filter(movie => movie.category === "Action")
        };
        case GET_MOVIE_BY_ID:
        return {
            ...state,
            movie:payload.movie
        };
        default:
          return state;
      }
  }