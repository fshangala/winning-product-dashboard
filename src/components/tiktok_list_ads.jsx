import { useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner";

export function Ad({ad}) {
  let playing = false;

  return (
    <div className='ad'>
      <div className="ad-top">
        <button className="btn">4</button>
      </div>
      <div className="ad-header">{ad.ad.id}</div>
      <div className="ad-revenue">
        <div className="container">
          <div className="column">
            <div className="row spend">Spend: $0.0</div>
            <div className="row reach">Reach: {ad.ad.reach.unique_users_seen}</div>
          </div>
          <div className="column">
            <div className="row revenue">Revenue: $0.0 </div>
          </div>
        </div>
      </div>
      <div className="ad-description"></div>
      {(ad.ad.videos.length > 0)?(
      <video id={ad.ad.id} className='ad-video' onClick={(event)=>{
        if(playing) {
          playing = false
          event.target.pause()
        } else {
          playing = true
          event.target.play()
        }
      }} poster={ad.ad.videos[0].cover_image_url}>
        <source src={ad.ad.videos[0].url} />
      </video>
      ):null}
      <div className="ad-title"></div>
      <div className="ad-details"></div>
      <div className="ad-footer"></div>
    </div>
  )
}

export default function TiktokListAds({ads,loading}) {
  useEffect(()=>{
    console.log(ads)
  })
  return (
    <>
    <center className="loading-container">
      <RotatingLines visible={loading} />
    </center>
    <div className="ad-container">
      {
        ads.map((ad) => {
          return (<Ad ad={ad} />)})
      }
    </div>
    </>
  )
}