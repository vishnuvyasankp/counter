import React from 'react'
import { useState } from 'react';



export default function App() {
  const [count, setCount] = useState(0);



  const increment = () => {
    setCount(count + 1);
  };



  const decrement = () => {
    if(count >0){
    setCount(count - 1);
    }
  };



  return (
    <div>
       <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}disabled={count===0}>-</button>
    </div>
  );
};
