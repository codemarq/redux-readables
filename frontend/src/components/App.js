import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Post from './Post'

class App extends Component {
  state = {
    foodModalOpen: false,
    meal: null,
    day: null,
    food: null,
    ingredientsModalOpen: false,
    loadingFood: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }
  
  componentDidMount() {
    const url = `${process.env.REACT_APP_BACKEND}/categories`;
    const auth = btoa('username:password');
    console.log('fetching from url', url);
    fetch(url, { headers: { 
                  'Authorization': 'Basic ' + auth 
                },
                 credentials: 'omit' } )
      .then( (res) => { res.json() })
      .then((data) => {
        this.setState({backend:data});
      });
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
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
