var facebookAdSlideItemTemplate = {
  image_url:null,
  get html() {
    return `<div class="glide__slide flex justify-center relative glide__slide--clone" style="width: 274px; align-items: center; margin-right: 5px;">
  <img loading="lazy" src="${this.image_url}" style="filter: blur(5px);min-height: 319px;">
  <img loading="lazy" src="${this.image_url}" style="max-height: 325px;position: absolute;">
</div>`
  }
}

export default facebookAdSlideItemTemplate