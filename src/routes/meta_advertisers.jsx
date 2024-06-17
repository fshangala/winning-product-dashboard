import { useState } from "react";
import metaLogo from "../assets/images/meta.png";
import MetaAdvertisersFilter from "../components/meta_advertisers_filter";
import CopiwinSDK from "../copiwinsdk/copiwinsdk";
import { RotatingLines } from "react-loader-spinner";

export default function MetaAdvertisers() {
  const [advertisers,setAdvertisers] = useState({
    loading:false,
    data:[]
  })
  const copiwinSDK = new CopiwinSDK()

  const applyFilters = function(filters) {
    setAdvertisers({
      loading:true,
      data:advertisers.data,
    })
    copiwinSDK.metaAdvertisers().then((data)=>{
      console.log(data)
      setAdvertisers({
        loading:false,
        data:data
      })
    }).catch((reason)=>{
      setAdvertisers({
        loading:false,
        data:advertisers.data,
      })
      console.log(reason)
    })
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
    <MetaAdvertisersFilter applyFilters={applyFilters} />
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
          return (
            <tr>
              <td>
                <a href={advertiser.page.url}>{advertiser.page.name}</a>
              </td>
              <td>{advertiser.countries.map((value)=>{return (<img width={25} height={25} src={"https://winninghunter.com"+value} />)})}</td>
              <td>{advertiser["Website"]}</td>
              <td>{advertiser.ads}</td>
              <td>{advertiser.adsets}</td>
              <td>{advertiser.avgAdsets}</td>
              <td>{advertiser.likes}</td>
              <td>{advertiser.followers}</td>
              <td>{advertiser.created}</td>
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