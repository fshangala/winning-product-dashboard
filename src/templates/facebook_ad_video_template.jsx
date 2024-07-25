var facebookAdVideoTemplate = {
  image_url:null,
  video_url:null,
  get html() {
    return `<img src="${this.image_url}" style="display: block;margin:0 auto;filter: blur(5px);min-height: 319px;">
<video poster="${this.image_url}" controls="" style="flex: 1 1 0;max-width: 100%;object-fit: cover;margin: 0 auto;display: block;" preload="none">
  <source src="${this.video_url}" type="video/mp4">
</video>`
  }
}

export default facebookAdVideoTemplate