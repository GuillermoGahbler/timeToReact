import React from 'react';

const person = (props) => {
  return (
  <div>
    <p onClick={props.click}>Testing random age generator for{props.name} person. Person is {props.age}years old
  </p>
  <p>{props.children}</p>
  </div>)
};

export default person;