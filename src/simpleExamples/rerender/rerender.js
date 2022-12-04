import React, { useState } from "react";
import ReactDOM from "react-dom";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const RandomText = () => {
  let message = "Hi there!";

  if (Math.random() > 0.5) {
    message = "Bye there!";
  }

  return <span>{message}</span>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        <RandomText />
      </h1>

      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}

root.render(<App />);
