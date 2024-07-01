import { useEffect, useState } from "react";
import StoreInput from "../components/store_input";
import CopiwinSDK from "../copiwinsdk/copiwinsdk";

export default function SalesTracker() {
  let copiwinSDK = new CopiwinSDK()
  const [stores,setStores] = useState([])

  let addStore = function(storeUrl){
    copiwinSDK.addStore({storeUrl:storeUrl}).then((data)=>{
      if ("name" in data && "url" in data) {
        var currentStores = stores
        currentStores.push(data)
        setStores(currentStores)
        console.log("Store added!")
      }
      console.log(data)
    }).catch((reason)=>{
      console.log(reason)
    })
  }

  let loadStores = function() {
    copiwinSDK.stores().then((data)=>{
      setStores(data)
    }).catch((reason)=>{
      console.log(reason)
    })
  }

  useEffect(()=>{
    loadStores()
  },[])

  return (
    <>
    <div className="header-container">
      <div className="header">
        {/* <img src={metaLogo} alt="meta" /> */}
        <h1>Sales Tracker</h1>
      </div>
      <div className="sub-header">
        <h3>Track Stores</h3>
      </div>
      <hr className="divider" />
    </div>
    <StoreInput addStore={addStore} />
    <br />
    
    <div className="store-table-filters">
      <span className="show-prefix">Show</span>
      <select className="show-input">
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <span className="show-sufix">stores</span>
      <label className="search-label">Search:</label>
      <input type="search" className="search-input" />
    </div>

    <table className="sales-table">
      <thead>
        <tr>
          <th>Store</th>
          <th>Today</th>
          <th>Yesterday</th>
          <th>7 Days</th>
          <th>30 Days</th>
        </tr>
      </thead>
      <tbody>
        {stores.map((store)=>{
          return (
            <tr>
            <td className="first">
              <div className="top">{store.name}</div>
              <div className="bottom">{store.url}</div>
            </td>
            <td>
              <div className="top">$0</div>
              <div className="bottom">0 sales</div>
            </td>
            <td>
              <div className="top">$0</div>
              <div className="bottom">0 sales</div>
            </td>
            <td>
              <div className="top">$0</div>
              <div className="bottom">0 sales</div>
            </td>
            <td>
              <div className="top">$0</div>
              <div className="bottom">0 sales</div>
            </td>
            </tr>
          )
        })}
      </tbody>
    </table>

    <div className="sales-pagination">
      <button className="btn">Previous</button>
      <button className="btn">1</button>
      <button className="btn">Next</button>
    </div>
    </>
  )
}