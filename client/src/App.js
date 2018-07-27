import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './Components/Layouts'
import Exercises from './Components/Exercises/Exercises'
import { muscles, exercises } from './Components/store'
import { Grid } from '../node_modules/@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises
    }
  }

  getExercisesByMuscle = () => {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;

      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise]

      return exercises;
    }, {}))
  }

  render() {
    const exercises = this.getExercisesByMuscle();
    return (
      <Fragment className="App">
        <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles}/>
      </Fragment>
    );
  }
}

export default App;
