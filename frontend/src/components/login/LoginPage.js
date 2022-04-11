import React, { useState } from "react";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   const [login, setLogin] = useState(false) // terrible way to determine if logged in

  const loginUser = async () => {
    /* const response = */ await fetch(`http://127.0.0.1:5001/sessions/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    loginUser();
    // setLogin(true); // terrible way to determine login status, use as last resort
  };

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <form className="container loginForm" /* onSubmit={handleLoginClick} */>
        <div className="row">
          <input
            className="login"
            type="text"
            // name="username"
            placeholder="Enter username..."
            value={username}
            onChange={handleUserChange}
          />
        </div>
        <div className="row">
          <input
            type="password"
            className="login"
            // name="password"
            placeholder="Enter password..."
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="row">
          <div className="col-md-6"></div>
          <button
            type="submit"
            className="col-md-6 btn btnLogin"
            onClick={handleLoginClick}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;