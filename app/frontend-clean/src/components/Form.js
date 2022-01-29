import React from 'react';
const data = require('../data/data.json');

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // api call to submit request
  }
  

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            Username
            <input type="text" readOnly value="default" /> 
          </label>
        </div>
        {(data.labels).map((label, index) => {
          return (
            <div className="form-group" key={index}>
              <label>
                {label}
                <input type="text" onChange={this.handleChange} />
              </label>
            </div>
          );
        })}
        <input type="submit" value="Submit request"/>
        </form>
      </div>
    );
  } 
}
