import { useState, useEffect } from 'react'
import tiktokLogo from '../assets/images/tiktok.svg'
import { supabase } from "../supabase-client"
import TiktokAdsFilter from '../components/tiktok_ads_filter'
import TiktokListAds from '../components/tiktok_list_ads'
import {AlertsContainer} from '../components/alert'

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
          ads:data.data.ads,
          loading:false
        })
      }
    }).catch((reason)=>{
      console.log(reason)
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
  <AlertsContainer>
  {alerts.map((value,index,array)=>{
    return <Alert message={value} index={index} dismiss={dismissAlert} />
  })}
  </AlertsContainer>
  <div>{loadAds.loading ? "Loading ads" : ""}</div>
  <TiktokAdsFilter applyFilters={applyFilters} />
  <TiktokListAds ads={loadAds.ads} />
  </>
  )
}