import React, { Component } from 'react'
import Header from './Header'
import Post from './Post'
import NewPostForm from './NewPostForm'
import NewComment from './NewComment'
import { getPosts, getCategories, getComments } from '../utils/api'
import { Modal, } from 'react-bootstrap/lib'

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
    getCategories().then(categories => this.setState(() => ({ categories: categories })))
    getComments().then(comments => this.setState(() => ({comments: comments})))
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
    const { newPostModalOpen, newCommentModalOpen } = this.state

    return (
      <div className='App container'>
        <Header openNewPost={this.openNewPost} categories={this.state.categories}/>
        <Post posts={this.state.posts} openNewComment={this.openNewComment} editPostModalOpen={this.openEditPost}/>
        <div id="response-container"></div>
        
        <Modal
          id="newPostModal"
          show={newPostModalOpen}
          onHide={this.closeNewPost}
        >
          <NewPostForm closeNewPost={this.closeNewPost}/>
        </Modal>

        <Modal
          id="newPostModal"
          show={newCommentModalOpen}
          onHide={this.closeNewComment}
        >
          <NewComment />
        </Modal>

      </div>
    );
  }
}

export default App;
