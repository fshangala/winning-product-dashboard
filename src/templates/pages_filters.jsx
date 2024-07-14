import { useEffect, useState } from "react";

export default function PagesFilters() {
  const [template,setTemplate] = useState("")

  useEffect(()=>{
    fetch("/templates/pages_filters.html").then(response => response.text()).then((value)=>{
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