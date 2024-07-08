import { useState, useEffect, useContext } from 'react'
import tiktokLogo from '../assets/images/tiktok.svg'
import TiktokAdsFilter from '../components/tiktok_ads_filter'
import TiktokListAds from '../components/tiktok_list_ads'
import {AlertsContainer, Alert} from '../components/alert'
import CopiwinSDK from '../copiwinsdk/copiwinsdk'
import { UserContext } from '../context/UserContext'

export default function TiktokAds() {
  const [loadAds,setLoadAds] = useState({
    loading:false,
    ads:[]
  })
  const [alerts,setAlerts] = useState([]);
  const copiwinSDK = new CopiwinSDK()
  const user = useContext(UserContext)
  const [initialized,setInitialized] = useState(false)

  const dismissAlert = function(index) {
    var a = alerts.filter(function(value,i,array){
      return index != i
    })
    setAlerts(a)
  }

  const applyFilters = (filters)=>{
    if(user) {
      setLoadAds({
        loading:true,
        ads:loadAds.ads
      })
      setInitialized(true)
      copiwinSDK.tiktokAds({...filters,access_token:user.access_token}).then((data)=>{
        if(data.error.code == 'ok') {
          setLoadAds({
            ads:data.data.ads,
            loading:false,
          })
        } else {
          console.log(data)
          setLoadAds({
            loading:false,
            ads:loadAds.ads
          })
        }
      }).catch((reason)=>{
        console.log(reason)
        setLoadAds({
          loading:false,
          ads:loadAds.ads
        })
      })
    }
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
  <TiktokAdsFilter applyFilters={applyFilters} initialized={initialized} />
  <TiktokListAds ads={loadAds.ads} loading={loadAds.loading} />
  </>
  )
}