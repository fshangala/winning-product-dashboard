import { useEffect, useState } from "react";
import facebookAdsImage from "../assets/images/facebook-ads.svg"
import brandImage from "../assets/images/detailed-brand.png";

export default function LoginTemplate({googleLogin=()=>{},emailLogin=({username='',password=''})=>{},alerts=[],setAlerts=([])=>{}}) {
  const [template,setTemplate] = useState("")
  const [initialized,setInitialized] = useState(false)

  useEffect(()=>{
    fetch("/templates/login.html").then(response => response.text()).then((value)=>{
      setTemplate(value)
      initialize()
    }).catch((reason)=>{
      console.log(reason)
    })
  },[])

  useEffect(()=>{
    if(initialized) {
      // alerts
      console.log(alerts)
      if (alerts.length > 0) {
        document.querySelector("#failed").innerText = alerts.join("\n")
        document.querySelector(".w-form-fail").style.display="block"
        setTimeout(() => {
          document.querySelector(".w-form-fail").style.display="none"
        }, 5000)
        setAlerts([])
      }
    }
  })

  const initialize = function() {
    if(document.querySelector("#login-template")) {
      // login events
      document.querySelector("button[type='submit']").addEventListener("click",(e)=>{
        e.preventDefault()
        var username = document.querySelector("input[type='name']").value
        var password = document.querySelector("input[type='password']").value
        emailLogin({username:username,password:password})
      })

      document.querySelector("#google-login-btn").addEventListener("click",()=>{
        googleLogin()
      })
  
      // 
      var loading = sessionStorage.getItem("loading")
      console.log("LOADING",loading)
      if (loading) {
        if(loading == "true") {
          document.querySelector(".w-form-done").style.display="block"
          setTimeout(() => {
            document.querySelector(".w-form-done").style.display="none"
          }, 5000);
        }
      }
      
      // images
      document.querySelector("#logo").src = brandImage
      document.querySelector("#product-demo").src = facebookAdsImage

      setInitialized(true)
    } else {
      setTimeout(() => {
        initialize()
      }, 1000);
    }
  }

  return (
    <>
    <div dangerouslySetInnerHTML={{__html:template}} />
    </>
  )
}