import React from "react";
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className="outer-login">
            <h1>Sign Up</h1>
            <div className="signup-page">
                <div className="form">
                    <form>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit" className="signupbtn">Sign Up</button>
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

