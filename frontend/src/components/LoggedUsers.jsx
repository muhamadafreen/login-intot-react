import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LoggedUsers() {
  const [users, regUsers] = useState([
    {
      username: "",
      email: "",
      password: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3001/loggedusers")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => regUsers(jsonRes));
  
  });

  return (
    <div class=" abc">
      <nav class="navbar fixed-top navbar-light bg-dark reguser">
        <form class="form-inline">
          <Link to="/">
            <button class="btn btn-outline-success" type="button">
              Home
            </button>
          </Link>
        </form>
      </nav>
      <div class="log">
        <h1>Registered Users</h1>
        {users.map((user) => (
          <div class="container">
            <hr></hr>
            <p>Name:{user.username}</p>
            <p>Email:{user.email}</p>
            <p>Password:{user.password}</p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoggedUsers;
