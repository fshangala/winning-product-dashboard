import { useEffect, useState } from "react";

export default function TiktokFilters({applyFilters=(filters)=>{}}) {
  const [template,setTemplate] = useState("")

  useEffect(()=>{
    fetch("/templates/tiktok_filters.html").then(response => response.text()).then((value)=>{
      setTemplate(value)
      initialize()
    }).catch((reason)=>{
      console.log(reason)
    })
  },[])

  let getFilters = function() {
    var filters = {}

    //keyword
    filters["keyword"] = document.querySelector("input[name='keyword']").value

    return filters
  }

  let initialize = function() {
    var filters = {}
    if(document.querySelector("#tiktok-filters-template")) {
      // select2
      $(".select2-hidden-accessible").select2()

      // lightpick
      var lastseen = new Lightpick({
        field:document.querySelector("#datepickerlastseen"),
        singleDate:false,
      })
      var productcreation = new Lightpick({
        field:document.querySelector("#datepickerproductcreation"),
        singleDate:false,
      })

      // load ads
      filters = getFilters()
      filters.keyword = "dress"
      applyFilters(filters)

      // Event listeners
      document.querySelector("#applyfilters").addEventListener("click",()=>{
        filters = getFilters()
        applyFilters(filters)
      })
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