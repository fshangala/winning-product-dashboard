import { useEffect, useReducer } from "react";
import useAdsetsFilter from "../hooks/adsets_filter";

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
  const adsets = useAdsetsFilter()

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

  let getFilters = function(randomize=false) {
    var filters = {}

    //keyword
    var keyword = document.querySelector("#keyword").value
    if(keyword != '') {
      filters["keyword"] = keyword
    }

    //country code
    var country_code = document.querySelector("#field").value
    if (country_code != '') {
      filters["country_code"]=country_code
    }

    // adsets
    if(adsets != '') {
      filters["adsets"] = adsets
    }

    //searchkeyword
    var search_keyword = document.querySelector("#searchkeyword").value
    filters["search_keyword_in"]=search_keyword

    //media type
    var media_type = document.querySelector("#Order-2").value
    if (media_type != '') {
      filters["media_type"] = media_type
    }

    //sort direction
    var sort_direction_asc = document.querySelector(".filters [direction='asc']")
    var sort_direction_desc = document.querySelector(".filters [direction='desc']")
    if (sort_direction_asc.classList.contains("active")){
      filters["sort_direction"]="asc"
    } else if (sort_direction_desc.classList.contains("active")) {
      filters["sort_direction"]="desc"
    }

    //ad creation date
    var ad_creation_date = document.querySelector("#datepicker").value
    if (ad_creation_date != '') {
      filters['ad_creation_date']=ad_creation_date
    }

    //randomize
    filters['randomize']=randomize

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

      //sort direction
      var sort_direction_asc = document.querySelector(".filters [direction='asc']")
      var sort_direction_desc = document.querySelector(".filters [direction='desc']")
      sort_direction_asc.addEventListener("click",function(e){
        if(!sort_direction_asc.classList.contains("active")) {
          sort_direction_asc.classList.add("active")
        }
        if(sort_direction_desc.classList.contains("active")) {
          sort_direction_desc.classList.remove("active")
        }
      })
      sort_direction_desc.addEventListener("click",function(e){
        if(!sort_direction_desc.classList.contains("active")) {
          sort_direction_desc.classList.add("active")
        }
        if(sort_direction_asc.classList.contains("active")) {
          sort_direction_asc.classList.remove("active")
        }
      })

      // load ads
      applyFilters(getFilters(true))

      // Event listeners
      document.querySelector("#applyfilters").addEventListener("click",()=>{
        applyFilters(getFilters())
      })

      // dropshipping buttons
      document.querySelectorAll(".dropshipping").forEach(function(elem){
        elem.addEventListener('click',function(e){
          applyFilters(getFilters(true))
        })
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