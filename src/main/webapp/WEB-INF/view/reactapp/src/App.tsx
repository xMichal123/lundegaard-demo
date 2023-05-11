import React, { useState, useRef, FC, useEffect } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, RouteProps } from 'react-router-dom';
import RecordList from './RecordList';
import RecordEdit from './RecordEdit';
import BabTest from './BabTest';
import Babylon from './Babylon';
import ChatTest from './ChatTest';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/records' element={<RecordList/>}/>
        <Route path='/records/:id' element={<RecordEdit/>}/>
        <Route path='/babtest' element={<BabTest/>}/>
        <Route path='/babylon' element={<Babylon/>}/>
        <Route path='/chattest' element={<ChatTest/>}/>
      </Routes>
    </Router>
  );
}
export default App;