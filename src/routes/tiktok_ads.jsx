import { useState, useEffect } from 'react'
import tiktokLogo from '../assets/images/tiktok.svg'
import { supabase } from "../supabase-client"
import TiktokAdsFilter from '../components/tiktok_ads_filter'

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
      fetch("http://copiwin.com:8001/tiktok-ads/?search_term=coffee",{
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

  const applyFilters = (filters)=>{
    setLoadAds({
      ...loadAds,
      loading:true,
    })
    fetch(`http://copiwin.com:8001/tiktok-ads/?search_term=${filters.search}`,{
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
    }).finally(()=>{
      setLoadAds({
        ...loadAds,
        loading:false,
      })
    })
  }

  return (
    <>
    <div className="header-container">
    <div className="header">
      <img src={tiktokLogo} alt="tiktok" />
      <h1>Search Tiktok Ads</h1>
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
  <TiktokAdsFilter applyFilters={applyFilters} />
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