import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  const disp = (event) => {
    event.preventDefault();
    // console.log(name)
  };

  const inputRef = useRef();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error.message));
  }, []);

  const loginProcess = () => {
    let foundUser = users.find((u) => u.email === loginDetails.username);
    if (foundUser) {
      if (foundUser.password === loginDetails.password) {
        if (foundUser.role === "Admin") {
          sessionStorage.setItem("role", "Admin");
          navigate("/home");
        } else {
          sessionStorage.setItem("role", "Guest");
          navigate("/home");
        }
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("Username does not exist");
    }
  };

  return (
   <>
    

    <div className="container mt-4">
    <h2>Login Page</h2>
      <p>
        username :
        <input
          type="text"
          className="form-control"
          onChange={(event) =>
            setLoginDetails({ ...loginDetails, username: event.target.value })
          }
        />
      </p>
      <p>
        password :
        <input
          type="password"
          className="form-control"
          onChange={(event) =>
            setLoginDetails({ ...loginDetails, password: event.target.value })
          }
        />
      </p>

      <p>
        <button onClick={loginProcess} className=" btn btn-sm btn-primary">
          Login
        </button>
      </p>
    </div>
    </>
  );
}
