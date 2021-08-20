import { combineReducers } from "redux";
import message from "./message";
import slider from "./slider";
import movie from "./movies";

export default combineReducers({
  message,
  slider,
  movie
});