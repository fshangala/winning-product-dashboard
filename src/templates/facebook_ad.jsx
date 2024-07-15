import { useEffect, useState } from "react";

export default function FacebookAd() {
  const [template,setTemplate] = useState({
    content:'',
    initialized:false,
  })

  useEffect(()=>{
    fetch("/templates/facebook_ad.html").then(response => response.text()).then((value)=>{
      setTemplate({content:value,initialized:template.initialized})
    }).catch((reason)=>{
      console.log(reason)
    })
  },[])

  useEffect(()=>{
    if(template.initialized) {
      //
    }
  })

  let initialize = function() {
    if(document.querySelector("#facebook-ad-template")) {
      setTemplate({content:template.content,initialized:true})
    } else {
      setTimeout(initialize,1000)
    }
  }

  return (
    <>
    <div dangerouslySetInnerHTML={{__html:template.content}} />
    </>
  )
}