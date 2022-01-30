import React, { useState } from 'react';
import axios from 'axios';

const Button = (props) => {
  const [data, setData] = useState([]);

  const handleClick = (event) => {
    const url = "/api/" + props.endpoint;

    if(props.operation === 'Get') {
      axios.get(url)
      .then((res) => setData(JSON.stringify(res.data)));
    }
    else if(props.operation === 'Submit') {
      event.preventDefault();
      axios.post(url)
      .then((res) => setData(JSON.stringify(res.data.message)));
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