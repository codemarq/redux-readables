import { NEW_POST, NEW_COMMENT, NEW_USER, VOTE_UP, VOTE_DOWN, DELETE_POST, DELETE_COMMENT } from '../actions'

const reducer = (state, action) => {
  const { id, timestamp, title, body, author, category, voteScore, deleted, parentDeleted, parentid } = action

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
          [voteScore]: voteScore +1
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