import { useEffect, useRef } from "react"

export default function SelectNiche() {
  const refElem = useRef(null)

  useEffect(function(){
    $(refElem.current).select2({
      multiple:true,
      allowClear:true,
    })
  },[])

  return (
    <div className="select-wrapper niche-select">
      <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer"><div className="custom-popup hidden" style={{right:"90px",display:"none"}} >This filter might not show ALL ads in a certain niche, only use it if it really saves you time looking in a certain niche.

        For Fashion: Use the "Fashion Dropship" filter first because it gives way more ads, else use this "clothing" niche filter.</div>Niche

        <div className="inline-block pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
          </svg>
        </div>

        <span style={{pointerEvents:"none",padding:"2px",backgroundColor:"#225AEA",color:"white",marginLeft:"4px",borderRadius:"4px"}}>Updated</span>
      </div>
      <select ref={refElem} className="js-select2 form-input select-box-2 pb w-select">
        <option value="CG" data-badge="">Fashion &amp; Clothing</option>
        <option value="AM" data-badge="">Car</option>
        <option value="GG" data-badge="">Gadgets</option>
        <option value="JY" data-badge="">Jewellery</option>
        <option value="GS" data-badge="">Gifts</option>
        <option value="HT" data-badge="">Health</option>
        <option value="BY" data-badge="">Beauty</option>
        <option value="KS" data-badge="">Kids</option>
        <option value="TS" data-badge="">Toys</option>
        <option value="HE" data-badge="">Household</option>
        <option value="PS" data-badge="">Pets</option>
        <option value="DP" data-badge="">Digital Products</option>
      </select>
    </div>
  )
}