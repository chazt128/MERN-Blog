import { POSTS } from "../../constants";

export const loadPosts = () => ({
  type: POSTS.LOAD
});

export const setPosts = posts => ({
  type: POSTS.POST_SUCCESS,
  payload: {
    posts
  }
});

export const setMessage = message => ({
  type: POSTS.POST_SUCCESS_MESSAGE,
  payload: {
    message
  }
});

export const setPostChanged = success => ({
  type: POSTS.POST_CHANGED,
  payload: {
    success
  }
});

export const setError = error => ({
  type: POSTS.POST_FAILURE,
  payload: {
    error
  }
});

export const addPost = post => ({
  type: POSTS.ADD,
  payload: {
    post
  }
});

export const updatePost = post => ({
  type: POSTS.UPDATE,
  payload: {
    post
  }
});

export const deletePost = id => ({
  type: POSTS.DELETE,
  payload: {
    id
  }
});
