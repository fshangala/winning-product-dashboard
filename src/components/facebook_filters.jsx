import { useEffect, useReducer } from "react";
import SelectCountry from "./filters/country";
import InputActiveAdsets from "./filters/input_active_adsets";
import InputAdspend from "./filters/input_adspend";
import PickAdCreationDate from "./filters/pick_ad_creation_date";
import PickLastSeenDate from "./filters/pick_last_seen_date";
import PickProductCreationDate from "./filters/pick_product_creation_date";
import SearchKeyword from "./filters/search_keyword";
import SelectLanguage from "./filters/select_language";
import SelectMediaType from "./filters/select_media_type";
import SelectNiche from "./filters/select_niche";
import SelectPageType from "./filters/select_page_type";
import SelectScaling from "./filters/select_scaling";
import SelectSortBy from "./filters/select_sort_by";
import SelectSortDirection from "./filters/select_sort_direction";
import SelectWebsite from "./filters/select_website";
import InputKeyword from "./filters/input_keyword";

function facebookFiltersReducer(state,action) {
  switch (action.type) {
    case "set-keyword":
      return {
        ...state,
        keyword:action.keyword,
      }
    
    case "set-search-keyword":
      return {
        ...state,
        search_keyword:action.search_keyword,
      }

    case "set-countries":
      return {
        ...state,
        countries:action.countries,
      }
    
    case "set-websites":
      return {
        ...state,
        websites:action.websites,
      }

    case "set-languages":
      return {
        ...state,
        languages:action.languages,
      }
    
    case "set-active-adsets":
      return {
        ...state,
        active_adsets:action.active_adsets,
      }
    
    case "set-adspend":
      return {
        ...state,
        adspend:action.adspend,
      }
    
    case "set-sort-by":
      return {
        ...state,
        sort_by:action.sort_by,
      }

    case "set-sort-direction":
      return {
        ...state,
        sort_direction:action.sort_direction,
      }

    case "set-scaling":
      return {
        ...state,
        scaling:action.scaling,
      }

    case "set-media-type":
      return {
        ...state,
        media_type:action.media_type,
      }

    case "set-page-type":
      return {
        ...state,
        page_type:action.page_type,
      }

    case "set-niche":
      return {
        ...state,
        niche:action.niche,
      }

    case "set-ad-creation-date":
      return {
        ...state,
        ad_creation_date:action.ad_creation_date,
      }

    case "set-last-seen-date":
      return {
        ...state,
        last_seen_date:action.last_seen_date,
      }

    case "set-product-creation-date":
      return {
        ...state,
        product_creation_date:action.product_creation_date,
      }
  
    default:
      break;
  }
}

export default function FacebookFilters({applyFilters}) {
  const [componentState,dispatch] = useReducer(facebookFiltersReducer,{
    keyword:"",
    search_keyword:"",
    countries:"",
    websites:"",
    languages:"",
    active_adsets:"",
    adspend:"",
    sort_by:"",
    sort_direction:"asc",
    scaling:"",
    media_type:"",
    page_type:"",
    niche:"",
    ad_creation_date:"",
    last_seen_date:"",
    product_creation_date:"",
  })

  useEffect(function(){
    applyFilters(componentState)
  },[])

  return (
    <>
    <div className="w-form" style={{marginTop:"60px"}}>
      <form id="email-form" name="email-form" data-name="Email Form" method="get" className="dashboard_form shadow-container" aria-label="Email Form">
        <div className="filters mb-3">
          <InputKeyword value={componentState.keyword} onChange={function({value}){
            dispatch({
              type:'set-keyword',
              keyword:value,
            })
          }} />
          <SearchKeyword value={componentState.search_keyword} onChange={function({value}){
            dispatch({
              type:'set-search-keyword',
              search_keyword:value,
            })
          }} />
          <SelectCountry value={componentState.countries} onChange={function({value}){
            dispatch({
              type:"set-countries",
              countries:value,
            })
          }} />
          <SelectWebsite value={componentState.websites} onChange={function({value}){
            dispatch({
              type:"set-websites",
              websites:value,
            })
          }} />
          <SelectLanguage onChange={function({value}){
            dispatch({
              type:'set-languages',
              languages:value,
            })
          }} />
          <InputActiveAdsets the_value={componentState.active_adsets} onChange={function({value}){dispatch({
            type:"set-active-adsets",
            active_adsets:value,
          })}} />
          <InputAdspend the_value={componentState.adspend} onChange={function({value}){
            dispatch({
              type:"set-adspend",
              adspend:value,
            })
          }} />
          <SelectSortBy value={componentState.value} the_onChange={function({value}){
            dispatch({
              type:"set-sort-by",
              sort_by:value
            })
          }} />
          <SelectSortDirection value={componentState.sort_direction} onChange={function({value}){dispatch({
            type:"set-sort-direction",
            sort_direction:value,
          })}} />
          <SelectScaling value={componentState.scaling} the_onChange={function({value}){
            dispatch({
              type:'set-scaling',
              scaling:value,
            })
          }} />
          <SelectMediaType value={componentState.media_type} the_onChange={function({value}){
            dispatch({
              type:"set-media-type",
              media_type:value,
            })
          }} />
          <SelectPageType value={componentState.page_type} the_onChange={function({value}){
            dispatch({
              type:"set-page-type",
              page_type:value,
            })
          }} />
          <SelectNiche value={componentState.niche} onChange={function({value}){
            dispatch({
              type:"set-niche",
              niche:value,
            })
          }} />
          <PickAdCreationDate value={componentState.ad_creation_date} onChange={function({value}){
            dispatch({
              type:"set-ad-creation-date",
              ad_creation_date:value,
            })
          }} />
          <PickLastSeenDate value={componentState.last_seen_date} onChange={function({value}){
            dispatch({
              type:'set-last-seen-date',
              last_seen_date:value,
            })
          }} />
          <PickProductCreationDate value={componentState.product_creation_date} onChange={function({value}){
            dispatch({
              type:'set-product-creation-date',
              product_creation_date:value,
            })
          }} />
        </div>
        <hr/>
        <div className="flex w-full justify-between">
          <div className="flex justify-between flex-wrap gap-1 pb-1 hidden-scroll mb-1 mt-3 preset-filters">
            <div data-active="false" id="euwinners" className="whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80">
                <div className="mr-1"></div><img src="https://app.winninghunter.com/images/european-union-flag-on-trophee-circle.png" className="h-6 w-6"/> European winners
            </div>
            <div data-active="false" id="usawinners" className="whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80">
                <div className="mr-1"></div><img src="https://app.winninghunter.com/images/usa-flag-with-uk-flag.png" className="h-6 w-6"/>USA (Big 5) winners
            </div>
            <div data-active="false" id="dropshipads" className="whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80">
                <div className="mr-1"></div><img src="https://app.winninghunter.com/images/drop-shipping.png" className="h-6 w-6"/>Dropship Ads
            </div>
            <div data-active="false" id="fashionads" className="whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80">
                <div className="mr-1"></div><img src="https://app.winninghunter.com/images/clothes-cool-brand.png" className="h-6 w-6"/>Fashion Dropship
            </div>
            <div data-active="false" id="topbrands" className="whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background has-popup relative">
                <div className="custom-popup hover:opacity-100 hidden" style={{left:"0px",textWrap:"wrap",bottom:"35px",fontSize:"13px",display:"none",transform:"scale(0.8)"}}>This preset will get more branded products. If you want to see dropship branded (one product or niche stores) keep the ad creation date to the last 1, 2  or 3 months, set product creation date also to the last 1, 2  or 3 months. If you want to see more real brands, put the ad creation date to the last 6 or 12 months, set product creation date from 4 months to a few years back and change the technology to: Hyros, Gorgias, TripleWhale (disable shopify)
                </div>
                <div className="mr-1"></div><img src="https://app.winninghunter.com/images/award.png" className="h-6 w-6"/>Top Branded
            </div>
          </div>
          <div className="div-block-57 self-end">
            <a href="#" className="cancel w-button" onClick="document.getElementById('email-form').reset(); $('.select2-selection__choice__remove').click(); picker.reset(); lastseenpicker.reset(); productcreationpicker.reset();">Cancel</a>
            <button type="button" className="button applly-filter w-button" id="applyfilters"
            onClick={function(e){applyFilters(componentState)}}>Apply<div className="shadow"></div><div className="glow" style={{willChange:"transform",transform:"translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",transformStyle:"preserve-3d"}}></div></button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}