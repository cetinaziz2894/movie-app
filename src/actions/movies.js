import {GET_ACTION_MOVIES, GET_COMEDY_MOVIES, GET_DRAMA_MOVIES, GET_MOVIE_BY_ID, SET_MESSAGE} from './types'

export const getDramaMovies = () => (dispatch) => {
    return fetch('https://mockdata-json-server.herokuapp.com/movies')
          .then(res => res.json())
          .then(
            (result) => {
                dispatch({
                    type: GET_DRAMA_MOVIES,
                    payload:{movies:result}
                });
                return result;
            },
            (error) => {
                const message =(
                    error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                    dispatch({
                        type:SET_MESSAGE,
                        payload:message
                    });
                    return Promise.reject();
                }
          )
}

export const getComedyMovies = () => (dispatch) => {
    return fetch('https://mockdata-json-server.herokuapp.com/movies')
          .then(res => res.json())
          .then(
            (result) => {
                dispatch({
                    type: GET_COMEDY_MOVIES,
                    payload:{movies:result}
                });
                return result;
            },
            (error) => {
                const message =(
                    error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                    dispatch({
                        type:SET_MESSAGE,
                        payload:message
                    });
                    return Promise.reject();
                }
          )
}

export const getActionMovies = () => (dispatch) => {
    return fetch('https://mockdata-json-server.herokuapp.com/movies')
          .then(res => res.json())
          .then(
            (result) => {
                dispatch({
                    type: GET_ACTION_MOVIES,
                    payload:{movies:result}
                });
                return result;
            },
            (error) => {
                const message =(
                    error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                    dispatch({
                        type:SET_MESSAGE,
                        payload:message
                    });
                    return Promise.reject();
                }
          )
}

export const getMovieById = (id) => (dispatch) => {
    return fetch('https://mockdata-json-server.herokuapp.com/movies/${id}')
          .then(res => res.json())
          .then(
            (result) => {
                dispatch({
                    type: GET_MOVIE_BY_ID,
                    payload:{movie:result}
                });
                return result;
            },
            (error) => {
                const message =(
                    error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                    dispatch({
                        type:SET_MESSAGE,
                        payload:message
                    });
                    return Promise.reject();
                }
          )
}
