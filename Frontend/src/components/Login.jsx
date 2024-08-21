import React from "react";
import './Styles.css';
function Login(){
    return (
    <div className="outer-login" style={{backgroundColor:"white"}}>
      <h1 style={{marginLeft:'47%'}}>Login</h1>
      <div className="signup-page">
        <div className="form">
          <form>
            <input type="text" placeholder="name" required/>
            <input type="text" placeholder="email" required/>
            <input type="password" placeholder="password" required/>
            {/* <button className="signupbtn">Sign Up</button> */}
            <button className="signupbtn">Login</button>
          </form>
          
        </div>
      </div>
    </div>
    )
};
export default Login;
