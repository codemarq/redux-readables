import React, { Component } from 'react'
import Header from './Header'
import Post from './Post'
// import NewPostForm from './NewPostForm'
// import NewComment from './NewComment'
import { getPosts, getCategories, getComments } from '../utils/api'
import { Modal, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { FieldGroup } from '../utils/helper'

class App extends Component {
  state = {
    posts: [],
    categories: [],
    comments: [],
    newCommentModalOpen: false,
    loadingComment: false,
    editCommentModalOpen: false,
    newPostModalOpen: false,
    editPostModalOpen: false,
  }

  componentDidMount() {
    getPosts().then(posts => { this.setState(() => ({ posts: posts })) })
    getCategories().then(categories => { this.setState(() => ({ categories: categories })) })
    getComments().then(comments => { this.setState(() => ({comments: comments})) })
  }

  openNewPost = () => { this.setState(() => ({ newPostModalOpen: true })) }
  openEditPost = () => { this.setState(() => ({ editPostModalOpen: true, })) }
  openNewComment = () => { this.setState(() => ({ newCommentModalOpen: true, })) }
  openEditComment = () => { this.setState(() => ({ editCommentModalOpen: true, })) }
  closeNewPost = () => { this.setState(() => ({ newPostModalOpen: false, })) }
  closeEditPost = () => { this.setState(() => ({ editPostModalOpen: false, })) }
  closeNewComment = () => { this.setState(() => ({ newCommentModalOpen: false, })) }
  closeEditComment = () => { this.setState(() => ({ editCommentModalOpen: false, })) }
  
  render() {
    const { newPostModalOpen, newCommentModalOpen, posts, categories } = this.state

    return (
      <div className='App container'>
        <Header openNewPost={this.openNewPost} categories={categories}/>
        <Post posts={posts} openNewComment={this.openNewComment} editPostModalOpen={this.openEditPost}/>
        <div id="response-container"></div>
        
        <Modal
          id="newPostModal"
          show={newPostModalOpen}
          onHide={this.closeNewPost}
        >
          <Modal.Header closeButton>
            <Modal.Title>New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FieldGroup
              id="username"
              type="text"
              label="Username"
              placeholder="Enter any username"
              />
              <FieldGroup
              id="Title"
              type="text"
              label="Title"
              placeholder="Title"
              />
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Please select a Category</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other"></option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Post</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeNewPost}>Cancel</Button>
            <Button>Post</Button>
          </Modal.Footer>
        </Modal>

        <Modal
          id="newCommentModal"
          show={newCommentModalOpen}
          onHide={this.closeNewComment}
        >
          <Modal.Header closeButton>
            <Modal.Title>New Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FieldGroup
              id="username"
              type="text"
              label="username"
              placeholder="Enter any username"
              />
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Please select a Category</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other"></option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeNewComment}>Cancel</Button>
            <Button>Comment</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
