import React, {useState} from 'react';
import Button from './Button.js';

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [region, setRegion] = useState("");


  return (
    <form className="form-container">
      <div className="form-group row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-4">
          <input type="text" readOnly className="form-control-plaintext" id="email" value="email@example.com"/>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="sector" className="col-sm-2 col-form-label">Sector</label>
        <div className="col-sm-4">
          <input type="Sector" className="form-control" id="sector" placeholder="Your sector"/>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="region" className="col-sm-2 col-form-label">Region</label>
        <div className="col-sm-4">
          <input type="Region" className="form-control" id="region" placeholder="Your region"/>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-7 submit-button-container">
          <Button endpoint="requests" operation="Submit" param="request"/>
        </div>
      </div>
    </form>
  )
}

export default Form;
