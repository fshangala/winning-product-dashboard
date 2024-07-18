import { useEffect, useState } from "react";

export default function FacebookFilters({applyFilters=(filters)=>{}}) {
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

  let getFilters = function() {
    var filters = {}

    //keyword
    var keyword = document.querySelector("#keyword").value
    filters["keyword"] = keyword
    return filters
  }

  let initialize = function() {
    if(document.querySelector("#facebook-filters-template")) {
      // select2
      $(".select2-hidden-accessible").select2()

      //lightpick 
      var picker = new Lightpick({
        field:document.querySelector("#datepicker"),
        singleDate:false,
      })
      var lastseen = new Lightpick({
        field:document.querySelector("#datepickerlastseen"),
        singleDate:false,
      })
      var productcreation = new Lightpick({
        field:document.querySelector("#datepickerproductcreation"),
        singleDate:false,
      })

      // load ads
      applyFilters(()=>{
        var filters = getFilters()
        filters.keyword = "dress"
        return filters
      })

      // Event listeners
      document.querySelector("#applyfilters").addEventListener("click",()=>{
        applyFilters(getFilters())
      })
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