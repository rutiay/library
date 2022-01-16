import React from "react";
import { Link } from "react-router-dom";
import { FIREBASE_AUTH_LOCAL_STORAGE } from "../logic/keys";

const Navbar = ({ user, setAuth }) => {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">{user}</span>
        <Link className="nav-link" to="/ReadingList">
          Reading List
        </Link>
        <Link className="nav-link" to="/CompletedList">
          Completed List
        </Link>
        <Link className="nav-link" to="/Search">
          Search
        </Link>
      </div>
      <button
        className="btn btn-danger"
        style={{marginLeft:"2%"}}
        onClick={() => {
          setAuth(null);
          localStorage.removeItem(FIREBASE_AUTH_LOCAL_STORAGE);
        }}
      >
        Sign Out
      </button>
    </nav>
  );
};

export default Navbar;
