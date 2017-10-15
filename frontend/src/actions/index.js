import C from '../utils/Constants'

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