import { combineReducers } from "redux";
import error from "./ErrorReduecer";
import loading from "./LoadingReducer";
import posts from "./PostsReducer";
import message from "./MessageReducer";
export default combineReducers({
  posts,
  loading,
  error,
  message
});
