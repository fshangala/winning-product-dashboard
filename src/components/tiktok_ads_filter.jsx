import { useEffect, useState } from "react"
import sortSVG from '../assets/images/sort.svg'
import arrowSVG from '../assets/images/arrow.svg'
import heartOutline from "../assets/images/heart-outline.png"

export default function TiktokAdsFilter({applyFilters=function(filters){},initialized}) {
  const [adsFilters,setAdsFilters] = useState({
    search_term:"dog food",
    keywordIn:"all",
    country:"usa",
    language:"english",
    website:"shopify",
    totalLikes:{
      dropdown_hidden:true,
      minimum:1,
      maximum:9000
    },
    totalComments:{
      dropdown_hidden:true,
      minimum:1,
      maximum:9000
    },
    totalShares:{
      dropdown_hidden:true,
      minimum:1,
      maximum:9000
    },
    sortBy: "consistency",
    sortDirection:"ascending",
    pageType:"product-pages",
    niche:"beauty",
    scaling:"no-downscaling",
    lastSeen:{
      dropdown_hidden:true,
      minimum:Date.now(),
      maximum:Date.now()
    },
    productCreationDate:Date.now(),
  })

  useEffect(()=>{
    if(!initialized){
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
            <option value="usa">USA</option>
            <option value="united-kingdom">United Kingdom</option>
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
          <label>Total Likes</label>
          <div className="dropdown">
            <button type="button" className="input" onClick={()=>{
              setAdsFilters({
                ...adsFilters,
                totalLikes:{
                  ...adsFilters.totalLikes,
                  dropdown_hidden:!adsFilters.totalLikes.dropdown_hidden
                }
              })
            }}>{adsFilters.totalLikes.minimum} - {adsFilters.totalLikes.maximum}</button>
            <div className="dropdown-content" hidden={adsFilters.totalLikes.dropdown_hidden}>
              <div className="input-group">
                <label>Minimum</label>
                <input type="number" className="input" onChange={(e)=>{
                  setAdsFilters({
                    ...adsFilters,
                    totalLikes: {
                      ...adsFilters.totalLikes,
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
          <label>Total Comments</label>
          <div className="dropdown">
            <button type="button" className="input" onClick={()=>{
              setAdsFilters({
                ...adsFilters,
                totalComments:{
                  ...adsFilters.totalComments,
                  dropdown_hidden:!adsFilters.totalComments.dropdown_hidden
                }
              })
            }}>{adsFilters.totalComments.minimum}- {adsFilters.totalComments.maximum}</button>
            <div className="dropdown-content" hidden={adsFilters.totalComments.dropdown_hidden}>
              <div className="input-group">
                <label>Minimum</label>
                <input type="number" className="input" onChange={(e)=>{
                  setAdsFilters({
                    ...adsFilters,
                    totalComments: {
                      ...adsFilters.totalComments,
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
                    totalComments: {
                      ...adsFilters.totalComments,
                      maximum: e.target.value
                    }
                  })
                }} />
              </div>
            </div>
          </div>
        </div>
        <div className="input-group filter">
          <label>Total Shares</label>
          <div className="dropdown">
            <button type="button" className="input" onClick={()=>{
              setAdsFilters({
                ...adsFilters,
                totalShares:{
                  ...adsFilters.totalShares,
                  dropdown_hidden:!adsFilters.totalShares.dropdown_hidden
                }
              })
            }}>{adsFilters.totalShares.minimum}- {adsFilters.totalShares.maximum}</button>
            <div className="dropdown-content" hidden={adsFilters.totalShares.dropdown_hidden}>
              <div className="input-group">
                <label>Minimum</label>
                <input type="number" className="input" onChange={(e)=>{
                  setAdsFilters({
                    ...adsFilters,
                    totalShares: {
                      ...adsFilters.totalShares,
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
                    totalShares: {
                      ...adsFilters.totalShares,
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
          <label>Page Type</label>
          <select className="input" onChange={(e)=>{
            setAdsFilters({
              ...adsFilters,
              pageType:e.target.value
            })
          }}>
            <option value="product-pages">Product Pages</option>
            <option value="collection-pages">Collection Pages</option>
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
            <option value="beauty">Beauty</option>
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
          <label>Last Seen</label>
          <div className="dropdown">
            <button type="button" className="input" onClick={()=>{
              setAdsFilters({
                ...adsFilters,
                lastSeen:{
                  ...adsFilters.lastSeen,
                  dropdown_hidden:!adsFilters.lastSeen.dropdown_hidden
                }
              })
            }}>{adsFilters.lastSeen.minimum} - {adsFilters.lastSeen.maximum}</button>
            <div className="dropdown-content" hidden={adsFilters.lastSeen.dropdown_hidden}>
              <div className="input-group">
                <label>Minimum</label>
                <input type="date" className="input" onChange={(e)=>{
                  setAdsFilters({
                    ...adsFilters,
                    lastSeen: {
                      ...adsFilters.lastSeen,
                      minimum: e.target.value
                    }
                  })
                }} />
              </div>
              <div className="input-group">
                <label>Maximum</label>
                <input type="date" className="input" onChange={(e)=>{
                  setAdsFilters({
                    ...adsFilters,
                    lastSeen: {
                      ...adsFilters.lastSeen,
                      maximum:e.target.value
                    }
                  })
                }} />
              </div>
            </div>
          </div>
        </div>
        <div className="input-group filter">
          <label>Product Creation date</label>
          <input type="date" className="input" onChange={(e)=>{
            setAdsFilters({
              ...adsFilters,
              productCreationDate:e.target.value
            })
          }}/>
        </div>
        <div className="input-group filter">
          <button className="save-search-btn">
            <img src={heartOutline} width={32} />
          </button>
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