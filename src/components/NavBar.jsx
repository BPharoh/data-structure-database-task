import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navBar'>
        <h1><Link to="/">Structures</Link></h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="palindrome">Palindrome</Link></li>
            <li><Link to="bubblesort">bubblesort</Link></li>
            <li><Link to="stack">stack</Link></li>
            <li><Link to="queue">queue</Link></li>
          </ul>
      </nav>
    </div>
    );
};

export default Navbar;