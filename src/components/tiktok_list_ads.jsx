import { useEffect, useState } from "react"

export function Ad({ad}) {
  let playing = false;

  return (
    <div className='ad'>
      <div className="ad-top">
        <button className="btn">4</button>
      </div>
      <div className="ad-header">{ad.ad.id}</div>
      <div className="ad-description"></div>
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
      <div className="ad-title"></div>
      <div className="ad-details"></div>
      <div className="ad-footer"></div>
    </div>
  )
}

export default function TiktokListAds({ads}) {
  return (
    <div className="ad-container">
      {
        ads.map((ad) => {
          return (<Ad ad={ad} />)})
      }
    </div>
  )
}