import { useEffect, useRef, useState } from "react"

export default function SearchKeyword({value="",onChange=function({value}){}}) {
  const refElem = useRef(null)

  const searchKeywordData = [
    {id:"",text:"All"},
    {id:"adtext",text:"Ad Text"},
    {id:"landingurl",text:"Landing Url"},
    {id:"pagename",text:"Page Name"},
    {id:"productname",text:"Product Name"},
  ]

  useEffect(function(){
    $(refElem.current).select2({
      data:searchKeywordData,
      templateSelection:function(state) {
        onChange({value:state.id})
        return state.text
      }
    })
  },[])

  return (
    <div className="select-wrapper">
      <div className="select-label">Search Keyword In...</div>
      <select ref={refElem} className="form-input select-box-2 w-select" value={value}></select>
    </div>
  )
}
