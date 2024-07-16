import { useState, useEffect, useContext } from 'react'
import tiktokLogo from '../assets/images/tiktok.svg'
import TiktokAdsFilter from '../components/tiktok_ads_filter'
import TiktokListAds from '../components/tiktok_list_ads'
import {AlertsContainer, Alert} from '../components/alert'
import CopiwinSDK from '../copiwinsdk/copiwinsdk'
import { UserContext } from '../context/UserContext'
import TiktokHeader from '../templates/tiktok_header'
import FacebookFilters from '../templates/facebook_filters'
import FacebookAd from '../templates/facebook_ad'
import TiktokFilters from '../templates/tiktok_filters'
import TiktokAd from '../templates/tiktok_ad'

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
    console.log(filters,user)
    if(user) {
      setLoadAds({
        loading:true,
        ads:loadAds.ads
      })
      setInitialized(true)
      copiwinSDK.tiktokAds({...filters,access_token:user.access_token}).then((data)=>{
        if(data.error.code == 'ok') {
          console.log(data.data.ads)
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
    <div>
      <div className="margin-bottom margin-xlarge">
        <div>
          <TiktokHeader />
          <hr />
          <TiktokFilters applyFilters={applyFilters} />
        </div>
      </div>
      <div className="add_list relative" data-wg-notranslate="">
        {loadAds.ads.map((ad)=>{
          return <TiktokAd key={ad.id} ad={ad} />
        })}
      </div>
    </div>
    </>
  )

  // return (
  //   <>
  //   <div className="header-container">
  //   <div className="header">
  //     <img src={tiktokLogo} alt="tiktok" />
  //     <h1>Search Tiktok Ads</h1>
  //   </div>
  //   <hr className="divider" />
  // </div>
  // <AlertsContainer>
  // {alerts.map((value,index,array)=>{
  //   return <Alert message={value} index={index} dismiss={dismissAlert} />
  // })}
  // </AlertsContainer>
  // <TiktokAdsFilter applyFilters={applyFilters} initialized={initialized} />
  // <TiktokListAds ads={loadAds.ads} loading={loadAds.loading} />
  // </>
  // )
}