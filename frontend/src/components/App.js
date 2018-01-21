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
        <div id="response-container"></div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App