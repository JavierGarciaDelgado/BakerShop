import React, { useState } from 'react'
import {loginWithGoogle,LoginWithPassword} from '../Config/firebase'
import { Link } from "react-router-dom";
import './login.css';


function Login() {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const loginGoogle = (e) => {
        e.preventDefault();
        loginWithGoogle();
    }
    
    const loginPassword = (e) => {
        e.preventDefault();
        LoginWithPassword(email, password)
    }

    

    return ( 
    <div id="login">
        <h3 className="text-center text-black pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="" method="post">
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label htmlFor="username" className="text-info">Username:</label><br/>
                                <input onChange={e => setEmail(e.target.value)} type="text" name="username" id="username" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info">Password:</label><br/>
                                <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control"/>
                            </div>
                            <div className="form-group mt-3">
                                <input onClick={loginPassword} type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                <Link to = '/Register' className="btn btn-primary btn-block" type="button" id="btn-signup"><i className="fas fa-user-plus"></i> Sign up New Account</Link>
                            </div>
                        </form>
                        <button onClick={loginGoogle}>Google</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Login