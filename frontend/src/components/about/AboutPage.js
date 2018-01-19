import React, { Component } from 'react'
// extending this as a react class component in order to support hot-reloading for now.  otherwise without a parent component, it will not hot-reload
class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
      </div>
    )
  }
}

export default AboutPage