import React, { useState, useRef, FC, useEffect } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, RouteProps } from 'react-router-dom';
import RecordList from './RecordList';
import RecordEdit from './RecordEdit';
import BabTest from './BabTest';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/records' element={<RecordList/>}/>
        <Route path='/records/:id' element={<RecordEdit/>}/>
        <Route path='/babtest' element={<BabTest/>}/>
      </Routes>
    </Router>
  );
}
export default App;