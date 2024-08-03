var facebookFiltersTemplate = {
  get html() {
    return `<div class="w-form" style="margin-top:60px;" id="facebook-filters-template">
  <form id="email-form" name="email-form" data-name="Email Form" method="get" class="dashboard_form shadow-container"
    aria-label="Email Form">
    <div class="filters mb-3">
      <div class="price-input price">
        <div class="select-wrapper">
          <div class="div-block-71">
            <span class="absolute inset-y-0 end-0 grid w-10 place-content-center"><svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="h-4 w-4 absolute ml-2 mt-2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
            </span>
            <input type="text" class="form-input select2-selection adset-count w-input itemsetcounter !pe-10"
              maxlength="2560" name="keyword" data-name="Keyword" placeholder="Search..." id="keyword"
              style="width:100%;" autocomplete="off">
          </div>
        </div>
      </div>
      <div class="select-wrapper">
        <div class="select-label">Search Keyword In...</div>
        <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;"
          class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span
            class="selection"><span class="select2-selection select2-selection--multiple" role="combobox"
              aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list"></li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>

        <select id="searchkeyword" name="searchkeyword" placeholder="Search Keyword In..." data-name="keywordsearchin"
          class="form-input select-box-2 w-select hidden select2-hidden-accessible" data-select2-id="searchkeyword"
          tabindex="-1" style="" aria-hidden="true">
          <option value="All" data-select2-id="2">All</option>
          <option value="adtext">Ad Text</option>
          <option value="landingurl">Landing Url</option>
          <option value="pagename">Page Name</option>
          <option value="productname">Product Name</option>
        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1"
          style="width: 130px; display: none;"><span class="selection"><span
              class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true"
              aria-expanded="false" tabindex="0" aria-disabled="false"
              aria-labelledby="select2-searchkeyword-container"><span class="select2-selection__rendered"
                id="select2-searchkeyword-container" role="textbox" aria-readonly="true" title="All"><span
                  class="select2-selection__clear" title="Remove all items" data-select2-id="3">×</span>All</span><span
                class="select2-selection__arrow" role="presentation"><b
                  role="presentation"></b></span></span></span><span class="dropdown-wrapper"
            aria-hidden="true"></span></span>
      </div>
      <div class="select-wrapper country-select">
        <div class="select-label">Countries</div>

        <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;"
          class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span
            class="selection"><span class="select2-selection select2-selection--multiple" role="combobox"
              aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list"></li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>

        <select class="js-select2 form-input select-box-2 pb w-select hidden select2-hidden-accessible" multiple=""
          id="field" tabindex="-1" style="" aria-hidden="true" data-select2-id="field">
          <option value="US" data-badge="">USA</option>
          <option value="GB" data-badge="">United Kingdom</option>
          <option value="DK" data-badge="">Denmark</option>
          <option value="NL" data-badge="">The Netherlands</option>
          <option value="IE" data-badge="">Ireland</option>
          <option value="NO" data-badge="">Norway</option>
          <option value="SE" data-badge="">Sweden</option>
          <option value="FR" data-badge="">France</option>
          <option value="DE" data-badge="">Germany</option>
          <option value="IT" data-badge="">Italy</option>
          <option value="CA" data-badge="">Canada</option>
          <option value="NZ" data-badge="">New Zealand</option>
          <option value="AU" data-badge="">Australia</option>
          <option value="BR" data-badge="">Brazil</option>
          <option value="AT" data-badge="">Austria</option>
          <option value="ES" data-badge="">Spain</option>
          <option value="FI" data-badge="">Finland</option>
          <!-- <option value="CH" data-badge="">Switzerland</option> -->
        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="36"
          style="width: 130px; display: none;"><span class="selection"><span
              class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true"
              aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list" placeholder="Select Country..." style="width: 159.4px;">
                </li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
      </div>
      <div class="select-wrapper website-select">
        <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Website
          <div class="custom-popup hidden" style="right: 0px; display: none;">Technologies that the website can have.
          </div>
          <div class="inline-block pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z">
              </path>
            </svg>
          </div>
        </div>
        <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;"
          class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span
            class="selection"><span class="select2-selection select2-selection--multiple" role="combobox"
              aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list"></li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        <select class="js-select2 form-input select-box-2 pb w-select hidden select2-hidden-accessible" multiple=""
          id="website" tabindex="-1" style="" aria-hidden="true" data-select2-id="website">
          <option value="SH" data-badge="">Shopify</option>
          <option value="TP" data-badge="">Trustpilot</option>
          <option value="BU" data-badge="">Bundle App</option>
          <option value="SL" data-badge="">ShopLazza</option>
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
        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="89"
          style="width: 130px; display: none"><span class="selection"><span
              class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true"
              aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list" placeholder="Select Website..." style="width: 159.4px;">
                </li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
      </div>
      <div class="select-wrapper language-select">
        <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Language
          <div class="custom-popup hidden" style="right: 0px; display: none;">The language of the ad text.</div>
          <div class="inline-block pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z">
              </path>
            </svg>
          </div>
        </div>
        <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;"
          class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span
            class="selection"><span class="select2-selection select2-selection--multiple" role="combobox"
              aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list"></li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>

        <select class="js-select2 form-input select-box-2 pb w-select hidden select2-hidden-accessible" multiple=""
          id="language" tabindex="-1" style="" aria-hidden="true" data-select2-id="language">
          <option value="en">English</option>
          <option value="nl">Dutch</option>
          <option value="de">German</option>
          <option value="no">Norwegian</option>
          <option value="fr">French</option>
          <option value="sv">Swedish</option>
          <option value="da">Danish</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
          <option value="es">Spanish</option>
          <option value="fi">Finnish</option>
        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="101"
          style="width: 130px; display: none"><span class="selection"><span
              class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true"
              aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list" placeholder="Select Languages..." style="width: 159.4px;">
                </li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
      </div>
      <div class="select-wrapper">
        <div class="select-label">Active Adsets</div>
        <div class="div-block-71">
          <input type="text" aria-describedby="tooltip" data-dropdown-toggle="tooltip"
            class="form-input adset-count w-input dropdown select2-container select2-selection select2-selection--multipledropdowninitdropdowninitdropdowninitdropdowninit"
            maxlength="256" readonly="" id="adsetsumary" value="1 - 2650">
        </div>
        <div id="tooltip" class="hidden"
          style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1214px, 321px); padding: 15px; border: medium; background-color: white; border-radius: 0.5em; width: 350px; z-index: 9998; box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 8px 0px;"
          data-popper-placement="bottom" data-popper-reference-hidden="" data-popper-escaped="">
          <div class="mt-4">
            <p class="text-sm mb-3 font-medium">Active Adset Amount</p>
            <div class="range-slider">
              <div class="slider slide">
                <div class="progress" style="left: 2%; right: 33.9%;"></div>
              </div>
              <div id="total_likes_range" class="range-input range">
              </div>
              <div id="total_likes_values" class="price-input price">
                <div class="select-wrapper">
                  <div class="div-block-71">
                    <input type="number" class="form-input select2-selection adset-count w-input itemsetcounter"
                      maxlength="256" name="Min" data-name="Min" placeholder="Min" id="Min" required=""
                      style="width:100%;margin-top:10px;">
                  </div>
                </div>
              </div>
              <div class="select-wrapper">
                <div class="div-block-71">
                  <input type="number" class="form-input select2-selection adset-count w-input itemsetcounter"
                    maxlength="256" name="Max" data-name="Max" placeholder="Max" id="Max" required=""
                    style="width:100%;margin-top:10px;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="select-wrapper">
        <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Adspend
          <div class="custom-popup hidden" style="right: 0px; display: none;">Enter the adspend an ad should have in USD
            - this is the total adspend for 1 creative, not the campaign or the daily adspend.</div>
          <div class="inline-block pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z">
              </path>
            </svg>
          </div>
          <span class="px-[0.2rem] bg-gray-200 font-bold rounded font-white">Best filter <img
              src="https://app.winninghunter.com/images/fire.png" class="h-[0.8rem] w-[0.8rem]"></span>
        </div>
        <div class="div-block-71">
          <input type="text" aria-describedby="tooltipadspend" data-dropdown-toggle="tooltipadspend"
            class="form-input adset-count w-input dropdown select2-container select2-selection select2-selection--multipledropdowninitdropdowninitdropdowninitdropdowninit"
            maxlength="256" readonly="" id="adspendsummary" value="0$ - 999999$">
        </div>
        <div id="tooltipadspend" class="hidden"
          style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(154px, 374px); padding: 15px; border: medium; background-color: white; border-radius: 0.5em; width: 350px; z-index: 9998; box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 8px 0px;"
          data-popper-placement="bottom" data-popper-reference-hidden="" data-popper-escaped="">
          <div class="mt-4">
            <p class="text-sm mb-3 font-medium">Enter adspend</p>
            <div class="range-slider">
              <div class="slider slide">
                <div class="progress" style="left: 2%; right: 33.9%;"></div>
              </div>
              <div class="price-input price">
                <div class="select-wrapper">
                  <div class="div-block-71">
                    <input type="number" class="form-input select2-selection adset-count w-input adspendcounter"
                      maxlength="256" name="Minadspend" data-name="Minadspend" placeholder="Min" id="minadspend"
                      required="" style="width:100%;margin-top:10px;">
                  </div>
                </div>
              </div>
              <div class="price-input price">
                <div class="select-wrapper">
                  <div class="div-block-71">
                    <input type="number" class="form-input select2-selection adset-count w-input adspendcounter"
                      maxlength="256" name="Maxadspend" data-name="Maxadspend" placeholder="Max" id="maxadspend"
                      required="" style="width:100%;margin-top:10px;">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="select-wrapper" id="sortbyselectionbox">
        <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Sort By
          <div class="custom-popup hidden" style="right: 0px; z-index: 1999; display: none;">Sort ads by:
            <p class="text-align-left">"Winners" - Ads that performed well over a longer period of time.<br>
              "Trending" - Ads that recently performed well.<br>
              "Adset amount" - Ads with the most amount of adsets.<br>
              "Last seen" - Ads that are seen the last by our bots.
              "Adspend" - Ads that have spent the most.<br>
              "Found date" - Ads which were just found will be put at the top. - best option if you struggle with seeing
              the same ads<br>

            </p>
          </div>
          <div class="inline-block pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z">
              </path>
            </svg>
          </div>
          <span
            style="pointer-events:none;padding:2px;background-color: rgb(94, 148, 52);color:white;margin-left: 4px;border-radius: 4px;">Updated</span>
        </div>
        <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;"
          class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span
            class="selection"><span class="select2-selection select2-selection--multiple" role="combobox"
              aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list"></li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        <select id="Order" placeholder="Sort By..." name="Order" data-name="Order"
          class="form-input select-box-2 w-select hidden select2-hidden-accessible" data-select2-id="Order"
          tabindex="-1" style="" aria-hidden="true">
          <option value="">None</option>
          <option value="consistency" selected="">Winners (formerly consistency)</option>
          <option value="trending">Trending</option>
          <option value="adsetamount">Adset amount</option>
          <option value="lastseen">Last Seen</option>
          <option value="datefound" selected="" data-select2-id="8">Found date</option>
          <option value="adspend">Adspend</option>
        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="7"
          style="width: 130px; display: none"><span class="selection"><span
              class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true"
              aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-Order-container"><span
                class="select2-selection__rendered" id="select2-Order-container" role="textbox" aria-readonly="true"
                title="Found date"><span class="select2-selection__clear" title="Remove all items"
                  data-select2-id="9">×</span>Found date</span><span class="select2-selection__arrow"
                role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper"
            aria-hidden="true"></span></span>
      </div>
      <div class="">
        <div class="form-input  select2-selection sortingdirection no-before" direction="asc"
          style="position: relative;"><img src="https://app.winninghunter.com/images/sort-up.png" width="25px"
            height="25px" class="arrow-image-direction has-popup">
          <div class="custom-popup hidden" style="display: none;">Sort from low to high.</div>
        </div>
        <div class="form-input select2-selection sortingdirection no-before active" direction="desc"
          style="position: relative;"><img src="https://app.winninghunter.com/images/sort-down.png" width="25px"
            height="25px" class="arrow-image-direction has-popup">
          <div class="custom-popup hidden" style="display: none;">Sort from high to low.</div>
        </div>
        <input type="hidden" class="sort-direction" value="desc">
      </div>
      <div class="" style=" margin-right: 10px;display:none;">
        <input type="checkbox" class="activestatus select2-custom-checkbox" checked="">
        <b style="display: inline-block;">Hide inactive</b>
        <div style="display: inline-block;position: absolute;" class="has-popup"><img class="has-popup"
            style="margin-left:3px;" src="https://app.winninghunter.com/images/question-circle.svg" height="20px"
            width="20px">
          <div class="custom-popup hidden" style="display: none;">Hide inactive ads.<br><br> Note: Not all ads that are
            inactive will be excluded. Always check the active status in the Facebook Ad Library.</div>
        </div>
      </div>
      <div class="select-wrapper">
        <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Scaling
          <div class="custom-popup hidden" style="right: 0px; display: none;">When adsets are added, the ad is
            considered "upscaling". </div>
          <div class="inline-block pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z">
              </path>
            </svg>
          </div>
        </div>
        <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;"
          class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span
            class="selection"><span class="select2-selection select2-selection--multiple" role="combobox"
              aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list"></li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        <select id="scaling" name="scaling" placeholder="Scaling" data-name="scaling"
          class="form-input select-box-2 w-select hidden select2-hidden-accessible" data-select2-id="scaling"
          tabindex="-1" style="" aria-hidden="true">
          <option value="" data-select2-id="11">None</option>
          <option value="nodownscaling">No Downscaling</option>
          <option value="upscaling">Upscaling Only</option>
          <option value="downscaling">Downscaling Only</option>
        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="10"
          style="width: 130px; display: none"><span class="selection"><span
              class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true"
              aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-scaling-container"><span
                class="select2-selection__rendered" id="select2-scaling-container" role="textbox"
                aria-readonly="true"><span class="select2-selection__placeholder">Scaling</span></span><span
                class="select2-selection__arrow" role="presentation"><b
                  role="presentation"></b></span></span></span><span class="dropdown-wrapper"
            aria-hidden="true"></span></span>
      </div>
      <div class="select-wrapper">
        <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Media type
          <div class="custom-popup hidden" style="right: 20px; display: none;">Select whether the ad is an image or a
            video.</div>
          <div class="inline-block pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z">
              </path>
            </svg>
          </div>
        </div>
        <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;"
          class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span
            class="selection"><span class="select2-selection select2-selection--multiple" role="combobox"
              aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list"></li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        <select id="Order-2" name="Order-2" placeholder="Media Type" data-name="Order 2"
          class="form-input select-box-2 w-select hidden select2-hidden-accessible" data-select2-id="Order-2"
          tabindex="-1" style="" aria-hidden="true">
          <option value="" data-select2-id="13">None</option>
          <option value="videos">Videos</option>
          <option value="images">Images</option>
          <option value="carousel">Carousel</option>
          <option value="dco">DCT/advantage+/ASC</option>
        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="12"
          style="width: 130px; display: none"><span class="selection"><span
              class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true"
              aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-Order-2-container"><span
                class="select2-selection__rendered" id="select2-Order-2-container" role="textbox"
                aria-readonly="true"><span class="select2-selection__placeholder">Media Type</span></span><span
                class="select2-selection__arrow" role="presentation"><b
                  role="presentation"></b></span></span></span><span class="dropdown-wrapper"
            aria-hidden="true"></span></span>
      </div>
      <div class="select-wrapper">
        <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Page type
          <div class="custom-popup hidden" style="right: 20px; display: none;">Select the type of landing page.</div>
          <div class="inline-block pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z">
              </path>
            </svg>
          </div>
        </div>
        <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;"
          class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span
            class="selection"><span class="select2-selection select2-selection--multiple" role="combobox"
              aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list"></li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        <select id="pagetype" name="pagetype" placeholder="Page Type" data-name="pagetype"
          class="form-input select-box-2 w-select hidden select2-hidden-accessible" data-select2-id="pagetype"
          tabindex="-1" style="" aria-hidden="true">
          <option value="" data-select2-id="15">None</option>
          <option value="products">Product Pages</option>
          <option value="collections">Collection Pages</option>
          <option value="funnels">Funnels</option>
          <option value="nofunnels">No Funnels</option>
        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="14"
          style="width: 130px; display: none"><span class="selection"><span
              class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true"
              aria-expanded="false" tabindex="0" aria-disabled="false"
              aria-labelledby="select2-pagetype-container"><span class="select2-selection__rendered"
                id="select2-pagetype-container" role="textbox" aria-readonly="true"><span
                  class="select2-selection__placeholder">Page Type</span></span><span class="select2-selection__arrow"
                role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper"
            aria-hidden="true"></span></span>
      </div>
      <!--                             <div style="position:relative;display:flex;" class="select-wrapper">
      <img src="https://app.winninghunter.com/images/premiumonly.png" class="image-3" style="z-index: 9999;object-fit: contain;position:absolute;top: -100px;left: -90px;height: 130px;pointer-events: none;">
      <div class="select-wrapper">
        <div class="select-label">Trackable</div>
        <span dir="ltr" data-select2-id="29" style="width: 100%;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        <select id="trackable" placeholder="Trackable Filter" name="trackable" data-name="trackable" class="form-input select-box-2 w-select hidden">
          <option value="">None</option>
          <option value="trackable">Revenue Trackable</option>
          <option value="active">Active Websites</option>
        </select>
      </div>
    </div> -->
      <div class="select-wrapper niche-select">
        <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">
          <div class="custom-popup hidden" style="right: 90px; display: none;">This filter might not show ALL ads in a
            certain niche, only use it if it really saves you time looking in a certain niche.

            For Fashion: Use the "Fashion Dropship" filter first because it gives way more ads, else use this "clothing"
            niche filter.</div>Niche

          <div class="inline-block pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z">
              </path>
            </svg>
          </div>

          <span
            style="pointer-events:none;padding:2px;background-color: rgb(94, 148, 52);color:white;margin-left: 4px;border-radius: 4px;">Updated</span>
        </div>

        <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;"
          class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span
            class="selection"><span class="select2-selection select2-selection--multiple" role="combobox"
              aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list"></li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>

        <select class="js-select2 form-input select-box-2 pb w-select hidden select2-hidden-accessible" multiple=""
          id="niches" tabindex="-1" style="" aria-hidden="true" data-select2-id="niches">
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
        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="49"
          style="width: 130px; display: none"><span class="selection"><span
              class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true"
              aria-expanded="false" tabindex="-1" aria-disabled="false">
              <ul class="select2-selection__rendered">
                <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search"
                    tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"
                    role="searchbox" aria-autocomplete="list" placeholder="Select Niches..." style="width: 159.4px;">
                </li>
              </ul>
            </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
      </div>
      <div class="select-wrapper">
        <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Ad creation date
          <div class="custom-popup hidden" style="right: 90px; display: none; transform: scale(0.8);">Select the dates
            during which the ads were launched.</div>
          <div class="inline-block pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z">
              </path>
            </svg>
          </div>
        </div>
        <div class="w-embed">
          <input type="text" id="datepicker" class="form-input ad select2-selection select2-selection--multiple"
            readonly="">
        </div>
      </div>
      <div class="select-wrapper">
        <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Last seen date
          <div class="custom-popup hidden" style="right: 90px; display: none; transform: scale(0.8);">Select the dates
            during which the ads were last seen by one of our bots.</div>
          <div class="inline-block pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z">
              </path>
            </svg>
          </div>
        </div>
        <div class="w-embed">
          <input type="text" id="datepickerlastseen" class="form-input ad select2-selection select2-selection--multiple"
            readonly="">
        </div>
      </div>
      <div class="select-wrapper">
        <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Product Creation
          date
          <div class="custom-popup hidden" style="right: 90px; display: none; transform: scale(0.8);">Select the dates
            during a shopify product is created.</div>
          <div class="inline-block pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z">
              </path>
            </svg>
          </div>
        </div>
        <div class="w-embed">
          <input type="text" id="datepickerproductcreation"
            class="form-input ad select2-selection select2-selection--multiple" readonly="">
        </div>
      </div>
    </div>
    <hr>
    <div class="flex w-full justify-between">
      <div class="flex justify-between flex-wrap gap-1 pb-1 hidden-scroll mb-1 mt-3 preset-filters">
        <div data-active="false" id="euwinners"
          class="whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80">
          <div class="mr-1"></div><img
            src="https://app.winninghunter.com/images/european-union-flag-on-trophee-circle.png" class="h-6 w-6">
          European winners
        </div>
        <div data-active="false" id="usawinners"
          class="whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80">
          <div class="mr-1"></div><img src="https://app.winninghunter.com/images/usa-flag-with-uk-flag.png"
            class="h-6 w-6">USA (Big 5) winners
        </div>
        <div data-active="false" id="dropshipads"
          class="whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80">
          <div class="mr-1"></div><img src="https://app.winninghunter.com/images/drop-shipping.png"
            class="h-6 w-6">Dropship Ads
        </div>
        <div data-active="false" id="fashionads"
          class="whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80">
          <div class="mr-1"></div><img src="https://app.winninghunter.com/images/clothes-cool-brand.png"
            class="h-6 w-6">Fashion Dropship
        </div>
        <div data-active="false" id="topbrands"
          class="whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background has-popup relative">
          <div class="custom-popup hover:opacity-100 hidden"
            style="left: 0px; text-wrap: wrap; bottom: 35px; font-size: 13px; display: none;">This preset will get more
            branded products. If you want to see dropship branded (one product or niche stores) keep the ad creation
            date to the last 1, 2 or 3 months, set product creation date also to the last 1, 2 or 3 months. If you want
            to see more real brands, put the ad creation date to the last 6 or 12 months, set product creation date from
            4 months to a few years back and change the technology to: Hyros, Gorgias, TripleWhale (disable shopify)
          </div>
          <div class="mr-1"></div><img src="https://app.winninghunter.com/images/award.png" class="h-6 w-6">Top Branded
        </div>
      </div>
      <div class="div-block-57 self-end">
        <a href="#" class="cancel w-button"
          onclick="document.getElementById('email-form').reset(); $('.select2-selection__choice__remove').click(); picker.reset(); lastseenpicker.reset(); productcreationpicker.reset();">Cancel</a>
        <button type="button" class="button applly-filter w-button" id="applyfilters">Apply<div class="shadow"></div>
          <div class="glow"
            style="will-change: transform; transform: translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
          </div>
        </button>
      </div>
    </div>
  </form>
</div>`
  }
}

export default facebookFiltersTemplate