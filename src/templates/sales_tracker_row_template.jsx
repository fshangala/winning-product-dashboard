var salesTrackerRowTemplate = {
  site_name:null,
  hostname:null,
  today_sales:0.0,
  today_revenue:0.0,
  yesterday_sales:0.0,
  yesterday_revenue:0.0,
  seven_days_sales:0.0,
  seven_days_revenue:0.0,
  thirty_days_sales:0.0,
  thirty_days_revenue:0.0,
  get html() {
    return `<tr class="odd">
  <td class="dt-center dtr-control" tabindex="0">
    <div style="display:flex;">
      <div class="store-details-llink">
        <a href="/sales-tracker-details/a1168972d26268587b40b8680033b6e3" class="details-link w-inline-block">
          <div class="html-embed-3 w-embed">
            <img src="https://app.winninghunter.com/images/track.png" loading="lazy" alt=""
              style="width:22px;height:22px;">
          </div>
        </a>
        <button type="button" class="details-link w-inline-block delete-button"
          onclick="performDelete(storetable, '23413995', this)">
          <div class="html-embed-3 w-embed">
            <img src="https://app.winninghunter.com/images/trash.svg" loading="lazy" alt=""
              style="max-width:15px;min-width:15px;min-height:15px;max-height:15px;">
          </div>
        </button>
        <a href="#" class="w-inline-block"></a>
      </div><a href="/sales-tracker-details/a1168972d26268587b40b8680033b6e3" target="__BLANK"
        id="w-node-aeafd948-b32c-2a14-8806-7142be7f8ebd-0ff95548" class="store-name">

        <img src="https://app.winninghunter.com/images/no_photo.png" height="32px" width="32px" class="storeicon"
          onerror="this.src='https://app.winninghunter.com/images/no_photo.png';">
        <div class="div-block-34">
          <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62652-0ff95548" class="revenue" style="text-align:left;">
            ${this.site_name}</div>
          <div class="text-block-10" style="text-align:left;">${this.hostname} <div class="new-tab w-embed"
              style="display:inline-block;width:10px;">
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h48v48H0z" fill="none"></path>
                <g id="Shopicon">
                  <polygon points="44,30 40,30 40,38 8,38 8,10 20,10 20,6 4,6 4,42 44,42  " fill="currentColor">
                  </polygon>
                  <polygon points="26,26.828 40,12.828 40,24 44,24 44,6 26,6 26,10 37.172,10 23.172,24  "
                    fill="currentColor"></polygon>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  </td>
  <td class="dt-center">
    <div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
      <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue">$${this.today_revenue}</div>
      <div class="sales-count">${this.today_sales} Sales</div>
    </div>
  </td>
  <td class="dt-center">
    <div id="w-node-_228e4152-0c6a-e0bf-f198-c88ce3dfc455-0ff95548" class="sales-col">
      <div id="w-node-_036f3ebc-2fd4-141c-b6f7-6be2c4d62654-0ff95548" class="revenue">$${this.yesterday_revenue}</div>
      <div class="sales-count">${this.yesterday_sales} Sales</div>
    </div>
  </td>
  <td class="dt-center">
    <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828c-0ff95548" class="sales-col">
      <div id="w-node-c2ee3ad3-d64d-a82f-601d-2a781274828d-0ff95548" class="revenue">$${this.seven_days_revenue}</div>
      <div class="sales-count">${this.seven_days_sales} Sales</div>
    </div>
  </td>
  <td class="dt-center">
    <div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4a-0ff95548" class="sales-col">
      <div id="w-node-_45f42324-31cf-53a6-7585-d948abaedd4b-0ff95548" class="revenue">$${this.thirty_days_revenue}</div>
      <div class="sales-count">${this.thirty_days_sales} Sales</div>
    </div>
  </td>
</tr>`
  }
}

export default salesTrackerRowTemplate