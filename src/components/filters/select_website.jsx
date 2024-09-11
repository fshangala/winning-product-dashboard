import { useEffect, useRef } from "react"
import useSelect2ChangeHandler from "../../hooks/select2_change_handler"

export default function SelectWebsite({value,onChange=function({value}){}}) {
  const refElem = useRef(null)
  useSelect2ChangeHandler(refElem,onChange)

  return (
    <div className="select-wrapper">
      <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">
        Website
        <div className="custom-popup hidden" style={{right:"0px",display:"none"}} >
          Technologies that the website can have.
        </div>
        <div className="inline-block pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
          </svg>
        </div>
      </div>
      <select className="js-select2 form-input select-box-2 pb w-select" ref={refElem}>
        <option value="shopify" data-badge="">Shopify</option>
        <option value="TP" data-badge="">Trustpilot</option>
        <option value="BU" data-badge="">Bundle App</option>
        <option value="shoplazza" data-badge="">ShopLazza</option>
        <option value="TA" data-badge="">TripleWhale</option>
        <option value="GG" data-badge="">Gorgias</option>
        <option value="FU" data-badge="">Funnelish</option>
        <option value="CS" data-badge="">Clickfunnels</option>
        <option value="LP" data-badge="">Leadpages</option>
        <option value="FO" data-badge="">Funnel.io</option>
        <option value="SI" data-badge="">ShopLine</option>
        <option value="GP" data-badge="">Gempages</option>
        <option value="XS" data-badge="">XShoppy</option>
        <option value="YC" data-badge="">YouCan</option>
        <option value="HY" data-badge="">Hyros</option>
        <option value="DI" data-badge="">Dropify</option>
        <option value="MS" data-badge="">mShop</option>
        <option value="SB" data-badge="">ShopBase</option>
        <option value="PP" data-badge="">PayPal</option>
        <option value="KL" data-badge="">Klarna</option>
        <option value="WC" data-badge="">WooCommerce</option>
        <option value="TT" data-badge="">TikTok Pixel</option>
        <option value="TW" data-badge="">Twitter Pixel</option>
        <option value="PI" data-badge="">Pinterest Pixel</option>
        <option value="GO" data-badge="">Google Analytics</option>
        <option value="SC" data-badge="">Snapchat Pixel</option>
        <option value="FB" data-badge="">Facebook Pixel</option>
        <option value="MG" data-badge="">Magento</option>
        <option value="WP" data-badge="">WordPress</option>
        <option value="SQ" data-badge="">Squarespace</option>
        <option value="PS" data-badge="">PrestaShop</option>
        <option value="GM" data-badge="">Google Tag Manager</option>
        <option value="KV" data-badge="">Klaviyo</option>
        <option value="CO" data-badge="">Checkout</option>
        <option value="HJ" data-badge="">Hotjar</option>
        <option value="WX" data-badge="">Wix</option>
        <option value="AR" data-badge="">AdRoll</option>
        <option value="BC" data-badge="">BigCommerce</option>
        <option value="MC" data-badge="">Mailchimp</option>
      </select>
    </div>
  )
}