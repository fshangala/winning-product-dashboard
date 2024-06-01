import { useEffect, useState } from "react"

export function Ad({ad}) {
  let playing = false;

  return (
    <div className='ad'>
      <div className="ad-top">
        <button className="btn">4</button>
      </div>
      <div className="ad-header"></div>
      <div className="ad-description"></div>
      {(ad.display_format == "image") ? (
        <img src={ad.original_image_url} className="ad-image" />
      ) : null}
      {(ad.display_format == "video") ? (
        <video className='ad-video' onClick={(event)=>{
          if(playing) {
            playing = false
            event.target.pause()
          } else {
            playing = true
            event.target.play()
          }
        }}>
          <source src={ad.video_url} />
        </video>
      ) : null}
      <div className="ad-title"></div>
      <div className="ad-details"></div>
      <div className="ad-footer"></div>
    </div>
  )
}

export default function FacebookListAds({ads}) {
  return (
    <div className="ad-container">
      {(ads.length > 0) ? 
        ads.map((ad) => {
          return (<Ad key={ad.id} ad={ad} />)}) : null
      }
    </div>
  )
}