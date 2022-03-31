import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { CreateWithEmail } from "../Config/firebase";
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


  const  [confirmPassword, setConfirmPassword] = useState("")

  const validatePassword = () => {
    const password = document.getElementById("user-pass").value;
    const cnfrmPassword = document.getElementById("user-repeatpass").value;

    if (password.length !== 0) {
      if (password !== cnfrmPassword) {
        setConfirmPassword(
          <p className="match">Password doesn't match</p>
        )
        setValid(false);
      }else{
        setValid(true);
        setConfirmPassword("")
      }
    } else {
      setConfirmPassword("")
    }
  };

  const handlePassword = (e) => {
    validatePassword()
    setPassword(e.target.value)
  }

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
                      onChange={(e) => handlePassword(e)}
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
                  {confirmPassword}
                  <div className="form-group mt-3">
                    <Col className="mt-4" xs={12}>
                      <Button
                        type="submit"
                        className="btn btn-primary btn-block primaryButton"
                      >
                        <i class="fas fa-user-plus"></i> Sign Up
                      </Button>
                    </Col>

                    <Col className="mt-4 text-center" xs={12}>
                      <span>Already have account?</span>
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
