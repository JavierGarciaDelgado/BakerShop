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
                    <Col className="mt-5" xs={4}>
                      <input
                        onClick={loginPassword}
                        type="submit"
                        name="submit"
                        className="primaryButton"
                        value="Sign in"
                      />
                    </Col>
                    Sign in with{" "}
                    <button
                      className="justify-content-center mt-5"
                      onClick={loginGoogle}
                    >
                      {" "}
                      <i class="bi bi-google">oogle</i>
                    </button>
                    <Col className="mt-3" xs={8}>
                      Don't have an account?{" "}
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
