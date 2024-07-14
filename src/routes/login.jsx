import { Link, useNavigate } from "react-router-dom";
import brandImage from "../assets/images/detailed-brand.png";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useContext, useEffect, useState } from "react";
import { SetUserContext } from "../context/UserContext";
import {AlertsContainer, Alert} from '../components/alert';
import CopiwinSDK from "../copiwinsdk/copiwinsdk";
import facebookAdsImage from "../assets/images/facebook-ads.svg"
import LoginTemplate from "../templates/login";

export default function Login() {
  const sdk = new CopiwinSDK()
  const [credentials,setCredentials] = useState({
    email:"",
    password:""
  })
  const setUser = useContext(SetUserContext)
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)
  const [alerts,setAlerts] = useState([]);

  const dismissAlert = function(index) {
    var a = alerts.filter(function(value,i,array){
      return index != i
    })
    setAlerts(a)
  }
  
  const login = useGoogleLogin({
    onSuccess: (credentials) => {
      sdk.loginWithGoogle({google_access_token:credentials.access_token}).then((response)=>{
        if(response.access_token) {
          localStorage.setItem("auth",JSON.stringify(response))
          setUser(response)
          navigate("/")
        }
        console.log(response)
      }).catch((reason)=>{
        console.log(reason)
      })
    },
    onError: (errorResponse) => {
      console.log(errorResponse)
    }
  })

  const emailLogin = function() {
    setLoading(true)
    console.log(credentials)
    sdk.login({username:credentials.email,password:credentials.password}).then((response)=>{
      if(response.access_token) {
        localStorage.setItem("auth",JSON.stringify(response))
        setUser(response)
        navigate("/")
      }
      if(response.token) {
        localStorage.setItem("user",JSON.stringify(response))
        setUser(response)
        navigate("/")
      }
      if(response.non_field_errors) {
        setAlerts(response.non_field_errors)
      }
      if(response.error) {
        var currentAlerts=alerts
        currentAlerts.push(response.error)
        setAlerts(currentAlerts)
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
    <LoginTemplate googleLogin={login} emailLogin={emailLogin} credentials={credentials} setCredentials={setCredentials} />
    </>
  )

  // return (
  //   <>
  //   <Link to={`/login`} className="topbar">
  //   🎉 Sales Tracker back with 98% accuracy, Try it out
  //   </Link>
  //   <div className="navbar">
  //     <div className="container">
  //       <Link to={`/`}>
  //         <img src={brandImage} height={50} alt="brand" />
  //       </Link>
  //     </div>
  //   </div>
  // {(alerts.length > 0) ? (
  // <AlertsContainer>
  // {alerts.map((value,index,array)=>{
  //   return <Alert message={value} index={index} dismiss={dismissAlert} />
  // })}
  // </AlertsContainer>
  // ) : null}
  //   <div className="login-section">
  //     <div className="column">
  //       <div className="login-form">
  //         {loading ? <p>Loading...</p> : null}
  //         <h1 className="title">Sign In</h1>
  //         <div className="input-group">
  //           <label>E-mail</label>
  //           <input type="email" className="input" value={credentials.email} onChange={(event)=>{
  //               setCredentials({
  //               ...credentials,
  //               email:event.target.value
  //               })
  //             }} />
  //         </div>
  //         <div className="input-group">
  //           <label>Password</label>
  //           <input type="password" className="input" value={credentials.password} onChange={(event)=>{
  //               setCredentials({
  //               ...credentials,
  //               password:event.target.value
  //               })
  //           }} />
  //         </div>
  //         <div className="input-group">
  //           <button className="login-btn" onClick={emailLogin}>Login</button>
  //         </div>
  //         <hr />
  //         <div className="social-login">
  //           <h3 className="title">Sign in with</h3>
  //           <button className="google-login-btn" onClick={login}>Google</button>
  //         </div>
  //         <div className="input-group">
  //           <p>Don't have an account? <Link to={"/signup"} className="sign-up-link">Get Started.</Link></p>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="column right">
  //       <h1 className="title">Find Winning Products</h1>
  //       <h2 className="sub-title">Find Winning Products And add stores to the live Sales Tracker to be ahead of your competitors.</h2>
  //       <div className="image-container">
  //         <img className="image" src={facebookAdsImage} alt="facebook-ads" />
  //       </div>
  //     </div>
  //   </div>
  //   </>
  // )
}