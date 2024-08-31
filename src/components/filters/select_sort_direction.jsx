import { useEffect, useRef } from "react"

export default function SelectSortDirection({value="desc",onChange=function({value}){}}) {
  const ascRef = useRef(null)
  const desRef = useRef(null)

  useEffect(function(){
    if (ascRef.current !== null && desRef.current !== null) {
      if(value === "desc") {
        ascRef.current.classList.remove("active")
        desRef.current.classList.add("active")
      } else if (value === "asc") {
        ascRef.current.classList.add("active")
        desRef.current.classList.remove("active")
      }
    }
  })

  return (
    <div className="">
      <div onClick={function(){onChange({value:"asc"})}} ref={ascRef} className="form-input  select2-selection sortingdirection no-before" direction="asc" style={{position:"relative"}} >
        <img src="https://app.winninghunter.com/images/sort-up.png" width="25px" height="25px" className="arrow-image-direction has-popup" />
        <div className="custom-popup hidden" style={{display:"none"}} >Sort from low to high.</div>
      </div>
      <div onClick={function(){onChange({value:"desc"})}} ref={desRef} className="form-input select2-selection sortingdirection no-before active" direction="desc" style={{position:"relative"}}>
        <img src="https://app.winninghunter.com/images/sort-down.png" width="25px" height="25px" className="arrow-image-direction has-popup" />
        <div className="custom-popup hidden" style={{display:"none"}}>Sort from high to low.</div>
      </div>
      <input type="hidden" className="sort-direction" value={value} />
    </div>
  )
}