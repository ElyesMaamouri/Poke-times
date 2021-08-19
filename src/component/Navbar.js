import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
const Navbar = (props) => {
  //console.log("router ==>", props);

  setTimeout(() => {
    props.history.push("/about");
  }, 2000);
  return (
    <nav className="naw-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke'Times</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
