import React, { useState } from "react";
import "./styles/App.css";
import { checkVowels } from "./functions/calVowels";

function App() {
  const [datas, setDatas] = useState<string>("");
  const [resultNumber, setResultNumber] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header" title="NumberofVowels" />
      <div className="contrainer">
        <div className="card-view">
          <h3>Counting Vowels</h3>
          <input
            className="input-text"
            type="text"
            onChange={(e) => {
              //   const x = checkVowels(e.target.value);
              //   if (x !== undefined) {
              //     setResultNumber(x);
              //   } else {
              //     setResultNumber(0);
              //   }
              // }
              setDatas(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              const x = checkVowels(datas);
              if (x !== undefined) {
                setResultNumber(x);
              } else {
                alert("Please Input Someting!");
              }
              // setResultNumber(x);
            }}
          >
            Calculate
          </button>
          <p>Your value is {resultNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
