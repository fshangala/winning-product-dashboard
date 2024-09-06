import { useEffect, useState } from "react";

export default function TiktokAd({ad}) {
  const [template,setTemplate] = useState("")

  useEffect(()=>{
    fetch("/templates/tiktok_ad.html").then(response => response.text()).then((value)=>{
      var text = value
      text = value.replaceAll("{{first_shown_date}}",ad.ad.first_shown_date)
      text = text.replaceAll("{{cover_image_url}}",ad.ad.videos[0].cover_image_url)
      text = text.replaceAll("{{video_url}}",ad.ad.videos[0].url)
      setTemplate(text)
    }).catch((reason)=>{
      console.log(reason)
    })
  },[])

  return (
    <>
    <div dangerouslySetInnerHTML={{__html:template}} />
    </>
  )
}