
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";


const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
 export default function Navbar() {
    return (
      <div>
        <NavLink to="/" exact style={linkStyles} activeStyle={{ background: "darkblue", }} >
          Home
        </NavLink>
        <NavLink to="/about" exact style={linkStyles} activeStyle={{ background: "darkblue", }} > About </NavLink>
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
      </div>
    );
  }