import { useEffect, useState } from "react"
import cameraImage from "../assets/images/camera.png"
import MagicAIFilter from "../components/magic_ai_filter"
import CopiwinSDK from "../copiwinsdk/copiwinsdk"
import { RotatingLines } from "react-loader-spinner"


export default function MagicAI({}) {
  const [search,setSearch] = useState("")
  const [loading,setLoading] = useState(false)
  const [ads,setAds] = useState({
    loading:false,
    facebook:[],
    tiktok:[]
  })
  const copiwinSDK = new CopiwinSDK()

  useEffect(()=>{
    console.log(ads)
  })

  const startSearch = function({search_term}) {
    setAds({
      ...ads,
      loading:true
    })
    copiwinSDK.magicAI({search_term:search_term}).then((data)=>{
      setAds({
        loading:false,
        facebook:data.facebook.data,
        tiktok:data.tiktok.data.ads
      })
    }).catch((reason)=>{
      setAds({
        ...ads,
        loading:false
      })
      console.log(reason)
    })
  }

  return (
    <>
    <div className="magic-header">
      <div className="top-section">
        <button className="btn">Watch Tutorial</button>
      </div>
      <h1 className="title">Magic AI Search</h1>
      <div className="search-section">
        <input type="search" className="search-input" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Enter AI search prompt here" />
        <button className="search-btn" onClick={(e)=>{
          startSearch({search_term:search})
        }} >Search</button>
        <button className="file-input-btn"><img src={cameraImage} /></button>
      </div>
    </div>
    <MagicAIFilter />
    <RotatingLines visible={ads.loading} />
    </>
  )
}