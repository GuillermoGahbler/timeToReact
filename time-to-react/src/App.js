import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React is now working</h1>
        <p>Does this show?</p>
        <Person/>

      </div>
           );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\m a react app'));

  }
}

export default App;
