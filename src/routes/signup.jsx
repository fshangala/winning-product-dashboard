import { Link, useNavigate } from "react-router-dom";
import brandImage from "../assets/images/detailed-brand.png";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useContext, useEffect, useState } from "react";
import { UserDispatchContext } from "../context/UserContext";
import { supabase } from "../supabase-client";
import CopiwinSDK from "../copiwinsdk/copiwinsdk";
import { toast } from "react-toastify";

export default function Signup(){
  const sdk = new CopiwinSDK()
  const [credentials,setCredentials] = useState({
    email:"",
    first_name:"",
    last_name:"",
    password:""
  })
  const [loading,setLoading] = useState(false)

  const userDispatch = useContext(UserDispatchContext)
  const navigate = useNavigate()

  const emailSignUp = function(){
    setLoading(true)
    sdk.createAccount({
      email:credentials.email,
      first_name:credentials.first_name,
      last_name:credentials.last_name,
      password:credentials.password,
    }).then((response)=>{
      toast.success("User successfully created, please login.")
      if("id" in response) {
        navigate("/login")
      }
      console.log(response)
    }).catch((reason)=>{
      console.log(reason)
    }).finally(()=>{
      setLoading(false)
    })
  }
  return (
    <>
    <Link to={`/login`} className="topbar">
    🎉 Sales Tracker back with 98% accuracy, Try it out
    </Link>
    <div className="navbar">
      <div className="container">
        <Link to={`/`}>
          <img src={brandImage} height={64} alt="brand" />
        </Link>
      </div>
    </div>
    <div className="signup-section">
      <div className="container">
        <h1 className="title">Create an Account</h1>
        <div className="divider-container">
          <div className="divider"></div>
          <div className="text">or Sign Up with</div>
          <div className="divider"></div>
        </div>
        <div className="signup-form">
          {loading ? <p>Loading...</p> : null}        
          <div className="input-group">
            <label>First Name</label>
            <input type="name" className="input" value={credentials.first_name} onChange={(event)=>{
                setCredentials({
                ...credentials,
                first_name:event.target.value
                })
            }} />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input type="name" className="input" value={credentials.last_name} onChange={(event)=>{
                setCredentials({
                ...credentials,
                last_name:event.target.value
                })
            }} />
          </div>
          <div className="input-group">
            <label>E-mail</label>
            <input type="email" className="input" value={credentials.email} onChange={(event)=>{
                setCredentials({
                ...credentials,
                email:event.target.value
                })
              }} />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" className="input" value={credentials.password} onChange={(event)=>{
                setCredentials({
                ...credentials,
                password:event.target.value
                })
            }} />
          </div>
          <div className="input-group">
            <button className="btn" onClick={emailSignUp}>Signup</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}