import { OverlayPanel } from 'primereact/overlaypanel'
import { useRef, useState } from 'react'

export default function InputActiveAdsets() {
  const op = useRef(null)
  const [value,setValue] = useState({
    min:1,
    max:2650,
  })

  return (
    <div className="select-wrapper">
      <div className="select-label">Active Adsets</div>
      <div>
        <input type="text" onClick={function(e){op.current.toggle(e)}} className="form-input adset-count w-input dropdown select2-container select2-selection" readOnly={true} value={`${value.min} - ${value.max}`} />
      </div>
      <OverlayPanel ref={op}  style={{position:"absolute",inset:"0px auto auto 0px",margin:"0px",padding:"15px",border:"medium",backgroundColor:"white",borderRadius:"0.5em",width:"350px",zIndex:"9998",boxShadow:"rgba(0, 0, 0, 0.1) 3px 3px 8px 0px"}}>
        <div className="mt-4">
          <p className="text-sm mb-3 font-medium">Active Adset Amount</p>
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