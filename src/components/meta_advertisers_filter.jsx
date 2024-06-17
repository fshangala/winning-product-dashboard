import { useEffect, useState } from "react"

export default function MetaAdvertisersFilter({applyFilters}) {
  const [adsFilters,setAdsFilters] = useState({
    country:"us",
    website:"shopify",
    niche:"beauty",
    likes: {
      dropdown_hidden:true,
      min:0,
      max:100
    },
    followers: {
      dropdown_hidden:true,
      min:0,
      max:100
    },
    ads: {
      dropdown_hidden:true,
      min:0,
      max:100
    },
    adsets: {
      dropdown_hidden:true,
      min:0,
      max:100
    },
    avgAdsets: {
      dropdown_hidden:true,
      min:0,
      max:100
    }
  })

  useEffect(()=>{
    applyFilters(adsFilters)
  },[])

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
          <option value="us">USA</option>
          <option value="uk">United Kingdom</option>
        </select>
      </div>
      <div className="input-group filter">
        <label>Website</label>
        <select className="input" onChange={(e)=>{
          setAdsFilters({
            ...adsFilters,
            website:e.target.value
          })
        }}>
          <option value="shopify">Shopify</option>
          <option value="xshoppy">XShoppy</option>
        </select>
      </div>
      <div className="input-group filter">
        <label>Niche</label>
        <select className="input" onChange={(e)=>{
          setAdsFilters({
            ...adsFilters,
            niche:e.target.value
          })
        }}>
          <option value="product-pages">Beauty</option>
          <option value="car">car</option>
          <option value="clothing">Clothing</option>
          <option value="clothing-brands">Clothing brands</option>
          <option value="children">Children</option>
          <option value="general">Genral</option>
          <option value="home">Home</option>
          <option value="pets">Pets</option>
        </select>
      </div>
      <div className="input-group filter">
        <label>Likes</label>
        <div className="dropdown">
          <button type="button" className="input" onClick={()=>{
            setAdsFilters({
              ...adsFilters,
              likes:{
                ...adsFilters.likes,
                dropdown_hidden:!adsFilters.likes.dropdown_hidden
              }
            })
          }}>{adsFilters.likes.min} - {adsFilters.likes.max}</button>
          <div className="dropdown-content" hidden={adsFilters.likes.dropdown_hidden}>
            <div className="input-group">
              <label>Min</label>
              <input type="number" className="input" value={adsFilters.likes.min} onChange={(e)=>{
                setAdsFilters({
                  ...adsFilters,
                  likes: {
                    ...adsFilters.likes,
                    min: e.target.value
                  }
                })
              }} />
            </div>
            <div className="input-group">
              <label>Max</label>
              <input type="number" className="input" value={adsFilters.likes.max} onChange={(e)=>{
                setAdsFilters({
                  ...adsFilters,
                  likes: {
                    ...adsFilters.likes,
                    max: e.target.value
                  }
                })
              }} />
            </div>
          </div>
        </div>
      </div>
      <div className="input-group filter">
        <label>Followers</label>
        <div className="dropdown">
          <button type="button" className="input" onClick={()=>{
            setAdsFilters({
              ...adsFilters,
              followers:{
                ...adsFilters.followers,
                dropdown_hidden:!adsFilters.followers.dropdown_hidden
              }
            })
          }}>{adsFilters.followers.min} - {adsFilters.followers.max}</button>
          <div className="dropdown-content" hidden={adsFilters.followers.dropdown_hidden}>
            <div className="input-group">
              <label>Min</label>
              <input type="number" className="input" value={adsFilters.followers.min} onChange={(e)=>{
                setAdsFilters({
                  ...adsFilters,
                  followers: {
                    ...adsFilters.followers,
                    min: e.target.value
                  }
                })
              }} />
            </div>
            <div className="input-group">
              <label>Max</label>
              <input type="number" className="input" value={adsFilters.followers.max} onChange={(e)=>{
                setAdsFilters({
                  ...adsFilters,
                  followers: {
                    ...adsFilters.followers,
                    max: e.target.value
                  }
                })
              }} />
            </div>
          </div>
        </div>
      </div>
      <div className="input-group filter">
        <label>Adsets</label>
        <div className="dropdown">
          <button type="button" className="input" onClick={()=>{
            setAdsFilters({
              ...adsFilters,
              ads:{
                ...adsFilters.ads,
                dropdown_hidden:!adsFilters.ads.dropdown_hidden
              }
            })
          }}>{adsFilters.ads.min} - {adsFilters.ads.max}</button>
          <div className="dropdown-content" hidden={adsFilters.ads.dropdown_hidden}>
            <div className="input-group">
              <label>Min</label>
              <input type="number" className="input" value={adsFilters.ads.min} onChange={(e)=>{
                setAdsFilters({
                  ...adsFilters,
                  ads: {
                    ...adsFilters.ads,
                    min: e.target.value
                  }
                })
              }} />
            </div>
            <div className="input-group">
              <label>Max</label>
              <input type="number" className="input" value={adsFilters.ads.max} onChange={(e)=>{
                setAdsFilters({
                  ...adsFilters,
                  ads: {
                    ...adsFilters.ads,
                    max: e.target.value
                  }
                })
              }} />
            </div>
          </div>
        </div>
      </div>
      <div className="input-group filter">
        <label>Adsets</label>
        <div className="dropdown">
          <button type="button" className="input" onClick={()=>{
            setAdsFilters({
              ...adsFilters,
              adsets:{
                ...adsFilters.adsets,
                dropdown_hidden:!adsFilters.adsets.dropdown_hidden
              }
            })
          }}>{adsFilters.adsets.min} - {adsFilters.adsets.max}</button>
          <div className="dropdown-content" hidden={adsFilters.adsets.dropdown_hidden}>
            <div className="input-group">
              <label>Min</label>
              <input type="number" className="input" value={adsFilters.adsets.min} onChange={(e)=>{
                setAdsFilters({
                  ...adsFilters,
                  adsets: {
                    ...adsFilters.adsets,
                    min: e.target.value
                  }
                })
              }} />
            </div>
            <div className="input-group">
              <label>Max</label>
              <input type="number" className="input" value={adsFilters.adsets.max} onChange={(e)=>{
                setAdsFilters({
                  ...adsFilters,
                  adsets: {
                    ...adsFilters.adsets,
                    max: e.target.value
                  }
                })
              }} />
            </div>
          </div>
        </div>
      </div>
      <div className="input-group filter">
        <label>Avg. Adsets Per Ad</label>
        <div className="dropdown">
          <button type="button" className="input" onClick={()=>{
            setAdsFilters({
              ...adsFilters,
              avgAdsets:{
                ...adsFilters.avgAdsets,
                dropdown_hidden:!adsFilters.avgAdsets.dropdown_hidden
              }
            })
          }}>{adsFilters.avgAdsets.min} - {adsFilters.avgAdsets.max}</button>
          <div className="dropdown-content" hidden={adsFilters.avgAdsets.dropdown_hidden}>
            <div className="input-group">
              <label>Min</label>
              <input type="number" className="input" value={adsFilters.avgAdsets.min} onChange={(e)=>{
                setAdsFilters({
                  ...adsFilters,
                  avgAdsets: {
                    ...adsFilters.avgAdsets,
                    min: e.target.value
                  }
                })
              }} />
            </div>
            <div className="input-group">
              <label>Max</label>
              <input type="number" className="input" value={adsFilters.avgAdsets.max} onChange={(e)=>{
                setAdsFilters({
                  ...adsFilters,
                  avgAdsets: {
                    ...adsFilters.avgAdsets,
                    max: e.target.value
                  }
                })
              }} />
            </div>
          </div>
        </div>
      </div>
      <div className="input-group">
        <button className="input" onClick={()=>{
          applyFilters(adsFilters)
        }}>Apply</button>
      </div>
    </div>
  )
}