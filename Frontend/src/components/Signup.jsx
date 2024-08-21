import React from "react";
import { Link } from "react-router-dom";
import './Styles.css';
function Signup() {
    return (
        <div className="outer-login" style={{backgroundColor:"white"}}>
            <h1 style={{alignItems:'center',justifyContent:'center',marginLeft:'45%'}}>Sign Up</h1>
            <div className="signup-page">
                <div className="form">
                    <form>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit" className="signupbtn">Sign Up</button>
                        <h4 className="mt-2">OR</h4>
                        <h5 className="mb-0.5 mt-2">Already signed in?Then login</h5>
                        <Link to="/login">
                            <button type="button" className="signupbtn">Login</button>
                        </Link>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;

