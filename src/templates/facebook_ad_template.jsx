var facebookAdTemplate = {
  id:null,
  adsets:null,
  page_ads:null,
  product_creation_date:null,
  content_template:null,
  title:null,
  page_name:null,
  page_profile_picture_url:null,
  publisherPlatforms:null,
  link_url:null,
  page_ads_popup:'',
  price:'',
  store_revenue:0,

  get html() {
    return `<div id="w-node-_8922055b-736f-9646-6ca8-979550297294993-de161bc0" class="one_add_wrapper" style="position:relative;"
  copiwin-id="${this.id}">

  <div class="pageadcount action-button has-popup" data-platform="facebook" data-page-id="170602576882503-97679">
    <div class="custom-popup hidden" style="display: none;">The amount of ads this advertiser has. <br>Click to view
      them.</div><img height="20px" width="20px" src="https://app.winninghunter.com/images/page-ads.svg"
      style="pointer-events:none;" qkvi191kw=""> ${this.page_ads}
  </div>

  <div class="add_item">
    <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
      <div class="frameitem-title-group">

        <div class="text-block-7 ad-captions"><span class="currentamountofadsets">${this.adsets} Adset</span> uses this
          creative</div>
        <div class="favorite-wrapper flex" style="gap: 10px;">

          <div style="margin-right:6px;" class="has-popup adstat-block trending-block">
            <div class="custom-popup hidden" style="display: none; transform: scale(0.8);">Ad Score: Testing <br><span
                style="font-size:0.7rem;font-weight:500;"> - Ad is running for less than 3 days </span></div>
            <div class="adscore-ping"></div>
            <div class="adscore-ping"></div>
            <div class="adscore-ping" style="background-color:#FD0250;box-shadow: 0 0 4px 0.2px #FD0250;"></div>
          </div>
          <div id="tooltip97955029729499397679"
            class="dropdown-container has-shadow rounded mt-1 text-size-small hidden" data-popper-placement="bottom"
            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(864px, 604px);">
            <div class="">
              <p class="text-sm font-medium"></p>
              <div class="price-input price">
                <div class="select-wrapper">
                  <div>
                    <p class="text-xs text-slate-600">Share this ad with others:</p>
                    <input placeholder="Share Url" readonly=""
                      class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      value="https://app.winninghunter.com/ad/979550297294993" onclick="copyad('979550297294993')">
                    <button type="button" class="dropdown-item save-ad-lid off" data-platform="facebook"
                      data-id="979550297294993"><img width="15px"
                        src="https://app.winninghunter.com/images/heart-outline.svg"> Save this ad</button>
                    <hr>
                    <button type="button" class="dropdown-item hide-advertiser-lid off" data-platform="facebook"
                      data-id="170602576882503"><img loading="lazy" width="17px"
                        src="https://app.winninghunter.com/images/eye-closed.svg"> Hide this advertiser</button>
                    <hr>

                    <a target="__BLANK" href="https://laboheme.shop/collections/all?sort_by=best-selling"
                      class="dropdownnode action-button dropdown-item"><img width="20px"
                        src="https://app.winninghunter.com/images/SH.svg"> Best Selling</a>
                    <hr>
                    <button type="button" class="dropdown-item"
                      onclick="openPiModal('https://laboheme.shop', 'la-boheme-girls-clyde-shirt-denim')"><img
                        width="15px" src="https://app.winninghunter.com/images/link-black-mini.svg"> Import
                      Product</button>
                    <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                      href="/sales-tracker?store=${this.link_url}" target="__BLANK"><img width="20px"
                        src="https://app.winninghunter.com/images/track.png"> Track Store</a>
                    <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                      href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/ec05b39c90ab04f885f567b318d10537c6456746d9bb9d5571eb559816c4fb4b.jpg"
                      target="__BLANK"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" loading="lazy" class="w-4 h-4 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
                        </path>
                      </svg> Find Competitors with Magic Ai</a>
                    <a target="__BLANK" href="https://www.similarweb.com/website/laboheme.shop"
                      class="dropdownnode action-button dropdown-item block"><img width="20px"
                        src="https://app.winninghunter.com/images/similiarweb.png"> Website Traffic</a>
                  </div>
                </div>
              </div>
              <div class="select-wrapper">
                <div class="div-block-71">
                </div>
              </div>
            </div>
          </div>
          <div class="threedot-more-info action-button">
            <img src="https://app.winninghunter.com/images/three-dots-vertical.svg"
              style="top:0;cursor:pointer;line-height: 26px;width: 20px;height: 18px;display:block;margin: 0 auto;"
              aria-describedby="tooltip97955029729499397679" data-dropdown-toggle="tooltip97955029729499397679"
              class="dropdowninit">
          </div>
        </div>
      </div>
      <div
        style="padding-left:1rem;font-size:13px;font-weight:600;color: #999;display: grid; grid-template-columns: auto minmax(0, 1fr);column-gap: 20px;">
        <span class="has-popup relative">
          <div class="custom-popup left-0 hidden" style="display: none; transform: scale(1);">The revenue of the whole
            store today from the <a class="font-bold" href="/sales-tracker">Sales Tracker</a>.</div>Store Rev. Today:
          A$${this.store_revenue}
        </span>
      </div>

    </div>
    <div class="primary-copy-cutoff primary-copy">
      <p>${this.title}</p>
    </div>
    <hr style="width: 92%;margin: 0 auto;">
    <div style="position: absolute;z-index: 1;display: flex;gap: 10px;justify-content: end;" class="w-full text-sm p-1">
      <div class="has-popup relative">
        <div class="custom-popup left-[-50px] hidden" style="display: none;">Product Creation Date</div><span
          class="p-1 font-bold bg-white rounded pointer-events-none" style="opacity: 0.79;"> <img
            src="https://app.winninghunter.com/images/box.svg" class="h-4 v-4"> ${this.product_creation_date}</span>
      </div>
    </div>
    <div class="video-2 w-video w-embed">${this.content_template}</div>
    <div class="frameitem-title-box" style="background-color:white;">
      <div class="frameitem-button-group gap-0">

        <div class="linkclicks has-popup relative">
          <div class="custom-popup hidden" style="left: -100px; display: none; transform: scale(1);">Page Information
            <hr> <span class="text-[14px]">Advertiser runs in <img
                src="https://app.winninghunter.com/images/country-globe.svg"> 3 countries with <img height="14px"
                width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg" style="pointer-events:none;">
              ${this.page_ads} ads <div class="p-[2px] border rounded"><img
                  src="https://app.winninghunter.com/images/AU.png" loading="lazy" alt="" height="10px" width="10px"
                  class="AU" style="border:none;border-radius: 50%;"><img
                  src="https://app.winninghunter.com/images/US.png" loading="lazy" alt="" height="10px" width="10px"
                  class="US" style="border:none;border-radius: 50%;"><img
                  src="https://app.winninghunter.com/images/NZ.png" loading="lazy" alt="" height="10px" width="10px"
                  class="NZ" style="border:none;border-radius: 50%;"></div></span>
            <hr class="mt-[10px]">
            <div class="flex mt-2 flex-col">
              <span style="font-size:13px;"><img
                  style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                  src="${this.page_profile_picture_url}" onerror="this.src='https://app.winninghunter.com/images/facebook_no_profile_pic.png'"> La
                Bohème Lifestyle </span>
              <a class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                copiwin-id="${this.id}" onclick="thisad = $(this).closest('.one_add_wrapper'); $(thisad).find('.pageadcount').click();document.dispatchEvent(new Event('open_page_ads_popup'));">View
                Page Ads</a>
            </div>
          </div>
          <div class="flex pointer-events-none" style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;">
            <img style="border-radius: 50%;flex-shrink: 0;
          margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
          width: 30px;" src="${this.page_profile_picture_url}"
              onerror="this.src='https://app.winninghunter.com/images/facebook_no_profile_pic.png'">
            <div class="pointer-events-none min-w-100">
              <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">${this.page_name}</div>
              <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                  class="flex pointer-events-none"><img src="https://app.winninghunter.com/images/country-globe.svg">
                  3</span> <span class="pointer-events-none"> <img height="14px" width="14px"
                    src="https://app.winninghunter.com/images/page-ads-slate.svg" style="pointer-events:none;">
                  ${this.page_ads}</span></p>
            </div>
          </div>
        </div>
        <div class="product-info-onad ml-[30px] border-l pl-2 has-popup relative">

          <div class="custom-popup !w-[240px] hidden" style="left: -100px; display: none; transform: scale(0.8);">
            Product Information
            <hr>

            <span class="text-[14px]">
              <p>Price: A$${this.price}</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <hr>
              <p class="text-xs">First ad started: May 26 2024 <span
                  style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">1
                  month ago</span></p>
              <p class="text-xs">Last ad started: Jul 21 2024 <span
                  style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">1
                  day ago</span></p>
              <p class="text-muted font-light text-xs"></p>
            </span>
            <hr style="margin-top:10px;">

            <div class="flex mt-2 flex-col">
              <span style="font-size:13px;"><img
                  style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                  src="http://laboheme.shop/cdn/shop/files/LA-BOHEME-GIRLS-CLYDE-SHIRT-DENIM.jpg?v=1715057335"
                  onerror="this.src='https://app.winninghunter.com/images/facebook_no_profile_pic.png'"> default </span>
              <a href="${this.link_url}" target="__BLANK"
                class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none">Visit Product Page</a>
              <a class="view-product-ads text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                onclick="addmodal = $(this).closest('.add_item').find('.mainpopup').find('.addmodal'); handlePageProductSwitch(addmodal, forcestateto='product', openmodal=true);">View
                Product Ads</a>
            </div>
          </div>
          <div class="text-sm pointer-events-none">
            <div class="flex pointer-events-none"
              style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
          margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
          width: 30px;" src="http://laboheme.shop/cdn/shop/files/LA-BOHEME-GIRLS-CLYDE-SHIRT-DENIM.jpg?v=1715057335"
                onerror="this.src='https://app.winninghunter.com/images/facebook_no_profile_pic.png'">
              <div class="pointer-events-none">
                <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">default</div>
                <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                    class="flex pointer-events-none">A$${this.price}</span> <span class="flex pointer-events-none"><img
                      height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                      style="pointer-events:none;"> 21</span> <span class="flex pointer-events-none"><img height="13px"
                      width="13px" class="text-slate-500 ml-[4px]"
                      src="https://app.winninghunter.com/images/adspend.svg" style="pointer-events:none;">0</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="searchadchild">
          <div class="add-popup" style="overflow-y: scroll;flex-direction: column;">
            <input type="hidden" id="adhistory"
              adsets="{&quot;2024-07-21 00:00:00&quot;:&quot;1&quot;,&quot;2024-07-22 04:38:27&quot;:&quot;1&quot;,&quot;2024-07-22 04:38:32&quot;:&quot;1&quot;}"
              adspend="[]" views="null" likes="null" comments="null" shares="null">
            <input type="hidden" id="randomToken" value="97679">
            <input type="hidden" id="productidstar" value="979550297294993">
            <div class="info_body" style="margin: 0 auto;">
              <div id="w-node-_3eb5300b-0206-f91c-5505-e52b666a5390-de161bc0" class="frameitem-video-wrapper">
                <div class="html-embed-5 w-embed">
                  <img
                    src="https://adslibrary.eu-central-1.linodeobjects.com/19e6908814f39fbd9efdb18a3c3a30a53fd615bef7fe08a48cec60a1040d5725.jpg"
                    style="width:300px;object-fit:contain;display:block;">
                </div>
                <br> Ads History <canvas id="chart97955029729499397679"></canvas>
              </div>
              <div id="w-node-b50b7bcc-f095-371f-c679-5cab2590eb82-de161bc0" class="div-block-64">
                <div class="frameitem-details">
                  <div class="frameitem_component">
                    <div class="frameitem_accordion collapse-frame">
                      <div class="frameitem-dropdown-title-wrapper">
                        <div class="text-size-medium text-weight-bold">Primary Text</div>
                        <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg"
                          loading="lazy" alt="" class="frameitem-arrow">
                      </div>
                      <div class="frameitem-description">
                        <div class="margin-bottom margin-small">
                          <p>${this.title}</p>
                        </div>
                      </div>
                    </div>
                    <div class="frameitem_accordion collapse-frame">
                      <div class="frameitem-dropdown-title-wrapper">
                        <div class="text-size-medium text-weight-bold">Description</div>
                        <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg"
                          loading="lazy" alt="" class="frameitem-arrow">
                      </div>
                      <div class="frameitem-description">
                        <div class="margin-bottom margin-small">
                          <p>${this.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="button w-button action-button"
                  onclick="getAdCopy('none', '979550297294993', this)">Generate Ad Copy <svg width="24px"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)"
                    class="d-inline" style="margin-left:.5rem;">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier" style="width:20px;">
                      <path
                        d="M15.2073 4.50372C18.5358 2.97323 20.2 2.20799 20.996 3.00399C21.792 3.79998 21.0268 5.46421 19.4963 8.79267L18.6427 10.649C18.3371 11.3137 18.1843 11.646 18.1843 11.9999C18.1843 12.3539 18.3371 12.6862 18.6427 13.3509L19.4963 15.2072C21.0268 18.5357 21.792 20.1999 20.996 20.9959C20.2 21.7919 18.5358 21.0266 15.2073 19.4962L13.351 18.6426C12.6863 18.337 12.354 18.1841 12.0001 18.1841C11.6461 18.1841 11.3138 18.337 10.6491 18.6426L8.7928 19.4962C5.46434 21.0266 3.80011 21.7919 3.00411 20.9959C2.20811 20.1999 2.97335 18.5357 4.50384 15.2072L5.35741 13.3509C5.66304 12.6862 5.81586 12.3539 5.81586 11.9999C5.81586 11.646 5.66304 11.3137 5.35741 10.649L4.50384 8.79267C2.97335 5.46421 2.20811 3.79998 3.00411 3.00399C3.80011 2.20799 5.46434 2.97323 8.7928 4.50372L10.6491 5.35729C11.3138 5.66292 11.6461 5.81574 12.0001 5.81574C12.354 5.81574 12.6863 5.66292 13.351 5.35729L15.2073 4.50372Z"
                        fill="#fff"></path>
                    </g>
                  </svg></button>
                <div class="adcopygeneratorbox" id="adcopy979550297294993"></div>
                <div class="frameitem-country">
                  Share:
                  <img src="https://app.winninghunter.com/images/share-ios-export.svg"
                    style="cursor:pointer;height:30px;display:inline-block;" class="share-ios action-button"
                    onclick="copyad('979550297294993')">
                  <!-- <div class="frameitem-country-wrapper">
                  <img src="https://app.winninghunter.com/images/NZ.png" loading="lazy" alt="" class="frameitem-countr-flag">
                  <div>
                    <div class="frameitem-small-text">Ad Country</div>
                    <div class="frameitem-country-name">New Zealand</div>
                  </div>
                </div>  
                <div>
                  <a href="#" onclick="" class="button w-button">Share ad</a>
                </div> -->

                </div>
                <div class="frameitem-links-grid">
                  <div id="w-node-c767e22e-faf5-a876-818f-2bd868c356f9-de161bc0" class="frameitem-link-item">
                    <img src="https://app.winninghunter.com/images/store-svgrepo-com.svg" loading="lazy" alt=""
                      class="frameitem-icon">
                    <div>
                      <div class="frameitem-small-text">Store</div>
                      <a href="${this.link_url}" target="__BLANK" class="frameitem-link">Product Page</a>
                    </div>
                  </div>
                  <div id="w-node-_1ebb295b-90a9-56aa-efb5-ed9f7c9c979b-de161bc0" class="frameitem-link-item">
                    <img src="https://app.winninghunter.com/images/magiccard-expense-svgrepo-com.svg" loading="lazy"
                      alt="" class="frameitem-icon">
                    <div>
                      <div class="frameitem-small-text">Ad Library;</div>
                      <a href="https://www.facebook.com/ads/library/?id=979550297294993" target="__BLANK"
                        class="frameitem-link">Ad link</a>
                    </div>
                  </div>
                  <div id="w-node-bfa31db7-cfe0-3720-565c-00b513e721c8-de161bc0" class="frameitem-link-item">
                    <img src="https://app.winninghunter.com/images/link-svgrepo-com.svg" loading="lazy" alt=""
                      class="frameitem-icon">
                    <div>
                      <div class="frameitem-small-text">Page Ad Library</div>
                      <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=170602576882503&amp;search_type=page&amp;media_type=all"
                        target="__BLANK" class="frameitem-link">Page Ad Library</a>
                    </div>
                  </div>
                  <div id="w-node-_0b943d44-7c96-4a99-eb12-328b90a563b7-de161bc0" class="frameitem-link-item">
                    <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" loading="lazy" alt=""
                      class="frameitem-icon">
                    <div>
                      <div class="frameitem-small-text">Photo</div>
                      undefined
                    </div>
                  </div>
                  <div class="frameitem-link-item">
                    <img src="https://app.winninghunter.com/images/track.png" loading="lazy" alt=""
                      class="frameitem-icon">
                    <div>
                      <a tabindex="0" class="frameitem-link" href="/sales-tracker?store=${this.link_url}"
                        target="__BLANK">Track Store</a>
                    </div>
                  </div>
                  <div class="frameitem-link-item">
                    <img src="https://app.winninghunter.com/images/link-black-mini.svg" loading="lazy" alt=""
                      class="frameitem-icon">
                    <div>
                      <a type="button" class="frameitem-link"
                        onclick="openPiModal('https://laboheme.shop', 'la-boheme-girls-clyde-shirt-denim')"> Import
                        Product</a>
                    </div>
                  </div>

                  <div class="frameitem-link-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" loading="lazy" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
                      </path>
                    </svg>
                    <div>
                      <a tabindex="0" class="frameitem-link"
                        href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/ec05b39c90ab04f885f567b318d10537c6456746d9bb9d5571eb559816c4fb4b.jpg"
                        target="__BLANK">Find Competitors with Magic AI</a>
                    </div>
                  </div>
                </div>

                <div class="frameitem-video-download">
                </div>

              </div>
            </div>
            <!--<div class="info_body" style="background: transparent;min-width: 140%;display:block;">
              <div>
                <h4 style="color: white;">Competitor Search</h4>
                <div id="competitor-adds-list97955029729499397679" class="compadslist"></div>
              </div>
          </div> -->
            <img src="https://app.winninghunter.com/images/close-svgrepo-com.svg" loading="lazy"
              data-w-id="2${this.page_ads}8445-fbd2-6de8-2cf2-fe405a990048" alt="" class="close-ad">
          </div>
        </div>
      </div>
    </div>
    <hr style="width: 92%; margin: 0 auto;">
    <div class="pageads">
      ${this.page_ads_popup}
    </div>
    <div class="add_info">
      <div class="add-meta-wrapper">
        <div class="add-sub-info">
          <div>Scaling: <span
              style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">0%</span>
          </div>
          <div>Platforms: ${this.publisherPlatforms}</div>
          <div class="has-popup relative">
            <div class="custom-popup hidden" style="left: 0px; display: none;">Countries
              <hr>
              <div class="text-sm p-1">
                <p class="flex w-full gap-1 mt-1"><img src="https://app.winninghunter.com/images/NZ.png" loading="lazy"
                    alt="" height="20px" width="20px" class="NZ w-5 h-5" style="border:none;border-radius: 50%;">New
                  Zealand</p>
                <p class="flex w-full gap-1 mt-1"><img src="https://app.winninghunter.com/images/AU.png" loading="lazy"
                    alt="" height="20px" width="20px" class="AU w-5 h-5"
                    style="border:none;border-radius: 50%;">Australia</p>
              </div>
            </div>Countries: <img src="https://app.winninghunter.com/images/NZ.png" loading="lazy" alt="" height="20px"
              width="20px" class="NZ" style="border:none;border-radius: 50%;height:20px;"><img
              src="https://app.winninghunter.com/images/AU.png" loading="lazy" alt="" height="20px" width="20px"
              class="AU" style="border:none;border-radius: 50%;height:20px;">
          </div>
          <div>Website: <img src="https://app.winninghunter.com/images/SH.svg" height="20px" width="20px"
              class="techicon SHtip" title="Shopify"><img src="https://app.winninghunter.com/images/PP.svg"
              height="20px" width="20px" class="techicon PPtip" title="PayPal"><img
              src="https://app.winninghunter.com/images/GM.svg" height="20px" width="20px" class="techicon GMtip"
              title="Google Tag Manager"><img src="https://app.winninghunter.com/images/KV.svg" height="20px"
              width="20px" class="techicon KVtip" title="Klaviyo"><img src="https://app.winninghunter.com/images/CO.svg"
              height="20px" width="20px" class="techicon COtip" title="Checkout"><img
              src="https://app.winninghunter.com/images/GG.svg" height="20px" width="20px" class="techicon GGtip"
              title="Gorgias"></div>


          <div>Started: Jul 21 2024 <span
              style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">1
              day ago</span></div>
          <div class="text-dark"><b>Adsets: ${this.adsets}</b></div>
          <div class="add-sub-info">
            <div>Last seen: Jul 22 2024 <span
                style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">18
                seconds ago</span></div>
            <div class="text-dark"><b>Adsets: ${this.adsets}</b></div>
          </div>

        </div>
        <button type="button" class="dots see-details action-button"
          comptarget="#competitor-adds-list97955029729499397679"
          imageurl="https://adslibrary.eu-central-1.linodeobjects.com/ec05b39c90ab04f885f567b318d10537c6456746d9bb9d5571eb559816c4fb4b.jpg">
          View Details
        </button>
      </div>
    </div>
    <div class="frameitem-title-box">
      <div class="frameitem-button-group" style="justify-content: space-between;">
        <a href="${this.link_url}" target="__BLANK" class="linkclicks">
          <div class="frameitem-titles">
            <div
              style="line-height: 12px; max-height: 24px; -webkit-line-clamp: 2;font-size: 8px;color: #606770;-webkit-box-orient: vertical;display: -webkit-box;float: none;">
              laboheme.shop</div>
            <div
              style="display: -webkit-box;overflow: hidden;white-space: normal;display: -webkit-box;-webkit-box-orient: vertical;color: #1c1e21;font-size: 10px;line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;">
              A/W wardrobe essentials</div>
            <div style="line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;-webkit-box-orient: vertical;
                display: -webkit-box;
                float: none;overflow: hidden;
                white-space: normal;    font-size: 9px;    color: #606770;"></div>
          </div>
        </a>
        <div>
          <a href="${this.link_url}" target="__BLANK" class="frameitem-info w-button action-button">Shop Now</a>
        </div>
      </div>
    </div>
  </div>
</div>`
  }
}

export default facebookAdTemplate