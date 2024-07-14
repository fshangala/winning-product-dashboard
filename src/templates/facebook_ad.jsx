import { useEffect, useState } from "react";

export default function FacebookAd() {
  const [template,setTemplate] = useState("")

  useEffect(()=>{
    fetch("/templates/facebook_ad.html").then(response => response.text()).then((value)=>{
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