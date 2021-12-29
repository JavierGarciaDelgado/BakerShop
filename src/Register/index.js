import React, { useState } from 'react'
import './register.css';
import { Link } from "react-router-dom";
import {CreateWithEmail} from '../Config/firebase'

function Register() {
    

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [valid,setValid] = useState();

    const createEmail = (e) => {
        e.preventDefault();
        if(valid){
            CreateWithEmail(email,password);
        }
    }
    const validatePassword = () => {
        const password = document.getElementById("user-pass").value;
        const cnfrmPassword = document.getElementById("user-repeatpass").value;
        console.log(password,cnfrmPassword)
        const message = document.getElementById("message");

        if(password.length !== 0){
            if(password === cnfrmPassword){
                message.textContent = "Password match"
                message.style.backgroundColor = "#00FF00";
                setValid(true);

            }else{
                message.textContent = "Password don't match"
                message.style.backgroundColor = "#ff4d4d";
                setValid(false);
            }
        }else{
            alert("Password can't be empty!");
            message.textContent ="";
        }
    }

    return ( 
        <form onSubmit={createEmail} className="form-signup">
        <input type="text" id="user-name" className="form-control" placeholder="Full name" required autofocus=""/>
        <input onChange={e => setEmail(e.target.value)} type="email" id="user-email" className="form-control" placeholder="Email address" required />
        <input onChange={e => setPassword(e.target.value)} type="password" id="user-pass" className="form-control" placeholder="Password" required />
        <input onChange={validatePassword}type="password" id="user-repeatpass" className="form-control" placeholder="Repeat Password" required />
        <p id="message"></p>
        <button type="submit" className="btn btn-primary btn-block" ><i class="fas fa-user-plus"></i> Sign Up</button>
        <Link to ="/" id="cancel_Register"><i className="fas fa-angle-left"></i> Back</Link>
    </form>
    )
}

export default Register 