import { useEffect, useState } from "react"
import CopiwinSDK from "../copiwinsdk/copiwinsdk"
import { Ad as TiktokAd } from "../components/tiktok_list_ads";
import { Ad as FacebookAd } from "../components/facebook_list_ads";

export default function SavedAds() {
  const copiwinSDK = new CopiwinSDK()
  const [savedAds,setSavedAds] = useState({
    loading:false,
    ads:[]
  })
  
  useEffect(()=>{
    loadSavedAds()
  },[])

  const loadSavedAds = function() {
    setSavedAds({
      loading:true,
      ads:savedAds.ads
    })
    copiwinSDK.savedAds().then((data)=>{
      setSavedAds({
        loading:false,
        ads:data
      })
      console.log(data)
    }).catch((reason)=>{
      setSavedAds({
        loading:false,
        ads:savedAds.ads
      })
      console.log(reason)
    })
  }

  return (
    <>
    <div className="header-container">
      <div className="header">
        <h1>Saved Ads</h1>
      </div>
      <hr className="divider" />
    </div>
    <div className="ad-container">
      {savedAds.ads.map((ad)=>{
        if (ad.source === 'facebook') {
          return <FacebookAd ad={ad.content} />
        }
        
        if (ad.source === 'tiktok') {
          return <TiktokAd ad={ad.content} />
        }

        return <p>Ad source unknown</p>
      })}
    </div>
    </>
  )
}