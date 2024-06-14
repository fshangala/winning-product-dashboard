import { useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner";
import worldwideImage from "../assets/images/worldwide.jpg";
import facebookImage from "../assets/images/facebook.png";
import instagramImage from "../assets/images/instagram.png";
import messengerImage from "../assets/images/messenger.png";
import shareImage from "../assets/images/share.png";

export function Ad({ad}) {
  let playing = false;

  return (
    <div className='ad'>
      <div className="ad-top">
        <button className="btn">4</button>
      </div>
      <div className="ad-header">
        <span>creative</span>
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
        ads.map((ad) => {
          return (<Ad key={ad.id} ad={ad} />)}) : null
      }
    </div>
    </>
  )
}

function getPlatformIcons(platforms) {
  var platform = {
    "facebook":facebookImage,
    "instagram":instagramImage,
    "messenger":messengerImage,
    "audience_network":shareImage
  }
  return (<span>
  {platforms.map((ptf)=>{
    return <img width={32} src={platform[ptf]} alt={ptf} />;
  })}
  </span>)
}

function getFlagOf(country) {
  var countryISO = {
    "Andorra":"AD",
    "United Arab Emirates":"AE",
    "Afghanistan":"AF",
    "Antigua and Barbuda":"AG",
    "Anguilla":"AG",
    "Albania":"AL",
    "Armenia":"AM",
    "Netherlands Antilles":"AN",
    "Angola":"AO",
    "Antarctica":"AQ",
    "Argentina":"AR",
    "American Samoa":"AS",
    "Austria":"AT",
    "Australia":"AU",
    "Aruba":"AW",
    "Åland Islands":"AX",
    "Azerbaijan":"AZ",
    "Bosnia and Herzegovina":"BA",
    "Barbados":"BB",
    "Bangladesh":"BB",
    "Belgium":"BE",
    "Burkina Faso":"BF",
    "Bulgaria":"BG",
    "Bahrain":"BH",
    "Burundi":"BI",
    "Benin":"BJ",
    "Croatia":"HR",
    "Czech Republic":"CZ",
    "Cyprus":"CY",
    "Denmark":"DK",
    "Estonia":"EE",
    "Bermuda":"BM",
    "France":"FR",
    "French Guiana":"GF",
    "Finland":"FI",
    "Guadeloupe":"GE",
    "Germany":"DE",
    "Greece":"GR",
    "Hungary":"HU",
    "Ireland":"IE",
    "Luxembourg":"LU",
    "Lithuania":"LT",
    "Latvia":"LV",
    "Martinique":"MQ",
    "Mayotte":"YT",
    "Malta":"MT",
    "Netherlands":"NL",
    "Portugal":"PT",
    "Poland":"PL",
    "Réunion":"RE",
    "Romania":"RO",
    "Saint Barthélemy":"BL",
    "Sweden":"SE",
    "Spain":"ES",
    "Saint Martin":"MF",
    "Slovenia":"SL",
    "Slovakia":"SK",
    "Italy":"IT",
  }
  if(country === "Worldwide") {
    return worldwideImage;
  }
  return `https://flagsapi.com/${countryISO[country]}/shiny/64.png`;
}