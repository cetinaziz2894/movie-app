import {GET_SLIDER, SET_MESSAGE} from './types'

export const getSlider = () => (dispatch) => {
    return fetch("http://localhost:3001/slider")
          .then(res => res.json())
          .then(
            (result) => {
                dispatch({
                    type: GET_SLIDER,
                    payload:{slider:result}
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
