import SelectCountry from "./filters/country";
import InputActiveAdsets from "./filters/input_active_adsets";
import InputAdspend from "./filters/input_adspend";
import SearchKeyword from "./filters/search_keyword";
import SelectLanguage from "./filters/select_language";
import SelectWebsite from "./filters/select_website";

export default function FacebookFilters({applyFilters}) {
  return (
    <>
    <div className="w-form" style={{marginTop:"60px"}}>
      <form id="email-form" name="email-form" data-name="Email Form" method="get" className="dashboard_form shadow-container" aria-label="Email Form">
        <div className="filters mb-3">
          <div className="price-input price">
            <div className="select-wrapper">
              <div className="div-block-71">
                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 absolute ml-2 mt-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                  </svg>
                </span>
                <input type="text" className="form-input select2-selection adset-count w-input itemsetcounter !pe-10" maxlength="2560" name="keyword" data-name="Keyword" placeholder="Search..." id="keyword" style={{width:"100%"}} autocomplete="off"/>
              </div>
            </div>
          </div>
          <SearchKeyword />
          <SelectCountry />
          <SelectWebsite />
          <SelectLanguage />
          <InputActiveAdsets />
          <InputAdspend />
          <div className="select-wrapper" id="sortbyselectionbox">
            <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">
              Sort By
              <div className="custom-popup hidden" style={{right:"0px",zIndex:"1999",display:"none",transform:"scale(0.8)"}} >
                Sort ads by:
                <p className="text-align-left">
                  "Winners" - Ads that performed well over a longer period of time.<br/>
                  "Trending" - Ads that recently performed well.<br/>
                  "Adset amount" - Ads with the most amount of adsets.<br/>
                  "Last seen" - Ads that are seen the last by our bots.
                  "Adspend" - Ads that have spent the most.<br/>
                  "Found date" - Ads which were just found will be put at the top. - best option if you struggle with seeing the same ads<br/>
                </p>
              </div>
              <div className="inline-block pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
                </svg>
              </div>
              <span style={{pointerEvents:"none",padding:"2px",backgroundColor:"#225AEA",color:"white",marginLeft:"4px",borderRadius:"4px"}}>Updated</span>
            </div>
            <span dir="ltr" data-select2-id="29" style={{width:"100%",display:"none"}} className="select2 select2-container select2-container--default select2-container--focus select-2-skeleton">
              <span className="selection">
                <span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                  <ul className="select2-selection__rendered">
                    <li className="select2-search select2-search--inline">
                      <input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" />
                    </li>
                  </ul>
                </span>
              </span>
              <span className="dropdown-wrapper" aria-hidden="true"></span>
            </span>
            <select id="Order" placeholder="Sort By..." name="Order" data-name="Order" className="form-input select-box-2 w-select hidden select2-hidden-accessible" data-select2-id="Order" tabindex="-1" aria-hidden="true">
              <option value="">None</option>
              <option value="consistency" selected="">Winners (formerly consistency)</option>
              <option value="trending">Trending</option>
              <option value="adsetamount">Adset amount</option>
              <option value="lastseen">Last Seen</option>
              <option value="datefound" selected="" data-select2-id="8">Found date</option>
              <option value="adspend">Adspend</option>
            </select>
            <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="7" style={{width:"130px"}}>
              <span className="selection">
                <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-Order-container">
                  <span className="select2-selection__rendered" id="select2-Order-container" role="textbox" aria-readonly="true" title="Found date">
                    <span className="select2-selection__clear" title="Remove all items" data-select2-id="9">×</span>
                    Found date
                  </span>
                  <span className="select2-selection__arrow" role="presentation">
                    <b role="presentation"></b>
                  </span>
                </span>
              </span>
              <span className="dropdown-wrapper" aria-hidden="true"></span>
            </span>
          </div>
          <div className="">
            <div className="form-input  select2-selection sortingdirection no-before" direction="asc" style={{position:"relative"}} >
              <img src="https://app.winninghunter.com/images/sort-up.png" width="25px" height="25px" className="arrow-image-direction has-popup" />
              <div className="custom-popup hidden" style={{display:"none"}} >Sort from low to high.</div>
            </div>
            <div className="form-input select2-selection sortingdirection no-before active" direction="desc" style={{position:"relative"}}>
              <img src="https://app.winninghunter.com/images/sort-down.png" width="25px" height="25px" className="arrow-image-direction has-popup" />
              <div className="custom-popup hidden" style={{display:"none"}}>Sort from high to low.</div>
            </div>
            <input type="hidden" className="sort-direction" value="desc" />
          </div>
          <div className="" style={{marginRight:"10px",display:"none"}} >
            <input type="checkbox" className="activestatus select2-custom-checkbox" checked=""/>
            <b style={{display:"inline-block"}} >Hide inactive</b>
            <div style={{display:"inline-block",position:"absolute"}} className="has-popup">
              <img className="has-popup" style={{marginLeft:"3px"}}  src="/images/question-circle.svg" height="20px" width="20px" />
              <div className="custom-popup hidden" style={{display:"none"}}>
                Hide inactive ads.<br/><br/> 
                Note: Not all ads that are inactive will be excluded. Always check the active status in the Facebook Ad Library.
              </div>
            </div>
          </div>
          <div className="select-wrapper">
            <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Scaling
              <div className="custom-popup hidden" style={{right:"0px",display:"none",transform:"scale(0.8)"}}>When adsets are added, the ad is considered "upscaling". </div>
            <div className="inline-block pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
              </svg>
            </div>
            </div>
            <span dir="ltr" data-select2-id="29" style={{width:"100%",display:"none"}} className="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"/></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
            <select id="scaling" name="scaling" placeholder="Scaling" data-name="scaling" className="form-input select-box-2 w-select hidden select2-hidden-accessible" data-select2-id="scaling" tabindex="-1" aria-hidden="true">
              <option value="" data-select2-id="11">None</option>
              <option value="nodownscaling">No Downscaling</option>
              <option value="upscaling">Upscaling Only</option>
              <option value="downscaling">Downscaling Only</option>
            </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="10" style={{width:"130px"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-scaling-container"><span className="select2-selection__rendered" id="select2-scaling-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Scaling</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
          </div>
          <div className="select-wrapper">
          <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Media type
            <div className="custom-popup hidden" style={{right:"20px",display:"none",transform:"scale(0.8)"}} >Select whether the ad is an image or a video.</div>
          <div className="inline-block pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
            </svg>
          </div>
          </div>
            <span dir="ltr" data-select2-id="29" style={{width:"100%",display:"none"}} className="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"/></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
            <select id="Order-2" name="Order-2" placeholder="Media Type" data-name="Order 2" className="form-input select-box-2 w-select hidden select2-hidden-accessible" data-select2-id="Order-2" tabindex="-1" aria-hidden="true">
              <option value="" data-select2-id="13">None</option>
              <option value="videos">Videos</option>
              <option value="images">Images</option>
              <option value="carousel">Carousel</option>
              <option value="dco">DCT/advantage+/ASC</option>
            </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="12" style={{width:"130px"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-Order-2-container"><span className="select2-selection__rendered" id="select2-Order-2-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Media Type</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
          </div>
          <div className="select-wrapper">
            <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Page type
              <div className="custom-popup hidden" style={{right:"20px",display:"none"}} >Select the type of landing page.</div>
            <div className="inline-block pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
              </svg>
            </div>
            </div>
            <span dir="ltr" data-select2-id="29" style={{width:"100%",display:"none"}} className="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"/></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
            <select id="pagetype" name="pagetype" placeholder="Page Type" data-name="pagetype" className="form-input select-box-2 w-select hidden select2-hidden-accessible" data-select2-id="pagetype" tabindex="-1" aria-hidden="true">
              <option value="" data-select2-id="15">None</option>
              <option value="products">Product Pages</option>
              <option value="collections">Collection Pages</option>
              <option value="funnels">Funnels</option>
              <option value="nofunnels">No Funnels</option>
            </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="14" style={{width:"130px"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-pagetype-container"><span className="select2-selection__rendered" id="select2-pagetype-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Page Type</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
          </div>
          <div className="select-wrapper niche-select">
            <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer"><div className="custom-popup hidden" style={{right:"90px",display:"none"}} >This filter might not show ALL ads in a certain niche, only use it if it really saves you time looking in a certain niche.

            For Fashion: Use the "Fashion Dropship" filter first because it gives way more ads, else use this "clothing" niche filter.</div>Niche

            <div className="inline-block pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
              </svg>
            </div>

            <span style={{pointerEvents:"none",padding:"2px",backgroundColor:"#225AEA",color:"white",marginLeft:"4px",borderRadius:"4px"}}>Updated</span>
          </div>
            
            <span dir="ltr" data-select2-id="29" style={{width:"100%",display:"none"}} className="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"/></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>

            <select className="js-select2 form-input select-box-2 pb w-select hidden select2-hidden-accessible" multiple="" id="niches" tabindex="-1" aria-hidden="true" data-select2-id="niches">
              <option value="CG" data-badge="">Fashion &amp; Clothing</option>
              <option value="AM" data-badge="">Car</option>
              <option value="GG" data-badge="">Gadgets</option>
              <option value="JY" data-badge="">Jewellery</option>
              <option value="GS" data-badge="">Gifts</option>
              <option value="HT" data-badge="">Health</option>
              <option value="BY" data-badge="">Beauty</option>
              <option value="KS" data-badge="">Kids</option>
              <option value="TS" data-badge="">Toys</option>
              <option value="HE" data-badge="">Household</option>
              <option value="PS" data-badge="">Pets</option>
              <option value="DP" data-badge="">Digital Products</option>
            </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="49" style={{width:"130px"}}><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Select Niches..." style={{width:"159.4px"}}/></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
          </div>
          <div className="select-wrapper">
            <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Ad creation date
              <div className="custom-popup hidden" style={{right:"90px",display:"none",transform:"scale(0.8)"}} >Select the dates during which the ads were launched.</div>
            <div className="inline-block pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
              </svg>
            </div>
            </div>
            <div className="w-embed">
              <input type="text" id="datepicker" className="form-input ad select2-selection select2-selection--multiple" readOnly=""/> 
            </div>
          </div>
          <div className="select-wrapper">
            <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Last seen date
              <div className="custom-popup hidden" style={{right:"90px",display:"none",transform:"scale(0.8)"}}>Select the dates during which the ads were last seen by one of our bots.</div>
            <div className="inline-block pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
              </svg>
            </div>
          </div>
            <div className="w-embed">
              <input type="text" id="datepickerlastseen" className="form-input ad select2-selection select2-selection--multiple" readOnly=""/> 
            </div>
          </div>
          <div className="select-wrapper">
            <div className="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Product Creation date
              <div className="custom-popup hidden" style={{right:"90px",display:"none",transform:"scale(0.8)"}}>Select the dates during a shopify product is created.</div>
            <div className="inline-block pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
              </svg>
            </div>
          </div>
            <div className="w-embed">
              <input type="text" id="datepickerproductcreation" className="form-input ad select2-selection select2-selection--multiple" readOnly=""/> 
            </div>
          </div>
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
            <button type="button" className="button applly-filter w-button" id="applyfilters">Apply<div className="shadow"></div><div className="glow" style={{willChange:"transform",transform:"translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",transformStyle:"preserve-3d"}}></div></button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}