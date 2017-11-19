import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Post from './Post'
import { getPosts, getCategories, getComments } from '../utils/api'

class App extends Component {
  state = {
    posts: [],
    // commentModalOpen: false,
    // posts: [],
    // comments: [],
    // user: {},
    // loadingComment: false,
    categories: [],
    comments: []
  }

  
  componentDidMount() {
    getPosts().then(posts => {
      this.setState(() => ({ posts: posts }))
    })

    getCategories().then(categories => this.setState(() => ({ categories: categories })))

    getComments().then(comments => this.setState(() => ({comments: comments})))

    // const { store } = this.props

    // store.subscribe(() => {
    // })
    // const url = `${process.env.REACT_APP_BACKEND}/categories`;
    // const auth = btoa('username:password');
    // console.log('fetching from url', url);
    // fetch(url, { headers: { 
    //               'Authorization': 'Basic ' + auth 
    //             },
    //              credentials: 'omit' } )
    //   .then( (res) => { res.json() })
    //   .then((data) => {
    //     this.setState({backend:data});
    //   });
  }


  render() {
    return (
      <div className='App'>
        <Route exact path='/' render={() => (
          <div>
            <Header categories={this.state.categories}/>
            <Post posts={this.state.posts}/>
            <div id="response-container"></div>
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
