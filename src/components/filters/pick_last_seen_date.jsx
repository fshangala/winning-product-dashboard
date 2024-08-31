import { useEffect } from "react"

export default function PickLastSeenDate() {

  useEffect(function(){
    var picker = new Lightpick({
      field:document.querySelector("#last-seen-date-picker"),
      singleDate:false,
    })
  },[])

  return (
    <div className="select-wrapper">
      <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Last seen date
        <div className="custom-popup hidden" style={{right:"90px",display:"none",transform:"scale(0.8)"}}>Select the dates during which the ads were last seen by one of our bots.</div>
        <div className="inline-block pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
          </svg>
        </div>
      </div>
      <div className="w-embed">
        <input placeholder="Last Seen Date" type="text" id="last-seen-date-picker" className="form-input ad select2-selection select2-selection--multiple" readOnly=""/> 
      </div>
    </div>
  )
}