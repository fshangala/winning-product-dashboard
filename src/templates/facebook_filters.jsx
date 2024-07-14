import { useEffect, useState } from "react";

export default function FacebookFilters() {
  const [template,setTemplate] = useState("")

  useEffect(()=>{
    fetch("/templates/facebook_filters.html").then(response => response.text()).then((value)=>{
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