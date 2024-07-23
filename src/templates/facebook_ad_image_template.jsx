var facebookAdImageTemplate = {
  image_url:null,
  get html() {
    return `<img src="${this.image_url}" style="filter: blur(5px);min-height: 319px;">
<img src="${this.image_url}" data-w-id="23888445-fbd2-6de8-2cf2-fe405a990048" style="display: block;margin:0 auto;height: auto;max-height: 100%;width: auto;max-width: 100%;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);object-fit: contain;">`
  }
}

export default facebookAdImageTemplate