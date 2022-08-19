import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Register() {

    const [newRecord, setNewRecord] = useState({email:'',password:'', name:'GUEST', role: 'Guest'})
    
    
    
    const createRecord = () => {
        axios.post("http://localhost:3001/users", newRecord)
            .then((response) => {
            alert('Record Added Successfully')
            console.log(response)
            })
            .catch((error) => console.log(error.message));
    }
 
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h2>Registration Page</h2>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(event) =>
              setNewRecord({
                ...newRecord,
                email: event.target.value,
              })
            }
          />

          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(event) =>
              setNewRecord({ ...newRecord, password: event.target.value })
            }
          />

          <button onClick={createRecord} className="btn btn-primary bt-sm mt-4">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
