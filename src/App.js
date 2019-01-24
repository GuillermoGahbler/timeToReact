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


  switchNameAndAgeHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'New P1', age: 28 },
        { name: ' New P2', age: 38 },
        { name:newName, age: 42 }
      ]
    })
  }


  changeNameHandler = (event) =>{
    this.setState({
      persons: [
        { name: 'New P1', age: 28 },
        { name:event.target.value, age: 38 },
        { name:'New P3', age: 42 }
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
        // onClick={this.switchNameAndAgeHandler.bind(this,'BTN NAME CHG')}
        onClick={()=>this.switchNameAndAgeHandler('BTN NAME CHG')}
        >
          Switch names & age
        </button>
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameAndAgeHandler}
                      />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameAndAgeHandler}
            changed={this.changeNameHandler}

                       >
            Some of my hobbies are: Programming!
        </Person>



          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameAndAgeHandler.bind(this, 'NEW NM CHG')}
          />

        </div>
      </div>
    );



  }
}

export default App;
