import { AsyncStorage } from 'react-native'
import { endpoints } from '../constants'

export const receivePosts = (posts) => (
  {
    type: 'RECEIVE_POSTS',
    posts,
  }
);

export const refreshPosts = () => (
  {
    type: 'REFRESH_POSTS',
  }
);

export const togglePostsLoading = () => ({
  type: 'TOGGLE_POSTS_LOADING',
});

export const resetCustomers = () => ({
  type: 'RESET_CUSTOMERS',
})

export function createPost(post) {
  console.log(post);
  return (dispatch) => {
    dispatch(togglePostsLoading());
    return fetch(endpoints.posts, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assign({}, post)),
    })
    .then(response => {
      dispatch(togglePostsLoading())
      dispatch(refreshPosts());
    });
  };
}


export function fetchPosts() {
  console.log(endpoints.posts);
  return (dispatch) => {
    dispatch(togglePostsLoading())
    return fetch(endpoints.posts, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(json => {
      dispatch(receivePosts(json))
      dispatch(togglePostsLoading())
    })
  }
}
