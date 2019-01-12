import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: ' Gericaya', age: 25 },
      { name: ' Chamoya', age: 45 },
      { name: ' Gallo', age: 42 }
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = () => {
    // console.log('was clicked')
    //**don't do this -> */ this.state.persons[0].name='Maximilian'
    this.setState({
      persons: [
        { name: ' Geemoe', age: 28 },
        { name: ' Chamoya', age: 45 },
        { name: ' Edisan', age: 42 }
      ]
    })
  }



  render() {
    return (
      <div className="App">
        <h1>React is now working</h1>
        <p>This is showing now</p>
        <button onClick={this.switchNameHandler}>Switch names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name='Reactron' age=' 18 '>Some of my hobbies are: Programming! </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\m a react app'));

  }
}

export default App;
