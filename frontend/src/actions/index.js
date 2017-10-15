export const NEW_POST = 'NEW_POST'
export const NEW_COMMENT = 'NEW_COMMENT'
export const NEW_USER = 'NEW_USER'
export const VOTE_UP = 'VOTE_UP'
export const VOTE_DOWN = 'VOTE_DOWN'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function newPost ({ timestamp, title, body, author, category }) {
  return {
    type: C.NEW_POST,
    timestamp,
    title,
    body,
    author,
    category
  }
}

export function newComment ({ parentId, body, author, timestamp }) {
  return {
    type: C.NEW_COMMENT,
    parentId,
    body,
    author,
    timestamp
  }
}

export function newUser (author) {
  return {
    type: C.NEW_USER,
    author
  }
}

export function voteUp (post) {
  return {
    type: C.VOTE_UP,
    post
  }
}

export function voteDown (post) {
  return {
    type: C.VOTE_DOWN,
    post
  }
}

export function deletePost (post) {
  return {
    type: C.DELETE_POST,
    post
  }
}

export function deleteComment (comment) {
  return {
    type: C.DELETE_COMMENT,
    comment
  }
}