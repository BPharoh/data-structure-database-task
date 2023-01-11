import React, { useRef } from "react";
import { useQueueState } from "rooks";
  
const CheckQueue = () => {
    const inputsToQueue = useRef(3);
    const [list, { enqueue, dequeue, peek, 
        length }] = useQueueState([1, 2, 3]);
  
    function addToQueue() {
        inputsToQueue.current = 
            inputsToQueue.current + 1;
          
        enqueue(inputsToQueue.current);
    }
  
    return (
        <>
            <h1>Queue</h1>
            <div className="queueContainer">
                {list.map((item) => {
                    return <div key={item} className="queueItems">{item}</div>;
                })}
            </div>
            <button onClick={addToQueue} className="buttons">enqueue</button>
            <button onClick={dequeue} className="buttons1"> dequeue </button>
            <p className="output1">Front Element : {peek()}</p>
            <p className="output2">Length of Queue : {length}</p>
  
        </>
    );
}

export default CheckQueue;