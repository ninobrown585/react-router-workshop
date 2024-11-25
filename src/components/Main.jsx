// import React from 'react';
import { Routes, Route } from "react-router-dom";
import Green from './Green';
import Purple from './Purple';
import Blue from './Blue'
import Red from './Red';
import Home from './Home';

export default function Main() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />   
          <Route path="/purple" element={<Purple />} />
          <Route path="/green" element={<Green />} /> 
       </Routes>
    </div>
  )
}
