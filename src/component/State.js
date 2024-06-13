import React from 'react'
import { useState, useEffect } from 'react'
import Banner from './Banner';
const State = () => {
const  [value, setvalue] = useState(0);
const  [statement, setstatement] = useState(true);

const plus = () => {
    setvalue( value + 1)
};
const minus = () => {
    setvalue( value - 1)
};
console.log(value);

const statementHandler = () => {
    setstatement(!statement);
    console.log();
}
useEffect(() => {
    console.log("change data");
});
const a = () => {
  console.log("Raj")
}

  return (
    <div>
      <button onClick={plus} >plus</button>
      <button onClick={minus} >minus</button>
      <h1>{ value }</h1>
      <button onClick={statementHandler} >statement</button>
      <h1>{ statement }</h1>
      <Banner heading ={a} />
    </div>
  );
};


export default State
