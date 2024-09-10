import { useEffect } from "react"


export default function useSelect2ChangeHandler(refElem,onChange=function({value}){}) {

  function updateValue(valueList) {
    let result = valueList.map((item) => item.id).join(",")
    onChange({value:result})
  }

  useEffect(function(){
    function handleChange(e) {
      updateValue($(refElem.current).select2("data"))
    }

    let elem = $(refElem.current).select2({
      multiple:true,
      allowClear:true,
    })
    updateValue($(refElem.current).select2("data"))

    elem.on("change",handleChange)

    return function(){
      elem.off("change",handleChange)
    }
  },[])
}