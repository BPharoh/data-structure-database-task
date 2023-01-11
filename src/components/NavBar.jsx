import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navBar'>
        <h1><Link to="/">Data Structures & Databases Tasks</Link></h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="palindrome">Palindrome</Link></li>
            <li><Link to="bubblesort">Bubblesort</Link></li>
            <li><Link to="stack">Stack</Link></li>
            <li><Link to="queue">Queue</Link></li>
          </ul>
      </nav>
    </div>
    );
};

export default Navbar;