import { useEffect, useState } from "react"
import countries from "./countries"

export default function MagicAIFilter({applyFilters=function(filters){}}) {
  const [adsFilters,setAdsFilters] = useState({
    country:"us",
    adCreationDate:Date.now(),
    lastSeen:Date.now(),
  })

  useEffect(()=>{
    applyFilters(adsFilters)
  })

  return (
    <div className="filter-container">
      <div className="input-group filter">
        <label>Country</label>
        <select className="input" onChange={(e)=>{
          setAdsFilters({
            ...adsFilters,
            country:e.target.value
          })
        }}>
        {countries.map((value)=>{
          return <option value={value.code}>{value.name}</option>
        })}
        </select>
      </div>
      <div className="input-group filter">
        <label>Ad Creation date</label>
        <input type="date" className="input" onChange={(e)=>{
          setAdsFilters({
            ...adsFilters,
            adCreationDate:e.target.value
          })
        }}/>
      </div>
      <div className="input-group filter">
        <label>Las seen date</label>
        <input type="date" className="input" onChange={(e)=>{
          setAdsFilters({
            ...adsFilters,
            lastSeen:e.target.value
          })
        }}/>
      </div>
    </div>
  )
}