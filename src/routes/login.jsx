import { Link, useNavigate } from "react-router-dom";
import brandImage from "../assets/images/detailed-brand.png";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useContext, useEffect, useState } from "react";
import { SetUserContext } from "../context/UserContext";
import {AlertsContainer, Alert} from '../components/alert';
import CopiwinSDK from "../copiwinsdk/copiwinsdk";
import facebookAdsImage from "../assets/images/facebook-ads.svg"
import LoginTemplate from "../templates/login";
import { toast } from "react-toastify";

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

  useEffect(()=>{
    sessionStorage.setItem("logo",brandImage)
    sessionStorage.setItem("product_demo",facebookAdsImage)
  })
  
  const login = useGoogleLogin({
    onSuccess: (credentials) => {
      console.log(credentials)
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

  const customEmailLogin = function(credentials={username:'',password:''}) {
    setLoading(true)
    toast.info("Logging in...")
    console.log(credentials)
    sdk.login({username:credentials.username,password:credentials.password}).then((response)=>{
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
        response.non_field_errors.forEach(function(error){
          toast.error(error)
        })
      }
      if(response.error_description) { 
        toast.error(response.error_description)
      }
      if(response.error) {
        toast.error(response.error)
      }
      console.log(response)
    }).catch((reason)=>{
      console.log(reason)
    })
  }

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
      if(response.error_description) {
        var currentAlerts=alerts
        currentAlerts.push(response.error_description)
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
    <LoginTemplate googleLogin={login} emailLogin={({username,password})=>{
      customEmailLogin({username:username,password:password})
    }} alerts={alerts} setAlerts={setAlerts}/>
    </>
  )
}