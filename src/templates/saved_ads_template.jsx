var saveAdsTemplate = {
  get html() {
    return `<div>
  <div class="margin-bottom margin-xlarge">
    <div style="display:flex;justify-content:space-between;">
      <h5>Saved Ads</h5>
      <button type="button" class="delete-ad w-button" onclick="deleteAllAds()">Delete All Ads
    </button></div>
    <hr>
  </div>
  <div class="add_list" data-wg-notranslate="" style="display: none;"></div>
  <div class="margin-bottom margin-xlarge" id="loader" style="display: none;">
    <div>
      <center><img src="https://app.winninghunter.com/images/Pulse-1.1s-207px.gif" height="100px;" style="display:block;margin: 0 auto; "></center>
    </div>
  </div>
</div>`
  }
}

export default saveAdsTemplate