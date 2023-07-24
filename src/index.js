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
  const REACT_APP_initialCounter=process.env.REACT_APP_initialCounter
  const REACT_APP_maxCountValue =process.env.REACT_APP_maxCountValue;
  return (
    <div className="App">
      <h1>App1 updated on 24jul2023, 12.20pm</h1>
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
