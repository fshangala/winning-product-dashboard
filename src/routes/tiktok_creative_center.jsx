import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CopiwinSDK from "../copiwinsdk/copiwinsdk";
import { UserContext } from "../context/UserContext";

function SearchCard({loading,search}) {
  const [adId,setAdId] = useState("")

  return (
    <div className="search-card">
      <h3>Enter video ID</h3>
      <div className="input-group">
        <label>Ad ID</label>
        <input type="text" onChange={(event)=>{setAdId(event.target.value)}} className="input" />
      </div>
      <div className="input-group">
        <button onClick={()=>{search(adId)}} className="input">{loading?"Searching...":"Search"}</button>
      </div>
    </div>
  )
}

export default function TiktokCreativeCenter() {
  const copiwinSDK = new CopiwinSDK()
  const [adData,setAdData] = useState({
    loading:false,
    data:null
  })
  const user = useContext(UserContext)

  const fetchAd = function(ad_id) {
    if(user){
      setAdData({
        loading:true,
        data:adData.data
      })
      copiwinSDK.tiktokAd({ad_id:ad_id,access_token:user.access_token}).then((data)=>{
        setAdData({
          loading:false,
          data:data.data
        })
        console.log(data)
      }).catch((reason)=>{
        setAdData({
          loading:false,
          data:adData.data
        })
        console.log(reason)
      })
    }
  }

  return (
    <>
    <div className="header-container">
      <div className="header">
        <h1>Tiktok Creative Center</h1>
      </div>
      <hr className="divider" />
    </div>
    <div className="creative-container">
      <div className="search-section">
        <SearchCard loading={adData.loading} search={fetchAd} />
      </div>
      <div className="download-section">
        <div className="download-card">
          <h3>Video information</h3>
          <hr />
          <div className="output-section">
            <div className="details">
              <div className="input-group">
                <label>Product URL</label>
                <input type="text" className="input" placeholder="-" readOnly />
              </div>
              <div className="about">
                <h3>About this Ad</h3>
                <div className="about-container">
                  <div className="about-item">
                    <div>Region</div>
                    <div>-</div>
                    <div>Objective</div>
                    <div>-</div>
                    <div>Landing Page</div>
                    <div>-</div>
                  </div>
                  <div className="about-item">
                    <div>Industry</div>
                    <div>-</div>
                    <div>Brand name</div>
                    <div>-</div>
                    <div>Ad caption</div>
                    <div>-</div>
                  </div>
                </div>
              </div>
              <div className="performance">
                <h3>Ad Performance</h3>
                <div className="performance-container">
                  <div className="performance-item">
                    <div>Likes</div>
                    <div>-</div>
                  </div>
                  <div className="performance-item">
                    <div>Comments</div>
                    <div>-</div>
                  </div>
                  <div className="performance-item">
                    <div>Shares</div>
                    <div>-</div>
                  </div>
                  <div className="performance-item">
                    <div>CTR</div>
                    <div>-</div>
                  </div>
                  <div className="performance-item">
                    <div>Budget</div>
                    <div>-</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="video-output">
              <p>Video without watermark</p>
              <div className="ad-content">
                <video className="video" controls>
                  {(adData.data === null)?null:(
                    <source src={adData.data.ad.videos[0].url} />
                  )}
                </video>
                <Link className="download-btn" to={(adData.data == null)?"":adData.data.ad.videos[0].url} target="_blank" download>Download</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}