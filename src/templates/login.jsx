import { useEffect, useState } from "react";

export default function LoginTemplate({googleLogin=()=>{},emailLogin=()=>{},setCredentials=({email='',password=''})=>{}},credentials={email:'',password:''}) {
  const [template,setTemplate] = useState("")

  useEffect(()=>{
    if(template !== "") {
      document.querySelector("#google-login-btn").addEventListener("click",(e)=>{
        googleLogin()
      })
      document.querySelector("button[type='submit']").addEventListener("click",(e)=>{
        e.preventDefault()
        emailLogin()
      })
      document.querySelector("input[type='name']").addEventListener("change",(e)=>{
        setCredentials({username:e.target.value,password:credentials.password})
      })
      document.querySelector("input[type='password']").addEventListener("change",(e)=>{
        setCredentials({password:e.target.value,email:credentials.email})
      })
    }
  })

  useEffect(()=>{
    fetch("/templates/login.html").then(response => response.text()).then((value)=>{
      setTemplate(value)
    }).catch((reason)=>{
      console.log(reason)
    })
  },[])

  return (
    <>
    <div dangerouslySetInnerHTML={{__html:template}} />
    </>
  )
}