import React, {useState} from 'react';
import axios from 'axios';
import {Form, Header, SubmitRequest} from './components';
import './index.css';

export const App = () => {
  const [data, setData] = useState(0);


  return (
    <div className="App">
      {<Header/>}
      {<SubmitRequest/>}
      {<Form/>}
    </div>
  )
}