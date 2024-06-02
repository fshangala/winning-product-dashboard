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

  useEffect(()=>{
    setLoadAds({
      loading:loadAds.loading,
      ads:[
        {
          id:123456,
          display_format:"video",
          title:"Ottieni un tuo negozio \ud83d\udc49",
          link_url:"https:\/\/ecommercebrand.net\/inizia-adesso",
          video_url:"https:\/\/scontent.flun3-1.fna.fbcdn.net\/v\/t42.1790-2\/435550444_844646174089476_7552876420705272671_n.mp4?_nc_cat=106&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeH0XQQSt6ft4d1I5j4ePSxs3UATyo3e5uHdQBPKjd7m4Ycr3zZ5zzcXtwqnusiw2eZZy07e58Ch0OJulV5S3npd&_nc_ohc=MbhGEgiwzeoQ7kNvgGyG6b5&_nc_ht=scontent.flun3-1.fna&oh=00_AYDQm9g25vDhGDY2X3ww_beTM9S2pGGQvte5iD8Jhanmug&oe=66621650",
          video_preview_url:"https:\/\/scontent.flun3-1.fna.fbcdn.net\/v\/t39.35426-6\/434928080_338803975851026_3135778953681922204_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeHE59OBMOnFQHHroLW8rrFxCG5ryLHbpQoIbmvIsdulCt-hxNIvCi0nf7XgOSXIqeoRIEz9UHe49Bf6KtywFu1P&_nc_ohc=xeNoNccISZUQ7kNvgHkaJwc&_nc_ht=scontent.flun3-1.fna&oh=00_AYBVyAzfKsPiC1B0AMRKpvPdnAGU4mznGt56YT160TbbVA&oe=66620527",
          page_name:"Prometheus Advertising",
          page_profile_picture_url:"https:\/\/scontent.flun3-1.fna.fbcdn.net\/v\/t39.35426-6\/434961386_723305099689869_4066858762986370367_n.jpg?stp=dst-jpg_s60x60&_nc_cat=106&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeFgUDkwG5uRvSXFJlWm-oa0BWROkC5_ecwFZE6QLn95zOkQsz7XQrBRNiSsnx7bd7g45SLk_7c-grZGUQSZgPYE&_nc_ohc=k4Ud6M-2t6AQ7kNvgHu3RBh&_nc_ht=scontent.flun3-1.fna&oh=00_AYDN-I7eva0lVkwGsCyRynab8kWX_0C7EMQzo9ulAFmi9w&oe=6662104D",
        }
      ]
    })
  },[])

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