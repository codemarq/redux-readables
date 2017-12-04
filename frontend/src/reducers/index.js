import { 
  NEW_POST,
  DELETE_POST,
  NEW_COMMENT,
  DELETE_COMMENT,
  // VOTE_UP,
  // VOTE_DOWN,
} from '../actions'

import { combineReducers } from 'redux'

const intitialAppState = {
  posts: [],
  comments: [],
  categories: []
}
const initialPostsState = []

const posts = (state = initialPostsState, action) => {
  const { 
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted, 
  } = action

  switch (action.type) {
    case NEW_POST:
      return {
        ...state,
          ...state[posts].push(
            {
              id: id,
              timestamp: timestamp,
              title: title,
              body: body,
              author: author,
              category: category,
              votescore: 0,
              deleted: false,
            }  
          )
    }
    case DELETE_POST:
      return {

      }
    default:
      return state;
  }
}

const comments = (state = [], action) => {
  const { 
    id,
    parentId,
    title,
    body,
    author,
    deleted,
    timestamp 
  } = action;

  switch (action.type) {
    case NEW_COMMENT:
      return {
        ...state,
          ...state[comments].push(
            {
              id: id,
              timestamp: timestamp,
              title: title,
              body: body,
              author: author,
              votescore: 0,
              parentDeleted: false,
              deleted: false,
            }  
      )
    }
    case DELETE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          [deleted]: true
        }
      }
    default:
      return state;
    }
}

export default combineReducers({
  posts,
  comments,
})