import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './Components/Layouts'
import Exercises from './Components/Exercises/Exercises'

class App extends Component {
  render() {
    return (
      <Fragment className="App">
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
