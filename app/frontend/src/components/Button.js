import React, { useState } from 'react';
import axios from 'axios';

const Button = (props) => {
  const [data, setData] = useState([]);

  const handleClick = () => {
    const url = "http://localhost:5000/api/" + props.endpoint;

    if(props.operation === 'Get') {
      axios.get(url)
      .then((res) => setData(JSON.stringify(res.data)));
    }
  }

  return (
    <div>
      <button onClick={handleClick}>{props.operation} {props.param}</button>
      <p>{data}</p>
    </div>
  )
}

export default Button;