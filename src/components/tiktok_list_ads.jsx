import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import bitmap3Image from "../assets/images/bitmap3.png";

export function Ad({ad}) {
  let playing = false;

  return (
    <div className='ad'>
      <div className="ad-top">
        <button className="btn">1</button>
      </div>
      <div className="ad-header">
        <div className="ad-adsets">
          <span className="ad-adsetCount">1 Adsets</span>
          <span> use this creative</span>
        </div>
        <img className="ad-status" src={bitmap3Image} width={15} height={30} />
      </div>
      {(ad.ad_spend)?(
      <div className="ad-revenue">
        <div className="container">
          <div className="column">
            <div className="row spend">Spend: ${0.0}</div>
            <div className="row reach">Reach: {ad.ad.reach.unique_users_seen}</div>
          </div>
          <div className="column">
            <div className="row revenue">Revenue: ${0.0} </div>
          </div>
        </div>
        <div className="revenue-btn">Product Revenue: ${0.0}</div>
      </div>
      ):null}
      <div className="ad-title">{ad.link_title}</div>
      <div className="ad-content">
        <span className="date">{ad.ad_creation_time}</span>
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
      </div>
      <div className="ad-advertiser">
        <div className="container">
          <a href="" className="link">
            {/* <img src={ad.page_profile_picture_url} alt={ad.page_profile_picture_url} className="avatar" /> */}
            <span className="description">{ad.advertiser.business_name}</span>
          </a>
        </div>
        <hr/>
      </div>
      {/* <div className="ad-details">
        {ad.target_locations?(
          <p>Countries: {ad.target_locations.map((loc)=>{
            return (<img width={32} src={getFlagOf(loc.name)} alt={loc.name} />);
          })}</p>
        ):null}
        <p>Platforms: {getPlatformIcons(ad.publisher_platforms)}</p>
        <p>Started: {ad.ad_delivery_start_time}</p>
      </div> */}
      {/* <div className="ad-footer">
        <div className="ad-link">
          <a href={ad.link_url} className="link">{ad.link_title}</a>
        </div>
        <div className="ad-actions">
          <a className="action-button" href={ad.link_url}>Learn More</a>
        </div>
      </div> */}
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
        ads.map((ad,index) => {
          return (<Ad ad={ad} key={index} />)})
      }
    </div>
    </>
  )
}