import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  console.log(props);
  return (
    <div className=" row navigation" id="navigation">
      <a href="#about" onClick={() => props.handlePageChange("About")}>
        about
      </a>
      <a href="#portfolio" onClick={() => props.handlePageChange("Portfolio")}>
        portfolio{" "}
      </a>
      <a href="#contact" onClick={() => props.handlePageChange("Contact")}>
        contact{" "}
      </a>
      <a href="#resume" onClick={() => props.handlePageChange("Resume")}>
        resume
      </a>
    </div>
  );
}

// return (
//   <div className=" row navigation" id="navigation">
//       <NavLink to="/about">about </NavLink>
//       <NavLink to="/portfolio">portfolio </NavLink>
//       <NavLink to="/contact">contact </NavLink>
//       <NavLink to="/resume">resume</NavLink>
//   </div>

export default Navigation;
