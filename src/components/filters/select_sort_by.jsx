import { useEffect, useRef } from "react"

export default function SelectSortBy() {
  const refElem = useRef(null)

  useEffect(function(){
    $(refElem.current).select2({
      allowClear:true,
    })
  },[])

  return (
    <div className="select-wrapper">
      <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">
        Sort By
        <div className="custom-popup hidden" style={{right:"0px",zIndex:"1999",display:"none",transform:"scale(0.8)"}} >
          Sort ads by:
          <p className="text-align-left">
            "Winners" - Ads that performed well over a longer period of time.<br/>
            "Trending" - Ads that recently performed well.<br/>
            "Adset amount" - Ads with the most amount of adsets.<br/>
            "Last seen" - Ads that are seen the last by our bots.
            "Adspend" - Ads that have spent the most.<br/>
            "Found date" - Ads which were just found will be put at the top. - best option if you struggle with seeing the same ads<br/>
          </p>
        </div>
        <div className="inline-block pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
          </svg>
        </div>
        <span style={{pointerEvents:"none",padding:"2px",backgroundColor:"#225AEA",color:"white",marginLeft:"4px",borderRadius:"4px"}}>Updated</span>
      </div>
      <select ref={refElem} placeholder="Sort By..." className="form-input select-box-2 w-select">
        <option value="">None</option>
        <option value="consistency" selected="">Winners (formerly consistency)</option>
        <option value="trending">Trending</option>
        <option value="adsetamount">Adset amount</option>
        <option value="lastseen">Last Seen</option>
        <option value="datefound" selected="" data-select2-id="8">Found date</option>
        <option value="adspend">Adspend</option>
      </select>
    </div>
  )
}