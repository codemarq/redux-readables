import React, { Component } from 'react'
import Header from './Header'
import Post from './Post'
import { getPosts, getCategories, getComments } from '../utils/api'
import Modal from 'react-modal'

class App extends Component {
  state = {
    posts: [],
    categories: [],
    comments: [],
    newCommentModalOpen: false,
    loadingComment: false,
    editCommentModalOpen: false,
    newPostModalOpen: true,
    editPostModalOpen: false,
  }

  
  componentDidMount() {
    getPosts().then(posts => {
      this.setState(() => ({ posts: posts }))
    })

    getCategories().then(categories => this.setState(() => ({ categories: categories })))

    getComments().then(comments => this.setState(() => ({comments: comments})))
  }

  closeNewPostModal = () => { this.setState(() => ({ newPostModalOpen: false, })) }
  closeEditPostModal = () => { this.setState(() => ({ editPostModalOpen: false, })) }
  closeNewCommentModal = () => { this.setState(() => ({ newCommentModalOpen: false, })) }
  closeEditCommentModal = () => { this.setState(() => ({ editCommentModalOpen: false, })) }
  
  render() {
    const { newPostModalOpen } = this.state
    return (
      <div className='App'>
        <div>
          <Header categories={this.state.categories}/>
          <Post posts={this.state.posts}/>
          <div id="response-container"></div>
        </div>
        <Modal
          id="newPostModal"
          className="modal"
          overlayClassName="overlay"
          isOpen={ newPostModalOpen }
          onRequestClose={ this.closeNewPostModal }
          contentLabel="Modal"
        >
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="Placeholder" id="user_name" type="text" className="validate"/>
                  <label htmlFor="user_name">User Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input disabled value="I am not editable" id="disabled" type="text" className="validate"/>
                  <label htmlFor="disabled">Disabled</label>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
