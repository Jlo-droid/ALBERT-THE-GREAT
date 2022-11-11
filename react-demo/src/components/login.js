import React, { useState } from "react";
import "./login.css"

const Login = () => {
    
    return (
        <div className= "Back">
         <div className = "Header">  
        <img className = "img" src= "./IMG/iCheck-logo.png" alt=""
            width = "90%"
            />
        </div> 
        <div class = "outer w30percent center">
        <div className="cover inner">
            <input type = "text" placeholder = "User"/>
               
            <input type = "password" placeholder = "Password"/>
            <div className= "login-btn" onClick>Login</div>

        </div>
        
        </div>
    <br/>
       <p className = "devs">iCheck Web App v0.1.CodeDementia.2022</p> 
    </div>
    
)

}
export default Login