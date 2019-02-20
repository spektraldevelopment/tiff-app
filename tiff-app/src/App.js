import React, { Component } from 'react';
import './App.scss';

import Header from './components/header/header';
import Movies from './components/movies/movies';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Movies />
      </div>
    );
  }
}

export default App;
