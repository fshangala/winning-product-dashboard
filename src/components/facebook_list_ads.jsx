import { useContext, useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner";
import bitmap1Image from "../assets/images/bitmap1.png";
import bitmap2Image from "../assets/images/bitmap2.png";
import bitmap3Image from "../assets/images/bitmap3.png";
import getPlatformIcons from "./platform_icons";
import getFlagOf from "./country_iso_flag";
import Dropdown from "./dropdown";
import CopiwinSDK from "../copiwinsdk/copiwinsdk";
import { UserContext } from "../context/UserContext";

export function Ad({ad}) {
  let playing = false;
  const copiwinSDK = new CopiwinSDK()
  const user = useContext(UserContext)

  const saveAd = function() {
    copiwinSDK.saveAd({user_id:user.user_id,source:'facebook',ad:ad}).then((data)=>{
      console.log(data)
    }).catch((reason)=>{
      console.log(reason)
    })
  }

  return (
    <div className='ad'>
      <div className="ad-top">
        <button className="btn">{ad.page_ads}</button>
      </div>
      <div className="ad-header">
        <div className="ad-adsets">
          <span className="ad-adsetCount">{ad.adsets} Adsets</span>
          <span> use this creative</span>
        </div>
        <img className="ad-status" src={bitmap3Image} width={15} height={30} />
        <Dropdown>
          <div className="list">
            <button onClick={()=>{
              saveAd()
            }} className="list-item">Save Ad</button>
          </div>
        </Dropdown>
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
        <div className="revenue-btn">Product Revenue: ${ad.ad_revenue}</div>
      </div>
      ):null}
      <div className="ad-title">{ad.link_title}</div>
      <div className="ad-content">
        <span className="date">{ad.ad_creation_time}</span>
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
      </div>
      <div className="ad-advertiser">
        <div className="container">
          <a href={ad.link_url} className="link">
            <img src={ad.page_profile_picture_url} alt={ad.page_profile_picture_url} className="avatar" />
            <span className="description">{ad.page_name}</span>
          </a>
        </div>
        <hr/>
      </div>
      <div className="ad-details">
        {ad.target_locations?(
          <p>Countries: {ad.target_locations.map((loc)=>{
            return (<img width={32} src={getFlagOf(loc.name)} alt={loc.name} />);
          })}</p>
        ):null}
        <p>Platforms: {getPlatformIcons(ad.publisher_platforms)}</p>
        <p>Started: {ad.ad_delivery_start_time}</p>
      </div>
      <div className="ad-footer">
        <div className="ad-link">
          <a href={ad.link_url} className="link">{ad.link_title}</a>
        </div>
        <div className="ad-actions">
          <a className="action-button" href={ad.link_url}>Learn More</a>
        </div>
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
        ads.map((ad,index) => {
          return (<Ad key={ad.id} ad={ad} />)}) : null
      }
    </div>
    </>
  )
}
