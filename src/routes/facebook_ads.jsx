import { useState, useEffect } from 'react'
import facebookLogo from '../assets/images/facebook.svg'
import { supabase } from "../supabase-client"
import { Alert, AlertsContainer } from '../components/alert'
import FastAPISDK from '../copiwinsdk/fastapisdk'
import FaceBookAdsFilter from '../components/facebook_ads_filter'
import FacebookListAds from '../components/facebook_list_ads'
import CopiwinSDK from '../copiwinsdk/copiwinsdk'

export default function FacebookAds() {
  const [loadAds,setLoadAds] = useState({
    loading:false,
    ads:[]
  })
  const [alerts,setAlerts] = useState([])
  const copiwinSDK = new CopiwinSDK()

  const dismissAlert = function(index) {
    var a = alerts.filter(function(value,i,array){
      return index != i
    })
    setAlerts(a)
  }

  const applyFilters = function(filters) {
    setLoadAds({
      loading: true,
      ads:loadAds.ads,
    })
    copiwinSDK.facebookAds(filters).then((data)=>{
      setLoadAds({
        loading:false,
        ads:data.data,
      })
    }).catch((reason)=>{
      alerts.push(reason.toString())
      setAlerts(alerts)
      setLoadAds({
        loading:false,
        ads:loadAds.ads,
      })
    })
  }

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
    return <Alert message={value} key={index} index={index} dismiss={dismissAlert} />
  })}
  </AlertsContainer>
  ) : null}
  <div>{loadAds.loading ? "Loading ads" : ""}</div>
  <FaceBookAdsFilter applyFilters={applyFilters} />
  <FacebookListAds ads={loadAds.ads} />
  </>
  )
}