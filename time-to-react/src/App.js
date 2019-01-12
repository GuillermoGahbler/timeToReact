import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React is now working</h1>
        <p>This is showing now</p>
        <Person name='Javantay' age='20'/>
        <Person name='Reactron' age='18'>Some of my hobbies are: Programming! </Person>
        <Person name='Ceesharp' age='22'/>
      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\m a react app'));

  }
}

export default App;
