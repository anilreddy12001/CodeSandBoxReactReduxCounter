import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
   const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, []);
  const REACT_APP_INITIAL_COUNTER=process.env.REACT_APP_INITIAL_COUNTER
  const REACT_APP_MAX_COUNT =process.env.REACT_APP_MAX_COUNT;
  console.log("process.env: ",process.env);
  return (
    <div className="App">
      <h1>App1 updated on 24jul2023, 16:13hrs</h1>
<p>REACT_APP_INITIAL_COUNTER: {REACT_APP_INITIAL_COUNTER},REACT_APP_MAX_COUNT: {REACT_APP_MAX_COUNT}</p>
      <h2>You clicked {count} times!</h2>
<p className='clock'>
      {date.toLocaleTimeString()}
    </p>
      <button onClick={() => {if(count>0){setCount(count - 1)}}}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
