import React from 'react'
import { Link } from "react-router-dom";

import "./Login/Login.css";

function SignUp() {
    return (
        <div className="login signup">
        <form >
          <input type="text" placeholder="Full Name" />
          <input className="mt-10" type="email" placeholder="Email Address" />
          <input className="mt-10" type="number" placeholder="Phone Number" />
          <input className="mt-10" type="password" placeholder="Password" />
         
          <button className="mt-10">Sign Up </button>
        </form>
  
        <p className="text-center mt-10 text-sm text-gray-500">
          Already have an account? <Link className="text-red-500">Sign In</Link>
        </p>
      </div>
    )
}

export default SignUp
