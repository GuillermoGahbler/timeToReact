import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: ' Og P1', age: 25 },
      { name: ' Og P2', age: 18 },
      { name: ' Og p3', age: 42 }
    ],
    otherState: 'Some other value'
  }


  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'New P1', age: 28 },
        { name: ' New P2', age: 38 },
        { name: ' New P3', age: 100 }
      ]
    })
  }




   


  render() {


    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px dotted blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>React is now working</h1>
        <p>This is showing now</p>
        <button style={style}
        >
          Switch names & age
        </button>
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Meezus')}
          />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler}
            changed={this.nameChangedHandler}
          >
            Some of my hobbies are: Programming!
        </Person>



          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />

        </div>
      </div>
    );



  }
}

export default App;
