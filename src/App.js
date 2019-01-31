// import our files 
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
    otherState: 'Some other value',
    showPersons: false
  }


  changedNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'New P1', age: 28 },
        { name: event.target.value, age: 38 },
        { name: 'New P3', age: 42 }
      ]
    })
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  // to show or hide div containing persons
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  //render creates component by extending the component object
  // deifined variable inside render() it's not a function, it's just a variable.
  render() {

    // using this inline style is only used in this scope & it will not be global.
    const style = {
      backgroundColor: 'gray',
      font: 'inherit',
      // border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      boxShadow: '0 2px 3px #ccc'
    }


    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={()=>this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            />
          })}

        </div>
      )
    }



    // all functions above passed into the return div below will display on the page. 
    return (
      <div className="App">

        <h1>React is now working</h1>
        <p>This is showing now</p>

        <button style={style}
          // onClick={this.switchNameAndAgeHandler.bind(this,'BTN NAME CHG')}
          onClick={this.togglePersonsHandler}>
          Toggle button to show Persons!
         </button>
        {persons}

      </div>
    );



  }
}

export default App;
