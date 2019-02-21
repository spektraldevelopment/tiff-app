import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import './App.scss';

import Header from './components/header/header';
import Movies from './components/movies/movies';
import Movie from './components/movie/movie';

class App extends Component {
  render() {
    return (
      <div>
          <Header />

          <Redirect from="/" to="/movies" />
          <Route path="/movies" component={Movies}/>
          <Route path="/movie" component={Movie}/>
      </div>
    );
  }
}

export default App;
