import { NEW_POST, NEW_COMMENT, NEW_USER, VOTE_UP, VOTE_DOWN, DELETE_POST, DELETE_COMMENT } from '../actions'


// const initialState = {
//   posts: [],
//   comments: []
// }

const reducer = (state, action) => {
  const { 
    id, 
    voteScore, 
    deleted, 
  } = action

  switch (action.type) {
    case NEW_COMMENT:
      return state;
    case NEW_POST:
      return state;
    case NEW_USER:
      return state;
    case VOTE_DOWN:
      return state;
    case VOTE_UP:
      return {
        ...state,
        [id]: {
          ...state[id],
          [voteScore]: action.voteScore
        }
      };
    case DELETE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          [deleted]: true
        }
      };
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

export default reducer