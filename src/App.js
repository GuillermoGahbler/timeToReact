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


  switchNameHandler = (newName) => {
    // console.log('was clicked')
    //**don't do this -> */ this.state.persons[0].name='Maximilian'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: ' Thurgood', age: 38 },
        { name: ' Edisan', age: 100 }
      ]
    })
  }




  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Horchata', age: 28 },
        { name: event.target.value, age: 45 },
        { name: ' Edisan', age: 100 }
      ]
    })
  }



  render() {

    // this is inline styling sometimes its restricted to the scope
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
          onClick={this.togglePersonsHanlder}>
          Switch names & age
        </button>
        {/* it's preferred to use bind as example below vs anon func above */}
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

          {/* <Person name='Reactron' age=' 18 '>Some of my hobbies are: Programming! </Person> */}

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />

        </div>
      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\m a react app'));

  }
}

export default App;
