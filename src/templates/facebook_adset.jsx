import facebookAdTemplate from "./facebook_ad_template";
import facebookAdImageTemplate from "./facebook_ad_image_template";
import facebookAdVideoTemplate from "./facebook_ad_video_template";
import facebookAdPagePopupTemplate from "./facebook_ad_page_popup_template";
import { useEffect, useReducer } from "react";

function facebookAdsetReducer(state,action) {
  switch (action.type) {
    case 'open-page-ads':
      return {
        ...state,
        open_page_ads:true,
      }
  
    case 'close-page-ads':
      return {
        ...state,
        open_page_ads:false,
      }

    default:
      break;
  }
}

export default function FacebookAdset({adset,key}) {
  var ad = adset[0]
  const [componentState,dispatch] = useReducer(facebookAdsetReducer,{
    open_page_ads:false,
  })

  function handleOpenPageAds() {
    dispatch({
      type:"open-page-ads"
    })
  }

  function handleClosePageAds() {
    dispatch({
      type:"close-page-ads"
    })
  }

  const template = facebookAdTemplate
  template.id = ad.adArchiveID
  template.title = ad.snapshot.body.markup.__html
  template.adsets = adset.length
  var date = new Date(0)
  date.setUTCSeconds(ad.snapshot.creation_time)
  template.product_creation_date = date.toLocaleDateString("en-GB")
  template.page_ads = ad.pageAds.number_of_ads
  template.page_name = ad.snapshot.page_name
  template.publisherPlatforms = ad.publisherPlatform.map(function(platform,index,arr){
    switch (platform) {
      case 'facebook':
        return '<img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px">'
      
      case 'instagram':
        return '<img src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px">'
        
      case 'audience':
        return '<img src="https://app.winninghunter.com/images/audience_network.png" height="20px" width="20px">'
      
      case 'messenger':
        return '<img src="https://app.winninghunter.com/images/messenger.svg" height="20px" width="20px">'
    
      default:
        return '';
    }
  }).join("")
  template.page_profile_picture_url = ad.snapshot.page_profile_picture_url
  switch (ad.snapshot.display_format) {
    case "carousel":
      var content_template = facebookAdImageTemplate
      content_template.image_url = ad.snapshot.cards[0].original_image_url
      template.content_template = content_template.html
      break;
    
    case "video":
      var content_template = facebookAdVideoTemplate
      content_template.image_url = ad.snapshot.videos[0].video_preview_image_url
      content_template.video_url = ad.snapshot.videos[0].video_sd_url
      template.content_template = content_template.html
  
    default:
      break;
  }
  if (ad.snapshot.display_format === "carousel") {
    var content_template = facebookAdImageTemplate
    content_template.image_url = ad.snapshot.cards[0].original_image_url
    template.content_template = content_template.html
  }

  if (componentState.open_page_ads) {
    var pageAdsPopupTemplate = facebookAdPagePopupTemplate
    pageAdsPopupTemplate.id = template.id
    template.page_ads_popup = pageAdsPopupTemplate.html
  }

  function openPageAdsPopupListener(e) {
    if (e.target.getAttribute("copiwin-id") == template.id) {
      handleOpenPageAds()
    }
  }

  function closePageAdsPopupListener(e) {
    if (e.target.getAttribute("copiwin-id") == template.id) {
      handleClosePageAds()
    }
  }

  useEffect(function(){
    document.addEventListener("open_page_ads_popup",openPageAdsPopupListener)
    document.addEventListener("close_page_ads_popup",closePageAdsPopupListener)
    return function(){
      document.removeEventListener("open_page_ads_popup",openPageAdsPopupListener)
      document.removeEventListener("close_page_ads_popup",closePageAdsPopupListener)
    }
  },[])

  return (
    <>
    <div dangerouslySetInnerHTML={{__html:template.html}} />
    </>
  )
}