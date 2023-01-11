import React, { useRef } from "react";
import { useStackState } from "rooks";
  
const CheckStack = () => {
    const inputsToStack = useRef(5);
    const [list, { push, pop, peek, length }, 
        listInReverse] = useStackState([1, 2, 3, 4, 5]);
  
    const addToStack = () =>  {
        inputsToStack.current = inputsToStack.current + 1;
        push(inputsToStack.current);
    }
  
    return (
        <>
            <h1>Stack</h1>
            <div className="stackContainer">
                {listInReverse.map((item) => {
                    return <div className="stackItems" key={item} >{item}</div>;
                })}
            </div>
            <div >
            <button onClick={addToStack} className="buttons">Push</button>
            <button onClick={pop} className="buttons1"> Pop </button>
            </div>
            <div >
            <p className="output1" >Last element: {peek()}</p>
            <p className="output2">Stack length : {length}</p>
            </div>
        </>
    );
}

export default CheckStack;