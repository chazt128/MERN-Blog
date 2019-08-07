import { POSTS } from "../../constants";

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case POSTS.LOAD:
      return true;
    case POSTS.LOAD_SUCCESS:
    case POSTS.LOAD_FAILURE:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
