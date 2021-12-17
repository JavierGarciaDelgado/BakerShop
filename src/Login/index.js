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
        <h3 class="text-center text-black pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br/>
                                <input onChange={e => setEmail(e.target.value)} type="text" name="username" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br/>
                                <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" class="form-control"/>
                            </div>
                            <div class="form-group mt-3">
                                <input onClick={loginPassword} type="submit" name="submit" class="btn btn-info btn-md" value="submit"/>
                                <Link to = '/Register' class="btn btn-primary btn-block" type="button" id="btn-signup"><i class="fas fa-user-plus"></i> Sign up New Account</Link>
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