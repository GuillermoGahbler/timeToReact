import React from 'react';
import './Person.css'

const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}> Testing random age generator for{props.name} person. Person is {props.age}years old </p>
      
      <p> {props.children} </p>
      {/* will show default name inside the text box */}
      <input type="text" onChange={props.changed} value={props.name}/>


    </div>
    )
};

export default person;