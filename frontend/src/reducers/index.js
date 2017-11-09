import { 
  NEW_POST,
  DELETE_POST,
  NEW_COMMENT,
  DELETE_COMMENT,
  VOTE_UP,
  VOTE_DOWN,
} from '../actions'
import { combineReducers } from 'redux'

// const initialState = {
//   posts: [],
//   comments: []
// }

const posts = (state = [], action) => {
  // const { 
  //   id,  
  //   deleted, 
  // } = action

  switch (action.type) {
    case NEW_POST:
      return state;
    case DELETE_POST:
      return state;  
    // return [
      //   ...state,
        // [id] = [
        //   ...state[id],
        //   [deleted] = true
        // ]
      // ];
    default:
      return state;
  }
}

const comments = (state = [], action) => {
  const { id, deleted } = action;

  switch (action.type) {
    case NEW_COMMENT:
      return state;
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

const vote = (state, action) => {
  const { voteScore, id } = action;

  switch (action.type) {
    case VOTE_UP:
      return state;
      // return {
      //   ...state,
      //   [id]: {
      //     ...state[id],
      //     [voteScore]: action.voteScore
      //   }
      // };
    case VOTE_DOWN:
      return state;
    default:
      return state;
    }
}

export default combineReducers({
  posts,
  comments,
  // vote
})