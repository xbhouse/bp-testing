import React, {useState} from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [region, setRegion] = useState("");


  return (
    <form>
      <div class="form-group row form-container">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-4">
          <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-4">
          <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
        </div>
      </div>
    </form>

  )
  //axios.post({data})
}

export default Form;
