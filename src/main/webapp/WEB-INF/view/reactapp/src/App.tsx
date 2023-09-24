import React, { useState, useRef, FC, useEffect } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, RouteProps } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/filledforms" element={<AdminPanel/>}/>
      </Routes>
    </Router>
  );
}
export default App;