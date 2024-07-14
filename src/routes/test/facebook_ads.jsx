import FacebookFilter from "../../components/facebook_filter";
import Navbar from "../../components/navbar";

export default function TestFacebookAds() {
  return (
    <>
    <div className="page-wrapper">
      <main className="main-wrapper">
        <Navbar />
        <header className="dashboard-section">
          <div className="global-padding">
            <div className="section-padding">
              <div className="header">
                <div className="title-section">
                  <div>
                    <h5><img src="https://app.winninghunter.com/assets/images/fb_glow.png" /> Search Facebook Ads<span className="title-slug"> - Every facebook ad in the world!</span></h5>
                  </div>
                  <div className="title-links">
                    <a className="title-link title-shopify-link" href="https://shopify.pxf.io/m5qQ1y" target="_BLANK">
                    <p className="title-link-text">SHOPIFY FREE</p>
                      <small className="title-link-slug">Start for only $1/month.</small>
                    </a>
                    <a className="title-link title-tiktok-link" href="/tiktok-ads">
                    <p className="title-link-text">Tiktok Ads UPDATE</p>
                      <small className="title-link-slug">Almost every tiktok ad out there!</small>
                    </a>
                    <a className="watch-tutorial-button">
                    <p className="watch-tutorial-button-text">Watch Tutorial</p>
                    </a>
                  </div>
                </div>
                <hr />
                <FacebookFilter />
              </div>
              <div className="body"></div>
            </div>
          </div>
        </header>
      </main>
    </div>
    </>
  )
}