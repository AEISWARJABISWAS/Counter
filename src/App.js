import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const handleChange = (event) => {
    // console.log(event);
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <h1> Counter </h1>
      <h2>{count}</h2>
      <button onClick={increment} disabled={count === 5}>
        Increment
      </button>
      <button onClick={decrement} disabled={count === -10}>
        Decrement
      </button>
      <button onClick={reset} disabled={count === 0}>
        Reset
      </button>

      <h2>{inputValue}</h2>
      <input
        type="text"
        placeholder="enter your name"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
export default App;
