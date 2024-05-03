import { useState, useEffect } from 'react'
import facebookLogo from '../assets/images/facebook.svg'
import { supabase } from "../supabase-client"

export default function TiktokAds() {
  const [loadAds,setLoadAds] = useState({
    session:"",
    loading:false,
    ads:[]
  })
  const [alerts,setAlerts] = useState([]);

  const dismissAlert = function(index) {
    var a = alerts.filter(function(value,i,array){
      return index != i
    })
    setAlerts(a)
  }

  useEffect(()=>{
    if (loadAds.ads.length < 1) {
      fetch("http://copiwin.com:8001/tiktok-ads/",{
        method:"get",
      }).then(value => value.json()).then((data)=>{
        if(data.error.code == 'ok') {
          setLoadAds({
            ...loadAds,
            ads:data.data.ads
          })
        }
        console.log(data.data.ads)
      }).catch((reason)=>{
        console.log(reason)
      })
    }
  },[loadAds])

  return (
    <>
    <div className="header-container">
    <div className="header">
      <img src={facebookLogo} alt="facebook" />
      <h1>Search Facebook Ads</h1>
    </div>
    <hr className="divider" />
  </div>
  {(alerts.length > 0) ? (
  <AlertsContainer>
  {alerts.map((value,index,array)=>{
    return <Alert message={value} index={index} dismiss={dismissAlert} />
  })}
  </AlertsContainer>
  ) : null}
  <div>{loadAds.loading ? "Loading ads" : ""}</div>
  <div className="filter-container">
    <div className="input-group filter">
      <input type="text" name="search" className="input" placeholder="Search..." x-model="search" />
    </div>
    <div className="input-group filter">
      <label>Search Keyword In</label>
      <select className="input" x-model="keywordIn">
        <option value="all">All</option>
        <option value="ad-text">Ad Text</option>
      </select>
    </div>
    <div className="input-group filter">
      <label>Country</label>
      <select className="input" x-model="country">
        <option value="usa">USA</option>
        <option value="united-kingdom">United Kingdom</option>
      </select>
    </div>
    <div className="input-group filter">
      <label>Website</label>
      <select className="input" x-model="website">
        <option value="shopify">Shopify</option>
        <option value="xshoppy">XShoppy</option>
      </select>
    </div>
    <div className="input-group filter">
      <label>Language</label>
      <select className="input" x-model="language">
        <option value="english">English</option>
        <option value="french">French</option>
      </select>
    </div>
    <div className="input-group filter" x-data="{openActiveAdsetsSelector:false}">
      <label>Active Adsets</label>
      <div className="dropdown">
        <button type="button" className="input"></button>
        <div className="dropdown-content" x-show="openActiveAdsetsSelector">
          <div className="input-group">
            <label>Minimum</label>
            <input type="number" className="input" x-model="activeAdSetsMin" />
          </div>
          <div className="input-group">
            <label>Maximum</label>
            <input type="number" className="input" x-model="activeAdSetsMax" />
          </div>
        </div>
      </div>
    </div>
    <div className="input-group filter" x-data="{openAdspendSelector:false}">
      <label>Adspend</label>
      <div className="dropdown">
        <button type="button" x-text="adspend()" className="input"></button>
        <div className="dropdown-content" x-show="openAdspendSelector">
          <div className="input-group">
            <label>Minimum</label>
            <input type="number" className="input" x-model="adspendMin" />
          </div>
          <div className="input-group">
            <label>Maximum</label>
            <input type="number" className="input" x-model="adspendMax" />
          </div>
        </div>
      </div>
    </div>
    <div className="input-group filter">
      <label>Sort By</label>
      <select className="input" x-model="sortBy">
        <option value="consistency">Consistency</option>
        <option value="french">French</option>
      </select>
    </div>
    <div className="input-group filter">
      <button className="input" x-bind:className="sortDirection == 'ascending' ? 'active' : ''">
        <div className="row">
          <img src="assets/images/arrow.svg" width="25px" />
          <img src="assets/images/sort.svg" width="25px" />
        </div>
      </button>
      <button className="input" x-bind:className="sortDirection == 'ascending' ? '' : 'active'">
        <div className="row">
          <img src="assets/images/arrow.svg" style={{transform: 'scaleY(-1)'}} width="25px" />
          <img src="assets/images/sort.svg" width="25px" />
        </div>
      </button>
    </div>
    <div className="input-group filter">
      <label>Scaling</label>
      <select className="input" x-model="scaling">
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
    <hr />
    <div>
      <button className='btn'>Apply</button>
    </div>
  </div>
  <div className="ad-container">
    {(loadAds.ads.length > 0) ? 
      loadAds.ads.map((ad) => {
        return (<div className='ad'>
        <div className="ad-top">
          <button className="btn">4</button>
        </div>
        <div className="ad-header">{ad.ad.id}</div>
        <div className="ad-description"></div>
        <video className='ad-video' onClick={(event)=>{event.target.play()}} poster={ad.ad.videos[0].cover_image_url}>
          <source src={ad.ad.videos[0].url} />
        </video>
        <div className="ad-title"></div>
        <div className="ad-details"></div>
        <div className="ad-footer"></div>
      </div>)}) : null
    }
  </div>
  </>
  )
}