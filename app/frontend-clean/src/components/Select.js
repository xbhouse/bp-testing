import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

const Select = (props) => {
  return (
    <Form.Select aria-label="Default select example">
      <option>{props.label}</option>
      {props.options.map((option,index) => {
        return <option value={index}>{option}</option>
      })}
    </Form.Select>
  );
}

export default Select;