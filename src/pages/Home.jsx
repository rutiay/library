import { useState } from "react";
import { Redirect } from "react-router-dom";

const Home = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [redirectToRegister, setRedirectToRegister] = useState(false);

  if (redirectToLogin) return <Redirect to="/Login" />;
  if (redirectToRegister) return <Redirect to="/Register" />;

  return (
    <div className="container">
      <h1>ONLINE LIBRARY</h1>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setRedirectToLogin(true)}
      >
        Login
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setRedirectToRegister(true)}
      >
        Register
      </button>
    </div>
  );
};

export default Home;
