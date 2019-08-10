import { POSTS } from "../../constants";

const postsReducer = (state = [], { type, payload }) => {
  if (type === POSTS.LOAD_SUCCESS) {
    return [...payload.posts];
  }
  return state;
};

export default postsReducer;
