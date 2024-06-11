import { useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner";

export function Ad({ad}) {
  let playing = false;

  return (
    <div className='ad'>
      <div className="ad-top">
        <button className="btn">4</button>
      </div>
      <div className="ad-header">
        <span>Creative</span>
      </div>
      {(ad.ad_spend)?(
      <div className="ad-revenue">
        <div className="container">
          <div className="column">
            <div className="row spend">Spend: ${ad.ad_spend}</div>
            <div className="row reach">Reach: {ad.eu_total_reach}</div>
          </div>
          <div className="column">
            <div className="row revenue">Revenue: ${ad.ad_revenue} </div>
          </div>
        </div>
      </div>
      ):null}
      <div className="ad-title">{ad.link_title}</div>
      {(ad.display_format == "image") ? (
        <img src={ad.original_image_url} className="ad-image" />
      ) : null}
      {(ad.display_format == "video" || ad.display_format == "dco") ? (
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
      <div className="ad-advertiser">
        <div className="container">
          <a href={ad.link_url} className="link">
            <img src={ad.page_profile_picture_url} alt={ad.page_profile_picture_url} className="avatar" />
            <span className="description">{ad.page_name}</span>
          </a>
        </div>
        <hr/>
      </div>
      <div className="ad-footer">
        <div className="ad-link">
          <a href={ad.link_url} className="link">{ad.link_title}</a>
        </div>
        <div className="ad-actions">
          <a className="action-button" href={ad.link_url}>Learn More</a>
        </div>
      </div>
      <div className="ad-details">
        {ad.target_locations?(
          <p>Countries: {ad.target_locations.map((loc)=>{return loc.name+" "})}</p>
        ):null}
        <p>Platforms: {ad.publisher_platforms.join(", ")}</p>
        <p>Started: {ad.ad_delivery_start_time}</p>
      </div>
    </div>
  )
}

export default function FacebookListAds({ads,loading}) {
  useEffect(()=>{
    console.log(ads)
  })
  return (
    <>
    <center className="loading-container">
      <RotatingLines visible={loading} />
    </center>
    <div className="ad-container">
      {(ads.length > 0) ? 
        ads.map((ad) => {
          return (<Ad key={ad.id} ad={ad} />)}) : null
      }
    </div>
    </>
  )
}