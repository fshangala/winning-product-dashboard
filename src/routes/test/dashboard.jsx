// import "../../assets/css/style.css";
// import "../../assets/css/app.css";
// import "../../assets/css/theme.css";
// import "../../assets/css/custom.css";
import Navbar from "../../components/navbar";
import PageHeader from "../../components/page_header";
import FacebookAd from "../../templates/facebook_ad";
import FacebookFilters from "../../templates/facebook_filters";

export default function Dashboard() {
  return (
    <>
    <div className="page-wrapper">
      <div className="global-styles w-embed"></div>
      <main className="main-wrapper">
        <Navbar />
        <header className="section_dashboard">
          <div className="padding-global">
            <div>
              <div className="padding-section-medium">
                <div>
                  <div className="margin-bottom margin-xlarge">
                    <div>
                      <PageHeader />
                      <hr />
                      <FacebookFilters />
                    </div>
                  </div>
                  <div className="add_list relative" data-wg-notranslate="">
                    {[1,2,3,4,5].map((ad)=>{
                      return <FacebookAd key={ad} />
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </main>
    </div>
    </>
  )
}