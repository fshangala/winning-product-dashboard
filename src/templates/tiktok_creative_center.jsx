import { useEffect } from "react";
import tiktok_creative_center_template from "./tiktok_creative_center_template";

export default function TiktokCreativeCenter() {
  const template = tiktok_creative_center_template
  return (
    <div dangerouslySetInnerHTML={{__html:template.html}} />
  )
}