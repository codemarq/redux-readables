import React, { Component } from 'react'
import Header from './Header'
import Post from './Post'

class App extends Component {
  state = {
    posts: []
  }

  render() {
    return (
      <div className='App'>
        <p>{this.state.backend}</p>
        <Header categories={this.state} />
        <Post />
      </div>
    );
  }
}

export default App;
