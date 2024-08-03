export default function FacebookFilter() {
  return (
    <div className="filter-section">
      <form id="email-form" name="filter-form" data-name="Email Form" method="get" className="filter-form" aria-label="Email Form">
        <div className="filters">
          <div className="price-input">
            <div className="select-wrapper">
                <div className="select-content">
                  <span className="icon-wrapper"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                          </svg>
                    </span>
                  <input type="text" className="form-input" maxlength="2560" name="keyword" data-name="Keyword" placeholder="Search..." id="keyword" autocomplete="off" />
                </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="filters-footer">
          <div className="dropshipping-buttons">
            <div data-active="false" id="euwinners" className="dropshipping-button">
                <div className="mr-1"></div><img src="https://app.winninghunter.com/images/european-union-flag-on-trophee-circle.png" className="dropshipping-button-image" /> European winners
            </div>
            <div data-active="false" id="usawinners" className="dropshipping-button">
                <div className="mr-1"></div><img src="https://app.winninghunter.com/images/usa-flag-with-uk-flag.png" className="dropshipping-button-image" />USA (Big 5) winners
            </div>
            <div data-active="false" id="dropshipads" className="dropshipping-button">
                <div className="mr-1"></div><img src="https://app.winninghunter.com/images/drop-shipping.png" className="dropshipping-button-image" />Dropship Ads
            </div>
            <div data-active="false" id="fashionads" className="dropshipping-button">
                <div className="mr-1"></div><img src="https://app.winninghunter.com/images/clothes-cool-brand.png" className="dropshipping-button-image" />Fashion Dropship
            </div>
            <div data-active="false" id="topbrands" className="dropshipping-button withpopup">
                <div className="popup">This preset will get more branded products. If you want to see dropship branded (one product or niche stores) keep the ad creation date to the last 1, 2  or 3 months, set product creation date also to the last 1, 2  or 3 months. If you want to see more real brands, put the ad creation date to the last 6 or 12 months, set product creation date from 4 months to a few years back and change the technology to: Hyros, Gorgias, TripleWhale (disable shopify)
                </div>
                <div className="mr-1"></div><img src="https://app.winninghunter.com/images/award.png" className="dropshipping-button-image" />Top Branded
            </div>
          </div>
          <div className="action-buttons">
            <a href="#" className="cancel" onclick="document.getElementById('email-form').reset(); $('.select2-selection__choice__remove').click(); picker.reset(); lastseenpicker.reset(); productcreationpicker.reset();">Cancel</a>
            <button type="button" className="apply" id="applyfilters">Apply<div className="shadow"></div><div className="glow"></div></button>
          </div>
        </div>
      </form>
    </div>
  )
}