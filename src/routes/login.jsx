import { Link, useNavigate } from "react-router-dom";
import brandImage from "../assets/images/detailed-brand.png";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useContext, useEffect, useState } from "react";
import { SetUserContext } from "../context/UserContext";
import {AlertsContainer, Alert} from '../components/alert';
import CopiwinSDK from "../copiwinsdk/copiwinsdk";

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
      fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${credentials.access_token}`, {
        headers: {
          "Authorization": `Bearer ${credentials.access_token}`,
          "Accept": 'application/json'
        }
      }).then((response)=>{
        response.json().then((data)=>{
          sdk.googleLogin({
            email:data.email,
            first_name:data.given_name,
            last_name:data.family_name,
            google_id:data.id,
            picture_url:data.picture
          }).then((data)=>{
            setUser(data.data)
            console.log(data)
            navigate("/")
          }).catch((error)=>{
            console.log(error)
          })
        })
      }).catch((error)=>{
        console.log(error)
      })
    },
    onError: (errorResponse) => {
      console.log(errorResponse)
    }
  })

  const emailLogin = function() {
    setLoading(true)
    sdk.login({username:credentials.email,password:credentials.password}).then((response)=>{
      if(response.token) {
        localStorage.setItem("user",JSON.stringify(response))
        setUser(response)
        navigate("/")
      }
      if(response.non_field_errors) {
        setAlerts(response.non_field_errors)
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
          <img src={brandImage} alt="brand" />
        </Link>
      </div>
    </div>
  {(alerts.length > 0) ? (
  <AlertsContainer>
  {alerts.map((value,index,array)=>{
    return <Alert message={value} index={index} dismiss={dismissAlert} />
  })}
  </AlertsContainer>
  ) : null}
    <div className="login-section">
      <div className="column">
        <div className="login-form">
          {loading ? <p>Loading...</p> : null}
          <h2 className="title">Sign In</h2>
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
            <button className="login-btn" onClick={emailLogin}>Login</button>
          </div>
          <hr />
          <div className="social-login">
            <h3 className="title">Sign in with</h3>
            <button className="google-login-btn" onClick={login}>Google</button>
          </div>
          <div className="input-group">
            <p>Don't have an account? <Link to={"/signup"} className="sign-up-link">Get Started.</Link></p>
          </div>
        </div>
      </div>
      <div className="column">
        <h3>Copiwin</h3>
      </div>
    </div>
    </>
  )
}