import React, {useState} from 'react';
import Select from './Select';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const constData = require('../data/data.json');

const SubmitRequestForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  return (
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

}

export default SubmitRequestForm;
