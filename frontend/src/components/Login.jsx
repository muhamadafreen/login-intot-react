import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/loggedusers';
    navigate(path);
  }

  const login = () => {
    Axios.post("http://localhost:3001/login?", {
      username: username,
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus("Welcome Back " + response.data[0].username);
        routeChange()
      }
    });
  };

  return (
    <div class="logis">
      <nav class="navbar navbar-light ">
        <span class="navbar-text">Not Yet Registered?</span>
        
          <form class="form-inline">
          <Link  to="/signup">
            <button class="btn btn-outline-success" type="button">
              Sign UP
            </button>
            </Link>
          </form>

          
          <form class="form-inline">
          <Link to="/">
            <button class="btn btn-outline-success " type="button">
              Home
            </button>
            </Link>
          </form>
       
      </nav>

      <div className="form-signin w-100 m-auto">
        <div class="logstatus">
          <p class="status">{loginStatus}</p>
        </div>

        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <input
          class="form-control"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder=" Name"
        />
        <br></br>
        <input
          class="form-control"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <br></br>
        <input
          class="form-control"
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <br></br>
        <button class="w-100 btn btn-lg btn-dark" onClick={login}>
          Get Me in
        </button>
        
      </div>
    </div>
  );
}

export default Login;
