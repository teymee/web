import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  return (
    <div className="login">
      <form>
        <input type="email" placeholder="Email Address" />
        <input className="mt-10" type="password" placeholder="Password" />
        <button className="mt-10">Sign In </button>
      </form>

      <p className="text-center mt-10 text-sm text-gray-500">
        Don't have an account? <Link className="text-red-500">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
