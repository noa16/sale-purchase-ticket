import React, { useEffect, useState } from "react";
import classes from "./Login.module.css";
import { TicketConsumer, TicketProvider } from "../../TicketProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <React.Fragment>
      <TicketConsumer>
        {(value) => {
          const { handleLogin, isValidUserPass } = value;
          return (
            <div className={classes.frame}>
              <h1 className={classes.title}>Login</h1>
              <div className={classes.login}>
                <input
                  id={classes.id}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Enter email"
                  type="text"
                  className={classes.username}
                />

                <input
                  id={classes.password}
                  type="password"
                  placeholder="Enter password"
                  className={classes.pass}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {isValidUserPass === false ? (
                  <div className={classes.error}>
                    username or password is incorrect
                    <button
                      className={classes.loginButton}
                      onClick={() => handleLogin(userName, password)}
                    >
                      login
                    </button>
                  </div>
                ) : isValidUserPass === null ? (
                  <button
                    className={classes.loginButton}
                    onClick={() => handleLogin(userName, password)}
                  >
                    login
                  </button>
                ) : (
                  <Link to="/">
                    <button
                      className={classes.loginButton}
                      onClick={() => handleLogin(userName, password)}
                    >
                      login
                    </button>
                  </Link>
                )}
              </div>
              <footer className={classes.footer}>
                <div className="section-center">
                  <div className={classes.socialicons}>
                    <a href="#" class="social-icon">
                      <i class="fab fa-facebook"></i>
                    </a>

                    <a href="#" class="social-icon">
                      <i class="fab fa-twitter"></i>
                    </a>

                    <a href="#" class="social-icon">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                  <h4 className={classes.footertext}>
                    &copy;<span id="date"></span>
                    <span className={classes.company}>
                      Ticket-sale-purchase
                    </span>
                    all rights reserved
                  </h4>
                </div>
              </footer>
            </div>
          );
        }}
      </TicketConsumer>
    </React.Fragment>
  );
};

export default Login;
