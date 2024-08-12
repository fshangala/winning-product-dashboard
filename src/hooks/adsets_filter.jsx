import { useEffect, useState } from "react"
import initialize from "../utils/initialize"

export default function useAdsetsFilter() {
  const [adsets,setAdsets] = useState('')

  useEffect(function(){
    function handleChange(e) {
      setAdsets(e.target.value)
    }

    initialize({querySelector:"#adsetsumary"}).then(function(elem){
      elem.addEventListener("change",handleChange)
    })

    return function() {
      initialize({querySelector:"#adsetsumary"}).then(function(elem){
        elem.removeEventListener("change",handleChange)
      })
    }
  },[])

  return adsets
}