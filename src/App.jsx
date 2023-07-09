// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
// import defaultNumber from "./components/setNumber";
// import addNumber from "./components/addNumber";
// import reduceNumber from "./components/reduceNumber";
// import resetNumber from "./components/resetNumber";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  function addNumber() {
    setNumber(number + 1);
  }

  function reduceNumber() {
    setNumber(number - 1);
  }

  function resetNumber() {
    setNumber(0);
  }

  return (
    <>
      <div>
        <button className="button" onClick={reduceNumber}>
          -
        </button>
        <label className="number-label">({number})</label>
        <button className="button" onClick={addNumber}>
          +
        </button>
      </div>
      <br />
      <div>
        <button className="button" onClick={resetNumber}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
