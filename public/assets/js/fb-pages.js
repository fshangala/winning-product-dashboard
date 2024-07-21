const countries = document.querySelector('#field');
const niches = document.querySelector('#niches');
const websites = document.querySelector('#website');
const storeurl = document.querySelector('#Store-URL');
const form = document.querySelector('#email-form');
const button = document.querySelector('.applly-filter');
var storetable;


let fieldvalue = $('#field').val();
let nichesvalue = $('#niches').val();
let websitevalue = $('#website').val();

var revenuedata;
let isEmpty;


const countrycodetoname = {'US': 'United States', 'FR': 'France', 'NL': 'The Netherlands', 'NO': 'Norway', 'SE': 'Sweden', 'GB': 'United Kingdom', 'DE': 'Germany', 'DK': 'Denmark', 'IT': 'Italy', 'CA': 'Canada', 'NZ': 'New Zealand', 'AU': 'Australia'};

$.fn.dataTable.moment('MMM DD, YYYY');
$.fn.dataTable.ext.errMode = 'none';

const technologies = {
  'SH': 'Shopify',
  'PP': 'PayPal',
  'KL': 'Klarna',
  'WC': 'WooCommerce',
  'TT': 'TikTok Pixel',
  'TW': 'Twitter Pixel',
  'PI': 'Pinterest Pixel',
  'GO': 'Google Analytics',
  'SC': 'Snapchat Pixel',
  'FB': 'Facebook Pixel',
  'MG': 'Magento',
  'WP': 'WordPress',
  'SQ': 'Squarespace',
  'PS': 'PrestaShop',
  'GM': 'Google Tag Manager',
  'KV': 'Klaviyo',
  'CO': 'Checkout',
  'HJ': 'Hotjar',
  'WX': 'Wix',
  'AR': 'AdRoll',
  'BC': 'BigCommerce',
  'MC': 'Mailchimp',
  'UB': 'Unbounce',
  'SI': 'ShopLine',
  'SL': 'ShopLazza',
  'XS': 'XShoppy',
  'YC': 'YouCan',
  'DI': 'Dropify',
  'TP': 'Trustpilot',
  // 'MS': 'mShop',
  'SB': 'ShopBase',
};


String.prototype.replaceAll = function(find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};



function addSkeleton() {
  $('tbody').html(`<tr class="even"><td class="dt-center dtr-control sorting_1" tabindex="0"><div id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">
                        <div class="div-block-34">
                          <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;"><div class="skeleton product-title"></div></div>
                          <div class="text-block-10" style="text-align:left;"><div class="skeleton product_variation"></div></div>
                        </div>
                      </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-b56b84f3-1991-98dd-09f9-6457cf4a8bcc-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4a-0ff95548" class="sales-col">
                              <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                            </div></td>
                  </tr>
                  <tr class="even"><td class="dt-center dtr-control sorting_1" tabindex="0"><div id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">
                        <div class="div-block-34">
                          <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;"><div class="skeleton product-title"></div></div>
                          <div class="text-block-10" style="text-align:left;"><div class="skeleton product_variation"></div></div>
                        </div>
                      </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-b56b84f3-1991-98dd-09f9-6457cf4a8bcc-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4a-0ff95548" class="sales-col">
                              <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                            </div></td>
                  </tr>
                  <tr class="even"><td class="dt-center dtr-control sorting_1" tabindex="0"><div id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">
                        <div class="div-block-34">
                          <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;"><div class="skeleton product-title"></div></div>
                          <div class="text-block-10" style="text-align:left;"><div class="skeleton product_variation"></div></div>
                        </div>
                      </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-b56b84f3-1991-98dd-09f9-6457cf4a8bcc-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4a-0ff95548" class="sales-col">
                              <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                            </div></td>
                  </tr>
                  <tr class="even"><td class="dt-center dtr-control sorting_1" tabindex="0"><div id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">
                        <div class="div-block-34">
                          <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;"><div class="skeleton product-title"></div></div>
                          <div class="text-block-10" style="text-align:left;"><div class="skeleton product_variation"></div></div>
                        </div>
                      </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-b56b84f3-1991-98dd-09f9-6457cf4a8bcc-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4a-0ff95548" class="sales-col">
                              <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                            </div></td>
                  </tr>
                  <tr class="even"><td class="dt-center dtr-control sorting_1" tabindex="0"><div id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">
                        <div class="div-block-34">
                          <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;"><div class="skeleton product-title"></div></div>
                          <div class="text-block-10" style="text-align:left;"><div class="skeleton product_variation"></div></div>
                        </div>
                      </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-b56b84f3-1991-98dd-09f9-6457cf4a8bcc-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4a-0ff95548" class="sales-col">
                              <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                            </div></td>
                  </tr>
                  <tr class="even"><td class="dt-center dtr-control sorting_1" tabindex="0"><div id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">
                        <div class="div-block-34">
                          <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;"><div class="skeleton product-title"></div></div>
                          <div class="text-block-10" style="text-align:left;"><div class="skeleton product_variation"></div></div>
                        </div>
                      </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-b56b84f3-1991-98dd-09f9-6457cf4a8bcc-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4a-0ff95548" class="sales-col">
                              <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                            </div></td>
                  </tr>
                  <tr class="even"><td class="dt-center dtr-control sorting_1" tabindex="0"><div id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">
                        <div class="div-block-34">
                          <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;"><div class="skeleton product-title"></div></div>
                          <div class="text-block-10" style="text-align:left;"><div class="skeleton product_variation"></div></div>
                        </div>
                      </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-b56b84f3-1991-98dd-09f9-6457cf4a8bcc-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4a-0ff95548" class="sales-col">
                              <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                            </div></td>
                  </tr>
                  <tr class="even"><td class="dt-center dtr-control sorting_1" tabindex="0"><div id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">
                        <div class="div-block-34">
                          <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;"><div class="skeleton product-title"></div></div>
                          <div class="text-block-10" style="text-align:left;"><div class="skeleton product_variation"></div></div>
                        </div>
                      </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-b56b84f3-1991-98dd-09f9-6457cf4a8bcc-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4a-0ff95548" class="sales-col">
                              <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                            </div></td>
                  </tr>
                  <tr class="even"><td class="dt-center dtr-control sorting_1" tabindex="0"><div id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">
                        <div class="div-block-34">
                          <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;"><div class="skeleton product-title"></div></div>
                          <div class="text-block-10" style="text-align:left;"><div class="skeleton product_variation"></div></div>
                        </div>
                      </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-b56b84f3-1991-98dd-09f9-6457cf4a8bcc-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4a-0ff95548" class="sales-col">
                              <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                            </div></td>
                  </tr>
                  <tr class="even"><td class="dt-center dtr-control sorting_1" tabindex="0"><div id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">
                        <div class="div-block-34">
                          <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;"><div class="skeleton product-title"></div></div>
                          <div class="text-block-10" style="text-align:left;"><div class="skeleton product_variation"></div></div>
                        </div>
                      </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-b56b84f3-1991-98dd-09f9-6457cf4a8bcc-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4a-0ff95548" class="sales-col">
                              <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                            </div></td>
                  </tr>
                  <tr class="even"><td class="dt-center dtr-control sorting_1" tabindex="0"><div id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">
                        <div class="div-block-34">
                          <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;"><div class="skeleton product-title"></div></div>
                          <div class="text-block-10" style="text-align:left;"><div class="skeleton product_variation"></div></div>
                        </div>
                      </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
                              <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                              <div class="sales-count"></div>
                            </div></td><td class="dt-center"><div id="w-node-b56b84f3-1991-98dd-09f9-6457cf4a8bcc-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col"><div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div></div></td><td class="dt-center"><div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4a-0ff95548" class="sales-col">
                              <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="revenue"><div class="skeleton product-revenue"></div></div>
                            </div></td>
                  </tr>`);
}



const getPages = async () =>
{ 

    if(storetable) {
      storetable
      .clear()
      .draw();

    }
    addSkeleton();

    coun = '';
    if(fieldvalue == []) {
        coun = 'All';
    } else {
        coun = fieldvalue.join(',');
    }

    niche = '';
    if(nichesvalue == []) {
        niche = 'All';
    } else {
        niche = nichesvalue.join(',');
    }

    website = '';
    if(websitevalue == []) {
        website = 'All';
    } else {
        website = websitevalue.join(',');
    }


    pageliker = getValuesRangeslider("#page_like_range", 1, 100000000)
    pagemin = pageliker[0];
    pagemax = pageliker[1];

    igfollowers = getValuesRangeslider("#instagram_followers_range", 1, 50000000)
    igmin = igfollowers[0];
    igmax = igfollowers[1];

    adsrange = getValuesRangeslider("#ads_range", 1, 5000)
    adsmin = adsrange[0];
    adsmax = adsrange[1];

    adsetrange = getValuesRangeslider("#adsets_range", 1, 500000)
    adsetsmin = adsetrange[0];
    adsetsmax = adsetrange[1];

    avgadsets = getValuesRangeslider("#avg_adsets_range", 1, 1005)
    avgadsetsmin = avgadsets[0];
    avgadsetsmax = avgadsets[1];



    try {
            $('#loader').hide();

            let adsetcount = 0;
            let adscount = 0;

            addSkeleton();
            $('.skeleton').show();


            storetable = $('#store-table')
            .on('processing.dt', function (e, settings, processing) {
              if (processing) {
                addSkeleton();
                $('.skeleton').show();
                return
              } else {
              }
            })
            .DataTable( {
                paging: true,
                //select: true,
                autoWidth: true, 
                responsive: true,
                serverSide:true,
                //processing:true,
                bLengthChange : false,
                bInfo: false,
                pageLength:10,
                "language": {
                  "zeroRecords": "No Pages Found."
                },
                ajax: {
                  "url": `?pagemin=${pagemin}&pagemax=${pagemax}&igmin=${igmin}&igmax=${igmax}&adsmin=${adsmin}&adsmax=${adsmax}&adsetsmin=${adsetsmin}&adsetsmax=${adsetsmax}&avgadsetsmin=${avgadsetsmin}&avgadsetsmax=${avgadsetsmax}&countries=${coun}&niches=${niche}&website=${website}`,
                  "type": "GET",
                  // "data": function (d) {
                  //     d.start = d.start || 0;
                  //     d.length = d.length || 10;
                  //     d.page_no = Math.floor(d.start / d.length);
                  //     d.page_size = d.length;
                  //     return JSON.stringify(d)
                  // }
                  // "dataSrc": function (response) {
                  //   console.log(response.allcount)
                  //   response.recordsTotal = response.allcount;
                  //   //response.maxPages = response.allcount/;

                  //   return response;
                  // },
                },
                //data: data,
                //order: [[ 1, "desc" ]],
                destroy: true,
                 columnDefs: [
                  {"className": "dt-center", "orderSequence": [ "desc", "asc" ], "targets": "_all"}
                ],
                columns: [
                  {width: '20%', data: (data) => {
                    let profilepicMeta = '<img src="/images/no_photo.png" loading="lazy"" alt="" width="32px" height="32px" class="storeicon">';
                    let profilepic = data.profile_picture;
                    if(profilepic) {
                      profilepicMeta = `<img src="${mediahost}/${profilepic}" height="32px" width="32px" class="storeicon" loading="lazy" onerror="this.src='/images/facebook_no_profile_pic.png';">`;
                    }


                    return `<div style="display:flex;">
                          <a href="${data.page_profile_uri}" target="__BLANK" id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">
                          ${profilepicMeta}
                          <div class="div-block-34">
                            <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;"></div>
                            <div class="text-block-10" style="text-align:left;">${data.pageName} <div class="new-tab w-embed" style="display:inline-block;width:10px;">
                            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 0h48v48H0z" fill="none"></path>
                              <g id="Shopicon">
                                <polygon points="44,30 40,30 40,38 8,38 8,10 20,10 20,6 4,6 4,42 44,42  " fill="currentColor"></polygon>
                                <polygon points="26,26.828 40,12.828 40,24 44,24 44,6 26,6 26,10 37.172,10 23.172,24  " fill="currentColor"></polygon>
                              </g>
                            </svg>
                          </div>
                          </div>
                          </div>
                      </a>
                      <a href="https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&view_all_page_id=${data.page_id}&search_type=page&media_type=all" target="__BLANK">
                      <img style="display: block;position: relative;top: 50%;transform: translateY(-50%);left: 7px;" src="/images/facebook.svg" width="20px" height="20px">
                      </a>
                      </div>`;
                  }},
                  {data: (data) => {

                    if(data.countries)
                    {

                      let countries = data.countries;

                      countryflags = ``;
                      countries.forEach(countrycode => {
                        countryflags +=`<img src="/images/${countrycode}.png" loading="lazy" alt="" height="20px" width="20px"  class="${countrycode}" style="border:none;border-radius: 50%;display:inline-block;">`;
                        tippy('.'+countrycode, { // misschien helemaal erna doen
                          content: countrycodetoname[countrycode],
                        });
                      });
                    }

                    return `${countryflags}`;
                  }},
                  {data: (data) => {

                    technologiespic = ``;

                    if(data.technologies)
                    {
                      technologiesArr = data.technologies;

                      if(technologiesArr)
                      {
                        try
                        {
                          technologiesArr.forEach(technology => {
                            if (technologies[technology] !== undefined) {
                              technologiespic += `<img src="/images/${technology}.svg" height="20px" width="20px" class="techicon ${technology}tip">`;
                              tippy('.'+technology+'tip', {
                                content: technologies[technology],
                              });
                            }
                          });
                        } catch(e)
                        {
                          console.log(e)
                          console.log(technologiesArr)
                        }
                        
                      }
                      
                    }

                    return `${technologiespic}`;
                  }},
                  {data: (data) => {

                    adscount = data.amountofads;
                    return `${adscount}`;
                  }},
                  {data: (data) => {

                    return `${data.adsetcount}`;
                  }},
                  {type:"html-num", data: (data) => {
                    return Math.ceil((data.avgadsets)*10)/10;
                  }},
                  {data: (data) => {
                    fbLikes = data.page_like_count;
                    if (fbLikes == null) {
                      fbLikes = '-';
                    }
                    return fbLikes;
                  }},
                  {data: (data) => {
                    igFollowers = data.igFollowers;
                    if (igFollowers == null) {
                      igFollowers = '-';
                    }
                    return igFollowers;
                  }},
                  {data: (data) => {

                    if(data.pageCreationDate)
                    {
                      created_at = moment.unix(data.pageCreationDate).format('MMM DD, YYYY');
                    } else {
                      created_at = "-";
                    }
                    
                    return created_at;
                  }}

                ]
            } );

            $('div.dataTables_filter input').addClass('form-input');

            loading = false;
        // }).finally(() => {
        //   $('.skeleton').hide();
        //   $('.stores-count-wrapper').show()
        //   $('.applly-filter').show()
        // });

        //$('.skeleton').hide();
        $('.stores-count-wrapper').show()
        $('.applly-filter').show()

    } catch (e) {
        console.log(e);
        setTimeout(() => {
            getPages();
        }, 1000);
    }
}



Number.prototype.map = function (inMin, inMax, outMin, outMax) {
  return (this - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


Number.prototype.mapLog = function (min, max) {
  const mapped = (this - min) * (Math.log(max) - Math.log(min)) / (max - min) + Math.log(min);
  return Math.exp(mapped);
}

Number.prototype.mapLogRev = function (min, max) {
  return (Math.log(this) - Math.log(min)) * (max - min) / (Math.log(max) - Math.log(min)) + Math.log(min);
}


let formatter = Intl.NumberFormat('en', { notation: 'compact' });



function mapLogarithmic(value, MIN, MAX){
  return Math.ceil(value.mapLog(MIN, MAX));
}


function renderRangeslider(element, MIN, MAX) {
  

  function mapLogarithmicReverse(value){
    return parseFloat(value).mapLogRev(MIN, MAX);
  }

  function prettifyLog(value) {
    return formatter.format(mapLogarithmic(value, MIN, MAX));
  }

  if(MIN == 0) {
    MIN = 1;
  }

  var ranger = $(element);
    
  ranger.ionRangeSlider({
      skin: "round",
      type: "double",
      min: mapLogarithmicReverse(MIN),
      max: mapLogarithmicReverse(MAX),
      prettify: prettifyLog
  });

}

function getValuesRangeslider(element, MIN, MAX) {
  ranger = $(element);

  return [mapLogarithmic(ranger.data('from'), MIN, MAX), mapLogarithmic(ranger.data('to'), MIN, MAX)];
}

$(document).ready(function () {


  // $('#field').multipleSelect({selectAll: false, placeholder: 'All'});
  // $('#niches').multipleSelect({selectAll: false, placeholder: 'None'});
  // $('#website').multipleSelect({selectAll: false, placeholder: 'None'});

      
  renderRangeslider("#page_like_range", 1, 100000000);
  renderRangeslider("#instagram_followers_range", 1, 50000000)
  renderRangeslider("#ads_range", 1, 5000)
  renderRangeslider("#adsets_range", 1, 500000)
  renderRangeslider("#avg_adsets_range", 1, 1005);

  // var endDate = new Date();
  // var startDate =  moment(endDate).subtract(1, 'month');

  // var picker = new Lightpick({
  //     field: document.getElementById('datepicker'),
  //     singleDate: false,
  //     maxDate: moment(),
  //     onSelect: function(start, end){
  //         var str = '';
  //         str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
  //         str += end ? end.format('Do MMMM YYYY') : '...';
  //         document.getElementById('datepicker').innerHTML = str;
  //     }
  // });

  

  // picker.setDateRange(startDate, endDate);

  button.addEventListener('click', () => {

    fieldvalue = $('#field').val();
    nichesvalue = $('#niches').val();
    websitevalue = $('#website').val();

    getPages();

  });


  getPages();

});