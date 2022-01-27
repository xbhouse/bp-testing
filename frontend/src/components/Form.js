import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [data, setData] = useState("");

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    clearInput();
  }
  
  // bind input to state
  const handleChange = (e) => {
    setData(e.target.value);
  }

  // clear input field
  const clearInput = () => {
    document.getElementById(`${props.arg}`).value = "";
  }

  // POST user or template
  const postData = () => {
    if(props.arg === "username")
      var formData = {"username": data};
    else if(props.arg === "author")
      formData = {"author": data};

    const url = `http://localhost:5000/api/${props.endpoint}`;
    axios.post(url, formData)
    .then(response => {console.log(response)});
  }


  return (
    <div class="form-container">
      <form class="form-custom">
        <div class="row">
          <div class="col">
            <div class="mb-3">
            <label htmlFor={props.arg} class="form-label">{props.formLabel}</label>
            <input type="text" class="form-control" id={props.arg} onChange={handleChange}></input>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Add {props.buttonLabel}</button>
      </form>
    </div>
  )
}

export default Form;
