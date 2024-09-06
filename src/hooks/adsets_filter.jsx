import { useEffect, useState } from "react"
import initialize from "../utils/initialize"

export default function useAdsetsFilter() {
  let [adsets,setAdsets] = useState({
    value:'',
    open:false,
  })

  useEffect(function(){
    function handleChange(e) {
      setAdsets({
        ...adsets,
        value:e.target.value,
      })
    }

    function handleClick(e) {
      setAdsets(function(state){
        return {
          ...state,
          open: !state.open,
        }
      })
    }

    initialize({querySelector:"#adsetsumary"}).then(function(elem){
      elem.addEventListener("change",handleChange)
      elem.addEventListener("click",handleClick)
    })

    return function() {
      initialize({querySelector:"#adsetsumary"}).then(function(elem){
        elem.removeEventListener("change",handleChange)
        elem.removeEventListener("click",handleClick)
      })
    }
  },[])

  useEffect(function(){
    console.log(adsets)
    initialize({querySelector:"#tooltip"}).then(function(elem) {
      elem.style.display=adsets.open ? "block" : "none"
      console.log(elem)
    })
  })

  return adsets
}