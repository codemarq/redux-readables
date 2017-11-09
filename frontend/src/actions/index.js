export const NEW_POST = 'NEW_POST'
export const NEW_COMMENT = 'NEW_COMMENT'
export const VOTE_UP = 'VOTE_UP'
export const VOTE_DOWN = 'VOTE_DOWN'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function newPost ({ timestamp, title, body, author, category }) {
  return {
    type: NEW_POST,
    timestamp,
    title,
    body,
    author,
    category
  }
}

export function newComment ({ parentId, body, author, timestamp }) {
  return {
    type: NEW_COMMENT,
    parentId,
    body,
    author,
    timestamp
  }
}

export function voteUp (post) {
  return {
    type: VOTE_UP,
    post
  }
}

export function voteDown (post) {
  return {
    type: VOTE_DOWN,
    post
  }
}

export function deletePost (post) {
  return {
    type: DELETE_POST,
    post
  }
}

export function deleteComment (comment) {
  return {
    type: DELETE_COMMENT,
    comment
  }
}