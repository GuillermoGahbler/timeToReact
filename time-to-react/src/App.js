import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: ' Horchata', age: 25 },
      { name: ' Reactron', age: 18 },
      { name: ' Nemo', age: 42 }
    ],
    otherState: 'Some other value'
  }


  switchNameHandler = () => {
    // console.log('was clicked')
    //**don't do this -> */ this.state.persons[0].name='Maximilian'
    this.setState({
      persons: [
        { name: ' Geemoe', age: 28 },
        { name: ' Thurgood', age: 38 },
        { name: ' Edisan', age: 100 }
      ]
    })
  }




  render() {
    return (
      <div className="App">
        <h1>React is now working</h1>
        <p>This is showing now</p>
        <button onClick={this.switchNameHandler}>
          Switch names & age
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}>
          Some of my hobbies are: Programming!
        </Person>

        {/* <Person name='Reactron' age=' 18 '>Some of my hobbies are: Programming! </Person> */}

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\m a react app'));

  }
}

export default App;
