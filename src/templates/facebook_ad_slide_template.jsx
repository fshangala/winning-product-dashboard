var facebookAdSlideTemplate = {
  slide_items:null,
  get html() {
    return `<div class="flex justify-center">
  <div class="glide flex justify-center carousel97955029729499397679 glide--ltr glide--carousel glide--swipeable">
    <div data-glide-el="track" class="glide__track" style="min-height:325px; width:100%;max-width:350px;">
      <div class="glide__slides" style="width: 2272px; font-size: 0px; height: 325px; transition: transform cubic-bezier(0.165, 0.84, 0.44, 1); transform: translate3d(-1420px, 0px, 0px);">
        ${this.slide_items}
      </div>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
    </div>
  </div>
</div>`
  }
}

export default facebookAdSlideTemplate