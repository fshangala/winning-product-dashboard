import { useEffect, useRef, useState } from "react"

export default function SearchKeyword() {
  const refElem = useRef(null)
  const [a,setA]=useState('All')

  useEffect(function(){
    $(refElem.current).select2()
  },[])

  return (
    <div className="select-wrapper">
      <div className="select-label">Search Keyword In...</div>
      <select ref={refElem} className="form-input select-box-2 w-select" onChange={function(e){setA(e.target.value)}} value={a}>
        <option value="All" data-select2-id="2">All</option>
        <option value="adtext">Ad Text</option>
        <option value="landingurl">Landing Url</option>
        <option value="pagename">Page Name</option>
        <option value="productname">Product Name</option>
      </select>
    </div>
  )
}
