const url = "http://localhost:3001"
const responseContainer = document.querySelector('#response-container')

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}
// const newPostBody = new FormData(document.getElementById('newPost-form'))

function requestError(e, part) {
  console.log(e);
  responseContainer.insertAdjacentHTML('beforeend', `<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`);
}

// GET
export const getComments = (id) =>
  fetch(`${url}/posts/${id}/comments`, {
    headers: headers
  }).then(res => res.json())
    .catch(e => requestError(e, 'getComments'))

export const getCommentDetails = (id) =>
  fetch(`${url}/comments/${id}`, {
    headers: headers
  }).then(res => res.json())
    .catch(e => requestError(e, 'getCommentDetails'))

// POST
export const newComment = (id, timestamp=Date.now(), body, author, parentID) => 
  fetch(`${url}/posts`, {
    headers: headers,
    method: 'POST',
    body: {
      id: id,
      timestamp: timestamp,
      body: body,
      author: author,
      parentID: parentID
    }
  }).then(res => res.json())
    .catch(e => requestError(e, 'newComment'))

export const editComment = (id, timestamp, body) => 
  fetch(`${url}/comments/${id}`, {
    headers: headers,
    method: 'PUT',
    body: {
      timestamp: timestamp,
      body: body
    }
  }).then(res => res.json())
    .catch(e => requestError(e, `editComment timestamp: ${timestamp} and body: ${body}`))

export const deleteComment = (id) => 
  fetch(`${url}/comments/${id}`, {
    headers: headers,
    method: 'DELETE',
  }).then(res => res.json())
    .catch(e => requestError(e, `deleteComment`))