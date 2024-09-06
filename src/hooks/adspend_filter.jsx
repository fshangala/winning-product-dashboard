import { useEffect, useState } from "react"
import initialize from "../utils/initialize"

export default function useAdspendFilter() {
  let [adspend,setAdspend] = useState({
    value:'',
    open:false,
  })

  useEffect(function(){
    function handleChange(e) {
      setAdspend({
        ...adspend,
        value:e.target.value,
      })
    }

    function handleClick(e) {
      setAdspend(function(state){
        return {
          ...state,
          open: !state.open,
        }
      })
    }

    initialize({querySelector:"#adspendsummary"}).then(function(elem){
      elem.addEventListener("change",handleChange)
      elem.addEventListener("click",handleClick)
    })

    return function() {
      initialize({querySelector:"#adspendsummary"}).then(function(elem){
        elem.removeEventListener("change",handleChange)
        elem.removeEventListener("click",handleClick)
      })
    }
  },[])

  useEffect(function(){
    console.log(adspend)
    initialize({querySelector:"#tooltipadspend"}).then(function(elem) {
      elem.style.display=adspend.open ? "block" : "none"
      console.log(elem)
    })
  })

  return adspend
}