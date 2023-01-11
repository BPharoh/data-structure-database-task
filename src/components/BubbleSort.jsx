import React, { useState} from "react";

const Bubblesort = () => {
  const [state, setState] = useState({
    inputNumber: [],
    resultNum: [],
  });

  const updatedinputNumber = (e) => {
    
    let newInputArray = e.target.value.split("");
    setState({ ...state, inputNumber: newInputArray });
  };
  const bubbleSort = (arr) => {
    let newArr = [...arr];
    let flag = true;
    while (flag) {
      flag=false
      for (let i = 0; i < newArr.length - 1; i++) {
        if (newArr[i] > newArr[i + 1]) {
          [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
          flag = true;

        }
      }
    }

    setState({ ...state, resultNum: newArr });
  };
    return (
    <div>
        <h1>Bubble Sort</h1>
        <div className="checker">
          <input type="number" onChange={updatedinputNumber} placeholder="Input number 0-9"/>
          <button type="submit" onClick={() => {bubbleSort(state.inputNumber) }}>Sort</button>
        </div>
        <div>
          <h2>Input: <span>{state.inputNumber}</span>{" "}</h2>
          <h2>Sorted Input: <span>{state.resultNum}</span></h2>
        </div>
    </div>
    );
  }

  export default Bubblesort;


