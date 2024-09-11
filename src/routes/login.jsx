import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useContext, useEffect, useState } from "react";
import { UserDispatchContext } from "../context/UserContext";
import CopiwinSDK from "../copiwinsdk/copiwinsdk";
import LoginTemplate from "../templates/login";
import { toast } from "react-toastify";
import initialize from "../utils/initialize";

export default function Login() {
  const sdk = new CopiwinSDK()
  const [credentials,setCredentials] = useState({
    email:"",
    password:""
  })
  const userDispatch = useContext(UserDispatchContext)
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)
  const [alerts,setAlerts] = useState([]);
  
  const login = useGoogleLogin({
    onSuccess: (credentials) => {
      console.log(credentials)
      sdk.loginWithGoogle({google_access_token:credentials.access_token}).then((response)=>{
        if(response.access_token) {
          localStorage.setItem("auth",JSON.stringify(response))
          userDispatch({type:'set-auth',auth:response})
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
        userDispatch({type:'set-auth',auth:response})
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

  return (
    <>
    <LoginTemplate googleLogin={login} emailLogin={({username,password})=>{
      customEmailLogin({username:username,password:password})
    }} alerts={alerts} setAlerts={setAlerts}/>
    </>
  )
}