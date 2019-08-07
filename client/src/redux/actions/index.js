import { POSTS } from "../../constants";

export const loadPosts = () => ({
  type: POSTS.LOAD
});

export const setPosts = posts => ({
  type: POSTS.LOAD_SUCCESS,
  payload: {
    posts
  }
});

export const setError = error => ({
  type: POSTS.LOAD_FAILURE,
  payload: {
    error
  }
});

export const addPost = post => ({
  type: POSTS.ADD_POST,
  payload: {
    post
  }
});

export const updatePost = (id, post) => ({
  type: POSTS.UPDATE_POST,
  payload: {
    id,
    post
  }
});

export const deletePost = id => ({
  type: POSTS.DELETE_POST,
  payload: {
    id
  }
});
