import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { CreateWithEmail, getUserId } from "../Config/firebase";
import { Button, Col, Container } from "react-bootstrap";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [valid, setValid] = useState();

  const createEmail = (e) => {
    e.preventDefault();
    if (valid) {
      CreateWithEmail(email, password);
    }
  };
  const validatePassword = () => {
    const password = document.getElementById("user-pass").value;
    const cnfrmPassword = document.getElementById("user-repeatpass").value;
    console.log(password, cnfrmPassword);
    const message = document.getElementById("message");

    if (password.length !== 0) {
      if (password === cnfrmPassword) {
        message.textContent = "Password match";
        message.style.backgroundColor = "#00FF00";
        setValid(true);
      } else {
        message.textContent = "Password don't match";
        message.style.backgroundColor = "#ff4d4d";
        setValid(false);
      }
    } else {
      alert("Password can't be empty!");
      message.textContent = "";
    }
  };

  return (
    <div className="loginBackGround" id="login">
      <div className="containerRegister loginWindow">
        <div id="login-row" className="">
          <div id="register-column" className="col-md-3">
            <div id="register-box" className="col-md-12">
              <form onSubmit={createEmail} className="form-signup">
                <h1 className="boxFitRegister">Register now!</h1>
                <Container>
                  <div className="form-group">
                    <label className="mt-4" htmlFor="Username">
                      Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      id="user-name"
                      className="form-control"
                      placeholder="Username"
                      required
                      autofocus=""
                    />
                  </div>
                  <div className="form-group">
                    <label className="mt-4" htmlFor="Full name">
                      Name:
                    </label>
                    <br />
                    <input
                      type="text"
                      id="user-name"
                      className="form-control"
                      placeholder="Full name"
                      required
                      autofocus=""
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="Email">Email:</label>
                    <br />
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="user-email"
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      id="user-pass"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="Cnfrmpassword">Confirm password:</label>
                    <br />
                    <input
                      onChange={validatePassword}
                      type="password"
                      id="user-repeatpass"
                      className="form-control"
                      placeholder="Repeat Password"
                      required
                    />
                  </div>
                  <p id="message"></p>
                  <div className="form-group mt-3">
                    <Col className="mt-5" xs={4}>
                      <Button
                        type="submit"
                        className="btn btn-primary btn-block primaryButton"
                      >
                        <i class="fas fa-user-plus"></i> Sign Up
                      </Button>
                    </Col>

                    <Col className="mt-5" xs={8}>
                    Already have account?{" "}
                      <Link to="/" className="LinkRegister">
                        Sign in
                      </Link>
                    </Col>
                  </div>
                </Container>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
