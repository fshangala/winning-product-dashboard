import { useState } from "react"

export default function Dropdown({children}) {
  const [hidden,setHidden] = useState(true)
  return (
    <div className="dropdown">
      <button type="button" className="dropdown-btn" onClick={()=>{
        setHidden(!hidden)
      }}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </button>
      <div className="dropdown-content" hidden={hidden}>
        {children}
      </div>
    </div>
  )
}