import facebookImage from "../assets/images/facebook.png";
import instagramImage from "../assets/images/instagram.png";
import messengerImage from "../assets/images/messenger.png";
import shareImage from "../assets/images/share.png";

export default function getPlatformIcons(platforms) {
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
