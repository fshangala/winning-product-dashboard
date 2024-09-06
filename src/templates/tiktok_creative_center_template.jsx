const tiktokCreativeCenterTemplate = {
  id:'',
  get html() {
    return `<div id="${this.id}">
  <div id="w-node-b514d177-f7bc-218d-3962-fecb313b3436-da3bb3ff">
  </div>
  <div id="w-node-_2a6aa56d-3d57-8b35-2063-36db5ca6db83-da3bb3ff">
    <div id="errormessage"></div>
    <div class="flex justify-between flex-wrap">
      <h5 id="w-node-b24eedf3-3512-bf71-c418-62f5bf9f864c-da3bb3ff" class="heading-style-h3">Tiktok Creative Center</h5>
<!--                       <a class="place-self-end invite-friends-btn w-inline-block dark-hover watch-tutorial-button">
          <p class="invite-friends-btn__text">Watch Tutorial</p>
        </a> -->
      </div>
    <div class="profile_list">
      <div class="profile-section">
        <div>
          <div class="profile-header">
            <div class="text-block-20">Download Video Without Watermark</div>
            <div class="div-block-60"></div>
          </div>
        </div>
      </div>
      <div style="display:flex;gap: 0.5rem;flex-wrap: wrap;justify-content: space-between;-webkit-box-pack: justify;align-items:flex-start;">
        <div style="flex: 1 0 250px;">
           <div style="background-color: #FfFfFf;padding: 0.5rem 1rem;box-shadow: 3px 1px 16px 0 rgba(0, 0, 0, 0.1);border-radius:10px;padding-bottom:20px;">
              <div style="font-color:black;font-weight:700;padding:10px;padding-bottom: 2px;">Enter Video URL</div>(<a href="https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/en" target="__BLANK">https://ads.tiktok.com/business/creative..</a>)
              <hr>
              <form class="creative-center-url-form" method="post">
              <p style="font-weight:600;" class="required-label">Share URL</p>
              <input placeholder="Enter Url Here" type="text" class="form-input w-input" id="url" required=""><br>
              <button type="submit" class="login button w-button" data-modal="#upgrade-modal" id="informationbutton" style="padding:12px;">Get Information<div class="shadow"></div><div class="glow" style="will-change: transform; transform: translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"></div></button>
              </form>
           </div>
            <div style="margin-top:20px;">
                <p style="font-size: 18px;
                        line-height: 32px;
                        font-weight: 400;
                        color: #121212;
                        font-weight: 700;">Video Example</p>
                <img alt="phone" class="img-fluid" src="https://app.winninghunter.com/images/ezgif-5-b65b2bf88f.gif" style="height:350px;border-radius: 30px 30px;margin: 0 auto;display:block">
              </div>
         </div>
         <div style="background-color: #FfFfFf;padding: 0.5rem 1rem;box-shadow: 3px 1px 16px 0 rgba(0, 0, 0, 0.1);border-radius:10px;flex: 1 0 50%;">
            <div style="font-color:black;font-weight:700;padding:10px;padding-bottom: 2px;">Video Information</div>
            <hr>
            <div style="display:flex;flex-wrap:wrap;gap:1rem;">
               <div style="flex: 1 0 55%;">
                  <p>Product URL</p>
                  <input placeholder="-" type="text" class="form-input w-input" id="producturl" readonly="" style="margin-top:5px;">
                  <div style="margin-top:10px;">
                     <p style="    font-size: 18px;
                        line-height: 32px;
                        font-weight: 400;
                        color: #121212;
                        font-weight: 700;">About this Ad</p>
                     <div class="TopadsDetailPage_section__QLclV" style="padding: 16px 0;
                        width: 100%;">
                        <div class="TopadsDetailPage_card___PmTU TopadsDetailPage_basicInfoContainer__eHJye creativecenter-detail-container">
                           <div class="creativecenter-info-pair"><span class="creativecenter-info-title">Region</span><span class="creativecenter-info-value" id="countryCode">-</span></div>
                           <div class="creativecenter-info-pair"><span class="creativecenter-info-title">Industry</span><span class="creativecenter-info-value" id="industry">-</span></div>
                           <div class="creativecenter-info-pair"><span class="creativecenter-info-title">Objective</span><span class="creativecenter-info-value" id="objective">-</span></div>
                           <div class="creativecenter-info-pair"><span class="creativecenter-info-title">Brand name</span><span class="creativecenter-info-value BasicInfoItem_empty__tuaH0" id="brandName">-</span></div>
                           <div class="creativecenter-info-pair"><span class="creativecenter-info-title">Landing Page</span><span class="creativecenter-info-value BasicInfoItem_empty__tuaH0" id="landingPage" style="width: 30%;">-</span></div>
                           <div class="creativecenter-info-pair">
                              <span class="creativecenter-info-title">Ad caption</span>
                              <span class="byted-popper-trigger byted-popper-trigger-focus byted-tooltip BasicInfoItem_foldTextTips__BWOqY" style="width: fit-content;    flex-shrink: 0;">
                                 <div class="creativecenter-info-value BasicInfoItem_foldText__zsJNO" id="adTitle">-</div>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div style="margin-top:10px;">
                     <p style="    font-size: 18px;
                        line-height: 32px;
                        font-weight: 400;
                        color: #121212;
                        font-weight: 700;">Ad performance</p>
                     <div class="TopadsDetailPage_metricsContainer__AsSBJ" style="display: grid;
grid-template-columns: repeat(auto-fill,30%);
grid-gap: 8px 8px;
margin-top: 16px;"><div class="creativecenter-detail-page-item"><span class="creativecenter-detail-page-label">Likes</span><span class="creativecenter-detail-page-value" id="like">-</span></div><div class="creativecenter-detail-page-item"><span class="creativecenter-detail-page-label">Comments</span><span class="creativecenter-detail-page-value" id="comment">-</span></div><div class="creativecenter-detail-page-item"><span class="creativecenter-detail-page-label">Shares</span><span class="creativecenter-detail-page-value" id="share">-</span></div><div class="creativecenter-detail-page-item"><span class="creativecenter-detail-page-label">CTR</span><span class="creativecenter-detail-page-value" id="ctr">-</span></div><div class="creativecenter-detail-page-item"><span class="creativecenter-detail-page-label">Budget</span><span class="creativecenter-detail-page-value" id="budget">-</span></div></div>
                  </div>

               </div>
               <div style="flex: 1 0 200px;">
                  <div style="display:flex;justify-content: space-between;">
                     <p style="color:grey;">Video Without Watermark</p>
                     <img src="https://app.winninghunter.com/images/video-circle.svg" height="20px;">
                  </div>
                  <div style="margin-top:5px;height:570px;background-color:#F8F8F8;border-radius:10px;margin-bottom:10px;" class="dewatermarkedvideo"></div>
                  <button type="submit" class="login button w-button" id="downloadbutton" download="" style="padding:12px;" disabled="">Download Video<div class="shadow"></div><div class="glow" style="will-change: transform; transform: translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"></div></button>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</div>`
  }
}

export default tiktokCreativeCenterTemplate