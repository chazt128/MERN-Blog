import { POSTS } from "../../constants";

const postsReducer = (state = [], { type, payload }) => {
  if (type === POSTS.POST_SUCCESS) {
    return [...payload.posts];
  }
  return state;
};

export default postsReducer;
