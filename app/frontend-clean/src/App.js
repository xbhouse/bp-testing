import React, {useState} from 'react';
import axios from 'axios';
import Form from './components/Form.js';
import Header from './components/Header.js';
import './index.css';

export const App = () => {
  const [data, setData] = useState(0);


  return (
    <div className="App">
      {<Header/>}
      {<Form/>}
    </div>
  )
}