import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (     
    
        <div>
            <h1 className="page_title">Click on each task to see the visualization</h1>
         <div className="taskContainer">
            <div className="taskStyle palindrome"><Link to="/palindrome"><h3>Palindrome</h3></Link></div>
            <div className="taskStyle bubble"><Link to="/bubblesort"><h3>Bubble Sort</h3></Link></div>
            <div className="taskStyle stack"><Link to="/stack"><h3>Stack</h3></Link></div>
            <div className="taskStyle queue"><Link to="/queue"><h3>Queue</h3></Link></div>
         </div>
        </div>
    
        );
    };

export default Home;