import { useContext, useState } from "react";
import metaLogo from "../assets/images/meta.png";
import MetaAdvertisersFilter from "../components/meta_advertisers_filter";
import CopiwinSDK from "../copiwinsdk/copiwinsdk";
import { RotatingLines } from "react-loader-spinner";
import { UserContext } from "../context/UserContext";

export default function MetaAdvertisers() {
  const user = useContext(UserContext)
  const [advertisers,setAdvertisers] = useState({
    loading:false,
    data:[]
  })
  const copiwinSDK = new CopiwinSDK()
  const [initialized,setInitialized] = useState(false)

  const applyFilters = function(filters) {
    if(user) {
      setAdvertisers({
        loading:true,
        data:advertisers.data,
      })
      setInitialized(true)
      copiwinSDK.metaAdvertisers({access_token:user.access_token}).then((data)=>{
        console.log(data)
        setAdvertisers({
          loading:false,
          data:data.results
        })
      }).catch((reason)=>{
        setAdvertisers({
          loading:false,
          data:advertisers.data,
        })
        console.log(reason)
      })
    }
  }

  return (
    <>
    <div className="header-container">
      <div className="header">
        <img src={metaLogo} alt="meta" />
        <h1>Meta Advertisers</h1>
      </div>
      <hr className="divider" />
    </div>
    <MetaAdvertisersFilter applyFilters={applyFilters} initialized={initialized} />
    <br />
    <center className="loading-container">
      <RotatingLines visible={advertisers.loading} />
    </center>
    <div className="table-container">
      <div className="top-bar">
        <div className="input-group">
          Search <input type="search" className="input" />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="page-name">Page name</th>
            <th className="page-data">Countries</th>
            <th className="page-data">Website</th>
            <th className="page-data">Ads</th>
            <th className="page-data">Adsets</th>
            <th className="page-data">Avg. Adsets</th>
            <th className="page-data">Likes</th>
            <th className="page-data">Followers</th>
            <th className="page-data">Created</th>
          </tr>
        </thead>
        <tbody>
        {advertisers.data.map((advertiser)=>{
          var websites = []
          advertiser.ads.results.forEach((pageAdsets)=>{
            pageAdsets.forEach((adsetAd)=>{
              var website = adsetAd.snapshot.link_url.split("/")[2]
              if(!websites.includes(website)){
                websites.push(website)
              }
            })
          })
          var created = new Date(advertiser.details.data.page.pages_transparency_info.history_items[advertiser.details.data.page.pages_transparency_info.history_items.length-1].event_time)
          return (
            <tr>
              <td>
                <a href={"https://facebook.com/"+advertiser.id}><img width={25} height={25} src={advertiser.imageURI} /> {advertiser.name}</a>
              </td>
              <td>{advertiser.details.data.page.pages_transparency_info.admin_locations.admin_country_counts.map((value)=>{return value.country.iso_name+","})}</td>
              <td>{websites.join()}</td>
              <td>{advertiser.ads.number_of_ads}</td>
              <td>{advertiser.ads.results.length}</td>
              <td>{(advertiser.ads.number_of_ads/advertiser.ads.results.length).toFixed(1)}</td>
              <td>{advertiser.likes}</td>
              <td>{advertiser.igFollowers}</td>
              <td>{created.toString()}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      <div className="paginator">
        <button className="btn">Previous</button>
        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="placeholder">...</button>
        <button className="btn">10</button>
        <button className="btn">Next</button>
      </div>
    </div>
    </>
  )
}