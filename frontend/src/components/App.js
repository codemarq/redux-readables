import React, { Component } from 'react'
import Header from './Header'
import Post from './Post'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Post />
      </div>
    );
  }
}

export default App;
