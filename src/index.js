import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>App1 updated on 7dec2022, 12.20pm</h1>
      <h2>You clicked {count} times!</h2>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
