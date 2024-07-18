var magicAITemplate = {
  id:'',
  get html() {
    return `<div id="${this.id}">
  
<div class="flex justify-end">
  <a class="place-self-end invite-friends-btn w-inline-block dark-hover watch-tutorial-button">
<p class="invite-friends-btn__text">Watch Tutorial</p>
</a>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-center">
<div class="flex items-center gap-2">
<!-- <img src="/images/magicai-icon.png" height="40px" width="40px"> -->
<h3>Magic AI Search</h3>
</div>
</div>

<!-- search input box with dropdown for country selection -->
<form id="email-form" name="email-form" data-name="Email Form" method="get" class="dashboard_form magic-ai-form flex flex-col gap-8 p-6" autocomplete="off" aria-label="Email Form">
<div class="flex gap-4"><input type="text" class="form-input store-tracker-input w-node-_0322e9d6-424f-4199-3983-70c178bb4fa4-0ff95548 w-input" maxlength="1000" name="Store-URL" data-name="Store URL" id="typed-input" required="" value="" placeholder="Enter AI search prompt here...">
<button type="button" class="button applly-filter w-button flex gap-2" id="applyfilters">Search
<svg fill="#FFF" width="20px" height="20px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
<path d="M 26.6875 12.6602 C 26.9687 12.6602 27.1094 12.4961 27.1797 12.2383 C 27.9062 8.3242 27.8594 8.2305 31.9375 7.4570 C 32.2187 7.4102 32.3828 7.2461 32.3828 6.9648 C 32.3828 6.6836 32.2187 6.5195 31.9375 6.4726 C 27.8828 5.6524 28.0000 5.5586 27.1797 1.6914 C 27.1094 1.4336 26.9687 1.2695 26.6875 1.2695 C 26.4062 1.2695 26.2656 1.4336 26.1953 1.6914 C 25.3750 5.5586 25.5156 5.6524 21.4375 6.4726 C 21.1797 6.5195 20.9922 6.6836 20.9922 6.9648 C 20.9922 7.2461 21.1797 7.4102 21.4375 7.4570 C 25.5156 8.2774 25.4687 8.3242 26.1953 12.2383 C 26.2656 12.4961 26.4062 12.6602 26.6875 12.6602 Z M 15.3438 28.7852 C 15.7891 28.7852 16.0938 28.5039 16.1406 28.0821 C 16.9844 21.8242 17.1953 21.8242 23.6641 20.5821 C 24.0860 20.5117 24.3906 20.2305 24.3906 19.7852 C 24.3906 19.3633 24.0860 19.0586 23.6641 18.9883 C 17.1953 18.0977 16.9609 17.8867 16.1406 11.5117 C 16.0938 11.0899 15.7891 10.7852 15.3438 10.7852 C 14.9219 10.7852 14.6172 11.0899 14.5703 11.5352 C 13.7969 17.8164 13.4687 17.7930 7.0469 18.9883 C 6.6250 19.0821 6.3203 19.3633 6.3203 19.7852 C 6.3203 20.2539 6.6250 20.5117 7.1406 20.5821 C 13.5156 21.6133 13.7969 21.7774 14.5703 28.0352 C 14.6172 28.5039 14.9219 28.7852 15.3438 28.7852 Z M 31.2344 54.7305 C 31.8438 54.7305 32.2891 54.2852 32.4062 53.6524 C 34.0703 40.8086 35.8750 38.8633 48.5781 37.4570 C 49.2344 37.3867 49.6797 36.8945 49.6797 36.2852 C 49.6797 35.6758 49.2344 35.2070 48.5781 35.1133 C 35.8750 33.7070 34.0703 31.7617 32.4062 18.9180 C 32.2891 18.2852 31.8438 17.8633 31.2344 17.8633 C 30.6250 17.8633 30.1797 18.2852 30.0860 18.9180 C 28.4219 31.7617 26.5938 33.7070 13.9140 35.1133 C 13.2344 35.2070 12.7891 35.6758 12.7891 36.2852 C 12.7891 36.8945 13.2344 37.3867 13.9140 37.4570 C 26.5703 39.1211 28.3281 40.8321 30.0860 53.6524 C 30.1797 54.2852 30.6250 54.7305 31.2344 54.7305 Z"></path>
</svg>
<div class="shadow"></div><div class="glow" style="will-change: transform; transform: translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"></div></button>
<button type="button" class="btn bubble bg-gray-200 px-4 py-2 border border-slate-200 rounded-lg scale-100 hover:scale-110 transition-all duration-500" id="chooseimage">
<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="13" r="3" stroke="#000" stroke-width="1.5"></circle>
<path d="M2 13.3636C2 10.2994 2 8.76721 2.74902 7.6666C3.07328 7.19014 3.48995 6.78104 3.97524 6.46268C4.69555 5.99013 5.59733 5.82123 6.978 5.76086C7.63685 5.76086 8.20412 5.27068 8.33333 4.63636C8.52715 3.68489 9.37805 3 10.3663 3H13.6337C14.6219 3 15.4728 3.68489 15.6667 4.63636C15.7959 5.27068 16.3631 5.76086 17.022 5.76086C18.4027 5.82123 19.3044 5.99013 20.0248 6.46268C20.51 6.78104 20.9267 7.19014 21.251 7.6666C22 8.76721 22 10.2994 22 13.3636C22 16.4279 22 17.9601 21.251 19.0607C20.9267 19.5371 20.51 19.9462 20.0248 20.2646C18.9038 21 17.3433 21 14.2222 21H9.77778C6.65675 21 5.09624 21 3.97524 20.2646C3.48995 19.9462 3.07328 19.5371 2.74902 19.0607C2.53746 18.7498 2.38566 18.4045 2.27673 18" stroke="#000" stroke-width="1.5" stroke-linecap="round"></path>
<path d="M19 10H18" stroke="#000" stroke-width="1.5" stroke-linecap="round"></path>
</svg>
</button>
<input class="hidden" id="fileToUpload" multiple="" accept="image/jpeg,image/jpg,image/png,image/webp" type="file">
</div>


<div class="flex gap-4 items-center flex-wrap">
<div class="select-wrapper country-select">
<div class="select-label">Countries</div>

<span dir="ltr" data-select2-id="29" style="width: 100%; display: none;" class="select2 select2-container select2-container--default select2-container--focus select-2-skeleton"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
  <ul class="select2-selection__rendered">
      <li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list"></li>
  </ul>
</span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>

<select class="js-select2 form-input select-box-2 pb w-select hidden select2-hidden-accessible" multiple="" id="field" data-select2-id="field" tabindex="-1" style="" aria-hidden="true">
<option value="US" data-badge="">USA</option>
<option value="GB" data-badge="">United Kingdom</option>
<option value="DK" data-badge="">Denmark</option>
<option value="NL" data-badge="">The Netherlands</option>
<option value="IE" data-badge="">Ireland</option>
<option value="NO" data-badge="">Norway</option>
<option value="SE" data-badge="">Sweden</option>
<option value="FR" data-badge="">France</option>
<option value="DE" data-badge="">Germany</option>
<option value="IT" data-badge="">Italy</option>
<option value="CA" data-badge="">Canada</option>
<option value="NZ" data-badge="">New Zealand</option>
<option value="AU" data-badge="">Australia</option>
<option value="BR" data-badge="">Brazil</option>
<option value="AT" data-badge="">Austria</option>
<option value="ES" data-badge="">Spain</option>
<option value="FI" data-badge="">Finland</option>
<!-- <option value="CH" data-badge="">Switzerland</option> -->
</select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style="width: 130px; display: none"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Select Country..." style="width: 159.4px;"></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
</div>
<div class="select-wrapper">
<div class="select-label">Ad creation date</div>
<div class="w-embed">
<input type="text" id="datepicker" class="form-input select2-selection select2-selection--multiple w-[275px]" readonly="">
</div>
</div>
<div class="select-wrapper">
<div class="select-label">Last seen date</div>
<div class="w-embed">
<input type="text" id="datepickerlastseen" class="w-[275px] form-input select2-selection select2-selection--multiple" readonly="">
</div>
</div>
<!-- <div class="div-block-57">
<a href="#" class="cancel w-button"
onclick="document.getElementById('email-form').reset(); $('.js-ion-range-slider').data('ionRangeSlider').reset(); ">Cancel</a>
<button type="button" class="button applly-filter w-button"
id="applyfilters">Apply</button>
</div> -->
</div>

<!-- <div class="flex justify-center">
<button type="button" class="button applly-filter w-button" id="applyfilters">Generate ✨
</button>
</div> -->
</form>
</div>
<div class="add_list" data-wg-notranslate="">
</div>
<div id="noads" style="display: none;">
<p>NO MORE ADS</p>
</div>

</div>`
  }
}

export default magicAITemplate