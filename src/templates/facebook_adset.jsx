import facebookAdTemplate from "./facebook_ad_template";
import facebookAdImageTemplate from "./facebook_ad_image_template";
import facebookAdVideoTemplate from "./facebook_ad_video_template";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function FacebookAdset({adset}) {
  var ad = adset[0]
  const template = facebookAdTemplate
  template.id = ad.adArchiveID
  template.adsets = adset.length
  var date = new Date(0)
  date.setUTCSeconds(ad.snapshot.creation_time)
  template.product_creation_date = date.toLocaleDateString("en-GB")
  template.page_ads = ad.pageAds.number_of_ads
  template.page_name = ad.snapshot.page_name
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

  useEffect(function(){
    toast.info(template.id)
  },[])

  return (
    <>
    <div dangerouslySetInnerHTML={{__html:template.html}} />
    </>
  )
}