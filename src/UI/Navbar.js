import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.toolbar}>
      <span className={classes.store}>store</span>

      <Link className={classes.home} to="/">
        Home
      </Link>
      <Link to="/purchase" className={classes.Purchase}>
        My Purchase
      </Link>
      <Link to="login" className={classes.login}>
        login
      </Link>
    </div>
  );
};
export default Navbar;
