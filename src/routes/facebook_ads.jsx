import { useState, useEffect, useContext } from 'react'
import facebookLogo from '../assets/images/facebook.svg'
import { Alert, AlertsContainer } from '../components/alert'
import FaceBookAdsFilter from '../components/facebook_ads_filter'
import FacebookListAds from '../components/facebook_list_ads'
import CopiwinSDK from '../copiwinsdk/copiwinsdk'
import { UserContext } from '../context/UserContext'
import PageHeader from "../components/page_header"
import FacebookAd from "../templates/facebook_ad"
import FacebookFilters from '../templates/facebook_filters'

export default function FacebookAds() {
  const user = useContext(UserContext)
  const [loadAds,setLoadAds] = useState({
    loading:false,
    ads:[]
  })
  const [alerts,setAlerts] = useState([])
  const [initialized,setInitialized] = useState(false)
  const copiwinSDK = new CopiwinSDK()

  // const dismissAlert = function(index) {
  //   var a = alerts.filter(function(value,i,array){
  //     return index != i
  //   })
  //   setAlerts(a)
  // }

  const applyFilters = function(filters) {
    console.log(filters,user)
    if(user) {
      setLoadAds({
        loading: true,
        ads:loadAds.ads,
      })
      setInitialized(true)
      copiwinSDK.facebookAds({...filters,access_token:user.access_token}).then((data)=>{
        if ('data' in data) {
          setLoadAds({
            loading:false,
            ads:data.data,
          })
        }
        console.log(data)
      }).catch((reason)=>{
        alerts.push(reason.toString())
        setAlerts(alerts)
        setLoadAds({
          loading:false,
          ads:loadAds.ads,
        })
      })
    }
  }

  return (
    <>
    <div>
      <div className="margin-bottom margin-xlarge">
        <div>
          <PageHeader />
          <hr />
          <FacebookFilters applyFilters={applyFilters} />
        </div>
      </div>
      <div className="add_list relative" data-wg-notranslate="">
        {loadAds.ads.map((ad)=>{
          return <FacebookAd key={ad.id} ad={ad} />
        })}
      </div>
    </div>
    </>
  )

  // return (
  //   <>
  //   <div className="header-container">
  //   <div className="header">
  //     <img src={facebookLogo} alt="facebook" />
  //     <h1>Search Facebook Ads</h1>
  //   </div>
  //   <hr className="divider" />
  // </div>
  // {(alerts.length > 0) ? (
  // <AlertsContainer>
  // {alerts.map((value,index,array)=>{
  //   return <Alert message={value} key={index} index={index} dismiss={dismissAlert} />
  // })}
  // </AlertsContainer>
  // ) : null}
  // <FaceBookAdsFilter applyFilters={applyFilters} initialized={initialized} />
  // <FacebookListAds ads={loadAds.ads} loading={loadAds.loading} />
  // </>
  // )
}