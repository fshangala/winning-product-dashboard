var salesTrackerTemplate = {
  table_rows: '',
  get html() {
    return `<div id="store-tracker-template">
  <div class="margin-bottom margin-xlarge">
    <div>
      <div class="w-form">
        <div class="flex justify-between flex-wrap">
        <h5><img src="https://app.winninghunter.com/assets/images/sales.svg" height="30px" width="50.33px"> Sales Tracker</h5>
<!--                           <a class="place-self-end invite-friends-btn w-inline-block dark-hover watch-tutorial-button">
            <p class="invite-friends-btn__text">Watch Tutorial</p>
          </a> -->
        </div>
        <div class="">
            <div x-data="{ activeTab:  0 }">
                <div class="border-b border-b-gray-300">
                    <div class="-mb-px flex items-center gap-4 text-md font-medium">
                        <li class="mb-[-2px] p-0"> <a @click="activeTab = 0" :class="{ 'relative text-primary after:absolute after:left-0 text-lg border-primary border-b-4 font-bold after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700': activeTab === 0 }" class="inline-flex cursor-pointer transition-all duration-200 delay-200 transform items-center gap-2 text-gray-500 hover:text-primary-700 relative text-primary after:absolute after:left-0 text-lg border-primary border-b-4 font-bold after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700"> Track Stores</a> </li>
                        <!-- <li class="mb-[-2px] p-0"> <a @click="activeTab = 1" :class="{ 'relative text-primary after:absolute after:left-0 font-bold border-primary border-b-4 text-lg after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700': activeTab === 1 }" class="inline-flex cursor-pointer transition-all duration-200 delay-200 transform items-center gap-2 text-gray-500 hover:text-primary-700">Explore Stores</a> </li> -->
                    </div>
                </div> <!-- tab content -->
                <div class="py-3">
                    <div :class="{ '!block': activeTab === 0 }" x-show.transition.in.opacity.duration.600="activeTab === 0" class="hidden !block"> 

                      <form id="email-form" name="email-form" data-name="Email Form" method="get" class="dashboard_form" autocomplete="off" aria-label="Email Form">
                          <div class="search-bar-2"><input type="text" class="form-input store-tracker-input w-node-_0322e9d6-424f-4199-3983-70c178bb4fa4-0ff95548 w-input" maxlength="1000" name="Store-URL" data-name="Store URL" placeholder="Insert Store URL" id="Store-URL" required="" value="">
                            <button id="start-tracking-btn" type="button" class="applly-filter w-button">Start Tracking</button>
                            <div class="skeleton store_amount" style="display: none;"></div>
                            <div id="w-node-_1cec01a0-b946-73f1-6c9a-1da1ecab96c0-0ff95548" class="div-block-58">
                              <div id="w-node-_07575d5b-b30a-d5b0-8568-2c3705a3b90b-0ff95548" class="stores-count-wrapper product-count-wrapper" style="">
                                <div>Stores</div>
                                <div class="stores-left"><span id="storecount">12</span>/25</div>
                              </div>
                              <div class="skeleton store_amount" style="display: none;"></div>
                            </div>
                          </div>
                        </form>
                        <div class="py-5"></div>
                        <div>
                            <table id="stores-table">
                                <thead>
                                    <tr>
                                        <th>Store</th>
                                        <th>Today</th>
                                        <th>Yesterday</th>
                                        <th>7 days</th>
                                        <th>30 days</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                       

                          <div id="store-table_wrapper" class="dataTables_wrapper no-footer">
                            <div class="dataTables_length" id="store-table_length">
                                <label>Show 
                                    <select name="store-table_length" aria-controls="store-table" class="">
                                        <option value="10">10</option><option value="25">25</option>
                                        <option value="50">50</option><option value="100">100</option></select> stores</label></div><div id="store-table_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-input" placeholder="" aria-controls="store-table"></label></div><table id="store-table" class="shadow-backdrop hidden dataTable no-footer dtr-inline" style="width: 100%; display: table;" data-wg-notranslate="" aria-describedby="store-table_info">
                          <thead>
                              <tr><th class="dt-center sorting" tabindex="0" aria-controls="store-table" rowspan="1" colspan="1" style="width: 0px;" aria-label="Store: activate to sort column descending">Store</th><th class="dt-center sorting" tabindex="0" aria-controls="store-table" rowspan="1" colspan="1" style="width: 0px;" aria-label="Today: activate to sort column descending">Today</th><th class="dt-center sorting" tabindex="0" aria-controls="store-table" rowspan="1" colspan="1" style="width: 0px;" aria-label="Yesterday: activate to sort column descending">Yesterday</th><th class="dt-center sorting" tabindex="0" aria-controls="store-table" rowspan="1" colspan="1" style="width: 0px;" aria-label="7 Days: activate to sort column descending">7 Days</th><th class="dt-center sorting" tabindex="0" aria-controls="store-table" rowspan="1" colspan="1" style="width: 0px;" aria-label="30 Days: activate to sort column descending">30 Days</th></tr>
                          </thead>
                          
                          <tbody class="divide-y divide-gray-100 border-t border-gray-100">${this.table_rows}</tbody>                          
                        </table><div class="dataTables_info" id="store-table_info" role="status" aria-live="polite">Showing 1 to 10 of 12 stores</div><div class="dataTables_paginate paging_simple_numbers" id="store-table_paginate"><a class="paginate_button previous disabled" aria-controls="store-table" aria-disabled="true" aria-role="link" data-dt-idx="previous" tabindex="-1" id="store-table_previous">Previous</a><span><a class="paginate_button current" aria-controls="store-table" aria-role="link" aria-current="page" data-dt-idx="0" tabindex="0">1</a><a class="paginate_button " aria-controls="store-table" aria-role="link" data-dt-idx="1" tabindex="0">2</a></span><a class="paginate_button next" aria-controls="store-table" aria-role="link" data-dt-idx="next" tabindex="0" id="store-table_next">Next</a></div></div>
                      </div>

                    </div> 
                    <!-- shop explorer -->
            <div :class="{ '!block': activeTab === 1 }" x-show.transition.in.opacity.duration.600="activeTab === 1" class="hidden" style="display: none;">
            <div class="divide-y">
                <div class="w-full mb-4">
                    <!-- filters -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <!-- input boxes -->
                        <div class="col-span-2 p-1 text-md mb-1 w-2/3">
                            <ul class="flex flex-col m-0">
                                <li> <strong class="block text-sm font-medium uppercase text-gray-400"> Include </strong>
                                    <div class="justify-center items-center gap-5 mt-4 text-xs">
                                        <!-- label -->
                                        <div class="col-span-1 pt-1"> <label for="name-search"> Name:</label> </div> <!-- search -->
                                        <div class="col-span-3"> <input type="text" class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" maxlength="2560" name="keyword" data-name="Keyword" placeholder="Name..." id="name" style="width: 100%" autocomplete="off"> </div> <!-- label -->
                                        <div class="col-span-1 pt-1"> <label for="name-search"> URL:</label> </div> <!-- search -->
                                        <div class="col-span-3"> <input type="text" class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" maxlength="2560" name="keyword" data-name="Keyword" placeholder="URL..." id="url" style="width: 100%" autocomplete="off"> </div> <!-- label -->
                                        <div class="col-span-1 pt-1"> <label for="name-search"> Description:</label> </div> <!-- search -->
                                        <div class="col-span-3"> <input type="text" class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" maxlength="2560" name="keyword" data-name="Keyword" placeholder="Description..." id="desc" style="width: 100%" autocomplete="off"> </div> <!-- label -->
                                        <div class="col-span-1 pt-1"> <label for="name-search"> Theme:</label> </div> <!-- search -->
                                        <div class="col-span-3"> <input type="text" class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" maxlength="2560" name="keyword" data-name="Keyword" placeholder="Theme..." id="theme" style="width: 100%" autocomplete="off"> </div>
                                    </div>
                                </li>
                            </ul>
                        </div> <!-- Type -->
                       <!--  <div class="p-1 text-md mb-1">
                            <ul class="flex flex-col m-0">
                                <li> <strong class="block text-sm font-medium uppercase text-gray-400"> Type </strong>
                                    <div class="flex gap-2 flex-wrap mt-4 text-sm">
                                        <div class="tag" onclick="toggleCheckbox('dropshipping')">
                                            <p class="px-3 tracking-wide hover:opacity-80 whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80 transition-all duration-200"> <input type="checkbox" id="dropshipping" class="h-4 w-4 rounded border-gray-300 shadow-sm accent-black" onclick="toggleCheckbox('dropshipping')" /> 📦 Dropshipping </p>
                                        </div>
                                        <div class="tag" onclick="toggleCheckbox('dp')">
                                            <p class="px-3 tracking-wide hover:opacity-80 whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80 transition-all duration-200"> <input type="checkbox" id="dp" class="h-4 w-4 rounded border-gray-300 shadow-sm accent-black" onclick="toggleCheckbox('dp')" /> 💿 Digital Products </p>
                                        </div>
                                        <div class="tag" onclick="toggleCheckbox('POD')">
                                            <p class="px-3 tracking-wide hover:opacity-80 whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80 transition-all duration-200"> <input type="checkbox" id="POD" class="h-4 w-4 rounded border-gray-300 shadow-sm accent-black" onclick="toggleCheckbox('POD')" /> 🖨️ Print on Demand </p>
                                        </div>
                                        <div class="tag" onclick="toggleCheckbox('COD')">
                                            <p class="px-3 tracking-wide hover:opacity-80 whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80 transition-all duration-200"> <input type="checkbox" id="COD" class="h-4 w-4 rounded border-gray-300 shadow-sm accent-black" onclick="toggleCheckbox('COD')" /> 💸 Cash on Delivery </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div> 
                        <div class="p-1 text-md mb-1">
                            <ul class="flex flex-col m-0">
                                <li> <strong class="block text-sm font-medium uppercase text-gray-400"> Ad Channels </strong>
                                    <div class="flex gap-2 flex-wrap mt-4 text-sm cursor-pointer">
                                        <div class="tag-ad">
                                            <div class="px-3 tracking-wide hover:opacity-80 whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80 transition-all duration-200" onclick="toggleCheckbox('meta')"> <input type="checkbox" id="meta" class="h-4 w-4 rounded border-gray-300 shadow-sm accent-black" onclick="toggleCheckbox('meta')" />
                                                <div> <img src="https://app.winninghunter.com/meta.svg" alt="" /> </div> Meta
                                            </div>
                                        </div>
                                        <div class="tag-ad">
                                            <div class="px-3 tracking-wide hover:opacity-80 whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80 transition-all duration-200" onclick="toggleCheckbox('Tiktok')"> <input type="checkbox" id="Tiktok" class="h-4 w-4 rounded border-gray-300 shadow-sm accent-black" onclick="toggleCheckbox('Tiktok')" />
                                                <div> <img src="https://app.winninghunter.com/tiktok.svg" alt="" /> </div> Tiktok
                                            </div>
                                        </div>
                                        <div class="tag-ad">
                                            <div class="px-3 tracking-wide hover:opacity-80 whitespace-nowrap border-gray-300 hover:bg-gray-100 active:scale-[98%] h-9 px-3 cursor-pointer border border-input hover:text-accent-foreground inline-flex items-center justify-center rounded-full text-sm font-medium disabled:opacity-50 ring-offset-background hover:opacity-80 transition-all duration-200" onclick="toggleCheckbox('Pinterest')"> <input type="checkbox" id="Pinterest" class="h-4 w-4 rounded border-gray-300 shadow-sm accent-black" onclick="toggleCheckbox('Pinterest')" />
                                                <div> <img src="https://app.winninghunter.com/pinterest.svg" alt="" /> </div> Pinterest
                                            </div>
                                        </div>
                                        <div class="tag-ad">
                                            <div class="px-3 p-2 text-sm cursor-pointer flex justify-center items-center gap-2 font-medium rounded-full border tracking-wide hover:opacity-80 hover:border-gray-700 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200" onclick="toggleCheckbox('Snapchat')"> <input type="checkbox" id="Snapchat" class="h-4 w-4 rounded border-gray-300 shadow-sm accent-black" onclick="toggleCheckbox('Snapchat')" />
                                                <div> <img src="https://app.winninghunter.com/snpachat.svg" alt="" /> </div> Snapchat
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div> --> <!-- Sales -->
                        <div class="p-1 text-md mb-1">
                            <ul class="flex flex-col m-0">
                                <li> <strong class="block text-xs font-medium uppercase text-gray-400"> Sales </strong>
                                    <div class="gap-4 grid grid-cols-1 xl:grid-cols-2 my-2 py-2">
                                        <!-- Monthly Sales -->
                                            <div class="select-wrapper">
                                                <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer"> Sales Today <div class="custom-popup hidden" style="right: 0px; z-index: 1999"> Sort ads by: <p class="text-align-left"> "Consistency" - Ads that performed well over a longer period of time.<br> "Trending" - Ads that recently performed well.<br> "Adset amount" - Ads with the most amount of adsets.<br> "Last seen" - Ads that are seen the last by our bots.<br> </p>
                                                    </div>
                                                    <div class="inline-block pointer-events-none"> <img src="https://app.winninghunter.com/images/info.svg" class="w-4 h-4" alt=""> </div>
                                                </div> <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                                            <ul class="select2-selection__rendered">
                                                                <li class="select2-search select2-search--inline"> <input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"> </li>
                                                            </ul>
                                                        </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span> <select id="monthlySales" placeholder="Sales Today" name="monthlySales" data-name="monthlySales" class="form-input select-box-2 w-select hidden select2-hidden-accessible" data-select2-id="monthlySales" tabindex="-1" style="" aria-hidden="true">
                                                    <option value="" data-select2-id="2">None</option>
                                                    <option value="1-5">1-5 Sales</option>
                                                    <option value="5-10">5-10 Sales</option>
                                                    <option value="10-30">10-30 Sales</option>
                                                    <option value="30-100">30-100 Sales</option>
                                                    <option value="100">100+ Sales</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style="width: 130px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-monthlySales-container"><span class="select2-selection__rendered" id="select2-monthlySales-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Sales Today</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                         <!-- Monthly Revenue -->
                                            <div class="select-wrapper">
                                                <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer"> Revenue Today <div class="custom-popup hidden" style="right: 0px; z-index: 1999"> Sort ads by: <p class="text-align-left"> "Consistency" - Ads that performed well over a longer period of time.<br> "Trending" - Ads that recently performed well.<br> "Adset amount" - Ads with the most amount of adsets.<br> "Last seen" - Ads that are seen the last by our bots.<br> </p>
                                                    </div>
                                                    <div class="inline-block pointer-events-none"> <img src="https://app.winninghunter.com/images/info.svg" class="w-4 h-4" alt=""> </div>
                                                </div> <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                                            <ul class="select2-selection__rendered">
                                                                <li class="select2-search select2-search--inline"> <input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"> </li>
                                                            </ul>
                                                        </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span> <select placeholder="Revenue Today" data-name="monthlyRevenue" name="monthlyRevenue" id="monthlyRevenue" multiple="" class="form-input select-box-2 w-select hidden select2-hidden-accessible" data-select2-id="monthlyRevenue" tabindex="-1" style="" aria-hidden="true">
                                                    <option value="">None</option>
                                                    <option value="101-500">101 - 500 USD</option>
                                                    <option value="501-1000">501 - 1000 USD</option>
                                                    <option value="1001-5000"> 1001 - 5000 USD </option>
                                                    <option value="5001-10000"> 5001 - 10000 USD </option>
                                                    <option value="10000">10000+ USD</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="3" style="width: 130px;"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Revenue Today" style="width: 0px;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                    </div>
                                </li>
                            </ul>
                        </div> <!-- Advanced -->
                        <div class="p-1 text-md mb-1 col-span-2">
                                <strong class="block text-xs font-medium uppercase text-gray-400"> Advanced </strong>
                                    <div class="filters">
                                        <!-- Location -->
                                            <div class="select-wrapper">
                                                <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer"> Location <div class="custom-popup hidden" style="right: 0px; z-index: 1999"> Sort ads by: <p class="text-align-left"> "Consistency" - Ads that performed well over a longer period of time.<br> "Trending" - Ads that recently performed well.<br> "Adset amount" - Ads with the most amount of adsets.<br> "Last seen" - Ads that are seen the last by our bots.<br> </p>
                                                    </div>
                                                    <div class="inline-block pointer-events-none"> <img src="https://app.winninghunter.com/images/info.svg" class="w-4 h-4" alt=""> </div>
                                                </div> <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                                            <ul class="select2-selection__rendered">
                                                                <li class="select2-search select2-search--inline"> <input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"> </li>
                                                            </ul>
                                                        </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span> <select id="location" placeholder="Location" name="location" data-name="location" class="form-input select-box-2 w-select hidden select2-hidden-accessible" multiple="" data-select2-id="location" tabindex="-1" style="" aria-hidden="true">
                                                    <option value="">None</option>
                                                    <option value="AFG">Aghanistan</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="IND">India</option>
                                                    <option value="NED">Netherlands</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="4" style="width: 130px;"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Location" style="width: 0px;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                         <!-- Language -->
                                            <div class="select-wrapper">
                                                <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer"> Language <div class="custom-popup hidden" style="right: 0px; z-index: 1999"> Sort ads by: <p class="text-align-left"> "Consistency" - Ads that performed well over a longer period of time.<br> "Trending" - Ads that recently performed well.<br> "Adset amount" - Ads with the most amount of adsets.<br> "Last seen" - Ads that are seen the last by our bots.<br> </p>
                                                    </div>
                                                    <div class="inline-block pointer-events-none"> <img src="https://app.winninghunter.com/images/info.svg" class="w-4 h-4" alt=""> </div>
                                                </div> <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                                            <ul class="select2-selection__rendered">
                                                                <li class="select2-search select2-search--inline"> <input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"> </li>
                                                            </ul>
                                                        </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span> <select id="language" placeholder="Language" name="language" data-name="language" class="form-input select-box-2 w-select hidden select2-hidden-accessible" multiple="" data-select2-id="language" tabindex="-1" style="" aria-hidden="true">
                                                    <option value="">None</option>
                                                    <option value="AFG">Aghanistan</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="IND">India</option>
                                                    <option value="NED">Netherlands</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5" style="width: 130px;"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Language" style="width: 0px;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                        <!-- Currency -->
                                            <div class="select-wrapper">
                                                <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer"> Store Currency <div class="custom-popup hidden" style="right: 0px; z-index: 1999"> Sort ads by: <p class="text-align-left"> "Consistency" - Ads that performed well over a longer period of time.<br> "Trending" - Ads that recently performed well.<br> "Adset amount" - Ads with the most amount of adsets.<br> "Last seen" - Ads that are seen the last by our bots.<br> </p>
                                                    </div>
                                                    <div class="inline-block pointer-events-none"> <img src="https://app.winninghunter.com/images/info.svg" class="w-4 h-4" alt=""> </div>
                                                </div> <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                                            <ul class="select2-selection__rendered">
                                                                <li class="select2-search select2-search--inline"> <input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"> </li>
                                                            </ul>
                                                        </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span> <select id="currency" placeholder="Currency" name="currency" data-name="currency" class="form-input select-box-2 w-select hidden select2-hidden-accessible" multiple="" data-select2-id="currency" tabindex="-1" style="" aria-hidden="true">
                                                    <option value="">None</option>
                                                    <option value="AFG">Aghanistan</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="IND">India</option>
                                                    <option value="NED">Netherlands</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="6" style="width: 130px;"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Currency" style="width: 0px;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                         <!-- Product Amount -->
                                            <div class="select-wrapper">
                                                <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer"> Product Amount <div class="custom-popup hidden" style="right: 0px; z-index: 1999"> Sort ads by: <p class="text-align-left"> "Consistency" - Ads that performed well over a longer period of time.<br> "Trending" - Ads that recently performed well.<br> "Adset amount" - Ads with the most amount of adsets.<br> "Last seen" - Ads that are seen the last by our bots.<br> </p>
                                                    </div>
                                                    <div class="inline-block pointer-events-none"> <img src="https://app.winninghunter.com/images/info.svg" class="w-4 h-4" alt=""> </div>
                                                </div> <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                                            <ul class="select2-selection__rendered">
                                                                <li class="select2-search select2-search--inline"> <input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"> </li>
                                                            </ul>
                                                        </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span> <select id="productAmount" placeholder="Amount" name="productAmount" data-name="productAmount" class="form-input select-box-2 w-select hidden select2-hidden-accessible" multiple="" data-select2-id="productAmount" tabindex="-1" style="" aria-hidden="true">
                                                    <option value="">None</option>
                                                    <option value="AFG">Aghanistan</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="IND">India</option>
                                                    <option value="NED">Netherlands</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="7" style="width: 130px;"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Amount" style="width: 0px;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                         <!-- social media -->
                                            <div class="select-wrapper">
                                                <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer"> Social Media <div class="custom-popup hidden" style="right: 0px; z-index: 1999"> Sort ads by: <p class="text-align-left"> "Consistency" - Ads that performed well over a longer period of time.<br> "Trending" - Ads that recently performed well.<br> "Adset amount" - Ads with the most amount of adsets.<br> "Last seen" - Ads that are seen the last by our bots.<br> </p>
                                                    </div>
                                                    <div class="inline-block pointer-events-none"> <img src="https://app.winninghunter.com/images/info.svg" class="w-4 h-4" alt=""> </div>
                                                </div> <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                                            <ul class="select2-selection__rendered">
                                                                <li class="select2-search select2-search--inline"> <input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"> </li>
                                                            </ul>
                                                        </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span> <select id="socialMedia" placeholder="Social Media" name="socialMedia" data-name="socialMedia" class="form-input select-box-2 w-select hidden select2-hidden-accessible" multiple="" data-select2-id="socialMedia" tabindex="-1" style="" aria-hidden="true">
                                                    <option value="">None</option>
                                                    <option value="AFG">Aghanistan</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="IND">India</option>
                                                    <option value="NED">Netherlands</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="8" style="width: 130px;"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Social Media" style="width: 0px;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                         <!-- AOV -->
                                            <div class="select-wrapper">
                                                <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer"> Average Order Value <div class="custom-popup hidden" style="right: 0px; z-index: 1999"> Sort ads by: <p class="text-align-left"> "Consistency" - Ads that performed well over a longer period of time.<br> "Trending" - Ads that recently performed well.<br> "Adset amount" - Ads with the most amount of adsets.<br> "Last seen" - Ads that are seen the last by our bots.<br> </p>
                                                    </div>
                                                    <div class="inline-block pointer-events-none"> <img src="https://app.winninghunter.com/images/info.svg" class="w-4 h-4" alt=""> </div>
                                                </div> <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                                            <ul class="select2-selection__rendered">
                                                                <li class="select2-search select2-search--inline"> <input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"> </li>
                                                            </ul>
                                                        </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span> <select id="aov" placeholder="Average Order Value" name="aov" data-name="aov" class="form-input select-box-2 w-select hidden select2-hidden-accessible" multiple="" data-select2-id="aov" tabindex="-1" style="" aria-hidden="true">
                                                    <option value="">None</option>
                                                    <option value="AFG">Aghanistan</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="IND">India</option>
                                                    <option value="NED">Netherlands</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="9" style="width: 130px;"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Average Order Value" style="width: 0px;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                         <!-- last sale time -->
                                            <div class="select-wrapper" id="date">
                                                <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer"> Last Sale time <div class="custom-popup hidden" style="right: 90px"> Select the dates during which the ads were launched. </div>
                                                    <div class="inline-block pointer-events-none"> <img src="https://app.winninghunter.com/images/info.svg" class="h-4 w-4" alt=""> </div>
                                                </div>
                                                <div class=""> <input data-date="date" type="text" id="datepicker" placeholder="Select date range" class="form-input ad select2-selection select2-selection--multiple"> </div>
                                            </div>
                                        
                                    </div>
                                
                        </div>
                    </div> <!-- buttons -->
                    <div class="flex gap-4 items-center p-1 mb-1 mt-4">
                        <!-- clear filters -->
                        <div class=""> <button id="clearFilterButton" class="btn h-9 px-4 py-2 rounded-lg shadow-md bg-white text-black font-normal hover:shadow-lg transition-all focus:outline-none"> Cancel </button> </div> <!-- Apply Filter -->
                        <div class=""> <button id="applyFilterButton" class="shadow h-10 px-4 py-2 rounded items-center shadow-md bg-primary text-white font-normal hover:shadow-lg transition-all focus:outline-none"> Apply </button> </div>
                    </div>
                </div> <!-- Results -->
                <div class="my-2">
                    <main class="min-w-0 flex-1 p-4">
                        <div class="flex justify-between">
                            <div class="">
                                <h2 class="p-1 text-xl my-4 mb-8 font-bold text-gray-700"> Results </h2>
                            </div> <!-- sorting -->
                            <div class="px-12">
                                <div class="flex items-center">
                                    <div class="my-4 mr-4">
                                        <div class="select-wrapper">
                                            <div class="select-label inline-flex items-center min-w-full gap-0.5 has-popup cursor-pointer"> Sort by <div class="custom-popup hidden" style="right: 0px; z-index: 1999"> Sort ads by: <p class="text-align-left"> "Consistency" - Ads that performed well over a longer period of time.<br> "Trending" - Ads that recently performed well.<br> "Adset amount" - Ads with the most amount of adsets.<br> "Last seen" - Ads that are seen the last by our bots.<br> </p>
                                                </div>
                                                <div class="inline-block pointer-events-none"> <img src="https://app.winninghunter.com/images/info.svg" class="w-4 h-4" alt=""> </div>
                                            </div> <span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                                        <ul class="select2-selection__rendered">
                                                            <li class="select2-search select2-search--inline"> <input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"> </li>
                                                        </ul>
                                                    </span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span> <select id="sortby" placeholder="Sort by" name="sortby" data-name="sortby" class="form-input select-box-2 w-select hidden select2-hidden-accessible" data-select2-id="sortby" tabindex="-1" style="" aria-hidden="true">
                                                <option value="" data-select2-id="11">None</option>
                                                <option value="store-name">Store Name</option>
                                                <option value="store-sale">Sales Today</option>
                                                <option value="store-revenue"> Revenue Today</option>
                                            </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="10" style="width: 130px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-sortby-container"><span class="select2-selection__rendered" id="select2-sortby-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Sort by</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                        </div>
                                    </div> <!-- arrows -->
                                    <div class="">
                                        <div class="form-input select2-selection sortingdirection no-before active" direction="desc" style="position: relative"> <img src="https://app.winninghunter.com/images/sort-down.png" width="25px" height="25px" class="arrow-image-direction has-popup">
                                            <div class="custom-popup hidden"> Sort from high to low. </div>
                                        </div> <input type="hidden" id="sort-direction" class="sort-direction" value="desc">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="overflow-auto">
                            <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md">
                                <table class="w-full border-collapse bg-white text-left text-sm text-gray-500" id="ResultTable">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="px-6 py-4 font-medium text-left text-gray-900 cursor-pointer hover:bg-gray-200 transition-all" data-sort-by="store">
                                                <div class="flex items-center gap-2 text-left"> <span> <img src="https://app.winninghunter.com/images/store.svg" class="w-5 h-5" alt=""> </span>Store </div>
                                            </th>
                                            <th scope="col" class="px-6 py-4 font-medium text-left text-gray-900 cursor-pointer hover:bg-gray-200 transition-all" data-sort-by="monthlySale"> Sales Today </th>
                                            <th scope="col" class="px-6 py-4 font-medium text-left text-gray-900 cursor-pointer hover:bg-gray-200 transition-all" data-sort-by="monthlyRevenue"> Revenue Today </th>
                                            <th scope="col" class="px-6 py-4 font-medium text-left text-gray-900 cursor-pointer hover:bg-gray-200 transition-all" data-sort-by="dates"> Dates </th>
                                            <th scope="col" class="px-6 py-4 font-medium text-left text-gray-900 cursor-pointer hover:bg-gray-200 transition-all" data-sort-by="bestSellers"> Best Sellers </th>
                                            <th scope="col" class="px-6 py-4 font-medium text-gray-900 cursor-pointer"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-100 border-t border-gray-100">${this.table_rows}</tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
          </div>
                </div>
            </div>
        </div>
        <hr>
      </div>
    </div>
  </div>`
  }
}

export default salesTrackerTemplate