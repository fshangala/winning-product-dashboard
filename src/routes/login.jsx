import { Link, useNavigate } from "react-router-dom";
import brandImage from "../assets/images/detailed-brand.png";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useContext, useEffect, useState } from "react";
import { SetUserContext } from "../context/UserContext";

export default function Login() {
  const setUser = useContext(SetUserContext)
  const navigate = useNavigate()
  
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse)
      localStorage.setItem("user",JSON.stringify(codeResponse))
      navigate("/")
    },
    onError: (errorResponse) => {
      console.log(errorResponse)
    }
  })

  return (
    <>
    <Link to={`/login`} className="topbar">
    🎉 Sales Tracker back with 98% accuracy, Try it out
    </Link>
    <div className="navbar">
      <div className="container">
        <Link to={`/`}>
          <img src={brandImage} alt="brand" />
        </Link>
      </div>
    </div>
    <div className="section">
      <div className="row">
        <div className="login-form">
          <button className="google-login-btn" onClick={login}>Sign in with Google</button>
        </div>
        <div className="content"></div>
      </div>
    </div>
    </>
  )
}