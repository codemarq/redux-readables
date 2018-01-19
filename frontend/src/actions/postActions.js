import * as types from './actionTypes'
import * as postsApi from '../api/postsApi'

export const loadPostsSuccess = (posts) => {
  return {
    type: types.LOAD_POSTS_SUCCESS,
    posts
  }
}

export const createPostSuccess = (post) => {
  return {
    type: types.CREATE_POST_SUCCESS,
    post
  }
}

export const updatePostSuccess = (post) => {
  return {
    type: types.UPDATE_POST_SUCCESS,
    post
  }
}

export const loadPosts =  () => {
  return (dispatch) => {
    return postsApi.getPosts().then(posts => {
      dispatch(loadPostsSuccess(posts))
    }).catch(error => {
      throw(error)
    })
  }
}