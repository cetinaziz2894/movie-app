import {
    GET_SLIDER
  } from "../actions/types";

  const initialState = { slider: null };

  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
      const {type, payload } = action;

      switch (type) {
        case GET_SLIDER:
          return {
            ...state,
            slider:payload.slider
          };
        default:
          return state;
      }
  }