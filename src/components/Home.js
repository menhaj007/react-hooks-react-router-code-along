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

export default function Home() {
    return (
      <div>
        <h1>Home!</h1>
      </div>
    );
  }