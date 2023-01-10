import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import Layout from './components/Layout';
import Palindrome from './components/Palindrome';
import BubbleSort from './components/BubbleSort';
import Stack from './components/Stack';
import Queue from './components/Queue';


 
 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />}    />
        <Route path="palindrome" element={<Palindrome />} />
        <Route path="bubblesort" element={<BubbleSort />} />
        <Route path="stack" element={<Stack />} />
        <Route path='queue'  element={<Queue />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
 };
 
 export default App;
