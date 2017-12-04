import uuid from 'uuid/v1'

export const NEW_POST = 'NEW_POST'
export const NEW_COMMENT = 'NEW_COMMENT'
export const VOTE_UP = 'VOTE_UP'
export const VOTE_DOWN = 'VOTE_DOWN'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'



export function newPost ({ id = uuid(), timestamp = Date.now(), title, body, author, category }) {
  return {
    type: NEW_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category
  }
}

export function newComment ({ id = uuid(), parentId, body, author, timestamp }) {
  return {
    type: NEW_COMMENT,
    id,
    parentId,
    body,
    author,
    timestamp
  }
}

export function voteUp (id) {
  return {
    type: VOTE_UP,
    id
  }
}

export function voteDown (id) {
  return {
    type: VOTE_DOWN,
    id
  }
}

export function deletePost (id) {
  return {
    type: DELETE_POST,
    id
  }
}

export function deleteComment (id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}