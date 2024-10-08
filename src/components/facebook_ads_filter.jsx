import { useEffect, useState } from "react"
import sortSVG from '../assets/images/sort.svg'
import arrowSVG from '../assets/images/arrow.svg'
import countries from "./countries"


export default function FaceBookAdsFilter({applyFilters=function(filters){},initialized}) {
  const [adsFilters,setAdsFilters] = useState({
    search_term:"dog food",
    keywordIn:"all",
    country:"us",
    website:"shopify",
    language:"english",
    activeAdsets: {
      dropdown_hidden:true,
      minimum:0,
      maximum:100
    },
    adSpend: {
      dropdown_hidden:true,
      minimum:0,
      maximum:100
    },
    sortBy: "consistency",
    sortDirection:"ascending",
    scaling:"no-downscaling",
    mediaType:"videos"
  })

  useEffect(()=>{
    if(!initialized) {
      applyFilters(adsFilters)
    }
  })

  return (
    <div className="ad-filters">
      <div className="container">
        <div className="input-group filter">
          <input type="text" name="search" className="input" placeholder="Search..." onChange={(e)=>{
            setAdsFilters({
              ...adsFilters,
              search_term:e.target.value
            })
          }} />
        </div>
        <div className="input-group filter">
          <label>Search Keyword In</label>
          <select className="input" onChange={(e)=>{
            setAdsFilters({
              ...adsFilters,
              keywordIn:e.target.value
            })
          }}>
            <option value="all">All</option>
            <option value="ad-text">Ad Text</option>
          </select>
        </div>
        <div className="input-group filter">
          <label>Country</label>
          <select className="input" onChange={(e)=>{
            setAdsFilters({
              ...adsFilters,
              country:e.target.value
            })
          }}>
            <option value="ALL">ALL</option>
            {countries.map((value)=>{
              return <option value={value.code}>{value.name}</option>
            })}
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
          <label>Language</label>
          <select className="input" onChange={(e)=>{
            setAdsFilters({
              ...adsFilters,
              language:e.target.value
            })
          }}>
            <option value="english">English</option>
            <option value="french">French</option>
          </select>
        </div>
        <div className="input-group filter">
          <label>Active Adsets</label>
          <div className="dropdown">
            <button type="button" className="input" onClick={()=>{
              setAdsFilters({
                ...adsFilters,
                activeAdsets:{
                  ...adsFilters.activeAdsets,
                  dropdown_hidden:!adsFilters.activeAdsets.dropdown_hidden
                }
              })
            }}>{adsFilters.activeAdsets.minimum} - {adsFilters.activeAdsets.maximum}</button>
            <div className="dropdown-content" hidden={adsFilters.activeAdsets.dropdown_hidden}>
              <div className="input-group">
                <label>Minimum</label>
                <input type="number" className="input" onChange={(e)=>{
                  setAdsFilters({
                    ...adsFilters,
                    activeAdsets: {
                      ...adsFilters.activeAdsets,
                      minimum: e.target.value
                    }
                  })
                }} />
              </div>
              <div className="input-group">
                <label>Maximum</label>
                <input type="number" className="input" onChange={(e)=>{
                  setAdsFilters({
                    ...adsFilters,
                    activeAdsets: {
                      ...adsFilters.activeAdsets,
                      maximum:e.target.value
                    }
                  })
                }} />
              </div>
            </div>
          </div>
        </div>
        <div className="input-group filter">
          <label>Adspend</label>
          <div className="dropdown">
            <button type="button" className="input" onClick={()=>{
              setAdsFilters({
                ...adsFilters,
                adSpend:{
                  ...adsFilters.adSpend,
                  dropdown_hidden:!adsFilters.adSpend.dropdown_hidden
                }
              })
            }}>${adsFilters.adSpend.minimum}- ${adsFilters.adSpend.maximum}</button>
            <div className="dropdown-content" hidden={adsFilters.adSpend.dropdown_hidden}>
              <div className="input-group">
                <label>Minimum</label>
                <input type="number" className="input" onChange={(e)=>{
                  setAdsFilters({
                    ...adsFilters,
                    adSpend: {
                      ...adsFilters.adSpend,
                      minimum: e.target.value
                    }
                  })
                }} />
              </div>
              <div className="input-group">
                <label>Maximum</label>
                <input type="number" className="input" onChange={(e)=>{
                  setAdsFilters({
                    ...adsFilters,
                    adSpend: {
                      ...adsFilters.adSpend,
                      maximum: e.target.value
                    }
                  })
                }} />
              </div>
            </div>
          </div>
        </div>
        <div className="input-group filter">
          <label>Sort By</label>
          <select className="input" onChange={(e)=>{
            setAdsFilters({
              ...adsFilters,
              sortBy:e.target.value
            })
          }}>
            <option value="consistency">Consistency</option>
            <option value="french">French</option>
          </select>
        </div>
        <div className="input-group filter">
          <button className={(adsFilters.sortDirection == "ascending" ? "input active" : "input")} onClick={()=>{
            setAdsFilters({
              ...adsFilters,
              sortDirection:"ascending"
            })
          }}>
            <div className="row">
              <img src={arrowSVG} width="25px" />
              <img src={sortSVG} width="25px" />
            </div>
          </button>
          <button className={(adsFilters.sortDirection == "descending" ? "input active" : "input")} onClick={()=>{
            setAdsFilters({
              ...adsFilters,
              sortDirection:"descending"
            })
          }}>
            <div className="row">
              <img src={arrowSVG} style={{transform: 'scaleY(-1)'}} width="25px" />
              <img src={sortSVG} width="25px" />
            </div>
          </button>
        </div>
        <div className="input-group filter">
          <label>Scaling</label>
          <select className="input" onChange={(e)=>{
            setAdsFilters({
              ...adsFilters,
              scaling:e.target.value
            })
          }}>
            <option value="no-downscaling">No Downscaling</option>
            <option value="up-scaling-only">Up Scaling Only</option>
            <option value="down-scaling-only">Down Scaling Only</option>
          </select>
        </div>
        <div className="input-group filter">
          <label>Media Type</label>
          <select className="input" x-model="mediaType">
            <option value="videos">Videos</option>
            <option value="images">Images</option>
            <option value="carousel">Carousel</option>
          </select>
        </div>
        <div className="input-group filter">
          <label>Page Type</label>
          <select className="input" x-model="pageType">
            <option value="product-pages">Product Pages</option>
            <option value="collection-pages">Collection Pages</option>
            <option value="funnels">Funnels</option>
            <option value="no-funnels">No Funnels</option>
          </select>
        </div>
        <div className="input-group filter">
          <label>Niche</label>
          <select className="input" x-model="niche">
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
          <label>Ad Creation Date</label>
          <input type="date" className="input" x-model="adCreationDate"/>
        </div>
        <div className="input-group filter">
          <label>Last Seen Date</label>
          <input type="date" className="input" x-model="lastSeenDate"/>
        </div>
        <div className="input-group filter">
          <label>Product Creation date</label>
          <input type="date" className="input" x-model="productCreationDate"/>
        </div>
      </div>
      <div className="actions">
        <button className="dropshipping"><img src="https://app.winninghunter.com/images/european-union-flag-on-trophee-circle.png" height={25}/> European Winners</button>
        <button className="dropshipping"><img src="https://app.winninghunter.com/images/usa-flag-with-uk-flag.png" height={25}/> USA (Big 5) Winners</button>
        <button className="dropshipping"><img src="https://app.winninghunter.com/images/drop-shipping.png" height={25}/> Dropship Ads</button>
        <button className="dropshipping"><img src="https://app.winninghunter.com/images/clothes-cool-brand.png" height={25}/> Fashion Dropship</button>
        <button className="dropshipping"><img src="https://app.winninghunter.com/images/award.png" height={25}/> Top Branded</button>
        <div className="state-actions">
          <button className="cancel-btn">Cancel</button>
          <button className='apply-btn' onClick={()=>{applyFilters(adsFilters)}}>Apply</button>
        </div>
      </div>
    </div>
  )
}