import { useEffect, useState } from "react";

export default function FacebookFilters() {
  const [template,setTemplate] = useState('')
  const [initialized,setInitialized] = useState(false)

  useEffect(()=>{
    fetch("/templates/facebook_filters.html").then(response => response.text()).then((value)=>{
      setTemplate(value)
      initialize()
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
    if(document.querySelector("#facebook-filters-template")) {
      // select2
      $(".select2-hidden-accessible").select2()
      setInitialized(true)
    } else {
      setTimeout(initialize, 1000);
    }
  }

  return (
    <>
    <div dangerouslySetInnerHTML={{__html:template}} />
    </>
  )
}