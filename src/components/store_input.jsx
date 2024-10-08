import { useState } from "react"

export default function StoreInput({addStore = function(){}}) {
  const [storeUrl,setStoreUrl] = useState("")

  return (
    <div className="store-input-group">
      <input value={storeUrl} type="url" onChange={(e)=>{
        setStoreUrl(e.target.value)
      }} className="store-input" />
      <button disabled={storeUrl === ""} onClick={()=>{
        addStore(storeUrl)
      }} type="submit" className="store-submit">Start Tracking</button>
      <span className="store-count">Stores 1/25</span>
    </div>
  )
}