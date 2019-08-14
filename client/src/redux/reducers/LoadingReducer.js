import { POSTS } from "../../constants";

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case POSTS.LOAD:
    case POSTS.ADD:
    case POSTS.UPDATE:
    case POSTS.DELETE:
      return true;
    case POSTS.POST_SUCCESS:
    case POSTS.POST_FAILURE:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
