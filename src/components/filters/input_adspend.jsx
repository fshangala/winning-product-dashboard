import { OverlayPanel } from 'primereact/overlaypanel'
import { useRef, useState } from 'react'

export default function InputAdspend() {
  const op = useRef(null)
  const [value,setValue] = useState({
    min:0,
    max:999999,
  })

  return (
    <div className="select-wrapper">
      <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">
        Adspend
        <div className="custom-popup hidden" style={{right:"0px",display:"none"}}>Enter the adspend an ad should have in USD - this is the total adspend for 1 creative, not the campaign or the daily adspend.</div>
        <div className="inline-block pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
          </svg>
        </div>
        <span className="px-[0.2rem] bg-gray-200 font-bold rounded font-white">
          Best filter <img src="https://app.winninghunter.com/images/fire.png" className="h-[0.8rem] w-[0.8rem]" />
        </span>
      </div>

      <div>
        <input type="text" onClick={function(e){op.current.toggle(e)}} className="form-input adset-count w-input dropdown select2-container select2-selection" readOnly={true} value={`$${value.min} - $${value.max}`} />
      </div>
      <OverlayPanel ref={op}  style={{position:"absolute",inset:"0px auto auto 0px",margin:"0px",padding:"15px",border:"medium",backgroundColor:"white",borderRadius:"0.5em",width:"350px",zIndex:"9998",boxShadow:"rgba(0, 0, 0, 0.1) 3px 3px 8px 0px"}}>
        <div className="mt-4">
          <p className="text-sm mb-3 font-medium">Adspend Amount</p>
          <div className="range-slider">
              <div className="select-wrapper">
                <div className="div-block-71">
                  <input type="number" value={value.min} onChange={function(e){setValue({...value,min:e.target.value})}} className="form-input select2-selection adset-count w-input itemsetcounter" placeholder="Min" style={{width:"100%",marginTop:"10px"}} />
                </div>
              </div>
              <div className="select-wrapper">
                <div className="div-block-71">
                  <input type="number" value={value.max} onChange={function(e){setValue({...value,max:e.target.value})}} className="form-input select2-selection adset-count w-input itemsetcounter" placeholder="Max" style={{width:"100%",marginTop:"10px"}} />
                </div>
            </div>
          </div>
        </div>
      </OverlayPanel>
    </div>
  )
}