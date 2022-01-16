import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FIREBASE_LIBRARY_API_KEY } from "../logic/keys";

const Login = ({ setAuth, localStorageKey }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function login() {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_LIBRARY_API_KEY}`;
    axios
      .post(url, {
        email,
        password,
      })
      .then(function (response) {
        setAuth(response.data);
        localStorage.setItem(localStorageKey, JSON.stringify(response.data));
        console.log(response);
      })
      .catch(function (error) {
        setError("Wrong Password or Email");
        console.log(error);
      });
  }
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <div style={{ width: "50%", marginLeft: "30%" }}>
        <form
          className="row g-3"
          onSubmit={(e) => {
            e.preventDefault();
            setError("");
            password.length >= 6
              ? login()
              : setError("Password must contain at least 6 characters");
          }}
        >
          <div className="col-auto">
            <label htmlFor="staticEmail2" className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="staticEmail2"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="inputPassword2" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-outline-success">
              Login
            </button>
          </div>
        </form>
      </div>
      <p>{error}</p>
      <Link className="btn btn-outline-danger" role="button" to="/">
        Return to Home Page
      </Link>
    </div>
  );
};

export default Login;
