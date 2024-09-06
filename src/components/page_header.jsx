import { Link } from "react-router-dom";

export default function PageHeader() {
  return (
    <>
    <div className="flex justify-between flex-wrap">
      <div>
          <h5><img src="https://app.winninghunter.com/assets/images/fb_glow.png" height="50px" width="50px"/> Search Facebook Ads<span className="text-lg text-gray-500"> - Every facebook ad in the world!</span></h5>
      </div>
      <div className="flex gap-3">
        <a className="place-self-end w-inline-block flex-col flex shadow-xl rounded p-1 my-1 border border-dotted bg-emerald-600 hover:bg-emerald-500" href="https://shopify.pxf.io/m5qQ1y" style={{gap:"0"}} target="_BLANK">
          <p className="invite-friends-btn__text text-white">SHOPIFY FREE</p>
          <small className="block text-slate-200 text-xs">Start for only $1/month.</small>
        </a>
        <Link className="place-self-end w-inline-block flex-col flex shadow-xl rounded p-1 my-1 border border-dotted bg-rose-500 hover:bg-rose-400" to="/tiktok-ads" style={{gap:"0"}}>
          <p className="invite-friends-btn__text text-white">Tiktok Ads UPDATE</p>
          <small className="block text-slate-200 text-xs">Almost every tiktok ad out there!</small>
        </Link>
        <a className="place-self-end invite-friends-btn w-inline-block dark-hover watch-tutorial-button">
          <p className="invite-friends-btn__text">Watch Tutorial</p>
        </a>
      </div>
    </div>
    </>
  )
}