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
        <Route exact path='/' render={() => (
          <div>
          <p>{this.state.backend}</p>
            <Header 
              categories={this.state}
            />
            <Post />
            <div id="response-container"></div>
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
