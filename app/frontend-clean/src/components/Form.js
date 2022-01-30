import React, {useState} from 'react';
<<<<<<< HEAD
import Button from './Button.js';
=======
import Select from './Select';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const constData = require('../data/data.json');
>>>>>>> 59c43609ababd54a2f7dc8905f455ae9630a34e2

const SubmitRequestForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  return (
<<<<<<< HEAD
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
=======
    <div className="form-container">
      <Form>
        <form>
        <fieldset disabled>
          <Form.Group className="mb-3">
            <div className="form-group">
              <h3 className="form-title"><b>Request Authorization</b></h3>
              <Form.Label className="form-label">Your username</Form.Label>
                <Form.Control id="disabledTextInput" placeholder="autofilled username" />            
            </div>
          </Form.Group>
        </fieldset>
        {(constData.labels).map((label, index) => {
          return (
            <Form.Group className="mb-3">
              <div className="form-group" key={index}>
                <Select options={constData.dropdown[index].options} label={label} />
              </div>
            </Form.Group>
          );
        })}
        <div className="button-container">
          <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </div>
        </form>
      </Form>
    </div>
  );

>>>>>>> 59c43609ababd54a2f7dc8905f455ae9630a34e2
}

export default SubmitRequestForm;
