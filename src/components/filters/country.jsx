import { useEffect, useRef } from "react"

export default function SelectCountry({value="",onChange=function({value}){}}) {
  const refElem = useRef(null)

  function updateValue(valueList) {
    let result = valueList.map((item) => item.id).join(",")
    onChange({value:result})
  }

  useEffect(function(){
    function handleChange(e) {
      updateValue($(refElem.current).select2("data"))
    }

    let elem = $(refElem.current).select2({
      placeholder:'Select countries',
      multiple:true,
      allowClear:true,
    })
    updateValue($(refElem.current).select2("data"))

    elem.on("change",handleChange)

    return function(){
      elem.off("change",handleChange)
    }
  },[])

  return (
    <div className="select-wrapper">
      <div className="select-label">Countries</div>
      <select className="js-select2 form-input select-box-2 pb w-select" ref={refElem} value={value} onChange={function(e){}}>
        <option value="US" data-badge="">USA</option>
        <option value="GB" data-badge="">United Kingdom</option>
        <option value="DK" data-badge="">Denmark</option>
        <option value="NL" data-badge="">The Netherlands</option>
        <option value="IE" data-badge="">Ireland</option>
        <option value="NO" data-badge="">Norway</option>
        <option value="SE" data-badge="">Sweden</option>
        <option value="FR" data-badge="">France</option>
        <option value="DE" data-badge="">Germany</option>
        <option value="IT" data-badge="">Italy</option>
        <option value="CA" data-badge="">Canada</option>
        <option value="NZ" data-badge="">New Zealand</option>
        <option value="AU" data-badge="">Australia</option>
        <option value="BR" data-badge="">Brazil</option>
        <option value="AT" data-badge="">Austria</option>
        <option value="ES" data-badge="">Spain</option>
        <option value="FI" data-badge="">Finland</option>
      </select>
    </div>
  )
}