import React, { useState } from "react";
import { loginWithGoogle, LoginWithPassword } from "../Config/firebase";
import { Link } from "react-router-dom";
import "./login.css";
import { Button, Col, Container } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginGoogle = (e) => {
    e.preventDefault();
    loginWithGoogle();
  };

  const loginPassword = (e) => {
    e.preventDefault();
    LoginWithPassword(email, password);
  };

  return (
    <div className="loginBackGround" id="login">
      <div className="loginWindow">
        <div id="login-row" className="">
          <div id="login-column" className="col-md-3">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="post">
                <h1 className="boxFit">Welcome!</h1>
                <div className="form-group">
                  <Container>
                    <label className="mt-4" htmlFor="username">
                      Username:
                    </label>
                    <br />
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                    />
                  </Container>
                </div>
                <div className="form-group mt-3">
                  <Container>
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                    />
                  </Container>
                </div>
                <div className="form-group mt-3">
                  <Container>
                    <Col className="mt-4" xs={12}>
                      <input
                        onClick={loginPassword}
                        type="submit"
                        name="submit"
                        className="primaryButton"
                        value="Sign in"
                      />
                    </Col>
                    <p className="mt-3 mb-3 text-center ">or</p>
                    <div className="text-center">
                      <button
                        className="justify-content-center googleButton"
                        onClick={loginGoogle}
                      >
                        <img
                          src="https://logodownload.org/wp-content/uploads/2017/05/google-chrome-logo-0.png"
                          width="30px"
                          className="googleIcon"
                        />
                        Sign in with Google
                      </button>
                    </div>
                    <Col className="mt-4 text-center" xs={12}>
                      <span>Don't have an account?</span> 
                      <Link to="/Register" className="LinkRegister">
                        Sign up
                      </Link>
                    </Col>
                  </Container>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
