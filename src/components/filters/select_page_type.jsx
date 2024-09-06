import { useEffect, useRef } from "react"

export default function SelectPageType() {
  const refElem = useRef(null)

  useEffect(function(){
    $(refElem.current).select2()
  },[])

  return (
    <div className="select-wrapper">
      <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Page type
        <div className="custom-popup hidden" style={{right:"20px",display:"none"}} >Select the type of landing page.</div>
        <div className="inline-block pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
          </svg>
        </div>
      </div>
      <select ref={refElem} placeholder="Page Type" className="form-input select-box-2 w-select">
        <option value="products">Product Pages</option>
        <option value="collections">Collection Pages</option>
        <option value="funnels">Funnels</option>
        <option value="nofunnels">No Funnels</option>
      </select>
    </div>
  )
}