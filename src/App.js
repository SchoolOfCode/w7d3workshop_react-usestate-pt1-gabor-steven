import React from "react";
import "./App.css";
import { useState } from "react";
import { bootcampers } from "./bootcampers.js";

function App() {
  const [bootcamperIndex, setBoootcamperIndex] = useState(0);

  function handleClick() {
    let randomNumber = Math.floor(Math.random() * bootcampers.length);
    setBoootcamperIndex(randomNumber);
  }

  return (
    <div className="App">
      <h1>React useState</h1>
      <p>{bootcampers[bootcamperIndex]}</p>
      <button onClick={handleClick}>Click me for a random bootcamper!</button>
    </div>
  );
}

export default App;
