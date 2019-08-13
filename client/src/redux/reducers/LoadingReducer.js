import { POSTS } from "../../constants";

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case POSTS.LOAD:
      return true;
    case POSTS.POST_SUCCESS:
    case POSTS.POST_FAILURE:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
