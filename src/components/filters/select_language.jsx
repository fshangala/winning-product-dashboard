import { useEffect, useRef } from "react"
import useSelect2ChangeHandler from "../../hooks/select2_change_handler"

export default function SelectLanguage({value,onChange=function({value}){}}) {
  const refElem = useRef(null)
  useSelect2ChangeHandler(refElem,onChange)

  useEffect(function(){
    $(refElem.current).select2({
      placeholder:'Select language ...',
      multiple:true,
      allowClear:true,
    })
  },[])

  return (
    <div className="select-wrapper language-select">
      <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">
        Language
        <div className="custom-popup hidden" style={{right:"0px",display:"none",transform:"scale(0.8)"}} >The language of the ad text.</div>
        <div className="inline-block pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
          </svg>
        </div>
      </div>
      <select className="js-select2 form-input select-box-2 pb w-select" ref={refElem}>
        <option value="en">English</option>
        <option value="nl">Dutch</option>
        <option value="de">German</option>
        <option value="no">Norwegian</option>
        <option value="fr">French</option>
        <option value="sv">Swedish</option>
        <option value="da">Danish</option>
        <option value="it">Italian</option>
        <option value="pt">Portuguese</option>
        <option value="es">Spanish</option>
        <option value="fi">Finnish</option>                              
      </select>
    </div>
  )
}