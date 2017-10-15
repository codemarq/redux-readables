import C from '../utils/Constants'

const reducer = (state, action) => {
  const { id, timestamp, title, body, author, category, voteScore, deleted, parentDeleted, parentid } = action

  switch (action.type) {
    case C.NEW_COMMENT:
      return state;
    case C.NEW_POST:
      return state;
    case C.NEW_USER:
      return state;
    case C.VOTE_DOWN:
      return state;
    case C.VOTE_UP:
      return {
        ...state,
        [id]: {
          ...state[id],
          [voteScore]: voteScore +1
        }
      };
    case C.DELETE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          [deleted]: true
        }
      };
    case C.DELETE_COMMENT:
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