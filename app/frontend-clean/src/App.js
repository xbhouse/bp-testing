import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form.js';
import Header from './components/Header.js';
import Button from './components/Button.js';
import './index.css';

const App = () => {
  const [data, setData] = useState(0);


  return (
    <div className="App">
      {<Header/>}
      {<Form/>}
    </div>
  )
}

export default App;