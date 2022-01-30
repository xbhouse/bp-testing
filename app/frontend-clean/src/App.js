import React, {useState} from 'react';
import {SubmitRequestForm, Header, SubmitRequest} from './components';
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