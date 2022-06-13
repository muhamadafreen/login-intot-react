import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [signupStatus, setSignupStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/signup", {
      username: usernameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
      setSignupStatus(response.data.message);
    });
  };

  return (
    <div>
      <nav class="navbar navbar-light ">
        <form class="buttons form-inline">
          <Link to="/">
            <button class="btn btn-outline-success" type="button">
              Home
            </button>
          </Link>
          <Link to="/login">
            <button class="btn abcc btn-outline-secondary" type="button">
              Login
            </button>
          </Link>
        </form>
      </nav>

      <div className="form-signin w-100 m-auto">
        <h1>{signupStatus}</h1>

        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          class="form-control"
          placeholder=" Name"
          required
        />
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          name="email"
          class="form-control"
          placeholder="Email"
          required
        />
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          name="pass"
          class="form-control "
          placeholder="Password"
          required
        />

        <Link to="/loggedusers">
          <button
            onClick={register}
            class="w-100 btn btn-lg btn-dark"
            type="submit"
          >
            Sign UP
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
