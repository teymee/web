import React from "react";
// import Login from "../Login/Login";
import "./AuthLayout.css";
import logo from "../../../assets/middlemenlogo.png";
import Glogo from "../../../assets/login-G.jpeg";
import SignUp from "../SignUp";
function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="carrot-img inline-block"></div>

      <div className="auth-content inline-block">
        <div className="auth-method">
          <img src={logo} alt="middlemen logo" />

          <div className="method mt-10">
            <button className="mr-5">
              <img
                className="inline-block mr-2"
                src={Glogo}
                alt="middlemen logo"
              />
              Sign in with Google
            </button>

            <button>
              <img
                className="inline-block mr-2"
                src={Glogo}
                alt="middlemen logo"
              />
              Sign in with Facebook
            </button>

            <div className="method-OR mt-18 ">
                <div className="OR-left mb-1"></div> <span className="text-center">OR</span> <div className="OR-right mb-1"></div>
            </div>
          </div>
        </div>
        {/* <Login /> */}
        <SignUp/>
      </div>
    </div>
  );
}

export default AuthLayout;
