import { useEffect, useRef, useState } from "react"

export default function SearchKeyword({value="All",onChange=function({value}){}}) {
  const refElem = useRef(null)

  useEffect(function(){
    $(refElem.current).select2()
  },[])

  return (
    <div className="select-wrapper">
      <div className="select-label">Search Keyword In...</div>
      <select ref={refElem} className="form-input select-box-2 w-select" onChange={function(){onChange({value:e.target.value})}} value={value}>
        <option value="All" data-select2-id="2">All</option>
        <option value="adtext">Ad Text</option>
        <option value="landingurl">Landing Url</option>
        <option value="pagename">Page Name</option>
        <option value="productname">Product Name</option>
      </select>
    </div>
  )
}
