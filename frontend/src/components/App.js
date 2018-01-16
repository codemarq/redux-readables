// this is the main component that handles the App template used on every page
import React, { Component, PropTypes } from 'react'
import Header from './common/Header'

class App extends Component {
  constructor (props, context) {
    super (props, context)
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object
  
}

export default App