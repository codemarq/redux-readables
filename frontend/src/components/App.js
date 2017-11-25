import React, { Component } from 'react'
// import Header from './Header'
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
    newPostModalOpen: false,
    editPostModalOpen: false,
  }

  
  componentDidMount() {
    getPosts().then(posts => { this.setState(() => ({ posts: posts })) })

    getCategories().then(categories => this.setState(() => ({ categories: categories })))

    getComments().then(comments => this.setState(() => ({comments: comments})))
  }

  openNewPost = () => { this.setState(() => ({ newPostModalOpen: true })) }
  closeNewPost = () => { this.setState(() => ({ newPostModalOpen: false, })) }
  closeEditPost = () => { this.setState(() => ({ editPostModalOpen: false, })) }
  closeNewComment = () => { this.setState(() => ({ newCommentModalOpen: false, })) }
  closeEditComment = () => { this.setState(() => ({ editCommentModalOpen: false, })) }
  
  render() {
    const { newPostModalOpen } = this.state
    return (
      <div className='App'>
        <header className="header">
          <nav>
            <div className="nav-wrapper blue-grey darken-2">
              <div className='container'>
                <h1>Post-it!</h1>
                <ul className="right hide-on-med-and-down">
                  <li><button className='waves-effect waves light btn-large blue-grey darken-1'>Sort by Category<i className="material-icons left">sort</i></button></li>
                  <li><button 
                    className='modal-trigger waves-effect waves light btn-large blue-grey darken-1'
                    onClick={this.openNewPost}
                    data-target='newPostModal'
                    ><i className="material-icons right">add</i>Create a New Post</button></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Post posts={this.state.posts}/>
        <div id="response-container"></div>

        <Modal
          id="newPostModal"
          className="modal"
          overlayClassName="modal-overlay"
          isOpen={ newPostModalOpen }
          onRequestClose={ this.closeNewPost }
          contentLabel="Modal"
        >
          <div className="row modal-content">
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
