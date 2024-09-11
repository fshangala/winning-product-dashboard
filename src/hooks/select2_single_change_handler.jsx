import { useEffect } from "react"

export default function useSelect2SingleChangeHandler(refElem,onChange=function({value}){}) {

  function updateValue(valueList) {
    let result = valueList[0].id
    onChange({value:result})
  }

  useEffect(function(){
    function handleChange(e) {
      updateValue($(refElem.current).select2("data"))
    }

    let elem = $(refElem.current).select2({
      placeholder:'Filter',
      allowClear:true,
    })
    updateValue($(refElem.current).select2("data"))

    elem.on("change",handleChange)

    return function(){
      elem.off("change",handleChange)
    }
  },[])
}