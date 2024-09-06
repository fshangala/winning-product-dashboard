var salesTrackerDetailTableRowTemplate = {
  store_hostname:null,
  title:null,
  handle:null,
  image:null,
  variants:null,
  price:null,
  created_at:null,
  get html() {
    return `<tr>
  <td class="sorting_1">
    <a href="https://${this.store_hostname}/products/${this.handle}" class="blank_78294253" target="__BLANK">
      <div class="div-block-48"><img src="${this.image}" loading="lazy" sizes="48px" srcset="${this.image} 500w, ${this.image} 800w, ${this.image} 800w" alt="" class="product_thumbnail">
        <div class="div-block-34" style="width: 100%;text-align: left;">
          <div id="w-node-_9e78d43a-e09f-d831-a91f-e21058ef7dfb-d24c9106" class="product_title">${this.title} <div style="width: 20px;display:inline-block;margin-left:4px;">
              <div class="rounded-full flex items-center justify-center mr-1 cursor-pointer bg-opacity-80 bg-green-100">
                <div class="h-2 w-2 rounded-full bg-green-400" style="margin: 3px;"></div>
              </div>
            </div>
          </div>
          <div class="div-block-47">
            <div class="price-text">$${this.price}</div>
            <div>${this.variants} variants</div>
          </div>
        </div>
      </div>
    </a>
  </td>
  <td class="dt-type-numeric">
    <div class="sales-count-wrapper">
      <div class="div-block-50"><a target="__BLANK" href="https://www.amazon.com/search/s?k=${this.title}"><img src="https://app.winninghunter.com/images/amazon-svgrepo-com.svg" loading="lazy" alt="" class="sales-icon"></a><a target="__BLANK" href="https://aliexpress.com/w/wholesale-${this.handle}.html?catId=0&amp;SearchText=Watermelon%20Wealth%20Ultimate%20Bundle"><img src="https://app.winninghunter.com/images/alibaba-svgrepo-com.svg" loading="lazy" alt="" class="sales-icon"></a></div>
      <div>1</div>
    </div>
  </td>
  <td>-</td>
  <td>-</td>
  <td>-</td>
  <td class="dt-type-numeric">370</td>
  <td>-</td>
  <td>
    <div class="text-dark">${this.created_at}</div>
  </td>
</tr>`
  }
}

export default salesTrackerDetailTableRowTemplate