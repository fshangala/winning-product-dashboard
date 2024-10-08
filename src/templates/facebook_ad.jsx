import { useEffect, useState } from "react";

export default function FacebookAd({ad}) {
  const [template,setTemplate] = useState('')
  const [initialized,setInitialized] = useState(false)

  useEffect(()=>{
    fetch("/templates/facebook_ad.html").then(response => response.text()).then((value)=>{
      var text = value.replaceAll("{{template_id}}",ad.id)
      text = text.replaceAll("{{video_url}}",ad.video_url)
      text = text.replaceAll("{{adsets}}",ad.adsets)
      text = text.replaceAll("{{ad_delivery_start_time}}",ad.ad_delivery_start_time)
      text = text.replaceAll("{{page_ads}}",ad.page_ads)
      text = text.replaceAll("{{link_title}}",ad.link_title)
      text = text.replaceAll("{{ad_revenue}}",ad.ad_revenue)
      text = text.replaceAll("{{ad_spend}}",ad.ad_spend)
      text = text.replaceAll("{{page_name}}",ad.page_name)
      text = text.replaceAll("{{page_profile_picture_url}}",ad.page_profile_picture_url)
      text = text.replaceAll("{{ad_creative_link_captions}}",ad.ad_creative_link_captions ? ad.ad_creative_link_captions[0] : null)
      setTemplate(text)
      initialize()
    }).catch((reason)=>{
      console.log(reason)
    })
  },[])

  useEffect(()=>{
    if(initialized) {
      //
    }
  })

  let initialize = function() {
    var ad_template = document.querySelector("div[data-template-id='"+ad.id+"'")
    if(ad_template) {

      // event listeners
      ad_template.querySelector(".has-popup .custom-popup a.view-page-ads").addEventListener("click",(e)=>{
        console.log(e)
        ad_template.querySelector(".pageads .page-popup").style.display="flex"
      })
      setInitialized(true)
    } else {
      setTimeout(initialize,1000)
    }
  }

  return (
    <>
    <div dangerouslySetInnerHTML={{__html:template}} />
    </>
  )
}