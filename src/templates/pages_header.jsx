import { useEffect, useState } from "react";

export default function PagesHeader() {
  const [template,setTemplate] = useState("")

  useEffect(()=>{
    fetch("/templates/pages_header.html").then(response => response.text()).then((value)=>{
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