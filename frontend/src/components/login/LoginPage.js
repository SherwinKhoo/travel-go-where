import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [hasLoggedIn, setHasLoggedIn] = useState(false);

  let navigate = useNavigate();

  //   const [login, setLogin] = useState(false) // terrible way to determine if logged in

  const loginUser = async () => {
    const response = await fetch(`http://127.0.0.1:5001/sessions/login`, {
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
    if (response.status === 200) {
      setHasLoggedIn(true);
      props.setUser(username);
      localStorage.setItem("currentUser", JSON.stringify(username));
    }
    refresh();
  };

  const registerUser = async () => {
    await fetch(`http://127.0.0.1:5001/users/new`, {
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

  const destroySession = async () => {
    await fetch(`http://127.0.0.1:5001/sessions/logout`);
  };

  const refresh = () => {
    window.location.reload();
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    loginUser();
  };

  const handleRegisterClick = (event) => {
    event.preventDefault();
    registerUser();
  };

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogOut = () => {
    destroySession();
    localStorage.clear();
    // refresh();
    navigate(`/`);
  };

  return (
    <>
      {localStorage.getItem("currentUser") !== null ? (
        <div className="welcomeMessage">
          <div>
            <p className="welcomeMessage2">
              Welcome,{" "}
              <span>
                {JSON.parse(window.localStorage.getItem("currentUser"))}
              </span>
              !
            </p>
          </div>
          <div className="row logout">
            <div className="col-md-4"></div>
            <button className="btn col-md-8 btnLogout" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <form className="container loginForm" onSubmit={handleLoginClick}>
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
            <button
              type="button"
              className="col-md-7 btn btnRegister"
              onClick={handleRegisterClick}
            >
              Register
            </button>
            <button
              type="button"
              className="col-md-5 btn btnLogin"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default LoginPage;
