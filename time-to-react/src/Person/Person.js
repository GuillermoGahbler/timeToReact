import React from 'react';

const person = (props) => {
  return (
  <div>
    <p>Testing random age generator for{props.name} person. Person is {
    Math.floor(Math.random() * 30 +10)
  } {props.age}years old
  </p>
  <p>{props.children}</p>
  </div>)
};

export default person;