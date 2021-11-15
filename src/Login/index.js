import React, { useState } from 'react'
import {loginWithGoogle,logout,CreateWithEmail} from '../Config/firebase'
import './login.css';


function Login() {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const loginGoogle = (e) => {
        e.preventDefault();
        loginWithGoogle();
    }
    const log_out = (e) => {
        e.preventDefault();
        logout();

    }
    const createEmail = (e) => {
        e.preventDefault();
        CreateWithEmail(email,password);
    }

    return ( 
    <div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
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
                                <input onChange={e => setPassword(e.target.value)} type="text" name="password" id="password" class="form-control"/>
                            </div>
                            <div class="form-group mt-3">
                                <input onClick={createEmail} type="submit" name="submit" class="btn btn-info btn-md" value="submit"/>
                            </div>
                        </form>
                        <button onClick={loginGoogle}>Google</button>
                        <button onClick={log_out}>logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login