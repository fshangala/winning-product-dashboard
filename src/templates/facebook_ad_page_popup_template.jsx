var facebookAdPagePopupTemplate = {
  id:null,
  get html() {
    return `<div class="page-popup mainpopup" style="display: flex;">
  <div class="addmodal" data-state="page" pagefilled="true" productfilled="false" data-page-id="361013867099158-40987"
    data-product-id="9405926375754-40987" data-platform="facebook" data-page-page="2" data-product-page="0"
    productid="1885819641843421" onscroll="handleScroll(this, false, $(this).attr('data-state'));" style="bottom: 8px;">
    <div class="items-wrapper">
      <div class="margin-bottom margin-xlarge">
        <div class="fbpageheader">
          <div class="flex justify-between mb-3 text-sm flex-wrap page-vw-component" style="display: flex;">
            <div class="flex gap-2">
              <h6>Page Ads</h6><a
                class="rounded border shadow font-semibold p-2 hover:shadow-none hover:bg-gray-200 ml-3"
                onclick="handlePageProductSwitch($(this).closest('.addmodal')[0])">Switch to Collection Information</a>
            </div>
            <div class="flex"><a href="https://facebook.com/61562873997298" class="flex" target="__BLANK"><img
                  src="https://adslibrary.eu-central-1.linodeobjects.com/f1aec966d168b089fac7c73ce1d8431c4227d7090498d5f303a5e20b8a42819f.jpg"
                  class="page-profile-picture" onerror="this.src='/images/facebook_no_profile_pic.png'"><span
                  style="display: flex;align-items: center;" class="ml-2">Puro-della
                </span>
              </a>
              <div class="ml-5 border p-2 rounded text-slate-500">
                <span class="p-1"><img src="https://app.winninghunter.com/images/page-ads-slate.svg" class="w-3 h-3">11</span>
                <span class="border-l p-1"><img src="https://app.winninghunter.com/images/country-globe.svg">1</span>
                <span class="border-l p-1"><img src="https://app.winninghunter.com/images/facebook-48.svg" class="w-4 h-4">0</span>
                <span class="border-l p-1"><img src="https://app.winninghunter.com/images/instagram.svg" class="w-4 h-4">0</span>
              </div>
            </div>
            <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=361013867099158&amp;search_type=page&amp;media_type=all"
              target="_blank"
              class="text-muted text-sm rounded font-semibold border shadow p-2 h-fit hover:shadow-none hover:bg-gray-100">Visit
              Page in Ad library</a>
          </div>
          <div class="flex justify-between mb-3 text-sm flex-wrap product-vw-component hidden" style="display: none;">
            <div class="flex gap-2">
              <h6>Collection Ads</h6><a
                class="rounded border shadow font-semibold p-2 hover:shadow-none hover:bg-gray-200 ml-3"
                onclick="handlePageProductSwitch($(this).closest('.addmodal')[0])">Switch to Page Information</a>
            </div>
            <div class="flex"><a href="https://www.purodella.de/collections/bar/products/leopard-print-midi-dress"
                class="flex" target="__BLANK"><img
                  src="http://www.purodella.de/cdn/shop/files/DSC02851_900x_f00ee187-0289-4289-a0d9-e6f800f9629f_1200x630.jpg?v=1722374626"
                  class="page-profile-picture" onerror="this.src='/images/facebook_no_profile_pic.png'"><span
                  style="display: flex;align-items: center;" class="ml-2">Das perfekte Midikleid mit Leopardenmuster -
                  Braun / S
                </span>
              </a>
              <div class="ml-5 border p-2 rounded text-slate-500">
                <span class="p-1 has-popup relative">
                  <div class="custom-popup left-[-100px] hidden" style="display: none;">Total amount of ads saved</div>
                  <img src="https://app.winninghunter.com/images/page-ads-slate.svg" class="w-3 h-3">1
                </span>
                <span class="border-l p-1 has-popup relative">
                  <div class="custom-popup left-[-100px] hidden" style="display: none;">Product Price</div><img
                    src="https://app.winninghunter.com/images/tag.svg" class="w-3 h-3">€49.00
                </span>

                <span class="border-l p-1 has-popup relative">
                  <div class="custom-popup left-[-100px] hidden" style="display: none;">Total Collection Revenue from
                    all ads combined</div><img src="https://app.winninghunter.com/images/revenue.svg" class="w-3 h-3">$0.81
                </span>
              </div>
            </div>
            <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=361013867099158&amp;search_type=page&amp;media_type=all"
              target="_blank"
              class="text-muted text-sm rounded font-semibold border shadow p-2 h-fit hover:shadow-none hover:bg-gray-100">Visit
              Page in Ad library</a>
          </div>
          <hr>
        </div>
        <div class="flex justify-between">
          <div class="select-wrapper w-[220px] mt-2">
            <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer">Sort By
              <div class="custom-popup hidden" style="right: 0px; z-index: 1999; display: none;">Sort ads by:
                <p class="text-align-left">"Consistency" - Ads that performed well over a longer period of time.<br>
                  "Trending" - Ads that recently performed well.<br>
                  "Adset amount" - Ads with the most amount of adsets.<br>
                  "Last seen" - Ads that are seen the last by our bots.
                  "Adspend" - Ads that have spent the most.<br>
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
            <select id="sortby1885819641843421"
              onchange="addmodal = $(this).closest('.addmodal')[0]; handleScroll(addmodal, true, $(addmodal).attr('data-state'))"
              placeholder="Sort By..." name="Order" data-name="Order"
              class="form-input select-box-2 w-select hidden select2-hidden-accessible"
              data-select2-id="sortby1885819641843421" tabindex="-1" style="" aria-hidden="true">
              <option value="">None</option>
              <option value="consistency" selected="">Consistency</option>
              <option value="trending">Trending</option>
              <option value="adsetamount">Adset amount</option>
              <option value="lastseen">Last Seen</option>
              <option value="creationdate" selected="" data-select2-id="103">Creation date</option>
              <option value="adspend">Adspend</option>

            </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="102"
              style="width: 130px;"><span class="selection"><span class="select2-selection select2-selection--single"
                  role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false"
                  aria-labelledby="select2-sortby1885819641843421-container"><span class="select2-selection__rendered"
                    id="select2-sortby1885819641843421-container" role="textbox" aria-readonly="true"
                    title="Creation date"><span class="select2-selection__clear" title="Remove all items"
                      data-select2-id="104">×</span>Creation date</span><span class="select2-selection__arrow"
                    role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper"
                aria-hidden="true"></span></span>
          </div>
          <div class="flex">
            <p class="text-sm font-bold text-slate-500 page-vw-component">11 results</p>
            <p class="text-sm font-bold text-slate-500 product-vw-component hidden" style="display: none;">1 results</p>
          </div>
        </div>
        <div class="pageadslist page-vw-component" id="pageadslist188581964184342140987" style="display: grid;">





          <div id="w-node-_8922055b-736f-9646-6ca8-1885819641843421-de161bc0" class="one_add_wrapper"
            style="position:relative;">



            <div class="add_item">
              <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
                <div class="frameitem-title-group">

                  <div class="text-block-7 ad-captions"><span class="currentamountofadsets">1 Adset</span> uses this
                    creative</div>
                  <div class="favorite-wrapper flex" style="gap: 10px;">

                    <div style="margin-right:6px;" class="has-popup adstat-block trending-block">
                      <div class="custom-popup hidden" style="display: none;">Ad Score: Testing <br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad has not spent enough ($0.24) </span><br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad is running for less than 3 days </span></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping" style="background-color:#FD0250;box-shadow: 0 0 4px 0.2px #FD0250;">
                      </div>
                    </div>
                    <div id="tooltip188581964184342142369"
                      class="dropdown-container has-shadow rounded mt-1 text-size-small hidden"
                      data-popper-placement="bottom"
                      style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(326px, 655px);"
                      data-popper-reference-hidden="" data-popper-escaped="">
                      <div class="">
                        <p class="text-sm font-medium"></p>
                        <div class="price-input price">
                          <div class="select-wrapper">
                            <div>
                              <p class="text-xs text-slate-600">Share this ad with others:</p>
                              <input placeholder="Share Url" readonly=""
                                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value="https://app.winninghunter.com/ad/1885819641843421"
                                onclick="copyad('1885819641843421')">
                              <button type="button" class="dropdown-item save-ad-lid off" data-platform="facebook"
                                data-id="1885819641843421"><img width="15px" src="https://app.winninghunter.com/images/heart-outline.svg"> Save this
                                ad</button>
                              <hr>
                              <button type="button" class="dropdown-item hide-advertiser-lid off"
                                data-platform="facebook" data-id="361013867099158"><img loading="lazy" width="17px"
                                  src="https://app.winninghunter.com/images/eye-closed.svg"> Hide this advertiser</button>
                              <hr>

                              <a target="__BLANK" href="https://www.purodella.de/collections/all?sort_by=best-selling"
                                class="dropdownnode action-button dropdown-item"><img width="20px" src="https://app.winninghunter.com/images/SH.svg">
                                Best Selling</a>
                              <hr>
                              <button type="button" class="dropdown-item"
                                onclick="openPiModal('https://www.purodella.de', 'leopard-print-midi-dress')"><img
                                  width="15px" src="https://app.winninghunter.com/images/link-black-mini.svg"> Import Product</button>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/sales-tracker?store=https://www.purodella.de/collections/bar/products/leopard-print-midi-dress"
                                target="__BLANK"><img width="20px" src="https://app.winninghunter.com/images/track.png"> Track Store</a>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/840a4431c2c8736a533828644d5e8689032ebbec3244c490bf6e9287410c99a3.jpg"
                                target="__BLANK"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke-width="1.5" stroke="currentColor" loading="lazy" class="w-4 h-4 inline-block">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
                                  </path>
                                </svg> Find Competitors with Magic Ai</a>
                              <a target="__BLANK" href="https://www.similarweb.com/website/www.purodella.de"
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
                        aria-describedby="tooltip188581964184342142369"
                        data-dropdown-toggle="tooltip188581964184342142369" class="dropdowninit">
                    </div>
                  </div>
                </div>
                <div
                  style="padding-left:1rem;font-size:13px;font-weight:600;color: #999;display: grid; grid-template-columns: auto minmax(0, 1fr);column-gap: 20px;">
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Adspend on this creative only.</div> Spend: $0.24
                  </span><span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Revenue on this creative only.</div>Revenue: $0.00
                  </span>
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">The EU reach/views for every adset in the ad combined.</div>
                    Reach: 22
                  </span>

                </div>
                <div class="shadow-sm w-full border p-1 text-center text-sm rounded-md"><b class="has-popup relative">
                    <div class="custom-popup hidden left-0">Revenue of all the ads for this product all time.</div>
                    Collection Revenue: $0.81
                  </b></div>
              </div>
              <div class="primary-copy-cutoff primary-copy">
                <p>🐆 Das perfekte Midikleid mit Leopardenmuster 🐆<br> <br> Entdecken Sie Ihre wilde Seite mit unserem
                  stilvollen Midikleid im Leopardenmuster! Dieses Kleid kombiniert Eleganz mit einem Hauch von Abenteuer
                  und ist perfekt für jede Gelegenheit.<br> <br> ✨ Warum Sie es lieben werden:<br> ✅ Atemberaubendes
                  Leopardenmuster<br> ✅ Komfort und Stil in Einem<br> ✅ Ideal für Büro, Freizeit und besondere
                  Anlässe<br> <br> Verpassen Sie nicht die Chance, Ihr Outfit auf das nächste Level zu heben. Shoppen
                  Sie jetzt und setzen Sie ein modisches Statement!<br> <br> 🛒 Jetzt kaufen und auffallen! ✨</p>
              </div>
              <hr style="width: 92%;margin: 0 auto;">
              <div style="position: absolute;z-index: 1;display: flex;gap: 10px;justify-content: end;"
                class="w-full text-sm p-1">
                <div class="has-popup relative">
                  <div class="custom-popup left-[-50px] hidden">Product Creation Date</div><span
                    class="p-1 font-bold bg-white rounded pointer-events-none" style="opacity: 0.79;"> <img
                      src="https://app.winninghunter.com/images/box.svg" class="h-4 v-4"> 2024-07-30</span>
                </div>
              </div>
              <div class="video-2 w-video w-embed"><img
                  src="https://adslibrary.eu-central-1.linodeobjects.com/840a4431c2c8736a533828644d5e8689032ebbec3244c490bf6e9287410c99a3.jpg"
                  style="display: block;margin:0 auto;filter: blur(5px);min-height: 319px;">
                <video
                  poster="https://adslibrary.eu-central-1.linodeobjects.com/840a4431c2c8736a533828644d5e8689032ebbec3244c490bf6e9287410c99a3.jpg"
                  controls="" style="flex: 1 1 0;max-width: 100%;object-fit: cover;margin: 0 auto;display: block;"
                  preload="none">
                  <source
                    src="https://adslibrary.eu-central-1.linodeobjects.com/941465eb6e800a36aadc07ee89aad8ea4d71698229d4b4feff35c59ed0811d49.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class="frameitem-title-box" style="background-color:white;">
                <div class="frameitem-button-group gap-0">

                  <div class="linkclicks has-popup relative">
                    <div class="custom-popup hidden" style="left:-100px;">Page Information
                      <hr> <span class="text-[14px]">Advertiser runs in <img src="https://app.winninghunter.com/images/country-globe.svg"> 1
                        countries with <img height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                          style="pointer-events:none;"> 11 ads <div class="p-[2px] border rounded"><img
                            src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="10px" width="10px" class="DE"
                            style="border:none;border-radius: 50%;"></div></span>
                      <hr class="mt-[10px]">
                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/f1aec966d168b089fac7c73ce1d8431c4227d7090498d5f303a5e20b8a42819f.jpg"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Puro-della </span>
                        <a class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="thisad = $(this).closest('.one_add_wrapper'); $(thisad).find('.pageadcount').click();">View
                          Page Ads</a>
                      </div>
                    </div>
                    <div class="flex pointer-events-none"
                      style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="https://adslibrary.eu-central-1.linodeobjects.com/f1aec966d168b089fac7c73ce1d8431c4227d7090498d5f303a5e20b8a42819f.jpg"
                        onerror="this.src='/images/facebook_no_profile_pic.png'">
                      <div class="pointer-events-none min-w-100">
                        <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Puro-della
                        </div>
                        <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                            class="flex pointer-events-none"><img src="https://app.winninghunter.com/images/country-globe.svg"> 1</span> <span
                            class="pointer-events-none"> <img height="14px" width="14px"
                              src="https://app.winninghunter.com/images/page-ads-slate.svg" style="pointer-events:none;"> 11</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="product-info-onad ml-[30px] border-l pl-2 has-popup relative">

                    <div class="custom-popup !w-[240px] hidden" style="left:-100px;">Collection Information
                      <hr>

                      <span class="text-[14px]">
                        <p>Price: €49.00</p>
                        <p></p>
                        <p></p>
                        <p>Collection adspend: $0.24</p>
                        <p>Collection total revenue: $0.81</p>
                        <hr>
                        <p class="text-xs">First ad started: Jul 30 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">1
                            day ago</span></p>
                        <p class="text-xs">Last ad started: Jul 30 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">1
                            day ago</span></p>
                        <p class="text-muted font-light text-xs">This creative generated 99% of the Collection adspend
                        </p>
                      </span>
                      <hr style="margin-top:10px;">

                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="http://www.purodella.de/cdn/shop/files/DSC02851_900x_f00ee187-0289-4289-a0d9-e6f800f9629f_1200x630.jpg?v=1722374626"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Das perfekte Midikleid mit
                          Leopardenmuster - Braun / S </span>
                        <a href="https://www.purodella.de/collections/bar/products/leopard-print-midi-dress"
                          target="__BLANK"
                          class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none">Visit Collection
                          Page</a>
                        <a class="view-product-ads text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="addmodal = $(this).closest('.add_item').find('.mainpopup').find('.addmodal'); handlePageProductSwitch(addmodal, forcestateto='product', openmodal=true);">View
                          Collection Ads</a>
                      </div>
                    </div>
                    <div class="text-sm pointer-events-none">
                      <div class="flex pointer-events-none"
                        style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="http://www.purodella.de/cdn/shop/files/DSC02851_900x_f00ee187-0289-4289-a0d9-e6f800f9629f_1200x630.jpg?v=1722374626"
                          onerror="this.src='/images/facebook_no_profile_pic.png'">
                        <div class="pointer-events-none">
                          <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Das
                            perfekt...</div>
                          <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                              class="flex pointer-events-none">€49.00</span> <span class="flex pointer-events-none"><img
                                height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                                style="pointer-events:none;"> 1</span> <span class="flex pointer-events-none"><img
                                height="13px" width="13px" class="text-slate-500 ml-[4px]" src="https://app.winninghunter.com/images/adspend.svg"
                                style="pointer-events:none;">0</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="searchadchild">
                    <div class="add-popup" style="overflow-y: scroll;flex-direction: column;">
                      <input type="hidden" id="adhistory"
                        adsets="{&quot;2024-07-30 00:00:00&quot;:&quot;1&quot;,&quot;2024-07-31 05:37:33&quot;:&quot;1&quot;,&quot;2024-07-31 05:37:36&quot;:&quot;1&quot;,&quot;2024-07-31 05:37:44&quot;:&quot;1&quot;,&quot;2024-07-31 05:37:49&quot;:&quot;1&quot;}"
                        adspend="{&quot;2024-07-31 05:37:32&quot;:22,&quot;2024-07-31 05:37:33&quot;:22,&quot;2024-07-31 05:37:36&quot;:22,&quot;2024-07-31 05:37:44&quot;:22,&quot;2024-07-31 05:37:49&quot;:22}"
                        views="null" likes="null" comments="null" shares="null">
                      <input type="hidden" id="randomToken" value="42369">
                      <input type="hidden" id="productidstar" value="1885819641843421">
                      <div class="info_body" style="margin: 0 auto;">
                        <div id="w-node-_3eb5300b-0206-f91c-5505-e52b666a5390-de161bc0" class="frameitem-video-wrapper">
                          <div class="html-embed-5 w-embed">
                            <video
                              poster="https://adslibrary.eu-central-1.linodeobjects.com/840a4431c2c8736a533828644d5e8689032ebbec3244c490bf6e9287410c99a3.jpg"
                              controls="" style="width:350px;object-fit:contain;display:block;" preload="none">
                              <source
                                src="https://adslibrary.eu-central-1.linodeobjects.com/941465eb6e800a36aadc07ee89aad8ea4d71698229d4b4feff35c59ed0811d49.mp4"
                                type="video/mp4">
                            </video>
                          </div>
                          <br> Ads History <canvas id="chart188581964184342142369"></canvas>
                        </div>
                        <div id="w-node-b50b7bcc-f095-371f-c679-5cab2590eb82-de161bc0" class="div-block-64">
                          <div class="frameitem-details">
                            <div class="frameitem_component">
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Primary Text</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>🐆 Das perfekte Midikleid mit Leopardenmuster 🐆<br> <br> Entdecken Sie Ihre
                                      wilde Seite mit unserem stilvollen Midikleid im Leopardenmuster! Dieses Kleid
                                      kombiniert Eleganz mit einem Hauch von Abenteuer und ist perfekt für jede
                                      Gelegenheit.<br> <br> ✨ Warum Sie es lieben werden:<br> ✅ Atemberaubendes
                                      Leopardenmuster<br> ✅ Komfort und Stil in Einem<br> ✅ Ideal für Büro, Freizeit und
                                      besondere Anlässe<br> <br> Verpassen Sie nicht die Chance, Ihr Outfit auf das
                                      nächste Level zu heben. Shoppen Sie jetzt und setzen Sie ein modisches
                                      Statement!<br> <br> 🛒 Jetzt kaufen und auffallen! ✨</p>
                                  </div>
                                </div>
                              </div>
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Description</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>none</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="button w-button action-button"
                            onclick="getAdCopy('none', '1885819641843421', this)">Generate Ad Copy <svg width="24px"
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
                          <div class="adcopygeneratorbox" id="adcopy1885819641843421"></div>
                          <div class="frameitem-country">
                            Share:
                            <img src="https://app.winninghunter.com/images/share-ios-export.svg"
                              style="cursor:pointer;height:30px;display:inline-block;" class="share-ios action-button"
                              onclick="copyad('1885819641843421')">
                            <!-- <div class="frameitem-country-wrapper">
  <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" class="frameitem-countr-flag">
  <div>
    <div class="frameitem-small-text">Ad Country</div>
    <div class="frameitem-country-name">Germany</div>
  </div>
</div>  
<div>
  <a href="#" onclick="" class="button w-button">Share ad</a>
</div> -->

                          </div>
                          <div class="frameitem-links-grid">
                            <div id="w-node-c767e22e-faf5-a876-818f-2bd868c356f9-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/store-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Store</div>
                                <a href="https://www.purodella.de/collections/bar/products/leopard-print-midi-dress"
                                  target="__BLANK" class="frameitem-link">Product Page</a>
                              </div>
                            </div>
                            <div id="w-node-_1ebb295b-90a9-56aa-efb5-ed9f7c9c979b-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/magiccard-expense-svgrepo-com.svg" loading="lazy" alt=""
                                class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Ad Library;</div>
                                <a href="https://www.facebook.com/ads/library/?id=1885819641843421" target="__BLANK"
                                  class="frameitem-link">Ad link</a>
                              </div>
                            </div>
                            <div id="w-node-bfa31db7-cfe0-3720-565c-00b513e721c8-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Page Ad Library</div>
                                <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=361013867099158&amp;search_type=page&amp;media_type=all"
                                  target="__BLANK" class="frameitem-link">Page Ad Library</a>
                              </div>
                            </div>
                            <div id="w-node-_0b943d44-7c96-4a99-eb12-328b90a563b7-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Photo</div>
                                <a href="https://adslibrary.eu-central-1.linodeobjects.com/840a4431c2c8736a533828644d5e8689032ebbec3244c490bf6e9287410c99a3.jpg"
                                  class="frameitem-link" target="__BLANK" download="">Download <br>thumbnail </a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/track.png" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a tabindex="0" class="frameitem-link"
                                  href="/sales-tracker?store=https://www.purodella.de/collections/bar/products/leopard-print-midi-dress"
                                  target="__BLANK">Track Store</a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-black-mini.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a type="button" class="frameitem-link"
                                  onclick="openPiModal('https://www.purodella.de', 'leopard-print-midi-dress')"> Import
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
                                  href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/840a4431c2c8736a533828644d5e8689032ebbec3244c490bf6e9287410c99a3.jpg"
                                  target="__BLANK">Find Competitors with Magic AI</a>
                              </div>
                            </div>
                          </div>
                          <div class="frameitem-video-download">
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" alt="" class="frameitem-icon">
                              <div>
                                <a href="https://adslibrary.eu-central-1.linodeobjects.com/941465eb6e800a36aadc07ee89aad8ea4d71698229d4b4feff35c59ed0811d49.mp4"
                                  class="frameitem-link" tabindex="0" download="">Download Video</a>
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
<div id="competitor-adds-list188581964184342142369" class="compadslist"></div>
</div>
</div> -->
                      <img src="https://app.winninghunter.com/images/close-svgrepo-com.svg" loading="lazy"
                        data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048" alt="" class="close-ad">
                    </div>
                  </div>
                </div>
              </div>
              <hr style="width: 92%; margin: 0 auto;">

              <div class="add_info">
                <div class="add-meta-wrapper">
                  <div class="add-sub-info">
                    <div>Scaling: <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">0%</span>
                    </div>
                    <div>Platforms: <img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px"><img
                        src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px"><img src="https://app.winninghunter.com/images/audience_network.png"
                        height="20px" width="20px"><img src="https://app.winninghunter.com/images/messenger.svg" height="20px" width="20px"></div>
                    <div class="has-popup relative">
                      <div class="custom-popup hidden" style="left:0px;">Countries
                        <hr>
                        <div class="text-sm p-1">
                          <p class="flex w-full gap-1 mt-1"><img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt=""
                              height="20px" width="20px" class="DE w-5 h-5"
                              style="border:none;border-radius: 50%;">Germany</p>
                        </div>
                      </div>Countries: <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="20px" width="20px"
                        class="DE" style="border:none;border-radius: 50%;height:20px;">
                    </div>
                    <div>Website: <img src="https://app.winninghunter.com/images/SH.svg" height="20px" width="20px" class="techicon SHtip"
                        title="Shopify"><img src="https://app.winninghunter.com/images/PP.svg" height="20px" width="20px" class="techicon PPtip"
                        title="PayPal"><img src="https://app.winninghunter.com/images/KV.svg" height="20px" width="20px" class="techicon KVtip"
                        title="Klaviyo"><img src="https://app.winninghunter.com/images/CO.svg" height="20px" width="20px" class="techicon COtip"
                        title="Checkout"><img src="https://app.winninghunter.com/images/TP.svg" height="20px" width="20px" class="techicon TPtip"
                        title="Trustpilot"><img src="https://app.winninghunter.com/images/BU.svg" height="20px" width="20px" class="techicon BUtip"
                        title="Bundle App"></div>
                    <div>Gender: Men &amp; Women</div>
                    <div>Ages: 18 - 65+</div>
                    <div>Started: Jul 30 2024 <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">1
                        day ago</span></div>
                    <div class="text-dark"><b>Adsets: 1</b></div>
                    <div class="add-sub-info">
                      <div>Last seen: Jul 31 2024 <span
                          style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">30
                          seconds ago</span></div>
                      <div class="text-dark"><b>Adsets: 1</b></div>
                    </div>

                  </div>
                  <button type="button" class="dots see-details action-button"
                    comptarget="#competitor-adds-list188581964184342142369"
                    imageurl="https://adslibrary.eu-central-1.linodeobjects.com/840a4431c2c8736a533828644d5e8689032ebbec3244c490bf6e9287410c99a3.jpg">
                    View Details
                  </button>
                </div>
              </div>
              <div class="frameitem-title-box">
                <div class="frameitem-button-group" style="justify-content: space-between;">
                  <a href="https://www.purodella.de/collections/bar/products/leopard-print-midi-dress" target="__BLANK"
                    class="linkclicks">
                    <div class="frameitem-titles">
                      <div
                        style="line-height: 12px; max-height: 24px; -webkit-line-clamp: 2;font-size: 8px;color: #606770;-webkit-box-orient: vertical;display: -webkit-box;float: none;">
                        www.purodella.de</div>
                      <div
                        style="display: -webkit-box;overflow: hidden;white-space: normal;display: -webkit-box;-webkit-box-orient: vertical;color: #1c1e21;font-size: 10px;line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;">
                        Nur heute mit 40% Rabatt und kostenlosem Versand !</div>
                      <div style="line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;-webkit-box-orient: vertical;
display: -webkit-box;
float: none;overflow: hidden;
white-space: normal;    font-size: 9px;    color: #606770;"></div>
                    </div>
                  </a>
                  <div>
                    <a href="https://www.purodella.de/collections/bar/products/leopard-print-midi-dress"
                      target="__BLANK" class="frameitem-info w-button action-button">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_8922055b-736f-9646-6ca8-1398361990840523-de161bc0" class="one_add_wrapper"
            style="position:relative;">



            <div class="add_item">
              <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
                <div class="frameitem-title-group">

                  <div class="text-block-7 ad-captions"><span class="currentamountofadsets">1 Adset</span> uses this
                    creative</div>
                  <div class="favorite-wrapper flex" style="gap: 10px;">

                    <div style="margin-right:6px;" class="has-popup adstat-block trending-block">
                      <div class="custom-popup hidden" style="display: none;">Ad Score: Testing <br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad has not spent enough ($1.03) </span><br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad is running for less than 3 days </span></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping" style="background-color:#FD0250;box-shadow: 0 0 4px 0.2px #FD0250;">
                      </div>
                    </div>
                    <div id="tooltip139836199084052350644"
                      class="dropdown-container has-shadow rounded mt-1 text-size-small hidden"
                      data-popper-placement="bottom"
                      style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(582px, 655px);"
                      data-popper-reference-hidden="" data-popper-escaped="">
                      <div class="">
                        <p class="text-sm font-medium"></p>
                        <div class="price-input price">
                          <div class="select-wrapper">
                            <div>
                              <p class="text-xs text-slate-600">Share this ad with others:</p>
                              <input placeholder="Share Url" readonly=""
                                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value="https://app.winninghunter.com/ad/1398361990840523"
                                onclick="copyad('1398361990840523')">
                              <button type="button" class="dropdown-item save-ad-lid off" data-platform="facebook"
                                data-id="1398361990840523"><img width="15px" src="https://app.winninghunter.com/images/heart-outline.svg"> Save this
                                ad</button>
                              <hr>
                              <button type="button" class="dropdown-item hide-advertiser-lid off"
                                data-platform="facebook" data-id="361013867099158"><img loading="lazy" width="17px"
                                  src="https://app.winninghunter.com/images/eye-closed.svg"> Hide this advertiser</button>
                              <hr>

                              <a target="__BLANK" href="https://www.purodella.de/collections/all?sort_by=best-selling"
                                class="dropdownnode action-button dropdown-item"><img width="20px" src="https://app.winninghunter.com/images/SH.svg">
                                Best Selling</a>
                              <hr>
                              <button type="button" class="dropdown-item"
                                onclick="openPiModal('https://www.purodella.de', 'pyjama-set')"><img width="15px"
                                  src="https://app.winninghunter.com/images/link-black-mini.svg"> Import Product</button>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/sales-tracker?store=https://www.purodella.de/products/pyjama-set"
                                target="__BLANK"><img width="20px" src="https://app.winninghunter.com/images/track.png"> Track Store</a>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/db6d1044f9dd58496c5495a1e33e450d5fc868f153eb0628df5c54b9159cbd2f.jpg"
                                target="__BLANK"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke-width="1.5" stroke="currentColor" loading="lazy" class="w-4 h-4 inline-block">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
                                  </path>
                                </svg> Find Competitors with Magic Ai</a>
                              <a target="__BLANK" href="https://www.similarweb.com/website/www.purodella.de"
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
                        aria-describedby="tooltip139836199084052350644"
                        data-dropdown-toggle="tooltip139836199084052350644" class="dropdowninit">
                    </div>
                  </div>
                </div>
                <div
                  style="padding-left:1rem;font-size:13px;font-weight:600;color: #999;display: grid; grid-template-columns: auto minmax(0, 1fr);column-gap: 20px;">
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Adspend on this creative only.</div> Spend: $1.03
                  </span><span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Revenue on this creative only.</div>Revenue: $0.00
                  </span>
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">The EU reach/views for every adset in the ad combined.</div>
                    Reach: 94
                  </span>

                </div>
                <div class="shadow-sm w-full border p-1 text-center text-sm rounded-md"><b class="has-popup relative">
                    <div class="custom-popup hidden left-0" style="display: none; transform: scale(0.8);">Revenue of all
                      the ads for this product all time.</div>Product Revenue: $3.45
                  </b></div>
              </div>
              <div class="primary-copy-cutoff primary-copy">
                <p>Entspannen Sie sich stilvoll und genießen Sie den Komfort mit unserem Lotus-Pyjama-Set! Erleben Sie
                  die ultimative Mischung aus modischem Design und gemütlicher Atmosphäre. 💫💤</p>
              </div>
              <hr style="width: 92%;margin: 0 auto;">
              <div style="position: absolute;z-index: 1;display: flex;gap: 10px;justify-content: end;"
                class="w-full text-sm p-1">
                <div class="has-popup relative">
                  <div class="custom-popup left-[-50px] hidden">Product Creation Date</div><span
                    class="p-1 font-bold bg-white rounded pointer-events-none" style="opacity: 0.79;"> <img
                      src="https://app.winninghunter.com/images/box.svg" class="h-4 v-4"> 2024-07-29</span>
                </div>
              </div>
              <div class="video-2 w-video w-embed"><img
                  src="https://adslibrary.eu-central-1.linodeobjects.com/db6d1044f9dd58496c5495a1e33e450d5fc868f153eb0628df5c54b9159cbd2f.jpg"
                  style="display: block;margin:0 auto;filter: blur(5px);min-height: 319px;">
                <video
                  poster="https://adslibrary.eu-central-1.linodeobjects.com/db6d1044f9dd58496c5495a1e33e450d5fc868f153eb0628df5c54b9159cbd2f.jpg"
                  controls="" style="flex: 1 1 0;max-width: 100%;object-fit: cover;margin: 0 auto;display: block;"
                  preload="none">
                  <source
                    src="https://adslibrary.eu-central-1.linodeobjects.com/32bb479fa3dd7629961e3117ca7f58662c7009e0d4ffd163c60ba66a35eb59cc.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class="frameitem-title-box" style="background-color:white;">
                <div class="frameitem-button-group gap-0">

                  <div class="linkclicks has-popup relative">
                    <div class="custom-popup hidden" style="left:-100px;">Page Information
                      <hr> <span class="text-[14px]">Advertiser runs in <img src="https://app.winninghunter.com/images/country-globe.svg"> 1
                        countries with <img height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                          style="pointer-events:none;"> 11 ads <div class="p-[2px] border rounded"><img
                            src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="10px" width="10px" class="DE"
                            style="border:none;border-radius: 50%;"></div></span>
                      <hr class="mt-[10px]">
                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/44400ebe37b5a1d9fb3a223f036d1a86e6fe664ecc756dd93bbab750eab4333c.jpg"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Puro-della </span>
                        <a class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="thisad = $(this).closest('.one_add_wrapper'); $(thisad).find('.pageadcount').click();">View
                          Page Ads</a>
                      </div>
                    </div>
                    <div class="flex pointer-events-none"
                      style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="https://adslibrary.eu-central-1.linodeobjects.com/44400ebe37b5a1d9fb3a223f036d1a86e6fe664ecc756dd93bbab750eab4333c.jpg"
                        onerror="this.src='/images/facebook_no_profile_pic.png'">
                      <div class="pointer-events-none min-w-100">
                        <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Puro-della
                        </div>
                        <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                            class="flex pointer-events-none"><img src="https://app.winninghunter.com/images/country-globe.svg"> 1</span> <span
                            class="pointer-events-none"> <img height="14px" width="14px"
                              src="https://app.winninghunter.com/images/page-ads-slate.svg" style="pointer-events:none;"> 11</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="product-info-onad ml-[30px] border-l pl-2 has-popup relative">

                    <div class="custom-popup !w-[240px] hidden" style="left:-100px;">Product Information
                      <hr>

                      <span class="text-[14px]">
                        <p>Price: €59.00</p>
                        <p></p>
                        <p></p>
                        <p>Product adspend: $1.03</p>
                        <p>Product total revenue: $3.45</p>
                        <hr>
                        <p class="text-xs">First ad started: Jul 29 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">2
                            days ago</span></p>
                        <p class="text-xs">Last ad started: Jul 29 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">2
                            days ago</span></p>
                        <p class="text-muted font-light text-xs">This creative generated 100% of the Product adspend
                        </p>
                      </span>
                      <hr style="margin-top:10px;">

                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="http://www.purodella.de/cdn/shop/files/1_e8241886-255a-4648-9585-c643cb57110c_1200x630.webp?v=1722263445"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Pyjama Set. - Schwarzes Gold / S
                        </span>
                        <a href="https://www.purodella.de/products/pyjama-set" target="__BLANK"
                          class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none">Visit Product
                          Page</a>
                        <a class="view-product-ads text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="addmodal = $(this).closest('.add_item').find('.mainpopup').find('.addmodal'); handlePageProductSwitch(addmodal, forcestateto='product', openmodal=true);">View
                          Product Ads</a>
                      </div>
                    </div>
                    <div class="text-sm pointer-events-none">
                      <div class="flex pointer-events-none"
                        style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="http://www.purodella.de/cdn/shop/files/1_e8241886-255a-4648-9585-c643cb57110c_1200x630.webp?v=1722263445"
                          onerror="this.src='/images/facebook_no_profile_pic.png'">
                        <div class="pointer-events-none">
                          <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Pyjama
                            Set....</div>
                          <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                              class="flex pointer-events-none">€59.00</span> <span class="flex pointer-events-none"><img
                                height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                                style="pointer-events:none;"> 1</span> <span class="flex pointer-events-none"><img
                                height="13px" width="13px" class="text-slate-500 ml-[4px]" src="https://app.winninghunter.com/images/adspend.svg"
                                style="pointer-events:none;">0</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="searchadchild">
                    <div class="add-popup" style="overflow-y: scroll;flex-direction: column;">
                      <input type="hidden" id="adhistory" adsets="{&quot;2024-07-29 07:00:00&quot;:&quot;1&quot;}"
                        adspend="{&quot;2024-07-30 07:22:35&quot;:94}" views="null" likes="null" comments="null"
                        shares="null">
                      <input type="hidden" id="randomToken" value="50644">
                      <input type="hidden" id="productidstar" value="1398361990840523">
                      <div class="info_body" style="margin: 0 auto;">
                        <div id="w-node-_3eb5300b-0206-f91c-5505-e52b666a5390-de161bc0" class="frameitem-video-wrapper">
                          <div class="html-embed-5 w-embed">
                            <video
                              poster="https://adslibrary.eu-central-1.linodeobjects.com/db6d1044f9dd58496c5495a1e33e450d5fc868f153eb0628df5c54b9159cbd2f.jpg"
                              controls="" style="width:350px;object-fit:contain;display:block;" preload="none">
                              <source
                                src="https://adslibrary.eu-central-1.linodeobjects.com/32bb479fa3dd7629961e3117ca7f58662c7009e0d4ffd163c60ba66a35eb59cc.mp4"
                                type="video/mp4">
                            </video>
                          </div>
                          <br> Ads History <canvas id="chart139836199084052350644"></canvas>
                        </div>
                        <div id="w-node-b50b7bcc-f095-371f-c679-5cab2590eb82-de161bc0" class="div-block-64">
                          <div class="frameitem-details">
                            <div class="frameitem_component">
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Primary Text</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>Entspannen Sie sich stilvoll und genießen Sie den Komfort mit unserem
                                      Lotus-Pyjama-Set! Erleben Sie die ultimative Mischung aus modischem Design und
                                      gemütlicher Atmosphäre. 💫💤</p>
                                  </div>
                                </div>
                              </div>
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Description</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>none</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="button w-button action-button"
                            onclick="getAdCopy('none', '1398361990840523', this)">Generate Ad Copy <svg width="24px"
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
                          <div class="adcopygeneratorbox" id="adcopy1398361990840523"></div>
                          <div class="frameitem-country">
                            Share:
                            <img src="https://app.winninghunter.com/images/share-ios-export.svg"
                              style="cursor:pointer;height:30px;display:inline-block;" class="share-ios action-button"
                              onclick="copyad('1398361990840523')">
                            <!-- <div class="frameitem-country-wrapper">
  <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" class="frameitem-countr-flag">
  <div>
    <div class="frameitem-small-text">Ad Country</div>
    <div class="frameitem-country-name">Germany</div>
  </div>
</div>  
<div>
  <a href="#" onclick="" class="button w-button">Share ad</a>
</div> -->

                          </div>
                          <div class="frameitem-links-grid">
                            <div id="w-node-c767e22e-faf5-a876-818f-2bd868c356f9-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/store-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Store</div>
                                <a href="https://www.purodella.de/products/pyjama-set" target="__BLANK"
                                  class="frameitem-link">Product Page</a>
                              </div>
                            </div>
                            <div id="w-node-_1ebb295b-90a9-56aa-efb5-ed9f7c9c979b-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/magiccard-expense-svgrepo-com.svg" loading="lazy" alt=""
                                class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Ad Library;</div>
                                <a href="https://www.facebook.com/ads/library/?id=1398361990840523" target="__BLANK"
                                  class="frameitem-link">Ad link</a>
                              </div>
                            </div>
                            <div id="w-node-bfa31db7-cfe0-3720-565c-00b513e721c8-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Page Ad Library</div>
                                <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=361013867099158&amp;search_type=page&amp;media_type=all"
                                  target="__BLANK" class="frameitem-link">Page Ad Library</a>
                              </div>
                            </div>
                            <div id="w-node-_0b943d44-7c96-4a99-eb12-328b90a563b7-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Photo</div>
                                <a href="https://adslibrary.eu-central-1.linodeobjects.com/db6d1044f9dd58496c5495a1e33e450d5fc868f153eb0628df5c54b9159cbd2f.jpg"
                                  class="frameitem-link" target="__BLANK" download="">Download <br>thumbnail </a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/track.png" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a tabindex="0" class="frameitem-link"
                                  href="/sales-tracker?store=https://www.purodella.de/products/pyjama-set"
                                  target="__BLANK">Track Store</a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-black-mini.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a type="button" class="frameitem-link"
                                  onclick="openPiModal('https://www.purodella.de', 'pyjama-set')"> Import Product</a>
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
                                  href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/db6d1044f9dd58496c5495a1e33e450d5fc868f153eb0628df5c54b9159cbd2f.jpg"
                                  target="__BLANK">Find Competitors with Magic AI</a>
                              </div>
                            </div>
                          </div>
                          <div class="frameitem-video-download">
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" alt="" class="frameitem-icon">
                              <div>
                                <a href="https://adslibrary.eu-central-1.linodeobjects.com/32bb479fa3dd7629961e3117ca7f58662c7009e0d4ffd163c60ba66a35eb59cc.mp4"
                                  class="frameitem-link" tabindex="0" download="">Download Video</a>
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
<div id="competitor-adds-list139836199084052350644" class="compadslist"></div>
</div>
</div> -->
                      <img src="https://app.winninghunter.com/images/close-svgrepo-com.svg" loading="lazy"
                        data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048" alt="" class="close-ad">
                    </div>
                  </div>
                </div>
              </div>
              <hr style="width: 92%; margin: 0 auto;">

              <div class="add_info">
                <div class="add-meta-wrapper">
                  <div class="add-sub-info">
                    <div>Scaling: <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">0%</span>
                    </div>
                    <div>Platforms: <img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px"><img
                        src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px"><img src="https://app.winninghunter.com/images/audience_network.png"
                        height="20px" width="20px"><img src="https://app.winninghunter.com/images/messenger.svg" height="20px" width="20px"></div>
                    <div class="has-popup relative">
                      <div class="custom-popup hidden" style="left:0px;">Countries
                        <hr>
                        <div class="text-sm p-1">
                          <p class="flex w-full gap-1 mt-1"><img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt=""
                              height="20px" width="20px" class="DE w-5 h-5"
                              style="border:none;border-radius: 50%;">Germany</p>
                        </div>
                      </div>Countries: <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="20px" width="20px"
                        class="DE" style="border:none;border-radius: 50%;height:20px;">
                    </div>
                    <div>Website: <img src="https://app.winninghunter.com/images/SH.svg" height="20px" width="20px" class="techicon SHtip"
                        title="Shopify"><img src="https://app.winninghunter.com/images/PP.svg" height="20px" width="20px" class="techicon PPtip"
                        title="PayPal"><img src="https://app.winninghunter.com/images/CO.svg" height="20px" width="20px" class="techicon COtip"
                        title="Checkout"><img src="https://app.winninghunter.com/images/TP.svg" height="20px" width="20px" class="techicon TPtip"
                        title="Trustpilot"><img src="https://app.winninghunter.com/images/BU.svg" height="20px" width="20px" class="techicon BUtip"
                        title="Bundle App"></div>
                    <div>Gender: Women</div>
                    <div>Ages: 18 - 65+</div>
                    <div>Started: Jul 29 2024 <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">1
                        day ago</span></div>
                    <div class="text-dark"><b>Adsets: 1</b></div>
                    <div class="add-sub-info">
                      <div>Last seen: Jul 30 2024 <span
                          style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">22
                          hrs ago</span></div>
                      <div class="text-dark"><b>Adsets: 1</b></div>
                    </div>

                  </div>
                  <button type="button" class="dots see-details action-button"
                    comptarget="#competitor-adds-list139836199084052350644"
                    imageurl="https://adslibrary.eu-central-1.linodeobjects.com/db6d1044f9dd58496c5495a1e33e450d5fc868f153eb0628df5c54b9159cbd2f.jpg">
                    View Details
                  </button>
                </div>
              </div>
              <div class="frameitem-title-box">
                <div class="frameitem-button-group" style="justify-content: space-between;">
                  <a href="https://www.purodella.de/products/pyjama-set" target="__BLANK" class="linkclicks">
                    <div class="frameitem-titles">
                      <div
                        style="line-height: 12px; max-height: 24px; -webkit-line-clamp: 2;font-size: 8px;color: #606770;-webkit-box-orient: vertical;display: -webkit-box;float: none;">
                        www.purodella.de</div>
                      <div
                        style="display: -webkit-box;overflow: hidden;white-space: normal;display: -webkit-box;-webkit-box-orient: vertical;color: #1c1e21;font-size: 10px;line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;">
                        Kostenloser Versand, 30 Tage Bedenkzeit</div>
                      <div style="line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;-webkit-box-orient: vertical;
display: -webkit-box;
float: none;overflow: hidden;
white-space: normal;    font-size: 9px;    color: #606770;"></div>
                    </div>
                  </a>
                  <div>
                    <a href="https://www.purodella.de/products/pyjama-set" target="__BLANK"
                      class="frameitem-info w-button action-button">Order Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_8922055b-736f-9646-6ca8-1040650874145504-de161bc0" class="one_add_wrapper"
            style="position:relative;">



            <div class="add_item">
              <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
                <div class="frameitem-title-group">

                  <div class="text-block-7 ad-captions"><span class="currentamountofadsets">1 Adset</span> uses this
                    creative</div>
                  <div class="favorite-wrapper flex" style="gap: 10px;">

                    <div style="margin-right:6px;" class="has-popup adstat-block trending-block">
                      <div class="custom-popup hidden" style="display: none;">Ad Score: Testing <br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad has not spent enough ($1.20) </span><br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad is running for less than 3 days </span></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping" style="background-color:#FD0250;box-shadow: 0 0 4px 0.2px #FD0250;">
                      </div>
                    </div>
                    <div id="tooltip104065087414550445608"
                      class="dropdown-container has-shadow rounded mt-1 text-size-small hidden"
                      data-popper-placement="bottom"
                      style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(840px, 655px);"
                      data-popper-reference-hidden="" data-popper-escaped="">
                      <div class="">
                        <p class="text-sm font-medium"></p>
                        <div class="price-input price">
                          <div class="select-wrapper">
                            <div>
                              <p class="text-xs text-slate-600">Share this ad with others:</p>
                              <input placeholder="Share Url" readonly=""
                                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value="https://app.winninghunter.com/ad/1040650874145504"
                                onclick="copyad('1040650874145504')">
                              <button type="button" class="dropdown-item save-ad-lid off" data-platform="facebook"
                                data-id="1040650874145504"><img width="15px" src="https://app.winninghunter.com/images/heart-outline.svg"> Save this
                                ad</button>
                              <hr>
                              <button type="button" class="dropdown-item hide-advertiser-lid off"
                                data-platform="facebook" data-id="361013867099158"><img loading="lazy" width="17px"
                                  src="https://app.winninghunter.com/images/eye-closed.svg"> Hide this advertiser</button>
                              <hr>

                              <a target="__BLANK" href="https://www.purodella.de/collections/all?sort_by=best-selling"
                                class="dropdownnode action-button dropdown-item"><img width="20px" src="https://app.winninghunter.com/images/SH.svg">
                                Best Selling</a>
                              <hr>
                              <button type="button" class="dropdown-item"
                                onclick="openPiModal('https://www.purodella.de', 'langer-rock')"><img width="15px"
                                  src="https://app.winninghunter.com/images/link-black-mini.svg"> Import Product</button>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/sales-tracker?store=https://www.purodella.de/products/langer-rock"
                                target="__BLANK"><img width="20px" src="https://app.winninghunter.com/images/track.png"> Track Store</a>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/50d464c5edcc31bcd693462402a729bf7e5697260671101a61dc031bf4649c88.jpg"
                                target="__BLANK"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke-width="1.5" stroke="currentColor" loading="lazy" class="w-4 h-4 inline-block">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
                                  </path>
                                </svg> Find Competitors with Magic Ai</a>
                              <a target="__BLANK" href="https://www.similarweb.com/website/www.purodella.de"
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
                        aria-describedby="tooltip104065087414550445608"
                        data-dropdown-toggle="tooltip104065087414550445608" class="dropdowninit">
                    </div>
                  </div>
                </div>
                <div
                  style="padding-left:1rem;font-size:13px;font-weight:600;color: #999;display: grid; grid-template-columns: auto minmax(0, 1fr);column-gap: 20px;">
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Adspend on this creative only.</div> Spend: $1.20
                  </span><span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Revenue on this creative only.</div>Revenue: $0.00
                  </span>
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">The EU reach/views for every adset in the ad combined.</div>
                    Reach: 109
                  </span>

                </div>
                <div class="shadow-sm w-full border p-1 text-center text-sm rounded-md"><b class="has-popup relative">
                    <div class="custom-popup hidden left-0">Revenue of all the ads for this product all time.</div>
                    Product Revenue: $4.00
                  </b></div>
              </div>
              <div class="primary-copy-cutoff primary-copy">
                <p>"Starten Sie stilvoll in den Sommer mit unserer wunderschönen neuen Kleiderkollektion. Schauen Sie
                  jetzt vorbei unter <a href="http://www.purodella.de/" rel="nofollow noreferrer" target="_blank"
                    data-lynx-mode="asynclazy">www.purodella.de</a> - Perfekt für jeden Anlass!"</p>
              </div>
              <hr style="width: 92%;margin: 0 auto;">
              <div style="position: absolute;z-index: 1;display: flex;gap: 10px;justify-content: end;"
                class="w-full text-sm p-1">
                <div class="has-popup relative">
                  <div class="custom-popup left-[-50px] hidden">Product Creation Date</div><span
                    class="p-1 font-bold bg-white rounded pointer-events-none" style="opacity: 0.79;"> <img
                      src="https://app.winninghunter.com/images/box.svg" class="h-4 v-4"> 2024-07-28</span>
                </div>
              </div>
              <div class="video-2 w-video w-embed"><img
                  src="https://adslibrary.eu-central-1.linodeobjects.com/50d464c5edcc31bcd693462402a729bf7e5697260671101a61dc031bf4649c88.jpg"
                  style="display: block;margin:0 auto;filter: blur(5px);min-height: 319px;">
                <video
                  poster="https://adslibrary.eu-central-1.linodeobjects.com/50d464c5edcc31bcd693462402a729bf7e5697260671101a61dc031bf4649c88.jpg"
                  controls="" style="flex: 1 1 0;max-width: 100%;object-fit: cover;margin: 0 auto;display: block;"
                  preload="none">
                  <source
                    src="https://adslibrary.eu-central-1.linodeobjects.com/42d6281121c54c917a635bc3e7cc6224c9d7ce1224500b4496b7aaa5134b33d7.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class="frameitem-title-box" style="background-color:white;">
                <div class="frameitem-button-group gap-0">

                  <div class="linkclicks has-popup relative">
                    <div class="custom-popup hidden" style="left:-100px;">Page Information
                      <hr> <span class="text-[14px]">Advertiser runs in <img src="https://app.winninghunter.com/images/country-globe.svg"> 1
                        countries with <img height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                          style="pointer-events:none;"> 11 ads <div class="p-[2px] border rounded"><img
                            src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="10px" width="10px" class="DE"
                            style="border:none;border-radius: 50%;"></div></span>
                      <hr class="mt-[10px]">
                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/bfade9cc6bf3dab9345755dbdade424a7ecc721f90fe9ebde6fbddd63ac02d5e.jpg"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Puro-della </span>
                        <a class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="thisad = $(this).closest('.one_add_wrapper'); $(thisad).find('.pageadcount').click();">View
                          Page Ads</a>
                      </div>
                    </div>
                    <div class="flex pointer-events-none"
                      style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="https://adslibrary.eu-central-1.linodeobjects.com/bfade9cc6bf3dab9345755dbdade424a7ecc721f90fe9ebde6fbddd63ac02d5e.jpg"
                        onerror="this.src='/images/facebook_no_profile_pic.png'">
                      <div class="pointer-events-none min-w-100">
                        <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Puro-della
                        </div>
                        <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                            class="flex pointer-events-none"><img src="https://app.winninghunter.com/images/country-globe.svg"> 1</span> <span
                            class="pointer-events-none"> <img height="14px" width="14px"
                              src="https://app.winninghunter.com/images/page-ads-slate.svg" style="pointer-events:none;"> 11</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="product-info-onad ml-[30px] border-l pl-2 has-popup relative">

                    <div class="custom-popup !w-[240px] hidden" style="left:-100px;">Product Information
                      <hr>

                      <span class="text-[14px]">
                        <p>Price: €55.95</p>
                        <p></p>
                        <p></p>
                        <p>Product adspend: $1.20</p>
                        <p>Product total revenue: $4.00</p>
                        <hr>
                        <p class="text-xs">First ad started: Jul 28 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">3
                            days ago</span></p>
                        <p class="text-xs">Last ad started: Jul 28 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">3
                            days ago</span></p>
                        <p class="text-muted font-light text-xs">This creative generated 100% of the Product adspend
                        </p>
                      </span>
                      <hr style="margin-top:10px;">

                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="http://www.purodella.de/cdn/shop/files/4_5d56d4ee-c727-4ed0-b09c-6528fc3be4b3_1200x630.webp?v=1722177772"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Langer Rock - Dünen / S </span>
                        <a href="https://www.purodella.de/products/langer-rock" target="__BLANK"
                          class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none">Visit Product
                          Page</a>
                        <a class="view-product-ads text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="addmodal = $(this).closest('.add_item').find('.mainpopup').find('.addmodal'); handlePageProductSwitch(addmodal, forcestateto='product', openmodal=true);">View
                          Product Ads</a>
                      </div>
                    </div>
                    <div class="text-sm pointer-events-none">
                      <div class="flex pointer-events-none"
                        style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="http://www.purodella.de/cdn/shop/files/4_5d56d4ee-c727-4ed0-b09c-6528fc3be4b3_1200x630.webp?v=1722177772"
                          onerror="this.src='/images/facebook_no_profile_pic.png'">
                        <div class="pointer-events-none">
                          <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Langer
                            Rock...</div>
                          <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                              class="flex pointer-events-none">€55.95</span> <span class="flex pointer-events-none"><img
                                height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                                style="pointer-events:none;"> 1</span> <span class="flex pointer-events-none"><img
                                height="13px" width="13px" class="text-slate-500 ml-[4px]" src="https://app.winninghunter.com/images/adspend.svg"
                                style="pointer-events:none;">0</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="searchadchild">
                    <div class="add-popup" style="overflow-y: scroll;flex-direction: column;">
                      <input type="hidden" id="adhistory" adsets="{&quot;2024-07-28 07:00:00&quot;:&quot;1&quot;}"
                        adspend="{&quot;2024-07-29 07:22:05&quot;:109}" views="null" likes="null" comments="null"
                        shares="null">
                      <input type="hidden" id="randomToken" value="45608">
                      <input type="hidden" id="productidstar" value="1040650874145504">
                      <div class="info_body" style="margin: 0 auto;">
                        <div id="w-node-_3eb5300b-0206-f91c-5505-e52b666a5390-de161bc0" class="frameitem-video-wrapper">
                          <div class="html-embed-5 w-embed">
                            <video
                              poster="https://adslibrary.eu-central-1.linodeobjects.com/50d464c5edcc31bcd693462402a729bf7e5697260671101a61dc031bf4649c88.jpg"
                              controls="" style="width:350px;object-fit:contain;display:block;" preload="none">
                              <source
                                src="https://adslibrary.eu-central-1.linodeobjects.com/42d6281121c54c917a635bc3e7cc6224c9d7ce1224500b4496b7aaa5134b33d7.mp4"
                                type="video/mp4">
                            </video>
                          </div>
                          <br> Ads History <canvas id="chart104065087414550445608"></canvas>
                        </div>
                        <div id="w-node-b50b7bcc-f095-371f-c679-5cab2590eb82-de161bc0" class="div-block-64">
                          <div class="frameitem-details">
                            <div class="frameitem_component">
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Primary Text</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>"Starten Sie stilvoll in den Sommer mit unserer wunderschönen neuen
                                      Kleiderkollektion. Schauen Sie jetzt vorbei unter <a
                                        href="http://www.purodella.de/" rel="nofollow noreferrer" target="_blank"
                                        data-lynx-mode="asynclazy">www.purodella.de</a> - Perfekt für jeden Anlass!"</p>
                                  </div>
                                </div>
                              </div>
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Description</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>none</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="button w-button action-button"
                            onclick="getAdCopy('none', '1040650874145504', this)">Generate Ad Copy <svg width="24px"
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
                          <div class="adcopygeneratorbox" id="adcopy1040650874145504"></div>
                          <div class="frameitem-country">
                            Share:
                            <img src="https://app.winninghunter.com/images/share-ios-export.svg"
                              style="cursor:pointer;height:30px;display:inline-block;" class="share-ios action-button"
                              onclick="copyad('1040650874145504')">
                            <!-- <div class="frameitem-country-wrapper">
  <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" class="frameitem-countr-flag">
  <div>
    <div class="frameitem-small-text">Ad Country</div>
    <div class="frameitem-country-name">Germany</div>
  </div>
</div>  
<div>
  <a href="#" onclick="" class="button w-button">Share ad</a>
</div> -->

                          </div>
                          <div class="frameitem-links-grid">
                            <div id="w-node-c767e22e-faf5-a876-818f-2bd868c356f9-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/store-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Store</div>
                                <a href="https://www.purodella.de/products/langer-rock" target="__BLANK"
                                  class="frameitem-link">Product Page</a>
                              </div>
                            </div>
                            <div id="w-node-_1ebb295b-90a9-56aa-efb5-ed9f7c9c979b-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/magiccard-expense-svgrepo-com.svg" loading="lazy" alt=""
                                class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Ad Library;</div>
                                <a href="https://www.facebook.com/ads/library/?id=1040650874145504" target="__BLANK"
                                  class="frameitem-link">Ad link</a>
                              </div>
                            </div>
                            <div id="w-node-bfa31db7-cfe0-3720-565c-00b513e721c8-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Page Ad Library</div>
                                <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=361013867099158&amp;search_type=page&amp;media_type=all"
                                  target="__BLANK" class="frameitem-link">Page Ad Library</a>
                              </div>
                            </div>
                            <div id="w-node-_0b943d44-7c96-4a99-eb12-328b90a563b7-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Photo</div>
                                <a href="https://adslibrary.eu-central-1.linodeobjects.com/50d464c5edcc31bcd693462402a729bf7e5697260671101a61dc031bf4649c88.jpg"
                                  class="frameitem-link" target="__BLANK" download="">Download <br>thumbnail </a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/track.png" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a tabindex="0" class="frameitem-link"
                                  href="/sales-tracker?store=https://www.purodella.de/products/langer-rock"
                                  target="__BLANK">Track Store</a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-black-mini.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a type="button" class="frameitem-link"
                                  onclick="openPiModal('https://www.purodella.de', 'langer-rock')"> Import Product</a>
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
                                  href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/50d464c5edcc31bcd693462402a729bf7e5697260671101a61dc031bf4649c88.jpg"
                                  target="__BLANK">Find Competitors with Magic AI</a>
                              </div>
                            </div>
                          </div>
                          <div class="frameitem-video-download">
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" alt="" class="frameitem-icon">
                              <div>
                                <a href="https://adslibrary.eu-central-1.linodeobjects.com/42d6281121c54c917a635bc3e7cc6224c9d7ce1224500b4496b7aaa5134b33d7.mp4"
                                  class="frameitem-link" tabindex="0" download="">Download Video</a>
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
<div id="competitor-adds-list104065087414550445608" class="compadslist"></div>
</div>
</div> -->
                      <img src="https://app.winninghunter.com/images/close-svgrepo-com.svg" loading="lazy"
                        data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048" alt="" class="close-ad">
                    </div>
                  </div>
                </div>
              </div>
              <hr style="width: 92%; margin: 0 auto;">

              <div class="add_info">
                <div class="add-meta-wrapper">
                  <div class="add-sub-info">
                    <div>Scaling: <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">0%</span>
                    </div>
                    <div>Platforms: <img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px"><img
                        src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px"><img src="https://app.winninghunter.com/images/audience_network.png"
                        height="20px" width="20px"><img src="https://app.winninghunter.com/images/messenger.svg" height="20px" width="20px"></div>
                    <div class="has-popup relative">
                      <div class="custom-popup hidden" style="left:0px;">Countries
                        <hr>
                        <div class="text-sm p-1">
                          <p class="flex w-full gap-1 mt-1"><img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt=""
                              height="20px" width="20px" class="DE w-5 h-5"
                              style="border:none;border-radius: 50%;">Germany</p>
                        </div>
                      </div>Countries: <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="20px" width="20px"
                        class="DE" style="border:none;border-radius: 50%;height:20px;">
                    </div>
                    <div>Website: <img src="https://app.winninghunter.com/images/SH.svg" height="20px" width="20px" class="techicon SHtip"
                        title="Shopify"><img src="https://app.winninghunter.com/images/PP.svg" height="20px" width="20px" class="techicon PPtip"
                        title="PayPal"><img src="https://app.winninghunter.com/images/CO.svg" height="20px" width="20px" class="techicon COtip"
                        title="Checkout"><img src="https://app.winninghunter.com/images/TP.svg" height="20px" width="20px" class="techicon TPtip"
                        title="Trustpilot"><img src="https://app.winninghunter.com/images/BU.svg" height="20px" width="20px" class="techicon BUtip"
                        title="Bundle App"></div>
                    <div>Gender: Women</div>
                    <div>Ages: 18 - 65+</div>
                    <div>Started: Jul 28 2024 <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">2
                        days ago</span></div>
                    <div class="text-dark"><b>Adsets: 1</b></div>
                    <div class="add-sub-info">
                      <div>Last seen: Jul 29 2024 <span
                          style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">1
                          day ago</span></div>
                      <div class="text-dark"><b>Adsets: 1</b></div>
                    </div>

                  </div>
                  <button type="button" class="dots see-details action-button"
                    comptarget="#competitor-adds-list104065087414550445608"
                    imageurl="https://adslibrary.eu-central-1.linodeobjects.com/50d464c5edcc31bcd693462402a729bf7e5697260671101a61dc031bf4649c88.jpg">
                    View Details
                  </button>
                </div>
              </div>
              <div class="frameitem-title-box">
                <div class="frameitem-button-group" style="justify-content: space-between;">
                  <a href="https://www.purodella.de/products/langer-rock" target="__BLANK" class="linkclicks">
                    <div class="frameitem-titles">
                      <div
                        style="line-height: 12px; max-height: 24px; -webkit-line-clamp: 2;font-size: 8px;color: #606770;-webkit-box-orient: vertical;display: -webkit-box;float: none;">
                        www.purodella.de</div>
                      <div
                        style="display: -webkit-box;overflow: hidden;white-space: normal;display: -webkit-box;-webkit-box-orient: vertical;color: #1c1e21;font-size: 10px;line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;">
                        Kostenloser Versand, 30 Tage Bedenkzeit</div>
                      <div style="line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;-webkit-box-orient: vertical;
display: -webkit-box;
float: none;overflow: hidden;
white-space: normal;    font-size: 9px;    color: #606770;"></div>
                    </div>
                  </a>
                  <div>
                    <a href="https://www.purodella.de/products/langer-rock" target="__BLANK"
                      class="frameitem-info w-button action-button">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_8922055b-736f-9646-6ca8-504362752109017-de161bc0" class="one_add_wrapper"
            style="position:relative;">



            <div class="add_item">
              <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
                <div class="frameitem-title-group">

                  <div class="text-block-7 ad-captions"><span class="currentamountofadsets">2 Adsets</span> use this
                    creative</div>
                  <div class="favorite-wrapper flex" style="gap: 10px;">

                    <div style="margin-right:6px;" class="has-popup adstat-block trending-block">
                      <div class="custom-popup hidden" style="display: none;">Ad Score: Testing <br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad has not spent enough ($3.85) </span><br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad is running for less than 3 days </span></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping" style="background-color:#FD0250;box-shadow: 0 0 4px 0.2px #FD0250;">
                      </div>
                    </div>
                    <div id="tooltip50436275210901728097"
                      class="dropdown-container has-shadow rounded mt-1 text-size-small hidden"
                      data-popper-placement="bottom"
                      style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1097px, 655px);"
                      data-popper-reference-hidden="" data-popper-escaped="">
                      <div class="">
                        <p class="text-sm font-medium"></p>
                        <div class="price-input price">
                          <div class="select-wrapper">
                            <div>
                              <p class="text-xs text-slate-600">Share this ad with others:</p>
                              <input placeholder="Share Url" readonly=""
                                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value="https://app.winninghunter.com/ad/504362752109017"
                                onclick="copyad('504362752109017')">
                              <button type="button" class="dropdown-item save-ad-lid off" data-platform="facebook"
                                data-id="504362752109017"><img width="15px" src="https://app.winninghunter.com/images/heart-outline.svg"> Save this
                                ad</button>
                              <hr>
                              <button type="button" class="dropdown-item hide-advertiser-lid off"
                                data-platform="facebook" data-id="361013867099158"><img loading="lazy" width="17px"
                                  src="https://app.winninghunter.com/images/eye-closed.svg"> Hide this advertiser</button>
                              <hr>

                              <a target="__BLANK" href="https://www.purodella.de/collections/all?sort_by=best-selling"
                                class="dropdownnode action-button dropdown-item"><img width="20px" src="https://app.winninghunter.com/images/SH.svg">
                                Best Selling</a>
                              <hr>
                              <button type="button" class="dropdown-item"
                                onclick="openPiModal('https://www.purodella.de', 'lose-rosa-druck-zerknittert-baumwolle-spaghetti-trager-kleid-armellos')"><img
                                  width="15px" src="https://app.winninghunter.com/images/link-black-mini.svg"> Import Product</button>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/sales-tracker?store=https://www.purodella.de/products/lose-rosa-druck-zerknittert-baumwolle-spaghetti-trager-kleid-armellos"
                                target="__BLANK"><img width="20px" src="https://app.winninghunter.com/images/track.png"> Track Store</a>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/d2a7d3630f98f8e66ccecaabd0fa3678cc9ae5b68c96b24dec1aeac326444703.jpg"
                                target="__BLANK"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke-width="1.5" stroke="currentColor" loading="lazy" class="w-4 h-4 inline-block">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
                                  </path>
                                </svg> Find Competitors with Magic Ai</a>
                              <a target="__BLANK" href="https://www.similarweb.com/website/www.purodella.de"
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
                        aria-describedby="tooltip50436275210901728097"
                        data-dropdown-toggle="tooltip50436275210901728097" class="dropdowninit">
                    </div>
                  </div>
                </div>
                <div
                  style="padding-left:1rem;font-size:13px;font-weight:600;color: #999;display: grid; grid-template-columns: auto minmax(0, 1fr);column-gap: 20px;">
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Adspend on this creative only.</div> Spend: $3.85
                  </span><span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Revenue on this creative only.</div>Revenue: $0.00
                  </span>
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">The EU reach/views for every adset in the ad combined.</div>
                    Reach: 350
                  </span>

                </div>
                <div class="shadow-sm w-full border p-1 text-center text-sm rounded-md"><b class="has-popup relative">
                    <div class="custom-popup hidden left-0">Revenue of all the ads for this product all time.</div>
                    Product Revenue: $12.84
                  </b></div>
              </div>
              <div class="primary-copy-cutoff primary-copy">
                <p>🌈Die perfekte Farbe für den Sommer🌈
                  🌈Genießen Sie unsere neue Kollektion🌈</p>
              </div>
              <hr style="width: 92%;margin: 0 auto;">
              <div style="position: absolute;z-index: 1;display: flex;gap: 10px;justify-content: end;"
                class="w-full text-sm p-1">
                <div class="has-popup relative">
                  <div class="custom-popup left-[-50px] hidden">Product Creation Date</div><span
                    class="p-1 font-bold bg-white rounded pointer-events-none" style="opacity: 0.79;"> <img
                      src="https://app.winninghunter.com/images/box.svg" class="h-4 v-4"> 2024-07-27</span>
                </div>
              </div>
              <div class="video-2 w-video w-embed">
                <div class="flex justify-center">
                  <div
                    class="glide flex justify-center carousel50436275210901728097 glide--ltr glide--carousel glide--swipeable">
                    <div data-glide-el="track" class="glide__track"
                      style="min-height:325px; width:100%;max-width:350px;">
                      <div class="glide__slides"
                        style="width: 1764px; font-size: 0px; height: 325px; transition: transform cubic-bezier(0.165, 0.84, 0.44, 1); transform: translate3d(-504px, 0px, 0px);">
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-right: 5px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/fe8eaa1a0a30b335add5ec30c7bb654f01d36fffdd03d50b23b9db3e06010057.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/fe8eaa1a0a30b335add5ec30c7bb654f01d36fffdd03d50b23b9db3e06010057.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/4fb88ba883d415d29ab8ca9363072d89501840b05b1c52ea59cb147b1d8346e9.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/4fb88ba883d415d29ab8ca9363072d89501840b05b1c52ea59cb147b1d8346e9.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--active"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/d2a7d3630f98f8e66ccecaabd0fa3678cc9ae5b68c96b24dec1aeac326444703.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/d2a7d3630f98f8e66ccecaabd0fa3678cc9ae5b68c96b24dec1aeac326444703.jpg"
                            style="max-height: 325px;position: absolute;"></div>,<div
                          class="glide__slide flex justify-center relative"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/fe8eaa1a0a30b335add5ec30c7bb654f01d36fffdd03d50b23b9db3e06010057.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/fe8eaa1a0a30b335add5ec30c7bb654f01d36fffdd03d50b23b9db3e06010057.jpg"
                            style="max-height: 325px;position: absolute;"></div>,<div
                          class="glide__slide flex justify-center relative"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/4fb88ba883d415d29ab8ca9363072d89501840b05b1c52ea59cb147b1d8346e9.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/4fb88ba883d415d29ab8ca9363072d89501840b05b1c52ea59cb147b1d8346e9.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/d2a7d3630f98f8e66ccecaabd0fa3678cc9ae5b68c96b24dec1aeac326444703.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/d2a7d3630f98f8e66ccecaabd0fa3678cc9ae5b68c96b24dec1aeac326444703.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/fe8eaa1a0a30b335add5ec30c7bb654f01d36fffdd03d50b23b9db3e06010057.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/fe8eaa1a0a30b335add5ec30c7bb654f01d36fffdd03d50b23b9db3e06010057.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                      </div>
                    </div>

                    <div class="glide__arrows" data-glide-el="controls">
                      <button
                        class="glide__arrow glide__arrow--left !rounded-full !bg-white !text-black border !opacity-75"
                        data-glide-dir="<" style="padding: 5.4px 5.4px;"><img src="https://app.winninghunter.com/images/chevron-left.svg"
                          width="w-6 h-6"></button>
                      <button
                        class="glide__arrow glide__arrow--right !rounded-full !bg-white !text-black border !opacity-75"
                        data-glide-dir=">" style="padding: 5.4px 5.4px;"><img src="https://app.winninghunter.com/images/chevron-right.svg"
                          width="w-6 h-6"></button>
                    </div>
                    <div class="glide__bullets" data-glide-el="controls[nav]" style="color: transparent;">
                      <button class="glide__bullet shadow glide__bullet--active" data-glide-dir="=0"></button>,<button
                        class="glide__bullet shadow" data-glide-dir="=1"></button>,<button class="glide__bullet shadow"
                        data-glide-dir="=2"></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frameitem-title-box" style="background-color:white;">
                <div class="frameitem-button-group gap-0">

                  <div class="linkclicks has-popup relative">
                    <div class="custom-popup hidden" style="left:-100px;">Page Information
                      <hr> <span class="text-[14px]">Advertiser runs in <img src="https://app.winninghunter.com/images/country-globe.svg"> 1
                        countries with <img height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                          style="pointer-events:none;"> 11 ads <div class="p-[2px] border rounded"><img
                            src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="10px" width="10px" class="DE"
                            style="border:none;border-radius: 50%;"></div></span>
                      <hr class="mt-[10px]">
                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/66fc15fd7db17952e020175e543258fad28f2b19d488c71673ae9b567f139b6e.jpg"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Puro-della </span>
                        <a class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="thisad = $(this).closest('.one_add_wrapper'); $(thisad).find('.pageadcount').click();">View
                          Page Ads</a>
                      </div>
                    </div>
                    <div class="flex pointer-events-none"
                      style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="https://adslibrary.eu-central-1.linodeobjects.com/66fc15fd7db17952e020175e543258fad28f2b19d488c71673ae9b567f139b6e.jpg"
                        onerror="this.src='/images/facebook_no_profile_pic.png'">
                      <div class="pointer-events-none min-w-100">
                        <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Puro-della
                        </div>
                        <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                            class="flex pointer-events-none"><img src="https://app.winninghunter.com/images/country-globe.svg"> 1</span> <span
                            class="pointer-events-none"> <img height="14px" width="14px"
                              src="https://app.winninghunter.com/images/page-ads-slate.svg" style="pointer-events:none;"> 11</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="product-info-onad ml-[30px] border-l pl-2 has-popup relative">

                    <div class="custom-popup !w-[240px] hidden" style="left:-100px;">Product Information
                      <hr>

                      <span class="text-[14px]">
                        <p>Price: €64.95</p>
                        <p></p>
                        <p></p>
                        <p>Product adspend: $3.85</p>
                        <p>Product total revenue: $12.84</p>
                        <hr>
                        <p class="text-xs">First ad started: Jul 27 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                            days ago</span></p>
                        <p class="text-xs">Last ad started: Jul 27 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                            days ago</span></p>
                        <p class="text-muted font-light text-xs">This creative generated 100% of the Product adspend
                        </p>
                      </span>
                      <hr style="margin-top:10px;">

                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="http://www.purodella.de/cdn/shop/files/Loose-Pink-Print-Wrinkled-Cotton-Spaghetti-Strap-Dress-Sleeveless1_1200x630.jpg?v=1722090042"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Lose rosa Druck zerknittert
                          Baumwolle Spaghetti-Träger Kleid ärmellos - S </span>
                        <a href="https://www.purodella.de/products/lose-rosa-druck-zerknittert-baumwolle-spaghetti-trager-kleid-armellos"
                          target="__BLANK"
                          class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none">Visit Product
                          Page</a>
                        <a class="view-product-ads text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="addmodal = $(this).closest('.add_item').find('.mainpopup').find('.addmodal'); handlePageProductSwitch(addmodal, forcestateto='product', openmodal=true);">View
                          Product Ads</a>
                      </div>
                    </div>
                    <div class="text-sm pointer-events-none">
                      <div class="flex pointer-events-none"
                        style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="http://www.purodella.de/cdn/shop/files/Loose-Pink-Print-Wrinkled-Cotton-Spaghetti-Strap-Dress-Sleeveless1_1200x630.jpg?v=1722090042"
                          onerror="this.src='/images/facebook_no_profile_pic.png'">
                        <div class="pointer-events-none">
                          <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Lose rosa
                            D...</div>
                          <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                              class="flex pointer-events-none">€64.95</span> <span class="flex pointer-events-none"><img
                                height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                                style="pointer-events:none;"> 1</span> <span class="flex pointer-events-none"><img
                                height="13px" width="13px" class="text-slate-500 ml-[4px]" src="https://app.winninghunter.com/images/adspend.svg"
                                style="pointer-events:none;">0</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="searchadchild">
                    <div class="add-popup" style="overflow-y: scroll;flex-direction: column;">
                      <input type="hidden" id="adhistory" adsets="{&quot;2024-07-27 00:00:00&quot;:&quot;2&quot;}"
                        adspend="{&quot;2024-07-28 08:35:55&quot;:350}" views="null" likes="null" comments="null"
                        shares="null">
                      <input type="hidden" id="randomToken" value="28097">
                      <input type="hidden" id="productidstar" value="504362752109017">
                      <div class="info_body" style="margin: 0 auto;">
                        <div id="w-node-_3eb5300b-0206-f91c-5505-e52b666a5390-de161bc0" class="frameitem-video-wrapper">
                          <div class="html-embed-5 w-embed">
                            <img
                              src="https://adslibrary.eu-central-1.linodeobjects.com/4fb88ba883d415d29ab8ca9363072d89501840b05b1c52ea59cb147b1d8346e9.jpg"
                              style="width:300px;object-fit:contain;display:block;">
                          </div>
                          <br> Ads History <canvas id="chart50436275210901728097"></canvas>
                        </div>
                        <div id="w-node-b50b7bcc-f095-371f-c679-5cab2590eb82-de161bc0" class="div-block-64">
                          <div class="frameitem-details">
                            <div class="frameitem_component">
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Primary Text</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>🌈Die perfekte Farbe für den Sommer🌈
                                      🌈Genießen Sie unsere neue Kollektion🌈</p>
                                  </div>
                                </div>
                              </div>
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Description</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>none</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="button w-button action-button"
                            onclick="getAdCopy('none', '504362752109017', this)">Generate Ad Copy <svg width="24px"
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
                          <div class="adcopygeneratorbox" id="adcopy504362752109017"></div>
                          <div class="frameitem-country">
                            Share:
                            <img src="https://app.winninghunter.com/images/share-ios-export.svg"
                              style="cursor:pointer;height:30px;display:inline-block;" class="share-ios action-button"
                              onclick="copyad('504362752109017')">
                            <!-- <div class="frameitem-country-wrapper">
  <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" class="frameitem-countr-flag">
  <div>
    <div class="frameitem-small-text">Ad Country</div>
    <div class="frameitem-country-name">Germany</div>
  </div>
</div>  
<div>
  <a href="#" onclick="" class="button w-button">Share ad</a>
</div> -->

                          </div>
                          <div class="frameitem-links-grid">
                            <div id="w-node-c767e22e-faf5-a876-818f-2bd868c356f9-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/store-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Store</div>
                                <a href="https://www.purodella.de/products/lose-rosa-druck-zerknittert-baumwolle-spaghetti-trager-kleid-armellos"
                                  target="__BLANK" class="frameitem-link">Product Page</a>
                              </div>
                            </div>
                            <div id="w-node-_1ebb295b-90a9-56aa-efb5-ed9f7c9c979b-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/magiccard-expense-svgrepo-com.svg" loading="lazy" alt=""
                                class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Ad Library;</div>
                                <a href="https://www.facebook.com/ads/library/?id=504362752109017" target="__BLANK"
                                  class="frameitem-link">Ad link</a>
                              </div>
                            </div>
                            <div id="w-node-bfa31db7-cfe0-3720-565c-00b513e721c8-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Page Ad Library</div>
                                <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=361013867099158&amp;search_type=page&amp;media_type=all"
                                  target="__BLANK" class="frameitem-link">Page Ad Library</a>
                              </div>
                            </div>
                            <div id="w-node-_0b943d44-7c96-4a99-eb12-328b90a563b7-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Photo</div>
                                undefined
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/track.png" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a tabindex="0" class="frameitem-link"
                                  href="/sales-tracker?store=https://www.purodella.de/products/lose-rosa-druck-zerknittert-baumwolle-spaghetti-trager-kleid-armellos"
                                  target="__BLANK">Track Store</a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-black-mini.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a type="button" class="frameitem-link"
                                  onclick="openPiModal('https://www.purodella.de', 'lose-rosa-druck-zerknittert-baumwolle-spaghetti-trager-kleid-armellos')">
                                  Import Product</a>
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
                                  href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/d2a7d3630f98f8e66ccecaabd0fa3678cc9ae5b68c96b24dec1aeac326444703.jpg"
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
<div id="competitor-adds-list50436275210901728097" class="compadslist"></div>
</div>
</div> -->
                      <img src="https://app.winninghunter.com/images/close-svgrepo-com.svg" loading="lazy"
                        data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048" alt="" class="close-ad">
                    </div>
                  </div>
                </div>
              </div>
              <hr style="width: 92%; margin: 0 auto;">

              <div class="add_info">
                <div class="add-meta-wrapper">
                  <div class="add-sub-info">
                    <div>Scaling: <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">0%</span>
                    </div>
                    <div>Platforms: <img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px"><img
                        src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px"><img src="https://app.winninghunter.com/images/audience_network.png"
                        height="20px" width="20px"><img src="https://app.winninghunter.com/images/messenger.svg" height="20px" width="20px"></div>
                    <div class="has-popup relative">
                      <div class="custom-popup hidden" style="left:0px;">Countries
                        <hr>
                        <div class="text-sm p-1">
                          <p class="flex w-full gap-1 mt-1"><img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt=""
                              height="20px" width="20px" class="DE w-5 h-5"
                              style="border:none;border-radius: 50%;">Germany</p>
                        </div>
                      </div>Countries: <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="20px" width="20px"
                        class="DE" style="border:none;border-radius: 50%;height:20px;">
                    </div>
                    <div>Website: <img src="https://app.winninghunter.com/images/SH.svg" height="20px" width="20px" class="techicon SHtip"
                        title="Shopify"><img src="https://app.winninghunter.com/images/PP.svg" height="20px" width="20px" class="techicon PPtip"
                        title="PayPal"><img src="https://app.winninghunter.com/images/CO.svg" height="20px" width="20px" class="techicon COtip"
                        title="Checkout"><img src="https://app.winninghunter.com/images/TP.svg" height="20px" width="20px" class="techicon TPtip"
                        title="Trustpilot"><img src="https://app.winninghunter.com/images/BU.svg" height="20px" width="20px" class="techicon BUtip"
                        title="Bundle App"></div>
                    <div>Gender: Women</div>
                    <div>Ages: 18 - 65+</div>
                    <div>Started: Jul 27 2024 <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                        days ago</span></div>
                    <div class="text-dark"><b>Adsets: 2</b></div>
                    <div class="add-sub-info">
                      <div>Last seen: Jul 28 2024 <span
                          style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">2
                          days ago</span></div>
                      <div class="text-dark"><b>Adsets: 2</b></div>
                    </div>

                  </div>
                  <button type="button" class="dots see-details action-button"
                    comptarget="#competitor-adds-list50436275210901728097"
                    imageurl="https://adslibrary.eu-central-1.linodeobjects.com/d2a7d3630f98f8e66ccecaabd0fa3678cc9ae5b68c96b24dec1aeac326444703.jpg">
                    View Details
                  </button>
                </div>
              </div>
              <div class="frameitem-title-box">
                <div class="frameitem-button-group" style="justify-content: space-between;">
                  <a href="https://www.purodella.de/products/lose-rosa-druck-zerknittert-baumwolle-spaghetti-trager-kleid-armellos"
                    target="__BLANK" class="linkclicks">
                    <div class="frameitem-titles">
                      <div
                        style="line-height: 12px; max-height: 24px; -webkit-line-clamp: 2;font-size: 8px;color: #606770;-webkit-box-orient: vertical;display: -webkit-box;float: none;">
                        www.purodella.de</div>
                      <div
                        style="display: -webkit-box;overflow: hidden;white-space: normal;display: -webkit-box;-webkit-box-orient: vertical;color: #1c1e21;font-size: 10px;line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;">
                        Hohe Rabatte + Kostenloser Versand</div>
                      <div style="line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;-webkit-box-orient: vertical;
display: -webkit-box;
float: none;overflow: hidden;
white-space: normal;    font-size: 9px;    color: #606770;"></div>
                    </div>
                  </a>
                  <div>
                    <a href="https://www.purodella.de/products/lose-rosa-druck-zerknittert-baumwolle-spaghetti-trager-kleid-armellos"
                      target="__BLANK" class="frameitem-info w-button action-button">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_8922055b-736f-9646-6ca8-1152631226031917-de161bc0" class="one_add_wrapper"
            style="position:relative;">



            <div class="add_item">
              <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
                <div class="frameitem-title-group">

                  <div class="text-block-7 ad-captions"><span class="currentamountofadsets">1 Adset</span> uses this
                    creative</div>
                  <div class="favorite-wrapper flex" style="gap: 10px;">

                    <div style="margin-right:6px;" class="has-popup adstat-block trending-block">
                      <div class="custom-popup hidden" style="display: none;">Ad Score: Testing <br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad has not spent enough ($0.86) </span><br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad is running for less than 3 days </span></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping" style="background-color:#FD0250;box-shadow: 0 0 4px 0.2px #FD0250;">
                      </div>
                    </div>
                    <div id="tooltip115263122603191756165"
                      class="dropdown-container has-shadow rounded mt-1 text-size-small hidden"
                      data-popper-placement="bottom"
                      style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1354px, 655px);"
                      data-popper-reference-hidden="" data-popper-escaped="">
                      <div class="">
                        <p class="text-sm font-medium"></p>
                        <div class="price-input price">
                          <div class="select-wrapper">
                            <div>
                              <p class="text-xs text-slate-600">Share this ad with others:</p>
                              <input placeholder="Share Url" readonly=""
                                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value="https://app.winninghunter.com/ad/1152631226031917"
                                onclick="copyad('1152631226031917')">
                              <button type="button" class="dropdown-item save-ad-lid off" data-platform="facebook"
                                data-id="1152631226031917"><img width="15px" src="https://app.winninghunter.com/images/heart-outline.svg"> Save this
                                ad</button>
                              <hr>
                              <button type="button" class="dropdown-item hide-advertiser-lid off"
                                data-platform="facebook" data-id="361013867099158"><img loading="lazy" width="17px"
                                  src="https://app.winninghunter.com/images/eye-closed.svg"> Hide this advertiser</button>
                              <hr>
                              <a target="__BLANK"
                                href="https://app.winninghunter.com/editor/204c5285682874726ad113b1e582ccd4c5a0ec7647470ac6c3a7c3d68924f938.jpg"
                                class="dropdownnode action-button dropdown-item" style="padding-left:7px"><img
                                  width="15px" src="https://app.winninghunter.com/images/picture-edit.svg"> Edit Image</a>
                              <hr>
                              <a target="__BLANK" href="https://www.purodella.de/collections/all?sort_by=best-selling"
                                class="dropdownnode action-button dropdown-item"><img width="20px" src="https://app.winninghunter.com/images/SH.svg">
                                Best Selling</a>
                              <hr>
                              <button type="button" class="dropdown-item"
                                onclick="openPiModal('https://www.purodella.de', 'italienische-grune-armellose-strickjacke-mit-o-ausschnitt-und-blumenmuster')"><img
                                  width="15px" src="https://app.winninghunter.com/images/link-black-mini.svg"> Import Product</button>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/sales-tracker?store=https://www.purodella.de/products/italienische-grune-armellose-strickjacke-mit-o-ausschnitt-und-blumenmuster"
                                target="__BLANK"><img width="20px" src="https://app.winninghunter.com/images/track.png"> Track Store</a>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/204c5285682874726ad113b1e582ccd4c5a0ec7647470ac6c3a7c3d68924f938.jpg"
                                target="__BLANK"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke-width="1.5" stroke="currentColor" loading="lazy" class="w-4 h-4 inline-block">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
                                  </path>
                                </svg> Find Competitors with Magic Ai</a>
                              <a target="__BLANK" href="https://www.similarweb.com/website/www.purodella.de"
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
                        aria-describedby="tooltip115263122603191756165"
                        data-dropdown-toggle="tooltip115263122603191756165" class="dropdowninit">
                    </div>
                  </div>
                </div>
                <div
                  style="padding-left:1rem;font-size:13px;font-weight:600;color: #999;display: grid; grid-template-columns: auto minmax(0, 1fr);column-gap: 20px;">
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Adspend on this creative only.</div> Spend: $0.86
                  </span><span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Revenue on this creative only.</div>Revenue: $0.00
                  </span>
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">The EU reach/views for every adset in the ad combined.</div>
                    Reach: 78
                  </span>

                </div>
                <div class="shadow-sm w-full border p-1 text-center text-sm rounded-md"><b class="has-popup relative">
                    <div class="custom-popup hidden left-0">Revenue of all the ads for this product all time.</div>
                    Product Revenue: $2.86
                  </b></div>
              </div>
              <div class="primary-copy-cutoff primary-copy">
                <p>😍Erhalte deinen Lieblingsstil von Soolinen<br> 😍Die Mengen sind begrenzt! Wer zuerst kommt, mahlt
                  zuerst!</p>
              </div>
              <hr style="width: 92%;margin: 0 auto;">
              <div style="position: absolute;z-index: 1;display: flex;gap: 10px;justify-content: end;"
                class="w-full text-sm p-1">
                <div class="has-popup relative">
                  <div class="custom-popup left-[-50px] hidden">Product Creation Date</div><span
                    class="p-1 font-bold bg-white rounded pointer-events-none" style="opacity: 0.79;"> <img
                      src="https://app.winninghunter.com/images/box.svg" class="h-4 v-4"> 2024-07-27</span>
                </div>
              </div>
              <div class="video-2 w-video w-embed"><img
                  src="https://adslibrary.eu-central-1.linodeobjects.com/204c5285682874726ad113b1e582ccd4c5a0ec7647470ac6c3a7c3d68924f938.jpg"
                  style="filter: blur(5px);min-height: 319px;"><img
                  src="https://adslibrary.eu-central-1.linodeobjects.com/204c5285682874726ad113b1e582ccd4c5a0ec7647470ac6c3a7c3d68924f938.jpg"
                  data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048"
                  style="display: block;margin:0 auto;height: auto;max-height: 100%;width: auto;max-width: 100%;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);object-fit: contain;">
              </div>
              <div class="frameitem-title-box" style="background-color:white;">
                <div class="frameitem-button-group gap-0">

                  <div class="linkclicks has-popup relative">
                    <div class="custom-popup hidden" style="left:-100px;">Page Information
                      <hr> <span class="text-[14px]">Advertiser runs in <img src="https://app.winninghunter.com/images/country-globe.svg"> 1
                        countries with <img height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                          style="pointer-events:none;"> 11 ads <div class="p-[2px] border rounded"><img
                            src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="10px" width="10px" class="DE"
                            style="border:none;border-radius: 50%;"></div></span>
                      <hr class="mt-[10px]">
                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/5e6fa999fdf6c0c2f07c91da86974ca7ffa6e4a438d815698dd1c184d64d1389.jpg"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Puro-della </span>
                        <a class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="thisad = $(this).closest('.one_add_wrapper'); $(thisad).find('.pageadcount').click();">View
                          Page Ads</a>
                      </div>
                    </div>
                    <div class="flex pointer-events-none"
                      style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="https://adslibrary.eu-central-1.linodeobjects.com/5e6fa999fdf6c0c2f07c91da86974ca7ffa6e4a438d815698dd1c184d64d1389.jpg"
                        onerror="this.src='/images/facebook_no_profile_pic.png'">
                      <div class="pointer-events-none min-w-100">
                        <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Puro-della
                        </div>
                        <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                            class="flex pointer-events-none"><img src="https://app.winninghunter.com/images/country-globe.svg"> 1</span> <span
                            class="pointer-events-none"> <img height="14px" width="14px"
                              src="https://app.winninghunter.com/images/page-ads-slate.svg" style="pointer-events:none;"> 11</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="product-info-onad ml-[30px] border-l pl-2 has-popup relative">

                    <div class="custom-popup !w-[240px] hidden" style="left:-100px;">Product Information
                      <hr>

                      <span class="text-[14px]">
                        <p>Price: €59.95</p>
                        <p></p>
                        <p></p>
                        <p>Product adspend: $0.86</p>
                        <p>Product total revenue: $2.86</p>
                        <hr>
                        <p class="text-xs">First ad started: Jul 27 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                            days ago</span></p>
                        <p class="text-xs">Last ad started: Jul 27 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                            days ago</span></p>
                        <p class="text-muted font-light text-xs">This creative generated 100% of the Product adspend
                        </p>
                      </span>
                      <hr style="margin-top:10px;">

                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="http://www.purodella.de/cdn/shop/files/Italian-Green-O-Neck-Floral-Patchwork-Knit-Vest-Sleeveless1_1200x630.jpg?v=1722088364"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Italienische grüne ärmellose
                          Strickjacke mit O-Ausschnitt und Blumenmuster - Grün / S </span>
                        <a href="https://www.purodella.de/products/italienische-grune-armellose-strickjacke-mit-o-ausschnitt-und-blumenmuster"
                          target="__BLANK"
                          class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none">Visit Product
                          Page</a>
                        <a class="view-product-ads text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="addmodal = $(this).closest('.add_item').find('.mainpopup').find('.addmodal'); handlePageProductSwitch(addmodal, forcestateto='product', openmodal=true);">View
                          Product Ads</a>
                      </div>
                    </div>
                    <div class="text-sm pointer-events-none">
                      <div class="flex pointer-events-none"
                        style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="http://www.purodella.de/cdn/shop/files/Italian-Green-O-Neck-Floral-Patchwork-Knit-Vest-Sleeveless1_1200x630.jpg?v=1722088364"
                          onerror="this.src='/images/facebook_no_profile_pic.png'">
                        <div class="pointer-events-none">
                          <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">
                            Italienisch...</div>
                          <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                              class="flex pointer-events-none">€59.95</span> <span class="flex pointer-events-none"><img
                                height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                                style="pointer-events:none;"> 1</span> <span class="flex pointer-events-none"><img
                                height="13px" width="13px" class="text-slate-500 ml-[4px]" src="https://app.winninghunter.com/images/adspend.svg"
                                style="pointer-events:none;">0</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="searchadchild">
                    <div class="add-popup" style="overflow-y: scroll;flex-direction: column;">
                      <input type="hidden" id="adhistory"
                        adsets="{&quot;2024-07-27 07:00:00&quot;:&quot;1&quot;,&quot;2024-07-28 08:16:48&quot;:&quot;1&quot;}"
                        adspend="{&quot;2024-07-28 08:16:43&quot;:78,&quot;2024-07-28 08:16:48&quot;:78}" views="null"
                        likes="null" comments="null" shares="null">
                      <input type="hidden" id="randomToken" value="56165">
                      <input type="hidden" id="productidstar" value="1152631226031917">
                      <div class="info_body" style="margin: 0 auto;">
                        <div id="w-node-_3eb5300b-0206-f91c-5505-e52b666a5390-de161bc0" class="frameitem-video-wrapper">
                          <div class="html-embed-5 w-embed">
                            <img
                              src="https://adslibrary.eu-central-1.linodeobjects.com/204c5285682874726ad113b1e582ccd4c5a0ec7647470ac6c3a7c3d68924f938.jpg"
                              style="width:300px;object-fit:contain;display:block;">
                          </div>
                          <br> Ads History <canvas id="chart115263122603191756165"></canvas>
                        </div>
                        <div id="w-node-b50b7bcc-f095-371f-c679-5cab2590eb82-de161bc0" class="div-block-64">
                          <div class="frameitem-details">
                            <div class="frameitem_component">
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Primary Text</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>😍Erhalte deinen Lieblingsstil von Soolinen<br> 😍Die Mengen sind begrenzt! Wer
                                      zuerst kommt, mahlt zuerst!</p>
                                  </div>
                                </div>
                              </div>
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Description</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>Italienische grüne ärmellose Strickjacke mit O-Ausschnitt und floralem
                                      PatchworkStoff: MischstrickGröße und Passform:Passform: Dieses Kleidungsstück
                                      fällt in normaler Größe aus.Länge: Größe XL misst 23,4" von der Schulter bis zum
                                      SaumOberweite: Großartig für jede Körbchengröße.Taille...</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="button w-button action-button"
                            onclick="getAdCopy('Italienische%20gr%C3%BCne%20%C3%A4rmellose%20Strickjacke%20mit%20O-Ausschnitt%20und%20floralem%20PatchworkStoff%3A%20MischstrickGr%C3%B6%C3%9Fe%20und%20Passform%3APassform%3A%20Dieses%20Kleidungsst%C3%BCck%20f%C3%A4llt%20in%20normaler%20Gr%C3%B6%C3%9Fe%20aus.L%C3%A4nge%3A%20Gr%C3%B6%C3%9Fe%20XL%20misst%2023%2C4%22%20von%20der%20Schulter%20bis%20zum%20SaumOberweite%3A%20Gro%C3%9Fartig%20f%C3%BCr%20jede%20K%C3%B6rbchengr%C3%B6%C3%9Fe.Taille...', '1152631226031917', this)">Generate
                            Ad Copy <svg width="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                              transform="rotate(45)" class="d-inline" style="margin-left:.5rem;">
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier" style="width:20px;">
                                <path
                                  d="M15.2073 4.50372C18.5358 2.97323 20.2 2.20799 20.996 3.00399C21.792 3.79998 21.0268 5.46421 19.4963 8.79267L18.6427 10.649C18.3371 11.3137 18.1843 11.646 18.1843 11.9999C18.1843 12.3539 18.3371 12.6862 18.6427 13.3509L19.4963 15.2072C21.0268 18.5357 21.792 20.1999 20.996 20.9959C20.2 21.7919 18.5358 21.0266 15.2073 19.4962L13.351 18.6426C12.6863 18.337 12.354 18.1841 12.0001 18.1841C11.6461 18.1841 11.3138 18.337 10.6491 18.6426L8.7928 19.4962C5.46434 21.0266 3.80011 21.7919 3.00411 20.9959C2.20811 20.1999 2.97335 18.5357 4.50384 15.2072L5.35741 13.3509C5.66304 12.6862 5.81586 12.3539 5.81586 11.9999C5.81586 11.646 5.66304 11.3137 5.35741 10.649L4.50384 8.79267C2.97335 5.46421 2.20811 3.79998 3.00411 3.00399C3.80011 2.20799 5.46434 2.97323 8.7928 4.50372L10.6491 5.35729C11.3138 5.66292 11.6461 5.81574 12.0001 5.81574C12.354 5.81574 12.6863 5.66292 13.351 5.35729L15.2073 4.50372Z"
                                  fill="#fff"></path>
                              </g>
                            </svg></button>
                          <div class="adcopygeneratorbox" id="adcopy1152631226031917"></div>
                          <div class="frameitem-country">
                            Share:
                            <img src="https://app.winninghunter.com/images/share-ios-export.svg"
                              style="cursor:pointer;height:30px;display:inline-block;" class="share-ios action-button"
                              onclick="copyad('1152631226031917')">
                            <!-- <div class="frameitem-country-wrapper">
  <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" class="frameitem-countr-flag">
  <div>
    <div class="frameitem-small-text">Ad Country</div>
    <div class="frameitem-country-name">Germany</div>
  </div>
</div>  
<div>
  <a href="#" onclick="" class="button w-button">Share ad</a>
</div> -->

                          </div>
                          <div class="frameitem-links-grid">
                            <div id="w-node-c767e22e-faf5-a876-818f-2bd868c356f9-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/store-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Store</div>
                                <a href="https://www.purodella.de/products/italienische-grune-armellose-strickjacke-mit-o-ausschnitt-und-blumenmuster"
                                  target="__BLANK" class="frameitem-link">Product Page</a>
                              </div>
                            </div>
                            <div id="w-node-_1ebb295b-90a9-56aa-efb5-ed9f7c9c979b-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/magiccard-expense-svgrepo-com.svg" loading="lazy" alt=""
                                class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Ad Library;</div>
                                <a href="https://www.facebook.com/ads/library/?id=1152631226031917" target="__BLANK"
                                  class="frameitem-link">Ad link</a>
                              </div>
                            </div>
                            <div id="w-node-bfa31db7-cfe0-3720-565c-00b513e721c8-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Page Ad Library</div>
                                <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=361013867099158&amp;search_type=page&amp;media_type=all"
                                  target="__BLANK" class="frameitem-link">Page Ad Library</a>
                              </div>
                            </div>
                            <div id="w-node-_0b943d44-7c96-4a99-eb12-328b90a563b7-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Photo</div>
                                <a href="https://adslibrary.eu-central-1.linodeobjects.com/204c5285682874726ad113b1e582ccd4c5a0ec7647470ac6c3a7c3d68924f938.jpg"
                                  class="frameitem-link" target="__BLANK" download="">Download <br>Image </a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/track.png" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a tabindex="0" class="frameitem-link"
                                  href="/sales-tracker?store=https://www.purodella.de/products/italienische-grune-armellose-strickjacke-mit-o-ausschnitt-und-blumenmuster"
                                  target="__BLANK">Track Store</a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-black-mini.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a type="button" class="frameitem-link"
                                  onclick="openPiModal('https://www.purodella.de', 'italienische-grune-armellose-strickjacke-mit-o-ausschnitt-und-blumenmuster')">
                                  Import Product</a>
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
                                  href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/204c5285682874726ad113b1e582ccd4c5a0ec7647470ac6c3a7c3d68924f938.jpg"
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
<div id="competitor-adds-list115263122603191756165" class="compadslist"></div>
</div>
</div> -->
                      <img src="https://app.winninghunter.com/images/close-svgrepo-com.svg" loading="lazy"
                        data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048" alt="" class="close-ad">
                    </div>
                  </div>
                </div>
              </div>
              <hr style="width: 92%; margin: 0 auto;">

              <div class="add_info">
                <div class="add-meta-wrapper">
                  <div class="add-sub-info">
                    <div>Scaling: <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">0%</span>
                    </div>
                    <div>Platforms: <img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px"><img
                        src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px"><img src="https://app.winninghunter.com/images/audience_network.png"
                        height="20px" width="20px"><img src="https://app.winninghunter.com/images/messenger.svg" height="20px" width="20px"></div>
                    <div class="has-popup relative">
                      <div class="custom-popup hidden" style="left:0px;">Countries
                        <hr>
                        <div class="text-sm p-1">
                          <p class="flex w-full gap-1 mt-1"><img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt=""
                              height="20px" width="20px" class="DE w-5 h-5"
                              style="border:none;border-radius: 50%;">Germany</p>
                        </div>
                      </div>Countries: <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="20px" width="20px"
                        class="DE" style="border:none;border-radius: 50%;height:20px;">
                    </div>
                    <div>Website: <img src="https://app.winninghunter.com/images/SH.svg" height="20px" width="20px" class="techicon SHtip"
                        title="Shopify"><img src="https://app.winninghunter.com/images/PP.svg" height="20px" width="20px" class="techicon PPtip"
                        title="PayPal"><img src="https://app.winninghunter.com/images/CO.svg" height="20px" width="20px" class="techicon COtip"
                        title="Checkout"><img src="https://app.winninghunter.com/images/TP.svg" height="20px" width="20px" class="techicon TPtip"
                        title="Trustpilot"><img src="https://app.winninghunter.com/images/BU.svg" height="20px" width="20px" class="techicon BUtip"
                        title="Bundle App"></div>
                    <div>Gender: Women</div>
                    <div>Ages: 18 - 65+</div>
                    <div>Started: Jul 27 2024 <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">3
                        days ago</span></div>
                    <div class="text-dark"><b>Adsets: 1</b></div>
                    <div class="add-sub-info">
                      <div>Last seen: Jul 28 2024 <span
                          style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">2
                          days ago</span></div>
                      <div class="text-dark"><b>Adsets: 1</b></div>
                    </div>

                  </div>
                  <button type="button" class="dots see-details action-button"
                    comptarget="#competitor-adds-list115263122603191756165"
                    imageurl="https://adslibrary.eu-central-1.linodeobjects.com/204c5285682874726ad113b1e582ccd4c5a0ec7647470ac6c3a7c3d68924f938.jpg">
                    View Details
                  </button>
                </div>
              </div>
              <div class="frameitem-title-box">
                <div class="frameitem-button-group" style="justify-content: space-between;">
                  <a href="https://www.purodella.de/products/italienische-grune-armellose-strickjacke-mit-o-ausschnitt-und-blumenmuster"
                    target="__BLANK" class="linkclicks">
                    <div class="frameitem-titles">
                      <div
                        style="line-height: 12px; max-height: 24px; -webkit-line-clamp: 2;font-size: 8px;color: #606770;-webkit-box-orient: vertical;display: -webkit-box;float: none;">
                        www.purodella.de</div>
                      <div
                        style="display: -webkit-box;overflow: hidden;white-space: normal;display: -webkit-box;-webkit-box-orient: vertical;color: #1c1e21;font-size: 10px;line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;">
                        Kostenloses Verzinken + hohe Käufe</div>
                      <div style="line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;-webkit-box-orient: vertical;
display: -webkit-box;
float: none;overflow: hidden;
white-space: normal;    font-size: 9px;    color: #606770;">Italienische grüne ärmellose Strickjacke mit O-Ausschnitt
                        und floralem PatchworkStoff: MischstrickGröße und Passform:Passform: Dieses Kleidungsstück fällt
                        in normaler Größe aus.Länge: Größe XL misst 23,4" von der Schulter bis zum SaumOberweite:
                        Großartig für jede Körbchengröße.Taille...</div>
                    </div>
                  </a>
                  <div>
                    <a href="https://www.purodella.de/products/italienische-grune-armellose-strickjacke-mit-o-ausschnitt-und-blumenmuster"
                      target="__BLANK" class="frameitem-info w-button action-button">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_8922055b-736f-9646-6ca8-464379266486122-de161bc0" class="one_add_wrapper"
            style="position:relative;">



            <div class="add_item">
              <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
                <div class="frameitem-title-group">

                  <div class="text-block-7 ad-captions"><span class="currentamountofadsets">1 Adset</span> uses this
                    creative</div>
                  <div class="favorite-wrapper flex" style="gap: 10px;">

                    <div style="margin-right:6px;" class="has-popup adstat-block trending-block">
                      <div class="custom-popup hidden" style="display: none;">Ad Score: Testing <br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad has not spent enough ($0.86) </span><br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad is running for less than 3 days </span></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping" style="background-color:#FD0250;box-shadow: 0 0 4px 0.2px #FD0250;">
                      </div>
                    </div>
                    <div id="tooltip46437926648612283527"
                      class="dropdown-container has-shadow rounded mt-1 text-size-small hidden"
                      data-popper-placement="top"
                      style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(326px, 1259px);"
                      data-popper-reference-hidden="" data-popper-escaped="">
                      <div class="">
                        <p class="text-sm font-medium"></p>
                        <div class="price-input price">
                          <div class="select-wrapper">
                            <div>
                              <p class="text-xs text-slate-600">Share this ad with others:</p>
                              <input placeholder="Share Url" readonly=""
                                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value="https://app.winninghunter.com/ad/464379266486122"
                                onclick="copyad('464379266486122')">
                              <button type="button" class="dropdown-item save-ad-lid off" data-platform="facebook"
                                data-id="464379266486122"><img width="15px" src="https://app.winninghunter.com/images/heart-outline.svg"> Save this
                                ad</button>
                              <hr>
                              <button type="button" class="dropdown-item hide-advertiser-lid off"
                                data-platform="facebook" data-id="361013867099158"><img loading="lazy" width="17px"
                                  src="https://app.winninghunter.com/images/eye-closed.svg"> Hide this advertiser</button>
                              <hr>

                              <a target="__BLANK" href="https://www.purodella.de/collections/all?sort_by=best-selling"
                                class="dropdownnode action-button dropdown-item"><img width="20px" src="https://app.winninghunter.com/images/SH.svg">
                                Best Selling</a>
                              <hr>
                              <button type="button" class="dropdown-item"
                                onclick="openPiModal('https://www.purodella.de', 'kleid-fur-frauen')"><img width="15px"
                                  src="https://app.winninghunter.com/images/link-black-mini.svg"> Import Product</button>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/sales-tracker?store=https://www.purodella.de/products/kleid-fur-frauen"
                                target="__BLANK"><img width="20px" src="https://app.winninghunter.com/images/track.png"> Track Store</a>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/90ef298bd17ed3e33145962df21cd99312b3624fe8e80221f82429212cb08755.jpg"
                                target="__BLANK"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke-width="1.5" stroke="currentColor" loading="lazy" class="w-4 h-4 inline-block">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
                                  </path>
                                </svg> Find Competitors with Magic Ai</a>
                              <a target="__BLANK" href="https://www.similarweb.com/website/www.purodella.de"
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
                        aria-describedby="tooltip46437926648612283527"
                        data-dropdown-toggle="tooltip46437926648612283527" class="dropdowninit">
                    </div>
                  </div>
                </div>
                <div
                  style="padding-left:1rem;font-size:13px;font-weight:600;color: #999;display: grid; grid-template-columns: auto minmax(0, 1fr);column-gap: 20px;">
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Adspend on this creative only.</div> Spend: $0.86
                  </span><span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Revenue on this creative only.</div>Revenue: $0.00
                  </span>
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">The EU reach/views for every adset in the ad combined.</div>
                    Reach: 78
                  </span>

                </div>
                <div class="shadow-sm w-full border p-1 text-center text-sm rounded-md"><b class="has-popup relative">
                    <div class="custom-popup hidden left-0">Revenue of all the ads for this product all time.</div>
                    Product Revenue: $3.93
                  </b></div>
              </div>
              <div class="primary-copy-cutoff primary-copy">
                <p>Fühlen Sie sich elegant und strahlend mit unserer neuesten Kollektion von Kleidern für Frauen! 💃😍
                  Unsere Kleider sind die perfekte Kombination aus Komfort und Stil und geben Ihnen das Selbstvertrauen,
                  😍das Sie verdienen. Sie eignen sich für jeden Anlass - ob zum Ausgehen, für ein Geschäftstreffen oder
                  für einen legeren Tag - Sie können sich immer darauf verlassen, dass unsere Kleider schick und modisch
                  aussehen.😍😍</p>
              </div>
              <hr style="width: 92%;margin: 0 auto;">
              <div style="position: absolute;z-index: 1;display: flex;gap: 10px;justify-content: end;"
                class="w-full text-sm p-1">
                <div class="has-popup relative">
                  <div class="custom-popup left-[-50px] hidden">Product Creation Date</div><span
                    class="p-1 font-bold bg-white rounded pointer-events-none" style="opacity: 0.79;"> <img
                      src="https://app.winninghunter.com/images/box.svg" class="h-4 v-4"> 2024-07-27</span>
                </div>
              </div>
              <div class="video-2 w-video w-embed">
                <div class="flex justify-center">
                  <div
                    class="glide flex justify-center carousel46437926648612283527 glide--ltr glide--carousel glide--swipeable">
                    <div data-glide-el="track" class="glide__track"
                      style="min-height:325px; width:100%;max-width:350px;">
                      <div class="glide__slides"
                        style="width: 1512px; font-size: 0px; height: 325px; transition: transform cubic-bezier(0.165, 0.84, 0.44, 1); transform: translate3d(-504px, 0px, 0px);">
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-right: 5px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/90ef298bd17ed3e33145962df21cd99312b3624fe8e80221f82429212cb08755.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/90ef298bd17ed3e33145962df21cd99312b3624fe8e80221f82429212cb08755.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/8b34b405ccf699b1382ca39b5b812b6c15b5d8a1d33a29ae7873ffd9ef31d518.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/8b34b405ccf699b1382ca39b5b812b6c15b5d8a1d33a29ae7873ffd9ef31d518.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--active"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/90ef298bd17ed3e33145962df21cd99312b3624fe8e80221f82429212cb08755.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/90ef298bd17ed3e33145962df21cd99312b3624fe8e80221f82429212cb08755.jpg"
                            style="max-height: 325px;position: absolute;"></div>,<div
                          class="glide__slide flex justify-center relative"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/8b34b405ccf699b1382ca39b5b812b6c15b5d8a1d33a29ae7873ffd9ef31d518.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/8b34b405ccf699b1382ca39b5b812b6c15b5d8a1d33a29ae7873ffd9ef31d518.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/90ef298bd17ed3e33145962df21cd99312b3624fe8e80221f82429212cb08755.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/90ef298bd17ed3e33145962df21cd99312b3624fe8e80221f82429212cb08755.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/8b34b405ccf699b1382ca39b5b812b6c15b5d8a1d33a29ae7873ffd9ef31d518.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/8b34b405ccf699b1382ca39b5b812b6c15b5d8a1d33a29ae7873ffd9ef31d518.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                      </div>
                    </div>

                    <div class="glide__arrows" data-glide-el="controls">
                      <button
                        class="glide__arrow glide__arrow--left !rounded-full !bg-white !text-black border !opacity-75"
                        data-glide-dir="<" style="padding: 5.4px 5.4px;"><img src="https://app.winninghunter.com/images/chevron-left.svg"
                          width="w-6 h-6"></button>
                      <button
                        class="glide__arrow glide__arrow--right !rounded-full !bg-white !text-black border !opacity-75"
                        data-glide-dir=">" style="padding: 5.4px 5.4px;"><img src="https://app.winninghunter.com/images/chevron-right.svg"
                          width="w-6 h-6"></button>
                    </div>
                    <div class="glide__bullets" data-glide-el="controls[nav]" style="color: transparent;">
                      <button class="glide__bullet shadow glide__bullet--active" data-glide-dir="=0"></button>,<button
                        class="glide__bullet shadow" data-glide-dir="=1"></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frameitem-title-box" style="background-color:white;">
                <div class="frameitem-button-group gap-0">

                  <div class="linkclicks has-popup relative">
                    <div class="custom-popup hidden" style="left:-100px;">Page Information
                      <hr> <span class="text-[14px]">Advertiser runs in <img src="https://app.winninghunter.com/images/country-globe.svg"> 1
                        countries with <img height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                          style="pointer-events:none;"> 11 ads <div class="p-[2px] border rounded"><img
                            src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="10px" width="10px" class="DE"
                            style="border:none;border-radius: 50%;"></div></span>
                      <hr class="mt-[10px]">
                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/13634cde6b24c41fdad583f3b3856b7c6bf999f723378c29f7f567c8963d1850.jpg"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Puro-della </span>
                        <a class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="thisad = $(this).closest('.one_add_wrapper'); $(thisad).find('.pageadcount').click();">View
                          Page Ads</a>
                      </div>
                    </div>
                    <div class="flex pointer-events-none"
                      style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="https://adslibrary.eu-central-1.linodeobjects.com/13634cde6b24c41fdad583f3b3856b7c6bf999f723378c29f7f567c8963d1850.jpg"
                        onerror="this.src='/images/facebook_no_profile_pic.png'">
                      <div class="pointer-events-none min-w-100">
                        <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Puro-della
                        </div>
                        <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                            class="flex pointer-events-none"><img src="https://app.winninghunter.com/images/country-globe.svg"> 1</span> <span
                            class="pointer-events-none"> <img height="14px" width="14px"
                              src="https://app.winninghunter.com/images/page-ads-slate.svg" style="pointer-events:none;"> 11</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="product-info-onad ml-[30px] border-l pl-2 has-popup relative">

                    <div class="custom-popup !w-[240px] hidden" style="left:-100px;">Product Information
                      <hr>

                      <span class="text-[14px]">
                        <p>Price: €49.00</p>
                        <p></p>
                        <p></p>
                        <p>Product adspend: $1.18</p>
                        <p>Product total revenue: $3.93</p>
                        <hr>
                        <p class="text-xs">First ad started: Jul 27 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                            days ago</span></p>
                        <p class="text-xs">Last ad started: Jul 27 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                            days ago</span></p>
                        <p class="text-muted font-light text-xs">This creative generated 73% of the Product adspend </p>
                      </span>
                      <hr style="margin-top:10px;">

                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="http://www.purodella.de/cdn/shop/files/4_577fa629-c50f-41cd-80d2-d4a2f656504f_1200x630.jpg?v=1722103226"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Kleid für Frauen - Leopard / S
                        </span>
                        <a href="https://www.purodella.de/products/kleid-fur-frauen" target="__BLANK"
                          class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none">Visit Product
                          Page</a>
                        <a class="view-product-ads text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="addmodal = $(this).closest('.add_item').find('.mainpopup').find('.addmodal'); handlePageProductSwitch(addmodal, forcestateto='product', openmodal=true);">View
                          Product Ads</a>
                      </div>
                    </div>
                    <div class="text-sm pointer-events-none">
                      <div class="flex pointer-events-none"
                        style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="http://www.purodella.de/cdn/shop/files/4_577fa629-c50f-41cd-80d2-d4a2f656504f_1200x630.jpg?v=1722103226"
                          onerror="this.src='/images/facebook_no_profile_pic.png'">
                        <div class="pointer-events-none">
                          <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Kleid für
                            F...</div>
                          <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                              class="flex pointer-events-none">€49.00</span> <span class="flex pointer-events-none"><img
                                height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                                style="pointer-events:none;"> 2</span> <span class="flex pointer-events-none"><img
                                height="13px" width="13px" class="text-slate-500 ml-[4px]" src="https://app.winninghunter.com/images/adspend.svg"
                                style="pointer-events:none;">0</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="searchadchild">
                    <div class="add-popup" style="overflow-y: scroll;flex-direction: column;">
                      <input type="hidden" id="adhistory" adsets="{&quot;2024-07-27 00:00:00&quot;:&quot;1&quot;}"
                        adspend="{&quot;2024-07-28 07:23:50&quot;:78}" views="null" likes="null" comments="null"
                        shares="null">
                      <input type="hidden" id="randomToken" value="83527">
                      <input type="hidden" id="productidstar" value="464379266486122">
                      <div class="info_body" style="margin: 0 auto;">
                        <div id="w-node-_3eb5300b-0206-f91c-5505-e52b666a5390-de161bc0" class="frameitem-video-wrapper">
                          <div class="html-embed-5 w-embed">
                            <img
                              src="https://adslibrary.eu-central-1.linodeobjects.com/8b34b405ccf699b1382ca39b5b812b6c15b5d8a1d33a29ae7873ffd9ef31d518.jpg"
                              style="width:300px;object-fit:contain;display:block;">
                          </div>
                          <br> Ads History <canvas id="chart46437926648612283527"></canvas>
                        </div>
                        <div id="w-node-b50b7bcc-f095-371f-c679-5cab2590eb82-de161bc0" class="div-block-64">
                          <div class="frameitem-details">
                            <div class="frameitem_component">
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Primary Text</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>Fühlen Sie sich elegant und strahlend mit unserer neuesten Kollektion von
                                      Kleidern für Frauen! 💃😍
                                      Unsere Kleider sind die perfekte Kombination aus Komfort und Stil und geben Ihnen
                                      das Selbstvertrauen, 😍das Sie verdienen. Sie eignen sich für jeden Anlass - ob
                                      zum Ausgehen, für ein Geschäftstreffen oder für einen legeren Tag - Sie können
                                      sich immer darauf verlassen, dass unsere Kleider schick und modisch aussehen.😍😍
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Description</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>none</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="button w-button action-button"
                            onclick="getAdCopy('none', '464379266486122', this)">Generate Ad Copy <svg width="24px"
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
                          <div class="adcopygeneratorbox" id="adcopy464379266486122"></div>
                          <div class="frameitem-country">
                            Share:
                            <img src="https://app.winninghunter.com/images/share-ios-export.svg"
                              style="cursor:pointer;height:30px;display:inline-block;" class="share-ios action-button"
                              onclick="copyad('464379266486122')">
                            <!-- <div class="frameitem-country-wrapper">
  <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" class="frameitem-countr-flag">
  <div>
    <div class="frameitem-small-text">Ad Country</div>
    <div class="frameitem-country-name">Germany</div>
  </div>
</div>  
<div>
  <a href="#" onclick="" class="button w-button">Share ad</a>
</div> -->

                          </div>
                          <div class="frameitem-links-grid">
                            <div id="w-node-c767e22e-faf5-a876-818f-2bd868c356f9-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/store-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Store</div>
                                <a href="https://www.purodella.de/products/kleid-fur-frauen" target="__BLANK"
                                  class="frameitem-link">Product Page</a>
                              </div>
                            </div>
                            <div id="w-node-_1ebb295b-90a9-56aa-efb5-ed9f7c9c979b-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/magiccard-expense-svgrepo-com.svg" loading="lazy" alt=""
                                class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Ad Library;</div>
                                <a href="https://www.facebook.com/ads/library/?id=464379266486122" target="__BLANK"
                                  class="frameitem-link">Ad link</a>
                              </div>
                            </div>
                            <div id="w-node-bfa31db7-cfe0-3720-565c-00b513e721c8-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Page Ad Library</div>
                                <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=361013867099158&amp;search_type=page&amp;media_type=all"
                                  target="__BLANK" class="frameitem-link">Page Ad Library</a>
                              </div>
                            </div>
                            <div id="w-node-_0b943d44-7c96-4a99-eb12-328b90a563b7-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Photo</div>
                                undefined
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/track.png" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a tabindex="0" class="frameitem-link"
                                  href="/sales-tracker?store=https://www.purodella.de/products/kleid-fur-frauen"
                                  target="__BLANK">Track Store</a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-black-mini.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a type="button" class="frameitem-link"
                                  onclick="openPiModal('https://www.purodella.de', 'kleid-fur-frauen')"> Import
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
                                  href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/90ef298bd17ed3e33145962df21cd99312b3624fe8e80221f82429212cb08755.jpg"
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
<div id="competitor-adds-list46437926648612283527" class="compadslist"></div>
</div>
</div> -->
                      <img src="https://app.winninghunter.com/images/close-svgrepo-com.svg" loading="lazy"
                        data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048" alt="" class="close-ad">
                    </div>
                  </div>
                </div>
              </div>
              <hr style="width: 92%; margin: 0 auto;">

              <div class="add_info">
                <div class="add-meta-wrapper">
                  <div class="add-sub-info">
                    <div>Scaling: <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">0%</span>
                    </div>
                    <div>Platforms: <img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px"><img
                        src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px"><img src="https://app.winninghunter.com/images/audience_network.png"
                        height="20px" width="20px"><img src="https://app.winninghunter.com/images/messenger.svg" height="20px" width="20px"></div>
                    <div class="has-popup relative">
                      <div class="custom-popup hidden" style="left:0px;">Countries
                        <hr>
                        <div class="text-sm p-1">
                          <p class="flex w-full gap-1 mt-1"><img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt=""
                              height="20px" width="20px" class="DE w-5 h-5"
                              style="border:none;border-radius: 50%;">Germany</p>
                        </div>
                      </div>Countries: <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="20px" width="20px"
                        class="DE" style="border:none;border-radius: 50%;height:20px;">
                    </div>
                    <div>Website: <img src="https://app.winninghunter.com/images/SH.svg" height="20px" width="20px" class="techicon SHtip"
                        title="Shopify"><img src="https://app.winninghunter.com/images/PP.svg" height="20px" width="20px" class="techicon PPtip"
                        title="PayPal"><img src="https://app.winninghunter.com/images/CO.svg" height="20px" width="20px" class="techicon COtip"
                        title="Checkout"><img src="https://app.winninghunter.com/images/TP.svg" height="20px" width="20px" class="techicon TPtip"
                        title="Trustpilot"><img src="https://app.winninghunter.com/images/BU.svg" height="20px" width="20px" class="techicon BUtip"
                        title="Bundle App"></div>
                    <div>Gender: Women</div>
                    <div>Ages: 18 - 65+</div>
                    <div>Started: Jul 27 2024 <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                        days ago</span></div>
                    <div class="text-dark"><b>Adsets: 1</b></div>
                    <div class="add-sub-info">
                      <div>Last seen: Jul 28 2024 <span
                          style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">2
                          days ago</span></div>
                      <div class="text-dark"><b>Adsets: 1</b></div>
                    </div>

                  </div>
                  <button type="button" class="dots see-details action-button"
                    comptarget="#competitor-adds-list46437926648612283527"
                    imageurl="https://adslibrary.eu-central-1.linodeobjects.com/90ef298bd17ed3e33145962df21cd99312b3624fe8e80221f82429212cb08755.jpg">
                    View Details
                  </button>
                </div>
              </div>
              <div class="frameitem-title-box">
                <div class="frameitem-button-group" style="justify-content: space-between;">
                  <a href="https://www.purodella.de/products/kleid-fur-frauen" target="__BLANK" class="linkclicks">
                    <div class="frameitem-titles">
                      <div
                        style="line-height: 12px; max-height: 24px; -webkit-line-clamp: 2;font-size: 8px;color: #606770;-webkit-box-orient: vertical;display: -webkit-box;float: none;">
                        www.purodella.de</div>
                      <div
                        style="display: -webkit-box;overflow: hidden;white-space: normal;display: -webkit-box;-webkit-box-orient: vertical;color: #1c1e21;font-size: 10px;line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;">
                        Kostenloser Versand nur heute gültig!😍</div>
                      <div style="line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;-webkit-box-orient: vertical;
display: -webkit-box;
float: none;overflow: hidden;
white-space: normal;    font-size: 9px;    color: #606770;"></div>
                    </div>
                  </a>
                  <div>
                    <a href="https://www.purodella.de/products/kleid-fur-frauen" target="__BLANK"
                      class="frameitem-info w-button action-button">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_8922055b-736f-9646-6ca8-1626336924575467-de161bc0" class="one_add_wrapper"
            style="position:relative;">



            <div class="add_item">
              <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
                <div class="frameitem-title-group">

                  <div class="text-block-7 ad-captions"><span class="currentamountofadsets">1 Adset</span> uses this
                    creative</div>
                  <div class="favorite-wrapper flex" style="gap: 10px;">

                    <div style="margin-right:6px;" class="has-popup adstat-block trending-block">
                      <div class="custom-popup hidden" style="display: none;">Ad Score: Testing <br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad has not spent enough ($0.48) </span><br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad is running for less than 3 days </span></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping" style="background-color:#FD0250;box-shadow: 0 0 4px 0.2px #FD0250;">
                      </div>
                    </div>
                    <div id="tooltip162633692457546754047"
                      class="dropdown-container has-shadow rounded mt-1 text-size-small hidden"
                      data-popper-placement="top"
                      style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(582px, 1259px);"
                      data-popper-reference-hidden="" data-popper-escaped="">
                      <div class="">
                        <p class="text-sm font-medium"></p>
                        <div class="price-input price">
                          <div class="select-wrapper">
                            <div>
                              <p class="text-xs text-slate-600">Share this ad with others:</p>
                              <input placeholder="Share Url" readonly=""
                                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value="https://app.winninghunter.com/ad/1626336924575467"
                                onclick="copyad('1626336924575467')">
                              <button type="button" class="dropdown-item save-ad-lid off" data-platform="facebook"
                                data-id="1626336924575467"><img width="15px" src="https://app.winninghunter.com/images/heart-outline.svg"> Save this
                                ad</button>
                              <hr>
                              <button type="button" class="dropdown-item hide-advertiser-lid off"
                                data-platform="facebook" data-id="361013867099158"><img loading="lazy" width="17px"
                                  src="https://app.winninghunter.com/images/eye-closed.svg"> Hide this advertiser</button>
                              <hr>

                              <a target="__BLANK" href="https://www.purodella.de/collections/all?sort_by=best-selling"
                                class="dropdownnode action-button dropdown-item"><img width="20px" src="https://app.winninghunter.com/images/SH.svg">
                                Best Selling</a>
                              <hr>
                              <button type="button" class="dropdown-item"
                                onclick="openPiModal('https://www.purodella.de', 'damen-v-ausschnitt-solide-farbe-lose-kleid')"><img
                                  width="15px" src="https://app.winninghunter.com/images/link-black-mini.svg"> Import Product</button>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/sales-tracker?store=https://www.purodella.de/products/damen-v-ausschnitt-solide-farbe-lose-kleid"
                                target="__BLANK"><img width="20px" src="https://app.winninghunter.com/images/track.png"> Track Store</a>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                                target="__BLANK"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke-width="1.5" stroke="currentColor" loading="lazy" class="w-4 h-4 inline-block">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
                                  </path>
                                </svg> Find Competitors with Magic Ai</a>
                              <a target="__BLANK" href="https://www.similarweb.com/website/www.purodella.de"
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
                        aria-describedby="tooltip162633692457546754047"
                        data-dropdown-toggle="tooltip162633692457546754047" class="dropdowninit">
                    </div>
                  </div>
                </div>
                <div
                  style="padding-left:1rem;font-size:13px;font-weight:600;color: #999;display: grid; grid-template-columns: auto minmax(0, 1fr);column-gap: 20px;">
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Adspend on this creative only.</div> Spend: $0.48
                  </span><span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Revenue on this creative only.</div>Revenue: $0.00
                  </span>
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">The EU reach/views for every adset in the ad combined.</div>
                    Reach: 44
                  </span>

                </div>
                <div class="shadow-sm w-full border p-1 text-center text-sm rounded-md"><b class="has-popup relative">
                    <div class="custom-popup hidden left-0">Revenue of all the ads for this product all time.</div>
                    Product Revenue: $1.61
                  </b></div>
              </div>
              <div class="primary-copy-cutoff primary-copy">
                <p>Damen V-Ausschnitt Solide Farbe Lose Kleid
                  Sehr bequem und sitzt super schön😍😍</p>
              </div>
              <hr style="width: 92%;margin: 0 auto;">
              <div style="position: absolute;z-index: 1;display: flex;gap: 10px;justify-content: end;"
                class="w-full text-sm p-1">
                <div class="has-popup relative">
                  <div class="custom-popup left-[-50px] hidden">Product Creation Date</div><span
                    class="p-1 font-bold bg-white rounded pointer-events-none" style="opacity: 0.79;"> <img
                      src="https://app.winninghunter.com/images/box.svg" class="h-4 v-4"> 2024-07-27</span>
                </div>
              </div>
              <div class="video-2 w-video w-embed">
                <div class="flex justify-center">
                  <div
                    class="glide flex justify-center carousel162633692457546754047 glide--ltr glide--carousel glide--swipeable">
                    <div data-glide-el="track" class="glide__track"
                      style="min-height:325px; width:100%;max-width:350px;">
                      <div class="glide__slides"
                        style="width: 2016px; font-size: 0px; height: 325px; transition: transform cubic-bezier(0.165, 0.84, 0.44, 1); transform: translate3d(-504px, 0px, 0px);">
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-right: 5px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--active"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>,<div
                          class="glide__slide flex justify-center relative"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>,<div
                          class="glide__slide flex justify-center relative"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>,<div
                          class="glide__slide flex justify-center relative"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                      </div>
                    </div>

                    <div class="glide__arrows" data-glide-el="controls">
                      <button
                        class="glide__arrow glide__arrow--left !rounded-full !bg-white !text-black border !opacity-75"
                        data-glide-dir="<" style="padding: 5.4px 5.4px;"><img src="https://app.winninghunter.com/images/chevron-left.svg"
                          width="w-6 h-6"></button>
                      <button
                        class="glide__arrow glide__arrow--right !rounded-full !bg-white !text-black border !opacity-75"
                        data-glide-dir=">" style="padding: 5.4px 5.4px;"><img src="https://app.winninghunter.com/images/chevron-right.svg"
                          width="w-6 h-6"></button>
                    </div>
                    <div class="glide__bullets" data-glide-el="controls[nav]" style="color: transparent;">
                      <button class="glide__bullet shadow glide__bullet--active" data-glide-dir="=0"></button>,<button
                        class="glide__bullet shadow" data-glide-dir="=1"></button>,<button class="glide__bullet shadow"
                        data-glide-dir="=2"></button>,<button class="glide__bullet shadow" data-glide-dir="=3"></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frameitem-title-box" style="background-color:white;">
                <div class="frameitem-button-group gap-0">

                  <div class="linkclicks has-popup relative">
                    <div class="custom-popup hidden" style="left:-100px;">Page Information
                      <hr> <span class="text-[14px]">Advertiser runs in <img src="https://app.winninghunter.com/images/country-globe.svg"> 1
                        countries with <img height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                          style="pointer-events:none;"> 11 ads <div class="p-[2px] border rounded"><img
                            src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="10px" width="10px" class="DE"
                            style="border:none;border-radius: 50%;"></div></span>
                      <hr class="mt-[10px]">
                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/e71d2051a2e38651035500b69ad8b8311a2900d9c286beafa0739f608c10415c.jpg"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Puro-della </span>
                        <a class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="thisad = $(this).closest('.one_add_wrapper'); $(thisad).find('.pageadcount').click();">View
                          Page Ads</a>
                      </div>
                    </div>
                    <div class="flex pointer-events-none"
                      style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="https://adslibrary.eu-central-1.linodeobjects.com/e71d2051a2e38651035500b69ad8b8311a2900d9c286beafa0739f608c10415c.jpg"
                        onerror="this.src='/images/facebook_no_profile_pic.png'">
                      <div class="pointer-events-none min-w-100">
                        <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Puro-della
                        </div>
                        <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                            class="flex pointer-events-none"><img src="https://app.winninghunter.com/images/country-globe.svg"> 1</span> <span
                            class="pointer-events-none"> <img height="14px" width="14px"
                              src="https://app.winninghunter.com/images/page-ads-slate.svg" style="pointer-events:none;"> 11</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="product-info-onad ml-[30px] border-l pl-2 has-popup relative">

                    <div class="custom-popup !w-[240px] hidden" style="left:-100px;">Product Information
                      <hr>

                      <span class="text-[14px]">
                        <p>Price: €34.95</p>
                        <p></p>
                        <p></p>
                        <p>Product adspend: $0.48</p>
                        <p>Product total revenue: $1.61</p>
                        <hr>
                        <p class="text-xs">First ad started: Jul 27 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                            days ago</span></p>
                        <p class="text-xs">Last ad started: Jul 27 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                            days ago</span></p>
                        <p class="text-muted font-light text-xs">This creative generated 99% of the Product adspend </p>
                      </span>
                      <hr style="margin-top:10px;">

                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="http://www.purodella.de/cdn/shop/files/83_1200x630.jpg?v=1722095263"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Damen V-Ausschnitt Solide Farbe
                          Lose Kleid - Braun / S </span>
                        <a href="https://www.purodella.de/products/damen-v-ausschnitt-solide-farbe-lose-kleid"
                          target="__BLANK"
                          class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none">Visit Product
                          Page</a>
                        <a class="view-product-ads text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="addmodal = $(this).closest('.add_item').find('.mainpopup').find('.addmodal'); handlePageProductSwitch(addmodal, forcestateto='product', openmodal=true);">View
                          Product Ads</a>
                      </div>
                    </div>
                    <div class="text-sm pointer-events-none">
                      <div class="flex pointer-events-none"
                        style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="http://www.purodella.de/cdn/shop/files/83_1200x630.jpg?v=1722095263"
                          onerror="this.src='/images/facebook_no_profile_pic.png'">
                        <div class="pointer-events-none">
                          <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Damen
                            V-Aus...</div>
                          <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                              class="flex pointer-events-none">€34.95</span> <span class="flex pointer-events-none"><img
                                height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                                style="pointer-events:none;"> 1</span> <span class="flex pointer-events-none"><img
                                height="13px" width="13px" class="text-slate-500 ml-[4px]" src="https://app.winninghunter.com/images/adspend.svg"
                                style="pointer-events:none;">0</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="searchadchild">
                    <div class="add-popup" style="overflow-y: scroll;flex-direction: column;">
                      <input type="hidden" id="adhistory" adsets="{&quot;2024-07-27 00:00:00&quot;:&quot;1&quot;}"
                        adspend="{&quot;2024-07-28 06:02:58&quot;:44}" views="null" likes="null" comments="null"
                        shares="null">
                      <input type="hidden" id="randomToken" value="54047">
                      <input type="hidden" id="productidstar" value="1626336924575467">
                      <div class="info_body" style="margin: 0 auto;">
                        <div id="w-node-_3eb5300b-0206-f91c-5505-e52b666a5390-de161bc0" class="frameitem-video-wrapper">
                          <div class="html-embed-5 w-embed">
                            <img
                              src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                              style="width:300px;object-fit:contain;display:block;">
                          </div>
                          <br> Ads History <canvas id="chart162633692457546754047"></canvas>
                        </div>
                        <div id="w-node-b50b7bcc-f095-371f-c679-5cab2590eb82-de161bc0" class="div-block-64">
                          <div class="frameitem-details">
                            <div class="frameitem_component">
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Primary Text</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>Damen V-Ausschnitt Solide Farbe Lose Kleid
                                      Sehr bequem und sitzt super schön😍😍</p>
                                  </div>
                                </div>
                              </div>
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Description</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>none</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="button w-button action-button"
                            onclick="getAdCopy('none', '1626336924575467', this)">Generate Ad Copy <svg width="24px"
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
                          <div class="adcopygeneratorbox" id="adcopy1626336924575467"></div>
                          <div class="frameitem-country">
                            Share:
                            <img src="https://app.winninghunter.com/images/share-ios-export.svg"
                              style="cursor:pointer;height:30px;display:inline-block;" class="share-ios action-button"
                              onclick="copyad('1626336924575467')">
                            <!-- <div class="frameitem-country-wrapper">
  <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" class="frameitem-countr-flag">
  <div>
    <div class="frameitem-small-text">Ad Country</div>
    <div class="frameitem-country-name">Germany</div>
  </div>
</div>  
<div>
  <a href="#" onclick="" class="button w-button">Share ad</a>
</div> -->

                          </div>
                          <div class="frameitem-links-grid">
                            <div id="w-node-c767e22e-faf5-a876-818f-2bd868c356f9-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/store-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Store</div>
                                <a href="https://www.purodella.de/products/damen-v-ausschnitt-solide-farbe-lose-kleid"
                                  target="__BLANK" class="frameitem-link">Product Page</a>
                              </div>
                            </div>
                            <div id="w-node-_1ebb295b-90a9-56aa-efb5-ed9f7c9c979b-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/magiccard-expense-svgrepo-com.svg" loading="lazy" alt=""
                                class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Ad Library;</div>
                                <a href="https://www.facebook.com/ads/library/?id=1626336924575467" target="__BLANK"
                                  class="frameitem-link">Ad link</a>
                              </div>
                            </div>
                            <div id="w-node-bfa31db7-cfe0-3720-565c-00b513e721c8-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Page Ad Library</div>
                                <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=361013867099158&amp;search_type=page&amp;media_type=all"
                                  target="__BLANK" class="frameitem-link">Page Ad Library</a>
                              </div>
                            </div>
                            <div id="w-node-_0b943d44-7c96-4a99-eb12-328b90a563b7-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Photo</div>
                                undefined
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/track.png" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a tabindex="0" class="frameitem-link"
                                  href="/sales-tracker?store=https://www.purodella.de/products/damen-v-ausschnitt-solide-farbe-lose-kleid"
                                  target="__BLANK">Track Store</a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-black-mini.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a type="button" class="frameitem-link"
                                  onclick="openPiModal('https://www.purodella.de', 'damen-v-ausschnitt-solide-farbe-lose-kleid')">
                                  Import Product</a>
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
                                  href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
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
<div id="competitor-adds-list162633692457546754047" class="compadslist"></div>
</div>
</div> -->
                      <img src="https://app.winninghunter.com/images/close-svgrepo-com.svg" loading="lazy"
                        data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048" alt="" class="close-ad">
                    </div>
                  </div>
                </div>
              </div>
              <hr style="width: 92%; margin: 0 auto;">

              <div class="add_info">
                <div class="add-meta-wrapper">
                  <div class="add-sub-info">
                    <div>Scaling: <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">0%</span>
                    </div>
                    <div>Platforms: <img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px"><img
                        src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px"><img src="https://app.winninghunter.com/images/audience_network.png"
                        height="20px" width="20px"><img src="https://app.winninghunter.com/images/messenger.svg" height="20px" width="20px"></div>
                    <div class="has-popup relative">
                      <div class="custom-popup hidden" style="left:0px;">Countries
                        <hr>
                        <div class="text-sm p-1">
                          <p class="flex w-full gap-1 mt-1"><img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt=""
                              height="20px" width="20px" class="DE w-5 h-5"
                              style="border:none;border-radius: 50%;">Germany</p>
                        </div>
                      </div>Countries: <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="20px" width="20px"
                        class="DE" style="border:none;border-radius: 50%;height:20px;">
                    </div>
                    <div>Website: <img src="https://app.winninghunter.com/images/SH.svg" height="20px" width="20px" class="techicon SHtip"
                        title="Shopify"><img src="https://app.winninghunter.com/images/PP.svg" height="20px" width="20px" class="techicon PPtip"
                        title="PayPal"><img src="https://app.winninghunter.com/images/CO.svg" height="20px" width="20px" class="techicon COtip"
                        title="Checkout"><img src="https://app.winninghunter.com/images/TP.svg" height="20px" width="20px" class="techicon TPtip"
                        title="Trustpilot"><img src="https://app.winninghunter.com/images/BU.svg" height="20px" width="20px" class="techicon BUtip"
                        title="Bundle App"></div>
                    <div>Gender: Women</div>
                    <div>Ages: 18 - 65+</div>
                    <div>Started: Jul 27 2024 <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                        days ago</span></div>
                    <div class="text-dark"><b>Adsets: 1</b></div>
                    <div class="add-sub-info">
                      <div>Last seen: Jul 28 2024 <span
                          style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">2
                          days ago</span></div>
                      <div class="text-dark"><b>Adsets: 1</b></div>
                    </div>

                  </div>
                  <button type="button" class="dots see-details action-button"
                    comptarget="#competitor-adds-list162633692457546754047"
                    imageurl="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg">
                    View Details
                  </button>
                </div>
              </div>
              <div class="frameitem-title-box">
                <div class="frameitem-button-group" style="justify-content: space-between;">
                  <a href="https://www.purodella.de/products/damen-v-ausschnitt-solide-farbe-lose-kleid"
                    target="__BLANK" class="linkclicks">
                    <div class="frameitem-titles">
                      <div
                        style="line-height: 12px; max-height: 24px; -webkit-line-clamp: 2;font-size: 8px;color: #606770;-webkit-box-orient: vertical;display: -webkit-box;float: none;">
                        www.purodella.de</div>
                      <div
                        style="display: -webkit-box;overflow: hidden;white-space: normal;display: -webkit-box;-webkit-box-orient: vertical;color: #1c1e21;font-size: 10px;line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;">
                        50% Rabatt + Kostenloser Versand</div>
                      <div style="line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;-webkit-box-orient: vertical;
display: -webkit-box;
float: none;overflow: hidden;
white-space: normal;    font-size: 9px;    color: #606770;"></div>
                    </div>
                  </a>
                  <div>
                    <a href="https://www.purodella.de/products/damen-v-ausschnitt-solide-farbe-lose-kleid"
                      target="__BLANK" class="frameitem-info w-button action-button">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_8922055b-736f-9646-6ca8-786036223602564-de161bc0" class="one_add_wrapper"
            style="position:relative;">



            <div class="add_item">
              <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
                <div class="frameitem-title-group">

                  <div class="text-block-7 ad-captions"><span class="currentamountofadsets">1 Adset</span> uses this
                    creative</div>
                  <div class="favorite-wrapper flex" style="gap: 10px;">

                    <div style="margin-right:6px;" class="has-popup adstat-block trending-block">
                      <div class="custom-popup hidden" style="display: none;">Ad Score: Testing <br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad has not spent enough ($0.32) </span><br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad is running for less than 3 days </span></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping" style="background-color:#FD0250;box-shadow: 0 0 4px 0.2px #FD0250;">
                      </div>
                    </div>
                    <div id="tooltip7860362236025646989"
                      class="dropdown-container has-shadow rounded mt-1 text-size-small hidden"
                      data-popper-placement="top"
                      style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(840px, 1259px);"
                      data-popper-reference-hidden="" data-popper-escaped="">
                      <div class="">
                        <p class="text-sm font-medium"></p>
                        <div class="price-input price">
                          <div class="select-wrapper">
                            <div>
                              <p class="text-xs text-slate-600">Share this ad with others:</p>
                              <input placeholder="Share Url" readonly=""
                                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value="https://app.winninghunter.com/ad/786036223602564"
                                onclick="copyad('786036223602564')">
                              <button type="button" class="dropdown-item save-ad-lid off" data-platform="facebook"
                                data-id="786036223602564"><img width="15px" src="https://app.winninghunter.com/images/heart-outline.svg"> Save this
                                ad</button>
                              <hr>
                              <button type="button" class="dropdown-item hide-advertiser-lid off"
                                data-platform="facebook" data-id="361013867099158"><img loading="lazy" width="17px"
                                  src="https://app.winninghunter.com/images/eye-closed.svg"> Hide this advertiser</button>
                              <hr>

                              <a target="__BLANK" href="https://www.purodella.de/collections/all?sort_by=best-selling"
                                class="dropdownnode action-button dropdown-item"><img width="20px" src="https://app.winninghunter.com/images/SH.svg">
                                Best Selling</a>
                              <hr>
                              <button type="button" class="dropdown-item"
                                onclick="openPiModal('https://www.purodella.de', 'kleid-fur-frauen')"><img width="15px"
                                  src="https://app.winninghunter.com/images/link-black-mini.svg"> Import Product</button>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/sales-tracker?store=https://www.purodella.de/products/kleid-fur-frauen"
                                target="__BLANK"><img width="20px" src="https://app.winninghunter.com/images/track.png"> Track Store</a>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/13c655639c9f7ca3b29f8113a287dec5c47f1f9501bb4cc12b943acc4c60973f.jpg"
                                target="__BLANK"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke-width="1.5" stroke="currentColor" loading="lazy" class="w-4 h-4 inline-block">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
                                  </path>
                                </svg> Find Competitors with Magic Ai</a>
                              <a target="__BLANK" href="https://www.similarweb.com/website/www.purodella.de"
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
                        aria-describedby="tooltip7860362236025646989" data-dropdown-toggle="tooltip7860362236025646989"
                        class="dropdowninit">
                    </div>
                  </div>
                </div>
                <div
                  style="padding-left:1rem;font-size:13px;font-weight:600;color: #999;display: grid; grid-template-columns: auto minmax(0, 1fr);column-gap: 20px;">
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Adspend on this creative only.</div> Spend: $0.32
                  </span><span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Revenue on this creative only.</div>Revenue: $0.00
                  </span>
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">The EU reach/views for every adset in the ad combined.</div>
                    Reach: 29
                  </span>

                </div>
                <div class="shadow-sm w-full border p-1 text-center text-sm rounded-md"><b class="has-popup relative">
                    <div class="custom-popup hidden left-0">Revenue of all the ads for this product all time.</div>
                    Product Revenue: $3.93
                  </b></div>
              </div>
              <div class="primary-copy-cutoff primary-copy">
                <p>Fühlen Sie sich elegant und strahlend mit unserer neuesten Kollektion von Kleidern für Frauen! 💃😍
                  Unsere Kleider sind die perfekte Kombination aus Komfort und Stil und geben Ihnen das Selbstvertrauen,
                  😍das Sie verdienen. Sie eignen sich für jeden Anlass - ob zum Ausgehen, für ein Geschäftstreffen oder
                  für einen legeren Tag - Sie können sich immer darauf verlassen, dass unsere Kleider schick und modisch
                  aussehen.😍😍</p>
              </div>
              <hr style="width: 92%;margin: 0 auto;">
              <div style="position: absolute;z-index: 1;display: flex;gap: 10px;justify-content: end;"
                class="w-full text-sm p-1">
                <div class="has-popup relative">
                  <div class="custom-popup left-[-50px] hidden">Product Creation Date</div><span
                    class="p-1 font-bold bg-white rounded pointer-events-none" style="opacity: 0.79;"> <img
                      src="https://app.winninghunter.com/images/box.svg" class="h-4 v-4"> 2024-07-27</span>
                </div>
              </div>
              <div class="video-2 w-video w-embed">
                <div class="flex justify-center">
                  <div
                    class="glide flex justify-center carousel7860362236025646989 glide--ltr glide--carousel glide--swipeable">
                    <div data-glide-el="track" class="glide__track"
                      style="min-height:325px; width:100%;max-width:350px;">
                      <div class="glide__slides"
                        style="width: 1512px; font-size: 0px; height: 325px; transition: transform cubic-bezier(0.165, 0.84, 0.44, 1); transform: translate3d(-504px, 0px, 0px);">
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-right: 5px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/13c655639c9f7ca3b29f8113a287dec5c47f1f9501bb4cc12b943acc4c60973f.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/13c655639c9f7ca3b29f8113a287dec5c47f1f9501bb4cc12b943acc4c60973f.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/f94df0346ba3da9b8c4c482c474286e19e859d87d688fbd6757bd79ba58b3de5.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/f94df0346ba3da9b8c4c482c474286e19e859d87d688fbd6757bd79ba58b3de5.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--active"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/13c655639c9f7ca3b29f8113a287dec5c47f1f9501bb4cc12b943acc4c60973f.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/13c655639c9f7ca3b29f8113a287dec5c47f1f9501bb4cc12b943acc4c60973f.jpg"
                            style="max-height: 325px;position: absolute;"></div>,<div
                          class="glide__slide flex justify-center relative"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/f94df0346ba3da9b8c4c482c474286e19e859d87d688fbd6757bd79ba58b3de5.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/f94df0346ba3da9b8c4c482c474286e19e859d87d688fbd6757bd79ba58b3de5.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/13c655639c9f7ca3b29f8113a287dec5c47f1f9501bb4cc12b943acc4c60973f.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/13c655639c9f7ca3b29f8113a287dec5c47f1f9501bb4cc12b943acc4c60973f.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/f94df0346ba3da9b8c4c482c474286e19e859d87d688fbd6757bd79ba58b3de5.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/f94df0346ba3da9b8c4c482c474286e19e859d87d688fbd6757bd79ba58b3de5.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                      </div>
                    </div>

                    <div class="glide__arrows" data-glide-el="controls">
                      <button
                        class="glide__arrow glide__arrow--left !rounded-full !bg-white !text-black border !opacity-75"
                        data-glide-dir="<" style="padding: 5.4px 5.4px;"><img src="https://app.winninghunter.com/images/chevron-left.svg"
                          width="w-6 h-6"></button>
                      <button
                        class="glide__arrow glide__arrow--right !rounded-full !bg-white !text-black border !opacity-75"
                        data-glide-dir=">" style="padding: 5.4px 5.4px;"><img src="https://app.winninghunter.com/images/chevron-right.svg"
                          width="w-6 h-6"></button>
                    </div>
                    <div class="glide__bullets" data-glide-el="controls[nav]" style="color: transparent;">
                      <button class="glide__bullet shadow glide__bullet--active" data-glide-dir="=0"></button>,<button
                        class="glide__bullet shadow" data-glide-dir="=1"></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frameitem-title-box" style="background-color:white;">
                <div class="frameitem-button-group gap-0">

                  <div class="linkclicks has-popup relative">
                    <div class="custom-popup hidden" style="left:-100px;">Page Information
                      <hr> <span class="text-[14px]">Advertiser runs in <img src="https://app.winninghunter.com/images/country-globe.svg"> 1
                        countries with <img height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                          style="pointer-events:none;"> 11 ads <div class="p-[2px] border rounded"><img
                            src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="10px" width="10px" class="DE"
                            style="border:none;border-radius: 50%;"></div></span>
                      <hr class="mt-[10px]">
                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/403e1853f1a6df63eac5ef2cbaf25b75b4b70b4a57e5018caf0f068135183864.jpg"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Puro-della </span>
                        <a class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="thisad = $(this).closest('.one_add_wrapper'); $(thisad).find('.pageadcount').click();">View
                          Page Ads</a>
                      </div>
                    </div>
                    <div class="flex pointer-events-none"
                      style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="https://adslibrary.eu-central-1.linodeobjects.com/403e1853f1a6df63eac5ef2cbaf25b75b4b70b4a57e5018caf0f068135183864.jpg"
                        onerror="this.src='/images/facebook_no_profile_pic.png'">
                      <div class="pointer-events-none min-w-100">
                        <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Puro-della
                        </div>
                        <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                            class="flex pointer-events-none"><img src="https://app.winninghunter.com/images/country-globe.svg"> 1</span> <span
                            class="pointer-events-none"> <img height="14px" width="14px"
                              src="https://app.winninghunter.com/images/page-ads-slate.svg" style="pointer-events:none;"> 11</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="product-info-onad ml-[30px] border-l pl-2 has-popup relative">

                    <div class="custom-popup !w-[240px] hidden" style="left:-100px;">Product Information
                      <hr>

                      <span class="text-[14px]">
                        <p>Price: €49.00</p>
                        <p></p>
                        <p></p>
                        <p>Product adspend: $1.18</p>
                        <p>Product total revenue: $3.93</p>
                        <hr>
                        <p class="text-xs">First ad started: Jul 27 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                            days ago</span></p>
                        <p class="text-xs">Last ad started: Jul 27 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                            days ago</span></p>
                        <p class="text-muted font-light text-xs">This creative generated 27% of the Product adspend </p>
                      </span>
                      <hr style="margin-top:10px;">

                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="http://www.purodella.de/cdn/shop/files/4_577fa629-c50f-41cd-80d2-d4a2f656504f_1200x630.jpg?v=1722103226"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Kleid für Frauen - Leopard / S
                        </span>
                        <a href="https://www.purodella.de/products/kleid-fur-frauen" target="__BLANK"
                          class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none">Visit Product
                          Page</a>
                        <a class="view-product-ads text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="addmodal = $(this).closest('.add_item').find('.mainpopup').find('.addmodal'); handlePageProductSwitch(addmodal, forcestateto='product', openmodal=true);">View
                          Product Ads</a>
                      </div>
                    </div>
                    <div class="text-sm pointer-events-none">
                      <div class="flex pointer-events-none"
                        style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="http://www.purodella.de/cdn/shop/files/4_577fa629-c50f-41cd-80d2-d4a2f656504f_1200x630.jpg?v=1722103226"
                          onerror="this.src='/images/facebook_no_profile_pic.png'">
                        <div class="pointer-events-none">
                          <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Kleid für
                            F...</div>
                          <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                              class="flex pointer-events-none">€49.00</span> <span class="flex pointer-events-none"><img
                                height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                                style="pointer-events:none;"> 2</span> <span class="flex pointer-events-none"><img
                                height="13px" width="13px" class="text-slate-500 ml-[4px]" src="https://app.winninghunter.com/images/adspend.svg"
                                style="pointer-events:none;">0</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="searchadchild">
                    <div class="add-popup" style="overflow-y: scroll;flex-direction: column;">
                      <input type="hidden" id="adhistory" adsets="{&quot;2024-07-27 00:00:00&quot;:&quot;1&quot;}"
                        adspend="{&quot;2024-07-28 05:54:07&quot;:29}" views="null" likes="null" comments="null"
                        shares="null">
                      <input type="hidden" id="randomToken" value="6989">
                      <input type="hidden" id="productidstar" value="786036223602564">
                      <div class="info_body" style="margin: 0 auto;">
                        <div id="w-node-_3eb5300b-0206-f91c-5505-e52b666a5390-de161bc0" class="frameitem-video-wrapper">
                          <div class="html-embed-5 w-embed">
                            <img
                              src="https://adslibrary.eu-central-1.linodeobjects.com/f94df0346ba3da9b8c4c482c474286e19e859d87d688fbd6757bd79ba58b3de5.jpg"
                              style="width:300px;object-fit:contain;display:block;">
                          </div>
                          <br> Ads History <canvas id="chart7860362236025646989"></canvas>
                        </div>
                        <div id="w-node-b50b7bcc-f095-371f-c679-5cab2590eb82-de161bc0" class="div-block-64">
                          <div class="frameitem-details">
                            <div class="frameitem_component">
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Primary Text</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>Fühlen Sie sich elegant und strahlend mit unserer neuesten Kollektion von
                                      Kleidern für Frauen! 💃😍
                                      Unsere Kleider sind die perfekte Kombination aus Komfort und Stil und geben Ihnen
                                      das Selbstvertrauen, 😍das Sie verdienen. Sie eignen sich für jeden Anlass - ob
                                      zum Ausgehen, für ein Geschäftstreffen oder für einen legeren Tag - Sie können
                                      sich immer darauf verlassen, dass unsere Kleider schick und modisch aussehen.😍😍
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Description</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>none</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="button w-button action-button"
                            onclick="getAdCopy('none', '786036223602564', this)">Generate Ad Copy <svg width="24px"
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
                          <div class="adcopygeneratorbox" id="adcopy786036223602564"></div>
                          <div class="frameitem-country">
                            Share:
                            <img src="https://app.winninghunter.com/images/share-ios-export.svg"
                              style="cursor:pointer;height:30px;display:inline-block;" class="share-ios action-button"
                              onclick="copyad('786036223602564')">
                            <!-- <div class="frameitem-country-wrapper">
  <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" class="frameitem-countr-flag">
  <div>
    <div class="frameitem-small-text">Ad Country</div>
    <div class="frameitem-country-name">Germany</div>
  </div>
</div>  
<div>
  <a href="#" onclick="" class="button w-button">Share ad</a>
</div> -->

                          </div>
                          <div class="frameitem-links-grid">
                            <div id="w-node-c767e22e-faf5-a876-818f-2bd868c356f9-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/store-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Store</div>
                                <a href="https://www.purodella.de/products/kleid-fur-frauen" target="__BLANK"
                                  class="frameitem-link">Product Page</a>
                              </div>
                            </div>
                            <div id="w-node-_1ebb295b-90a9-56aa-efb5-ed9f7c9c979b-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/magiccard-expense-svgrepo-com.svg" loading="lazy" alt=""
                                class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Ad Library;</div>
                                <a href="https://www.facebook.com/ads/library/?id=786036223602564" target="__BLANK"
                                  class="frameitem-link">Ad link</a>
                              </div>
                            </div>
                            <div id="w-node-bfa31db7-cfe0-3720-565c-00b513e721c8-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Page Ad Library</div>
                                <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=361013867099158&amp;search_type=page&amp;media_type=all"
                                  target="__BLANK" class="frameitem-link">Page Ad Library</a>
                              </div>
                            </div>
                            <div id="w-node-_0b943d44-7c96-4a99-eb12-328b90a563b7-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Photo</div>
                                undefined
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/track.png" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a tabindex="0" class="frameitem-link"
                                  href="/sales-tracker?store=https://www.purodella.de/products/kleid-fur-frauen"
                                  target="__BLANK">Track Store</a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-black-mini.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a type="button" class="frameitem-link"
                                  onclick="openPiModal('https://www.purodella.de', 'kleid-fur-frauen')"> Import
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
                                  href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/13c655639c9f7ca3b29f8113a287dec5c47f1f9501bb4cc12b943acc4c60973f.jpg"
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
<div id="competitor-adds-list7860362236025646989" class="compadslist"></div>
</div>
</div> -->
                      <img src="https://app.winninghunter.com/images/close-svgrepo-com.svg" loading="lazy"
                        data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048" alt="" class="close-ad">
                    </div>
                  </div>
                </div>
              </div>
              <hr style="width: 92%; margin: 0 auto;">

              <div class="add_info">
                <div class="add-meta-wrapper">
                  <div class="add-sub-info">
                    <div>Scaling: <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">0%</span>
                    </div>
                    <div>Platforms: <img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px"><img
                        src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px"><img src="https://app.winninghunter.com/images/audience_network.png"
                        height="20px" width="20px"><img src="https://app.winninghunter.com/images/messenger.svg" height="20px" width="20px"></div>
                    <div class="has-popup relative">
                      <div class="custom-popup hidden" style="left:0px;">Countries
                        <hr>
                        <div class="text-sm p-1">
                          <p class="flex w-full gap-1 mt-1"><img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt=""
                              height="20px" width="20px" class="DE w-5 h-5"
                              style="border:none;border-radius: 50%;">Germany</p>
                        </div>
                      </div>Countries: <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="20px" width="20px"
                        class="DE" style="border:none;border-radius: 50%;height:20px;">
                    </div>
                    <div>Website: <img src="https://app.winninghunter.com/images/SH.svg" height="20px" width="20px" class="techicon SHtip"
                        title="Shopify"><img src="https://app.winninghunter.com/images/PP.svg" height="20px" width="20px" class="techicon PPtip"
                        title="PayPal"><img src="https://app.winninghunter.com/images/CO.svg" height="20px" width="20px" class="techicon COtip"
                        title="Checkout"><img src="https://app.winninghunter.com/images/TP.svg" height="20px" width="20px" class="techicon TPtip"
                        title="Trustpilot"><img src="https://app.winninghunter.com/images/BU.svg" height="20px" width="20px" class="techicon BUtip"
                        title="Bundle App"></div>
                    <div>Gender: Women</div>
                    <div>Ages: 18 - 65+</div>
                    <div>Started: Jul 27 2024 <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">4
                        days ago</span></div>
                    <div class="text-dark"><b>Adsets: 1</b></div>
                    <div class="add-sub-info">
                      <div>Last seen: Jul 28 2024 <span
                          style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">2
                          days ago</span></div>
                      <div class="text-dark"><b>Adsets: 1</b></div>
                    </div>

                  </div>
                  <button type="button" class="dots see-details action-button"
                    comptarget="#competitor-adds-list7860362236025646989"
                    imageurl="https://adslibrary.eu-central-1.linodeobjects.com/13c655639c9f7ca3b29f8113a287dec5c47f1f9501bb4cc12b943acc4c60973f.jpg">
                    View Details
                  </button>
                </div>
              </div>
              <div class="frameitem-title-box">
                <div class="frameitem-button-group" style="justify-content: space-between;">
                  <a href="https://www.purodella.de/products/kleid-fur-frauen" target="__BLANK" class="linkclicks">
                    <div class="frameitem-titles">
                      <div
                        style="line-height: 12px; max-height: 24px; -webkit-line-clamp: 2;font-size: 8px;color: #606770;-webkit-box-orient: vertical;display: -webkit-box;float: none;">
                        www.purodella.de</div>
                      <div
                        style="display: -webkit-box;overflow: hidden;white-space: normal;display: -webkit-box;-webkit-box-orient: vertical;color: #1c1e21;font-size: 10px;line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;">
                        Kostenloser Versand nur heute gültig!😍</div>
                      <div style="line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;-webkit-box-orient: vertical;
display: -webkit-box;
float: none;overflow: hidden;
white-space: normal;    font-size: 9px;    color: #606770;"></div>
                    </div>
                  </a>
                  <div>
                    <a href="https://www.purodella.de/products/kleid-fur-frauen" target="__BLANK"
                      class="frameitem-info w-button action-button">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_8922055b-736f-9646-6ca8-8081875251849086-de161bc0" class="one_add_wrapper"
            style="position:relative;">



            <div class="add_item">
              <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
                <div class="frameitem-title-group">

                  <div class="text-block-7 ad-captions"><span class="currentamountofadsets">2 Adsets</span> use this
                    creative</div>
                  <div class="favorite-wrapper flex" style="gap: 10px;">

                    <div style="margin-right:6px;" class="has-popup adstat-block trending-block">
                      <div class="custom-popup hidden" style="display: none;">Ad Score: Scaling <br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad is running for more than 3 less than 7 days
                        </span></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping" style="background-color:#FFCD3C;box-shadow: 0 0 4px 0.2px #FFCD3C;">
                      </div>
                      <div class="adscore-ping" style="background-color:#FFCD3C;box-shadow: 0 0 4px 0.2px #FFCD3C;">
                      </div>
                    </div>
                    <div id="tooltip808187525184908658179"
                      class="dropdown-container has-shadow rounded mt-1 text-size-small hidden"
                      data-popper-placement="top"
                      style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(1097px, 1259px);"
                      data-popper-reference-hidden="" data-popper-escaped="">
                      <div class="">
                        <p class="text-sm font-medium"></p>
                        <div class="price-input price">
                          <div class="select-wrapper">
                            <div>
                              <p class="text-xs text-slate-600">Share this ad with others:</p>
                              <input placeholder="Share Url" readonly=""
                                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value="https://app.winninghunter.com/ad/8081875251849086"
                                onclick="copyad('8081875251849086')">
                              <button type="button" class="dropdown-item save-ad-lid off" data-platform="facebook"
                                data-id="8081875251849086"><img width="15px" src="https://app.winninghunter.com/images/heart-outline.svg"> Save this
                                ad</button>
                              <hr>
                              <button type="button" class="dropdown-item hide-advertiser-lid off"
                                data-platform="facebook" data-id="361013867099158"><img loading="lazy" width="17px"
                                  src="https://app.winninghunter.com/images/eye-closed.svg"> Hide this advertiser</button>
                              <hr>

                              <a target="__BLANK" href="https://www.purodella.de/collections/all?sort_by=best-selling"
                                class="dropdownnode action-button dropdown-item"><img width="20px" src="https://app.winninghunter.com/images/SH.svg">
                                Best Selling</a>
                              <hr>
                              <button type="button" class="dropdown-item"
                                onclick="openPiModal('https://www.purodella.de', 'damen-freizeithosen-shirt-set-zweiteilig')"><img
                                  width="15px" src="https://app.winninghunter.com/images/link-black-mini.svg"> Import Product</button>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/sales-tracker?store=https://www.purodella.de/products/damen-freizeithosen-shirt-set-zweiteilig"
                                target="__BLANK"><img width="20px" src="https://app.winninghunter.com/images/track.png"> Track Store</a>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/e9c56e416a1c459f84375824cda793e4c7e95d71c4be4327c0e097bf559ccb43.jpg"
                                target="__BLANK"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke-width="1.5" stroke="currentColor" loading="lazy" class="w-4 h-4 inline-block">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
                                  </path>
                                </svg> Find Competitors with Magic Ai</a>
                              <a target="__BLANK" href="https://www.similarweb.com/website/www.purodella.de"
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
                        aria-describedby="tooltip808187525184908658179"
                        data-dropdown-toggle="tooltip808187525184908658179" class="dropdowninit">
                    </div>
                  </div>
                </div>
                <div
                  style="padding-left:1rem;font-size:13px;font-weight:600;color: #999;display: grid; grid-template-columns: auto minmax(0, 1fr);column-gap: 20px;">
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Adspend on this creative only.</div> Spend: $43.27
                  </span><span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Revenue on this creative only.</div>Revenue: $144.32
                  </span>
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">The EU reach/views for every adset in the ad combined.</div>
                    Reach: 3.9k
                  </span>

                </div>
                <div class="shadow-sm w-full border p-1 text-center text-sm rounded-md"><b class="has-popup relative">
                    <div class="custom-popup hidden left-0">Revenue of all the ads for this product all time.</div>
                    Product Revenue: $144.33
                  </b></div>
              </div>
              <div class="primary-copy-cutoff primary-copy">
                <p>🌈 Stil trifft auf Komfort!
                  Fashion Casual Set - Ultimative Weichheit. Holen Sie sich jetzt Ihre &amp; Elevate Ihre Garderobe
                  Spiel!</p>
              </div>
              <hr style="width: 92%;margin: 0 auto;">
              <div style="position: absolute;z-index: 1;display: flex;gap: 10px;justify-content: end;"
                class="w-full text-sm p-1">
                <div class="has-popup relative">
                  <div class="custom-popup left-[-50px] hidden">Product Creation Date</div><span
                    class="p-1 font-bold bg-white rounded pointer-events-none" style="opacity: 0.79;"> <img
                      src="https://app.winninghunter.com/images/box.svg" class="h-4 v-4"> 2024-07-27</span>
                </div>
              </div>
              <div class="video-2 w-video w-embed">
                <div class="flex justify-center">
                  <div
                    class="glide flex justify-center carousel808187525184908658179 glide--ltr glide--carousel glide--swipeable">
                    <div data-glide-el="track" class="glide__track"
                      style="min-height:325px; width:100%;max-width:350px;">
                      <div class="glide__slides"
                        style="width: 756px; font-size: 0px; height: 325px; transition: transform cubic-bezier(0.165, 0.84, 0.44, 1); transform: translate3d(-252px, 0px, 0px);">
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-right: 5px;"><img
                            src="https://adslibrary.eu-central-1.linodeobjects.com/e9c56e416a1c459f84375824cda793e4c7e95d71c4be4327c0e097bf559ccb43.jpg"
                            style="display: block;margin:0 auto;filter: blur(5px);min-height: 319px;z-index:-10;">
                          <video
                            poster="https://adslibrary.eu-central-1.linodeobjects.com/e9c56e416a1c459f84375824cda793e4c7e95d71c4be4327c0e097bf559ccb43.jpg"
                            controls=""
                            style="flex: 1 1 0;max-width: 100%;max-height: 325px;object-fit: cover;margin: 0 auto;display: block;position: absolute;"
                            preload="none">
                            <source
                              src="https://adslibrary.eu-central-1.linodeobjects.com/b1a48e419497fa0560437d4e175581f5d5e08a77a804e38c875ed5e975c7c6f1.mp4"
                              type="video/mp4">
                          </video>
                        </div>
                        <div class="glide__slide flex justify-center relative glide__slide--active"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            src="https://adslibrary.eu-central-1.linodeobjects.com/e9c56e416a1c459f84375824cda793e4c7e95d71c4be4327c0e097bf559ccb43.jpg"
                            style="display: block;margin:0 auto;filter: blur(5px);min-height: 319px;z-index:-10;">
                          <video
                            poster="https://adslibrary.eu-central-1.linodeobjects.com/e9c56e416a1c459f84375824cda793e4c7e95d71c4be4327c0e097bf559ccb43.jpg"
                            controls=""
                            style="flex: 1 1 0;max-width: 100%;max-height: 325px;object-fit: cover;margin: 0 auto;display: block;position: absolute;"
                            preload="none">
                            <source
                              src="https://adslibrary.eu-central-1.linodeobjects.com/b1a48e419497fa0560437d4e175581f5d5e08a77a804e38c875ed5e975c7c6f1.mp4"
                              type="video/mp4">
                          </video>
                        </div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px;"><img
                            src="https://adslibrary.eu-central-1.linodeobjects.com/e9c56e416a1c459f84375824cda793e4c7e95d71c4be4327c0e097bf559ccb43.jpg"
                            style="display: block;margin:0 auto;filter: blur(5px);min-height: 319px;z-index:-10;">
                          <video
                            poster="https://adslibrary.eu-central-1.linodeobjects.com/e9c56e416a1c459f84375824cda793e4c7e95d71c4be4327c0e097bf559ccb43.jpg"
                            controls=""
                            style="flex: 1 1 0;max-width: 100%;max-height: 325px;object-fit: cover;margin: 0 auto;display: block;position: absolute;"
                            preload="none">
                            <source
                              src="https://adslibrary.eu-central-1.linodeobjects.com/b1a48e419497fa0560437d4e175581f5d5e08a77a804e38c875ed5e975c7c6f1.mp4"
                              type="video/mp4">
                          </video>
                        </div>
                      </div>
                    </div>

                    <div class="glide__arrows" data-glide-el="controls">
                      <button
                        class="glide__arrow glide__arrow--left !rounded-full !bg-white !text-black border !opacity-75"
                        data-glide-dir="<" style="padding: 5.4px 5.4px;"><img src="https://app.winninghunter.com/images/chevron-left.svg"
                          width="w-6 h-6"></button>
                      <button
                        class="glide__arrow glide__arrow--right !rounded-full !bg-white !text-black border !opacity-75"
                        data-glide-dir=">" style="padding: 5.4px 5.4px;"><img src="https://app.winninghunter.com/images/chevron-right.svg"
                          width="w-6 h-6"></button>
                    </div>
                    <div class="glide__bullets" data-glide-el="controls[nav]" style="color: transparent;">
                      <button class="glide__bullet shadow glide__bullet--active" data-glide-dir="=0"></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frameitem-title-box" style="background-color:white;">
                <div class="frameitem-button-group gap-0">

                  <div class="linkclicks has-popup relative">
                    <div class="custom-popup hidden" style="left:-100px;">Page Information
                      <hr> <span class="text-[14px]">Advertiser runs in <img src="https://app.winninghunter.com/images/country-globe.svg"> 1
                        countries with <img height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                          style="pointer-events:none;"> 11 ads <div class="p-[2px] border rounded"><img
                            src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="10px" width="10px" class="DE"
                            style="border:none;border-radius: 50%;"></div></span>
                      <hr class="mt-[10px]">
                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/0fe306454a719244295d898116ac6c359560237be7f427505a071d1ffc3853dd.jpg"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Puro-della </span>
                        <a class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="thisad = $(this).closest('.one_add_wrapper'); $(thisad).find('.pageadcount').click();">View
                          Page Ads</a>
                      </div>
                    </div>
                    <div class="flex pointer-events-none"
                      style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="https://adslibrary.eu-central-1.linodeobjects.com/0fe306454a719244295d898116ac6c359560237be7f427505a071d1ffc3853dd.jpg"
                        onerror="this.src='/images/facebook_no_profile_pic.png'">
                      <div class="pointer-events-none min-w-100">
                        <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Puro-della
                        </div>
                        <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                            class="flex pointer-events-none"><img src="https://app.winninghunter.com/images/country-globe.svg"> 1</span> <span
                            class="pointer-events-none"> <img height="14px" width="14px"
                              src="https://app.winninghunter.com/images/page-ads-slate.svg" style="pointer-events:none;"> 11</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="product-info-onad ml-[30px] border-l pl-2 has-popup relative">

                    <div class="custom-popup !w-[240px] hidden" style="left:-100px;">Product Information
                      <hr>

                      <span class="text-[14px]">
                        <p>Price: €39.99</p>
                        <p></p>
                        <p></p>
                        <p>Product adspend: $43.27</p>
                        <p>Product total revenue: $144.33</p>
                        <hr>
                        <p class="text-xs">First ad started: Jul 26 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">5
                            days ago</span></p>
                        <p class="text-xs">Last ad started: Jul 26 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">5
                            days ago</span></p>
                        <p class="text-muted font-light text-xs">This creative generated 100% of the Product adspend
                        </p>
                      </span>
                      <hr style="margin-top:10px;">

                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="http://www.purodella.de/cdn/shop/files/jpeg_a2895d0b-fc2c-48fc-b452-cb9396dfe406_1200x630.jpg?v=1722034743"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Damen Freizeithosen Shirt Set
                          Zweiteilig - Braun / S </span>
                        <a href="https://www.purodella.de/products/damen-freizeithosen-shirt-set-zweiteilig"
                          target="__BLANK"
                          class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none">Visit Product
                          Page</a>
                        <a class="view-product-ads text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="addmodal = $(this).closest('.add_item').find('.mainpopup').find('.addmodal'); handlePageProductSwitch(addmodal, forcestateto='product', openmodal=true);">View
                          Product Ads</a>
                      </div>
                    </div>
                    <div class="text-sm pointer-events-none">
                      <div class="flex pointer-events-none"
                        style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="http://www.purodella.de/cdn/shop/files/jpeg_a2895d0b-fc2c-48fc-b452-cb9396dfe406_1200x630.jpg?v=1722034743"
                          onerror="this.src='/images/facebook_no_profile_pic.png'">
                        <div class="pointer-events-none">
                          <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Damen
                            Freiz...</div>
                          <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                              class="flex pointer-events-none">€39.99</span> <span class="flex pointer-events-none"><img
                                height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                                style="pointer-events:none;"> 1</span> <span class="flex pointer-events-none"><img
                                height="13px" width="13px" class="text-slate-500 ml-[4px]" src="https://app.winninghunter.com/images/adspend.svg"
                                style="pointer-events:none;">20</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="searchadchild">
                    <div class="add-popup" style="overflow-y: scroll;flex-direction: column;">
                      <input type="hidden" id="adhistory"
                        adsets="{&quot;2024-07-26 00:00:00&quot;:&quot;3&quot;,&quot;2024-07-28 01:59:39&quot;:&quot;3&quot;,&quot;2024-07-29 06:46:33&quot;:&quot;2&quot;}"
                        adspend="{&quot;2024-07-27 08:47:50&quot;:325,&quot;2024-07-28 01:59:39&quot;:1880,&quot;2024-07-29 06:46:33&quot;:3934}"
                        views="null" likes="null" comments="null" shares="null">
                      <input type="hidden" id="randomToken" value="58179">
                      <input type="hidden" id="productidstar" value="8081875251849086">
                      <div class="info_body" style="margin: 0 auto;">
                        <div id="w-node-_3eb5300b-0206-f91c-5505-e52b666a5390-de161bc0" class="frameitem-video-wrapper">
                          <div class="html-embed-5 w-embed">
                            <img
                              src="https://adslibrary.eu-central-1.linodeobjects.com/e9c56e416a1c459f84375824cda793e4c7e95d71c4be4327c0e097bf559ccb43.jpg"
                              style="width:300px;object-fit:contain;display:block;">
                          </div>
                          <br> Ads History <canvas id="chart808187525184908658179"></canvas>
                        </div>
                        <div id="w-node-b50b7bcc-f095-371f-c679-5cab2590eb82-de161bc0" class="div-block-64">
                          <div class="frameitem-details">
                            <div class="frameitem_component">
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Primary Text</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>🌈 Stil trifft auf Komfort!
                                      Fashion Casual Set - Ultimative Weichheit. Holen Sie sich jetzt Ihre &amp; Elevate
                                      Ihre Garderobe Spiel!</p>
                                  </div>
                                </div>
                              </div>
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Description</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>none</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="button w-button action-button"
                            onclick="getAdCopy('none', '8081875251849086', this)">Generate Ad Copy <svg width="24px"
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
                          <div class="adcopygeneratorbox" id="adcopy8081875251849086"></div>
                          <div class="frameitem-country">
                            Share:
                            <img src="https://app.winninghunter.com/images/share-ios-export.svg"
                              style="cursor:pointer;height:30px;display:inline-block;" class="share-ios action-button"
                              onclick="copyad('8081875251849086')">
                            <!-- <div class="frameitem-country-wrapper">
  <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" class="frameitem-countr-flag">
  <div>
    <div class="frameitem-small-text">Ad Country</div>
    <div class="frameitem-country-name">Germany</div>
  </div>
</div>  
<div>
  <a href="#" onclick="" class="button w-button">Share ad</a>
</div> -->

                          </div>
                          <div class="frameitem-links-grid">
                            <div id="w-node-c767e22e-faf5-a876-818f-2bd868c356f9-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/store-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Store</div>
                                <a href="https://www.purodella.de/products/damen-freizeithosen-shirt-set-zweiteilig"
                                  target="__BLANK" class="frameitem-link">Product Page</a>
                              </div>
                            </div>
                            <div id="w-node-_1ebb295b-90a9-56aa-efb5-ed9f7c9c979b-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/magiccard-expense-svgrepo-com.svg" loading="lazy" alt=""
                                class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Ad Library;</div>
                                <a href="https://www.facebook.com/ads/library/?id=8081875251849086" target="__BLANK"
                                  class="frameitem-link">Ad link</a>
                              </div>
                            </div>
                            <div id="w-node-bfa31db7-cfe0-3720-565c-00b513e721c8-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Page Ad Library</div>
                                <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=361013867099158&amp;search_type=page&amp;media_type=all"
                                  target="__BLANK" class="frameitem-link">Page Ad Library</a>
                              </div>
                            </div>
                            <div id="w-node-_0b943d44-7c96-4a99-eb12-328b90a563b7-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Photo</div>
                                undefined
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/track.png" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a tabindex="0" class="frameitem-link"
                                  href="/sales-tracker?store=https://www.purodella.de/products/damen-freizeithosen-shirt-set-zweiteilig"
                                  target="__BLANK">Track Store</a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-black-mini.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a type="button" class="frameitem-link"
                                  onclick="openPiModal('https://www.purodella.de', 'damen-freizeithosen-shirt-set-zweiteilig')">
                                  Import Product</a>
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
                                  href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/e9c56e416a1c459f84375824cda793e4c7e95d71c4be4327c0e097bf559ccb43.jpg"
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
<div id="competitor-adds-list808187525184908658179" class="compadslist"></div>
</div>
</div> -->
                      <img src="https://app.winninghunter.com/images/close-svgrepo-com.svg" loading="lazy"
                        data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048" alt="" class="close-ad">
                    </div>
                  </div>
                </div>
              </div>
              <hr style="width: 92%; margin: 0 auto;">

              <div class="add_info">
                <div class="add-meta-wrapper">
                  <div class="add-sub-info">
                    <div>Scaling: <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#ea223d;padding:3px;color:white;">▼
                        33.34%</span></div>
                    <div>Platforms: <img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px"><img
                        src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px"><img src="https://app.winninghunter.com/images/audience_network.png"
                        height="20px" width="20px"><img src="https://app.winninghunter.com/images/messenger.svg" height="20px" width="20px"></div>
                    <div class="has-popup relative">
                      <div class="custom-popup hidden" style="left:0px;">Countries
                        <hr>
                        <div class="text-sm p-1">
                          <p class="flex w-full gap-1 mt-1"><img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt=""
                              height="20px" width="20px" class="DE w-5 h-5"
                              style="border:none;border-radius: 50%;">Germany</p>
                        </div>
                      </div>Countries: <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="20px" width="20px"
                        class="DE" style="border:none;border-radius: 50%;height:20px;">
                    </div>
                    <div>Website: <img src="https://app.winninghunter.com/images/SH.svg" height="20px" width="20px" class="techicon SHtip"
                        title="Shopify"><img src="https://app.winninghunter.com/images/PP.svg" height="20px" width="20px" class="techicon PPtip"
                        title="PayPal"><img src="https://app.winninghunter.com/images/CO.svg" height="20px" width="20px" class="techicon COtip"
                        title="Checkout"><img src="https://app.winninghunter.com/images/TP.svg" height="20px" width="20px" class="techicon TPtip"
                        title="Trustpilot"><img src="https://app.winninghunter.com/images/BU.svg" height="20px" width="20px" class="techicon BUtip"
                        title="Bundle App"></div>
                    <div>Gender: Women</div>
                    <div>Ages: 18 - 65+</div>
                    <div>Started: Jul 26 2024 <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">5
                        days ago</span></div>
                    <div class="text-dark"><b>Adsets: 3</b></div>
                    <div class="add-sub-info">
                      <div>Last seen: Jul 29 2024 <span
                          style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">1
                          day ago</span></div>
                      <div class="text-dark"><b>Adsets: 2</b></div>
                    </div>

                  </div>
                  <button type="button" class="dots see-details action-button"
                    comptarget="#competitor-adds-list808187525184908658179"
                    imageurl="https://adslibrary.eu-central-1.linodeobjects.com/e9c56e416a1c459f84375824cda793e4c7e95d71c4be4327c0e097bf559ccb43.jpg">
                    View Details
                  </button>
                </div>
              </div>
              <div class="frameitem-title-box">
                <div class="frameitem-button-group" style="justify-content: space-between;">
                  <a href="https://www.purodella.de/products/damen-freizeithosen-shirt-set-zweiteilig" target="__BLANK"
                    class="linkclicks">
                    <div class="frameitem-titles">
                      <div
                        style="line-height: 12px; max-height: 24px; -webkit-line-clamp: 2;font-size: 8px;color: #606770;-webkit-box-orient: vertical;display: -webkit-box;float: none;">
                        www.purodella.de</div>
                      <div
                        style="display: -webkit-box;overflow: hidden;white-space: normal;display: -webkit-box;-webkit-box-orient: vertical;color: #1c1e21;font-size: 10px;line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;">
                        40% Rabatt + Kostenloser Versand</div>
                      <div style="line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;-webkit-box-orient: vertical;
display: -webkit-box;
float: none;overflow: hidden;
white-space: normal;    font-size: 9px;    color: #606770;"></div>
                    </div>
                  </a>
                  <div>
                    <a href="https://www.purodella.de/products/damen-freizeithosen-shirt-set-zweiteilig"
                      target="__BLANK" class="frameitem-info w-button action-button">Order Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_8922055b-736f-9646-6ca8-420989503590814-de161bc0" class="one_add_wrapper"
            style="position:relative;">



            <div class="add_item">
              <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
                <div class="frameitem-title-group">

                  <div class="text-block-7 ad-captions"><span class="currentamountofadsets">1 Adset</span> uses this
                    creative</div>
                  <div class="favorite-wrapper flex" style="gap: 10px;">

                    <div style="margin-right:6px;" class="has-popup adstat-block trending-block">
                      <div class="custom-popup hidden" style="display: none;">Ad Score: Testing <br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad has not spent enough ($0.59) </span><br><span
                          style="font-size:0.7rem;font-weight:500;"> - Ad is running for less than 3 days </span></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping"></div>
                      <div class="adscore-ping" style="background-color:#FD0250;box-shadow: 0 0 4px 0.2px #FD0250;">
                      </div>
                    </div>
                    <div id="tooltip42098950359081456838"
                      class="dropdown-container has-shadow rounded mt-1 text-size-small hidden"
                      data-popper-placement="top"
                      style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(1354px, 1259px);"
                      data-popper-reference-hidden="" data-popper-escaped="">
                      <div class="">
                        <p class="text-sm font-medium"></p>
                        <div class="price-input price">
                          <div class="select-wrapper">
                            <div>
                              <p class="text-xs text-slate-600">Share this ad with others:</p>
                              <input placeholder="Share Url" readonly=""
                                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                value="https://app.winninghunter.com/ad/420989503590814"
                                onclick="copyad('420989503590814')">
                              <button type="button" class="dropdown-item save-ad-lid off" data-platform="facebook"
                                data-id="420989503590814"><img width="15px" src="https://app.winninghunter.com/images/heart-outline.svg"> Save this
                                ad</button>
                              <hr>
                              <button type="button" class="dropdown-item hide-advertiser-lid off"
                                data-platform="facebook" data-id="361013867099158"><img loading="lazy" width="17px"
                                  src="https://app.winninghunter.com/images/eye-closed.svg"> Hide this advertiser</button>
                              <hr>

                              <a target="__BLANK" href="https://www.purodella.de/collections/all?sort_by=best-selling"
                                class="dropdownnode action-button dropdown-item"><img width="20px" src="https://app.winninghunter.com/images/SH.svg">
                                Best Selling</a>
                              <hr>
                              <button type="button" class="dropdown-item"
                                onclick="openPiModal('https://www.purodella.de', 'hakel-strick-netz-top')"><img
                                  width="15px" src="https://app.winninghunter.com/images/link-black-mini.svg"> Import Product</button>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/sales-tracker?store=https://www.purodella.de/collections/bar/products/hakel-strick-netz-top"
                                target="__BLANK"><img width="20px" src="https://app.winninghunter.com/images/track.png"> Track Store</a>
                              <a tabindex="0" class="dropdownnode action-button dropdown-item block"
                                href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                                target="__BLANK"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke-width="1.5" stroke="currentColor" loading="lazy" class="w-4 h-4 inline-block">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
                                  </path>
                                </svg> Find Competitors with Magic Ai</a>
                              <a target="__BLANK" href="https://www.similarweb.com/website/www.purodella.de"
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
                        aria-describedby="tooltip42098950359081456838"
                        data-dropdown-toggle="tooltip42098950359081456838" class="dropdowninit">
                    </div>
                  </div>
                </div>
                <div
                  style="padding-left:1rem;font-size:13px;font-weight:600;color: #999;display: grid; grid-template-columns: auto minmax(0, 1fr);column-gap: 20px;">
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Adspend on this creative only.</div> Spend: $0.59
                  </span><span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">Revenue on this creative only.</div>Revenue: $0.00
                  </span>
                  <span class="has-popup relative">
                    <div class="custom-popup left-0 hidden">The EU reach/views for every adset in the ad combined.</div>
                    Reach: 54
                  </span>

                </div>
                <div class="shadow-sm w-full border p-1 text-center text-sm rounded-md"><b class="has-popup relative">
                    <div class="custom-popup hidden left-0">Revenue of all the ads for this product all time.</div>
                    Collection Revenue: $1.98
                  </b></div>
              </div>
              <div class="primary-copy-cutoff primary-copy">
                <p>💞Geeignet für reife Frauen aller Figurtypen
                  ✅ Hochwertiges Top mit Ausschnitten und Dreiviertel-Ärmeln,🌷perfekt für deinen entspannten
                  Lebensstil🛒👇</p>
              </div>
              <hr style="width: 92%;margin: 0 auto;">
              <div style="position: absolute;z-index: 1;display: flex;gap: 10px;justify-content: end;"
                class="w-full text-sm p-1">
                <div class="has-popup relative">
                  <div class="custom-popup left-[-50px] hidden">Product Creation Date</div><span
                    class="p-1 font-bold bg-white rounded pointer-events-none" style="opacity: 0.79;"> <img
                      src="https://app.winninghunter.com/images/box.svg" class="h-4 v-4"> 2024-07-27</span>
                </div>
              </div>
              <div class="video-2 w-video w-embed">
                <div class="flex justify-center">
                  <div
                    class="glide flex justify-center carousel42098950359081456838 glide--ltr glide--carousel glide--swipeable">
                    <div data-glide-el="track" class="glide__track"
                      style="min-height:325px; width:100%;max-width:350px;">
                      <div class="glide__slides"
                        style="width: 2016px; font-size: 0px; height: 325px; transition: transform cubic-bezier(0.165, 0.84, 0.44, 1); transform: translate3d(-504px, 0px, 0px);">
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-right: 5px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--active"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>,<div
                          class="glide__slide flex justify-center relative"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>,<div
                          class="glide__slide flex justify-center relative"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>,<div
                          class="glide__slide flex justify-center relative"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px; margin-right: 5px;"><img
                            loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                        <div class="glide__slide flex justify-center relative glide__slide--clone"
                          style="width: 242px; align-items: center; margin-left: 5px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="filter: blur(5px);min-height: 319px;"><img loading="lazy"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                            style="max-height: 325px;position: absolute;"></div>
                      </div>
                    </div>

                    <div class="glide__arrows" data-glide-el="controls">
                      <button
                        class="glide__arrow glide__arrow--left !rounded-full !bg-white !text-black border !opacity-75"
                        data-glide-dir="<" style="padding: 5.4px 5.4px;"><img src="https://app.winninghunter.com/images/chevron-left.svg"
                          width="w-6 h-6"></button>
                      <button
                        class="glide__arrow glide__arrow--right !rounded-full !bg-white !text-black border !opacity-75"
                        data-glide-dir=">" style="padding: 5.4px 5.4px;"><img src="https://app.winninghunter.com/images/chevron-right.svg"
                          width="w-6 h-6"></button>
                    </div>
                    <div class="glide__bullets" data-glide-el="controls[nav]" style="color: transparent;">
                      <button class="glide__bullet shadow glide__bullet--active" data-glide-dir="=0"></button>,<button
                        class="glide__bullet shadow" data-glide-dir="=1"></button>,<button class="glide__bullet shadow"
                        data-glide-dir="=2"></button>,<button class="glide__bullet shadow" data-glide-dir="=3"></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frameitem-title-box" style="background-color:white;">
                <div class="frameitem-button-group gap-0">

                  <div class="linkclicks has-popup relative">
                    <div class="custom-popup hidden" style="left:-100px;">Page Information
                      <hr> <span class="text-[14px]">Advertiser runs in <img src="https://app.winninghunter.com/images/country-globe.svg"> 1
                        countries with <img height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                          style="pointer-events:none;"> 11 ads <div class="p-[2px] border rounded"><img
                            src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="10px" width="10px" class="DE"
                            style="border:none;border-radius: 50%;"></div></span>
                      <hr class="mt-[10px]">
                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="https://adslibrary.eu-central-1.linodeobjects.com/c6776aa4e0510f8526143301ef592d74d61e944d477f3d3d70031cd08290b025.jpg"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> Puro-della </span>
                        <a class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="thisad = $(this).closest('.one_add_wrapper'); $(thisad).find('.pageadcount').click();">View
                          Page Ads</a>
                      </div>
                    </div>
                    <div class="flex pointer-events-none"
                      style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="https://adslibrary.eu-central-1.linodeobjects.com/c6776aa4e0510f8526143301ef592d74d61e944d477f3d3d70031cd08290b025.jpg"
                        onerror="this.src='/images/facebook_no_profile_pic.png'">
                      <div class="pointer-events-none min-w-100">
                        <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">Puro-della
                        </div>
                        <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                            class="flex pointer-events-none"><img src="https://app.winninghunter.com/images/country-globe.svg"> 1</span> <span
                            class="pointer-events-none"> <img height="14px" width="14px"
                              src="https://app.winninghunter.com/images/page-ads-slate.svg" style="pointer-events:none;"> 11</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="product-info-onad ml-[30px] border-l pl-2 has-popup relative">

                    <div class="custom-popup !w-[240px] hidden" style="left:-100px;">Collection Information
                      <hr>

                      <span class="text-[14px]">
                        <p>Price: €29.99</p>
                        <p></p>
                        <p></p>
                        <p>Collection adspend: $0.59</p>
                        <p>Collection total revenue: $1.98</p>
                        <hr>
                        <p class="text-xs">First ad started: Jul 26 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">5
                            days ago</span></p>
                        <p class="text-xs">Last ad started: Jul 26 2024 <span
                            style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">5
                            days ago</span></p>
                        <p class="text-muted font-light text-xs">This creative generated 99% of the Collection adspend
                        </p>
                      </span>
                      <hr style="margin-top:10px;">

                      <div class="flex mt-2 flex-col">
                        <span style="font-size:13px;"><img
                            style="border-radius: 50%;flex-shrink: 0;margin-right: 4px;border: 1px solid #e9eaeb;height: 15px;width: 15px;"
                            src="http://www.purodella.de/cdn/shop/files/spp_20240422095945_cff26b1077c49977f8ee705f1da81c06_2f142fc1-c156-4ba5-b16b-da309f0e589d_1200x630.jpg?v=1722032355"
                            onerror="this.src='/images/facebook_no_profile_pic.png'"> 💥 Rundhalsausschnitt
                          Häkel-Strick-Netz-Top💥 - Weiß / M-38 </span>
                        <a href="https://www.purodella.de/collections/bar/products/hakel-strick-netz-top"
                          target="__BLANK"
                          class="text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none">Visit Collection
                          Page</a>
                        <a class="view-product-ads text-muted p-1 mt-2 rounded border w-full shadow-sm hover:shadow-none mt-1"
                          onclick="addmodal = $(this).closest('.add_item').find('.mainpopup').find('.addmodal'); handlePageProductSwitch(addmodal, forcestateto='product', openmodal=true);">View
                          Collection Ads</a>
                      </div>
                    </div>
                    <div class="text-sm pointer-events-none">
                      <div class="flex pointer-events-none"
                        style="color: rgba(0,0,0,.85);font-size: .875rem;line-height: 1.42858;"><img style="border-radius: 50%;flex-shrink: 0;
margin-right: 4px;    border: 1px solid #e9eaeb;height: 30px;
width: 30px;" src="http://www.purodella.de/cdn/shop/files/spp_20240422095945_cff26b1077c49977f8ee705f1da81c06_2f142fc1-c156-4ba5-b16b-da309f0e589d_1200x630.jpg?v=1722032355"
                          onerror="this.src='/images/facebook_no_profile_pic.png'">
                        <div class="pointer-events-none">
                          <div class="text-xs font-medium text-gray-800 cursor-pointer pointer-events-none">💥
                            Rundhals...</div>
                          <p class="text-slate-500 text-xs flex gap-1 pointer-events-none"><span
                              class="flex pointer-events-none">€29.99</span> <span class="flex pointer-events-none"><img
                                height="14px" width="14px" src="https://app.winninghunter.com/images/page-ads-slate.svg"
                                style="pointer-events:none;"> 1</span> <span class="flex pointer-events-none"><img
                                height="13px" width="13px" class="text-slate-500 ml-[4px]" src="https://app.winninghunter.com/images/adspend.svg"
                                style="pointer-events:none;">0</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="searchadchild">
                    <div class="add-popup" style="overflow-y: scroll;flex-direction: column;">
                      <input type="hidden" id="adhistory" adsets="{&quot;2024-07-26 00:00:00&quot;:&quot;1&quot;}"
                        adspend="{&quot;2024-07-27 07:40:42&quot;:54}" views="null" likes="null" comments="null"
                        shares="null">
                      <input type="hidden" id="randomToken" value="56838">
                      <input type="hidden" id="productidstar" value="420989503590814">
                      <div class="info_body" style="margin: 0 auto;">
                        <div id="w-node-_3eb5300b-0206-f91c-5505-e52b666a5390-de161bc0" class="frameitem-video-wrapper">
                          <div class="html-embed-5 w-embed">
                            <img
                              src="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
                              style="width:300px;object-fit:contain;display:block;">
                          </div>
                          <br> Ads History <canvas id="chart42098950359081456838"></canvas>
                        </div>
                        <div id="w-node-b50b7bcc-f095-371f-c679-5cab2590eb82-de161bc0" class="div-block-64">
                          <div class="frameitem-details">
                            <div class="frameitem_component">
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Primary Text</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>💞Geeignet für reife Frauen aller Figurtypen
                                      ✅ Hochwertiges Top mit Ausschnitten und Dreiviertel-Ärmeln,🌷perfekt für deinen
                                      entspannten Lebensstil🛒👇</p>
                                  </div>
                                </div>
                              </div>
                              <div class="frameitem_accordion collapse-frame">
                                <div class="frameitem-dropdown-title-wrapper">
                                  <div class="text-size-medium text-weight-bold">Description</div>
                                  <img src="https://app.winninghunter.com/images/63affef89a16ae864c5b2660_icon_chevron.svg" loading="lazy" alt=""
                                    class="frameitem-arrow">
                                </div>
                                <div class="frameitem-description">
                                  <div class="margin-bottom margin-small">
                                    <p>none</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button class="button w-button action-button"
                            onclick="getAdCopy('none', '420989503590814', this)">Generate Ad Copy <svg width="24px"
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
                          <div class="adcopygeneratorbox" id="adcopy420989503590814"></div>
                          <div class="frameitem-country">
                            Share:
                            <img src="https://app.winninghunter.com/images/share-ios-export.svg"
                              style="cursor:pointer;height:30px;display:inline-block;" class="share-ios action-button"
                              onclick="copyad('420989503590814')">
                            <!-- <div class="frameitem-country-wrapper">
  <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" class="frameitem-countr-flag">
  <div>
    <div class="frameitem-small-text">Ad Country</div>
    <div class="frameitem-country-name">Germany</div>
  </div>
</div>  
<div>
  <a href="#" onclick="" class="button w-button">Share ad</a>
</div> -->

                          </div>
                          <div class="frameitem-links-grid">
                            <div id="w-node-c767e22e-faf5-a876-818f-2bd868c356f9-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/store-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Store</div>
                                <a href="https://www.purodella.de/collections/bar/products/hakel-strick-netz-top"
                                  target="__BLANK" class="frameitem-link">Product Page</a>
                              </div>
                            </div>
                            <div id="w-node-_1ebb295b-90a9-56aa-efb5-ed9f7c9c979b-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/magiccard-expense-svgrepo-com.svg" loading="lazy" alt=""
                                class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Ad Library;</div>
                                <a href="https://www.facebook.com/ads/library/?id=420989503590814" target="__BLANK"
                                  class="frameitem-link">Ad link</a>
                              </div>
                            </div>
                            <div id="w-node-bfa31db7-cfe0-3720-565c-00b513e721c8-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Page Ad Library</div>
                                <a href="https://www.facebook.com/ads/library/?active_status=active&amp;ad_type=all&amp;country=ALL&amp;view_all_page_id=361013867099158&amp;search_type=page&amp;media_type=all"
                                  target="__BLANK" class="frameitem-link">Page Ad Library</a>
                              </div>
                            </div>
                            <div id="w-node-_0b943d44-7c96-4a99-eb12-328b90a563b7-de161bc0" class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/download-svgrepo-com.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <div class="frameitem-small-text">Photo</div>
                                undefined
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/track.png" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a tabindex="0" class="frameitem-link"
                                  href="/sales-tracker?store=https://www.purodella.de/collections/bar/products/hakel-strick-netz-top"
                                  target="__BLANK">Track Store</a>
                              </div>
                            </div>
                            <div class="frameitem-link-item">
                              <img src="https://app.winninghunter.com/images/link-black-mini.svg" loading="lazy" alt="" class="frameitem-icon">
                              <div>
                                <a type="button" class="frameitem-link"
                                  onclick="openPiModal('https://www.purodella.de', 'hakel-strick-netz-top')"> Import
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
                                  href="/magic-ai?imgurl=https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg"
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
<div id="competitor-adds-list42098950359081456838" class="compadslist"></div>
</div>
</div> -->
                      <img src="https://app.winninghunter.com/images/close-svgrepo-com.svg" loading="lazy"
                        data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048" alt="" class="close-ad">
                    </div>
                  </div>
                </div>
              </div>
              <hr style="width: 92%; margin: 0 auto;">

              <div class="add_info">
                <div class="add-meta-wrapper">
                  <div class="add-sub-info">
                    <div>Scaling: <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">0%</span>
                    </div>
                    <div>Platforms: <img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px"><img
                        src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px"><img src="https://app.winninghunter.com/images/audience_network.png"
                        height="20px" width="20px"><img src="https://app.winninghunter.com/images/messenger.svg" height="20px" width="20px"></div>
                    <div class="has-popup relative">
                      <div class="custom-popup hidden" style="left:0px;">Countries
                        <hr>
                        <div class="text-sm p-1">
                          <p class="flex w-full gap-1 mt-1"><img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt=""
                              height="20px" width="20px" class="DE w-5 h-5"
                              style="border:none;border-radius: 50%;">Germany</p>
                        </div>
                      </div>Countries: <img src="https://app.winninghunter.com/images/DE.png" loading="lazy" alt="" height="20px" width="20px"
                        class="DE" style="border:none;border-radius: 50%;height:20px;">
                    </div>
                    <div>Website: <img src="https://app.winninghunter.com/images/SH.svg" height="20px" width="20px" class="techicon SHtip"
                        title="Shopify"><img src="https://app.winninghunter.com/images/PP.svg" height="20px" width="20px" class="techicon PPtip"
                        title="PayPal"><img src="https://app.winninghunter.com/images/CO.svg" height="20px" width="20px" class="techicon COtip"
                        title="Checkout"><img src="https://app.winninghunter.com/images/TP.svg" height="20px" width="20px" class="techicon TPtip"
                        title="Trustpilot"><img src="https://app.winninghunter.com/images/BU.svg" height="20px" width="20px" class="techicon BUtip"
                        title="Bundle App"></div>
                    <div>Gender: Women</div>
                    <div>Ages: 18 - 65+</div>
                    <div>Started: Jul 26 2024 <span
                        style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">5
                        days ago</span></div>
                    <div class="text-dark"><b>Adsets: 1</b></div>
                    <div class="add-sub-info">
                      <div>Last seen: Jul 27 2024 <span
                          style="width:1.5em;border:none;border-radius:0.5em;background-color:#EFEFF7;padding:3px;color:#5E6068;">3
                          days ago</span></div>
                      <div class="text-dark"><b>Adsets: 1</b></div>
                    </div>

                  </div>
                  <button type="button" class="dots see-details action-button"
                    comptarget="#competitor-adds-list42098950359081456838"
                    imageurl="https://adslibrary.eu-central-1.linodeobjects.com/267db8b6501688ab5fbedc6aee8a5c1c5373dbb309be68f4d330b7d86efb8996.jpg">
                    View Details
                  </button>
                </div>
              </div>
              <div class="frameitem-title-box">
                <div class="frameitem-button-group" style="justify-content: space-between;">
                  <a href="https://www.purodella.de/collections/bar/products/hakel-strick-netz-top" target="__BLANK"
                    class="linkclicks">
                    <div class="frameitem-titles">
                      <div
                        style="line-height: 12px; max-height: 24px; -webkit-line-clamp: 2;font-size: 8px;color: #606770;-webkit-box-orient: vertical;display: -webkit-box;float: none;">
                        www.purodella.de</div>
                      <div
                        style="display: -webkit-box;overflow: hidden;white-space: normal;display: -webkit-box;-webkit-box-orient: vertical;color: #1c1e21;font-size: 10px;line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;">
                        50% Rabatt + Kostenloser Versand!</div>
                      <div style="line-height: 14px; max-height: 28px; -webkit-line-clamp: 2;-webkit-box-orient: vertical;
display: -webkit-box;
float: none;overflow: hidden;
white-space: normal;    font-size: 9px;    color: #606770;"></div>
                    </div>
                  </a>
                  <div>
                    <a href="https://www.purodella.de/collections/bar/products/hakel-strick-netz-top" target="__BLANK"
                      class="frameitem-info w-button action-button">Order Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="productadslist product-vw-component" id="productadslist188581964184342140987" style="display:none;">
          <div class="add_item skeletonadd">
            <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
              <div class="frameitem-title-group">
                <div class="text-block-7 ad-captions">
                  <div class="skeleton paragraph"></div>
                </div>
                <div class="favorite-wrapper">
                  <div class="skeleton threedot-more-info"></div>
                </div>
              </div>
            </div>
            <div class="primary-copy-cutoff primary-copy">
              <p> </p>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <p></p>
            </div>
            <hr style="width: 92%;    margin: 0 auto;">
            <div class="video-2 w-video w-embed">
              <div class="skeleton frameitem_video"></div>
            </div>
            <div class="frameitem-title-box" style="background-color:white;">
              <div class="frameitem-button-group">
                <div class="skeleton paragraph"></div>
              </div>
            </div>
            <hr style="width: 92%;">
            <div class="add_info">
              <div class="add-meta-wrapper">
                <div class="add-sub-info">
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                </div>
              </div>
            </div>
            <div class="frameitem-title-box">
              <div class="frameitem-button-group"> <a target="__BLANK" class="linkclicks">
                  <div class="frameitem-titles">
                    <div class="skeleton paragraph"></div>
                    <div class="skeleton paragraph"></div>
                    <div class="skeleton paragraph"></div>
                  </div>
                </a>
                <div>
                  <div class="skeleton frameitem_button"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="add_item skeletonadd">
            <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
              <div class="frameitem-title-group">
                <div class="text-block-7 ad-captions">
                  <div class="skeleton paragraph"></div>
                </div>
                <div class="favorite-wrapper">
                  <div class="skeleton threedot-more-info"></div>
                </div>
              </div>
            </div>
            <div class="primary-copy-cutoff primary-copy">
              <p> </p>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <p></p>
            </div>
            <hr style="width: 92%;    margin: 0 auto;">
            <div class="video-2 w-video w-embed">
              <div class="skeleton frameitem_video"></div>
            </div>
            <div class="frameitem-title-box" style="background-color:white;">
              <div class="frameitem-button-group">
                <div class="skeleton paragraph"></div>
              </div>
            </div>
            <hr style="width: 92%;">
            <div class="add_info">
              <div class="add-meta-wrapper">
                <div class="add-sub-info">
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                </div>
              </div>
            </div>
            <div class="frameitem-title-box">
              <div class="frameitem-button-group"> <a target="__BLANK" class="linkclicks">
                  <div class="frameitem-titles">
                    <div class="skeleton paragraph"></div>
                    <div class="skeleton paragraph"></div>
                    <div class="skeleton paragraph"></div>
                  </div>
                </a>
                <div>
                  <div class="skeleton frameitem_button"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="add_item skeletonadd">
            <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
              <div class="frameitem-title-group">
                <div class="text-block-7 ad-captions">
                  <div class="skeleton paragraph"></div>
                </div>
                <div class="favorite-wrapper">
                  <div class="skeleton threedot-more-info"></div>
                </div>
              </div>
            </div>
            <div class="primary-copy-cutoff primary-copy">
              <p> </p>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <p></p>
            </div>
            <hr style="width: 92%;    margin: 0 auto;">
            <div class="video-2 w-video w-embed">
              <div class="skeleton frameitem_video"></div>
            </div>
            <div class="frameitem-title-box" style="background-color:white;">
              <div class="frameitem-button-group">
                <div class="skeleton paragraph"></div>
              </div>
            </div>
            <hr style="width: 92%;">
            <div class="add_info">
              <div class="add-meta-wrapper">
                <div class="add-sub-info">
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                </div>
              </div>
            </div>
            <div class="frameitem-title-box">
              <div class="frameitem-button-group"> <a target="__BLANK" class="linkclicks">
                  <div class="frameitem-titles">
                    <div class="skeleton paragraph"></div>
                    <div class="skeleton paragraph"></div>
                    <div class="skeleton paragraph"></div>
                  </div>
                </a>
                <div>
                  <div class="skeleton frameitem_button"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="add_item skeletonadd">
            <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
              <div class="frameitem-title-group">
                <div class="text-block-7 ad-captions">
                  <div class="skeleton paragraph"></div>
                </div>
                <div class="favorite-wrapper">
                  <div class="skeleton threedot-more-info"></div>
                </div>
              </div>
            </div>
            <div class="primary-copy-cutoff primary-copy">
              <p> </p>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <p></p>
            </div>
            <hr style="width: 92%;    margin: 0 auto;">
            <div class="video-2 w-video w-embed">
              <div class="skeleton frameitem_video"></div>
            </div>
            <div class="frameitem-title-box" style="background-color:white;">
              <div class="frameitem-button-group">
                <div class="skeleton paragraph"></div>
              </div>
            </div>
            <hr style="width: 92%;">
            <div class="add_info">
              <div class="add-meta-wrapper">
                <div class="add-sub-info">
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                </div>
              </div>
            </div>
            <div class="frameitem-title-box">
              <div class="frameitem-button-group"> <a target="__BLANK" class="linkclicks">
                  <div class="frameitem-titles">
                    <div class="skeleton paragraph"></div>
                    <div class="skeleton paragraph"></div>
                    <div class="skeleton paragraph"></div>
                  </div>
                </a>
                <div>
                  <div class="skeleton frameitem_button"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="add_item skeletonadd">
            <div style="display:block;padding:10px;background:transparent;" class="frameitem-title-box">
              <div class="frameitem-title-group">
                <div class="text-block-7 ad-captions">
                  <div class="skeleton paragraph"></div>
                </div>
                <div class="favorite-wrapper">
                  <div class="skeleton threedot-more-info"></div>
                </div>
              </div>
            </div>
            <div class="primary-copy-cutoff primary-copy">
              <p> </p>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <div class="skeleton paragraph"></div>
              <p></p>
            </div>
            <hr style="width: 92%;    margin: 0 auto;">
            <div class="video-2 w-video w-embed">
              <div class="skeleton frameitem_video"></div>
            </div>
            <div class="frameitem-title-box" style="background-color:white;">
              <div class="frameitem-button-group">
                <div class="skeleton paragraph"></div>
              </div>
            </div>
            <hr style="width: 92%;">
            <div class="add_info">
              <div class="add-meta-wrapper">
                <div class="add-sub-info">
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                  <div class="skeleton paragraph"></div>
                </div>
              </div>
            </div>
            <div class="frameitem-title-box">
              <div class="frameitem-button-group"> <a target="__BLANK" class="linkclicks">
                  <div class="frameitem-titles">
                    <div class="skeleton paragraph"></div>
                    <div class="skeleton paragraph"></div>
                    <div class="skeleton paragraph"></div>
                  </div>
                </a>
                <div>
                  <div class="skeleton frameitem_button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="margin-bottom margin-xlarge pageloader" style="display: none;">
        <div>
          <center><img src="https://app.winninghunter.com/images/Pulse-1.1s-207px.gif" height="100px;" width="100px"
              style="display:block;margin: 0 auto; "></center>
        </div>
      </div>
    </div>
  </div>
  <img onclick="document.dispatchEvent(new Event('close_page_ads_popup'));" copiwin-id="${this.id}" src="https://app.winninghunter.com/images/close-svgrepo-com.svg" loading="lazy" data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048" alt=""
    class="close-ad">
</div>`
  }
}

export default facebookAdPagePopupTemplate