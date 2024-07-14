import { useEffect, useState } from "react";

export default function TiktokAd() {
  const [template,setTemplate] = useState("")

  useEffect(()=>{
    fetch("/templates/tiktok_ad.html").then(response => response.text()).then((value)=>{
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