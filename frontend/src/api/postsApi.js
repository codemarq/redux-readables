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

// GET methods
export const getCategories = () =>
  fetch(`${url}/categories`, {
    headers: headers
  }).then(res => res.json())
    .catch(e => requestError(e, 'getCategories'))

export const getPosts = () => 
  fetch(`${url}/posts`, {
    headers: headers
  }).then(res => res.json())
    .catch(e => requestError(e, 'getPosts'))

export const getPostsByCat = (category) => 
  fetch(`${url}/${category}/posts`, {
    headers: headers
  }).then(res => res.json())
    .catch(e => requestError(e, 'getPostsByCat'))

export const getPostDetails = (id) =>
  fetch(`${url}/posts/${id}`, {
    headers: headers
  }).then(res => res.json())
    .catch(e => requestError(e, 'getPostDetails'))

// POST methods
export const newPost = (id, timestamp=Date.now(),title, body, author, category) => 
  fetch(`${url}/posts`, {
    headers: headers,
    method: 'POST',
    body: {
      id: id,
      timestamp: timestamp,
      title: title,
      body: body,
      author: author,
      category: category
    }
  }).then(res => res.json())
    .catch(e => requestError(e, 'newPost'))

export const votePost = (id, vote) => 
  fetch(`${url}/posts/${id}`, {
    headers: headers,
    method: 'POST',
    body: {
      option: vote
    }
  }).then(res => res.json())
    .catch(e => requestError(e, `votePost failed on ${vote}`))

export const voteComment = (id, vote) => 
  fetch(`${url}/comments/${id}`, {
    headers: headers,
    method: 'POST',
    body: {
      option: vote
    }
  }).then(res => res.json())
    .catch(e => requestError(e, `voteComment failed on ${vote}`))

// PUT methods (for editing posts and comments)
export const editPost = (id, title, body) => 
  fetch(`${url}/posts/${id}`, {
    headers: headers,
    method: 'PUT',
    body: {
      title: title,
      body: body
    }
  }).then(res => res.json())
    .catch(e => requestError(e, `editPost title: ${title} and body: ${body}`))

// DELETE methods
export const deletePost = (id) => 
fetch(`${url}/posts/${id}`, {
  headers: headers,
  method: 'DELETE'
}).then(res => res.json())
  .catch(e => requestError(e, `deletePost`))