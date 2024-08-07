import facebookAdTemplate from "../templates/facebook_ad_template";
import facebookAdImageTemplate from "../templates/facebook_ad_image_template";
import facebookAdVideoTemplate from "../templates/facebook_ad_video_template";
import facebookAdPagePopupTemplate from "../templates/facebook_ad_page_popup_template";
import { useEffect, useReducer } from "react";

function theReducer(state,action) {
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

export default function CFacebookAd({ad}) {
  const [componentState,dispatch] = useReducer(theReducer,{
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
  template.id = ad.ad_archive_id
  template.title = ad.body_html
  template.adsets = ad.ad_creative_id
  template.product_creation_date = ad.creation_time
  template.page_ads = ad.page.id
  template.page_name = ad.page.name
  template.publisherPlatforms = ['facebook','instagram','audience','messenger'].map(function(platform,index,arr){
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
  template.page_profile_picture_url = ad.page.profile_picture_url
  switch (ad.display_format) {
    case "carousel":
      var content_template = facebookAdImageTemplate
      content_template.image_url = ad.image
      template.content_template = content_template.html
      break;
    
    case "video":
      var content_template = facebookAdVideoTemplate
      content_template.image_url = ad.video_preview
      content_template.video_url = ad.video
      template.content_template = content_template.html
  
    default:
      break;
  }
  // if (ad.snapshot.display_format === "carousel") {
  //   var content_template = facebookAdImageTemplate
  //   content_template.image_url = ad.image
  //   template.content_template = content_template.html
  // }

  template.store_revenue=Math.ceil(Math.random()*(5000-50) + 50);
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