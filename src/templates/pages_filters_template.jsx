var pagesFiltersTemplate = {
  get html() {
    return `<div class="w-form" style="margin-top:60px;" id="pages-filters">
  <form id="email-form" name="email-form" data-name="Email Form" method="get" class="dashboard_form" autocomplete="off" aria-label="Email Form">
    <div class="search-bar-2">
      <div class="filters">
      <div class="select-wrapper country-select">
        <div class="select-label">Countries</div>
        <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        <select class="js-select2 form-input select-box-2 pb w-select hidden select2-hidden-accessible" multiple="" id="field" data-select2-id="field" tabindex="-1" style="" aria-hidden="true">
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="DK">Denmark</option>
          <option value="NL">Netherlands</option>
          <option value="NO">Norway</option>
          <option value="SE">Sweden</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
          <option value="IT">Italy</option>
        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style="width: 130px; display: none"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Select Country..." style="width: 159.4px;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
      </div>
      <div class="select-wrapper website-select">
        <div class="select-label">Website</div>
        <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        <select class="js-select2 form-input select-box-2 pb w-select hidden select2-hidden-accessible" multiple="" id="website" data-select2-id="website" tabindex="-1" style="" aria-hidden="true">
          <option value="SH">Shopify</option><option value="SL">ShopLazza</option><option value="SI">ShopLine</option><option value="XS">XShoppy</option><option value="YC">YouCan</option><option value="DI">Dropify</option><option value="MS">mShop</option><option value="SB">ShopBase</option><option value="PP">PayPal</option><option value="KL">Klarna</option><option value="WC">WooCommerce</option><option value="TT">TikTok Pixel</option><option value="TW">Twitter Pixel</option><option value="PI">Pinterest Pixel</option><option value="GO">Google Analytics</option><option value="SC">Snapchat Pixel</option><option value="FB">Facebook Pixel</option><option value="MG">Magento</option><option value="WP">WordPress</option><option value="SQ">Squarespace</option><option value="PS">PrestaShop</option><option value="GM">Google Tag Manager</option><option value="KV">Klaviyo</option><option value="CO">Checkout</option><option value="HJ">Hotjar</option><option value="WX">Wix</option><option value="AR">AdRoll</option><option value="BC">BigCommerce</option><option value="MC">Mailchimp</option>                              </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="3" style="width: 130px; display: none"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Select Website..." style="width: 159.4px;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
      </div>
      <div class="select-wrapper niche-select">
        <div class="select-label">Niche</div>
        <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
        <select class="js-select2 form-input select-box-2 pb w-select hidden select2-hidden-accessible" multiple="" id="niches" data-select2-id="niches" tabindex="-1" style="" aria-hidden="true">
          <option value="beauty">Beauty</option>
          <option value="car">Car</option>
          <option value="clothing">Clothing</option>
          <option value="brand">Clothing Brands</option>
          <option value="child">Children</option>
          <option value="shopping">General</option>
          <option value="home">Home</option>
          <option value="pet">Pets</option>
        </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style="width: 130px; display: none"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Select Niches..." style="width: 159.4px;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
      </div>
       <div class="select-wrapper">
          <div class="slider-label">
            <img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px"> Likes
          </div>
          <input class="div-block-71 js-ion-range-slider irs-hidden-input" id="page_like_range" tabindex="-1" readonly="">
      </div>
      <div class="select-wrapper">
          <div class="slider-label"><img src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px"> Followers</div>
          <input class="div-block-71 js-ion-range-slider irs-hidden-input" id="instagram_followers_range" tabindex="-1" readonly="">
      </div>
      <div class="select-wrapper">
          <div class="slider-label">Ads</div>
          <input class="div-block-71 js-ion-range-slider irs-hidden-input" id="ads_range" tabindex="-1" readonly="">
      </div>
      <div class="select-wrapper">
          <div class="slider-label">Adsets</div>
          <input class="div-block-71 js-ion-range-slider irs-hidden-input" id="adsets_range" tabindex="-1" readonly="">
      </div>
      <div class="select-wrapper">
          <div class="slider-label">Avg. Adsets Per Ad</div>
          <input class="div-block-71 js-ion-range-slider irs-hidden-input" id="avg_adsets_range" tabindex="-1" readonly="">
      </div>
      <div class="div-block-57">
        <a href="#" class="cancel w-button" onclick="document.getElementById('email-form').reset(); $('.js-ion-range-slider').data('ionRangeSlider').reset(); ">Cancel</a>
        <button type="button" class="button applly-filter w-button" id="applyfilters">Apply<div class="shadow"></div><div class="glow" style="will-change: transform; transform: translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"></div></button>
      </div>
    </div>
    </div>
  </form>
</div>`
  }
}

export default pagesFiltersTemplate