import React from 'react'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Post-it!</h1>
      <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
    </div>
  )
}

export default HomePage