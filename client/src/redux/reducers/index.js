import { combineReducers } from "redux";
import error from "./ErrorReduecer";
import loading from "./LoadingReducer";
import posts from "./PostsReducer";

export default combineReducers({
  posts,
  loading,
  error
});
