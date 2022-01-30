import React, {useState} from 'react';
<<<<<<< HEAD
import axios from 'axios';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form.js';
import Header from './components/Header.js';
import Button from './components/Button.js';
=======
import {SubmitRequestForm, Header, SubmitRequest} from './components';
>>>>>>> 59c43609ababd54a2f7dc8905f455ae9630a34e2
import './index.css';

const App = () => {
  const [data, setData] = useState(0);


  return (
    <div className="App">
      {<Header/>}
      {<SubmitRequest/>}
      {<SubmitRequestForm/>}
    </div>
  )
}

export default App;