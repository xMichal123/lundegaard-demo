import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecordList from './RecordList';
import RecordEdit from './RecordEdit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/records' exact={true} element={<RecordList/>}/>
        <Route path='/records/:id' element={<RecordEdit/>}/>
      </Routes>
    </Router>
  )
}
export default App;