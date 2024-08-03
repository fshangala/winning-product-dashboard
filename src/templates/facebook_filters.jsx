import { useEffect, useReducer, useState } from "react";

function facebookFiltersReducer(state,action) {
  switch (action.type) {
    case "set-template":
      return {
        ...state,
        template:action.template,
      }
    
    case "set-initialized":
      return {
        ...state,
        initialized:true,
      }
  
    default:
      break;
  }
}

export default function FacebookFilters({applyFilters=(filters)=>{}}) {
  const [facebookFiltersState, dispatch] = useReducer(facebookFiltersReducer,{
    template:'',
    initialized:false,
  })

  function handleSetTemplate(template) {
    dispatch({
      type:"set-template",
      template:template,
    })
  }

  function handleSetInitialized() {
    dispatch({
      type:"set-initialized",
    })
  }

  useEffect(()=>{
    fetch("/templates/facebook_filters.html").then(response => response.text()).then((value)=>{
      handleSetTemplate(value)
      initialize()
    }).catch((reason)=>{
      console.log(reason)
    })
  },[])

  let getFilters = function() {
    var filters = {}

    //keyword
    var keyword = document.querySelector("#keyword").value
    filters["keyword"] = keyword

    //country code
    var country_code = document.querySelector("#field").value
    filters["country_code"]=country_code

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
      var filters = getFilters()
      filters.keyword = "dress"
      applyFilters(filters)

      // Event listeners
      document.querySelector("#applyfilters").addEventListener("click",()=>{
        applyFilters(getFilters())
      })
      handleSetInitialized()
    } else {
      setTimeout(initialize, 1000);
    }
  }

  return (
    <>
    <div dangerouslySetInnerHTML={{__html:facebookFiltersState.template}} />
    </>
  )
}