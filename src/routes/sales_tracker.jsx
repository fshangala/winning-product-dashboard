import { useContext, useEffect, useState } from "react";
import StoreInput from "../components/store_input";
import CopiwinSDK from "../copiwinsdk/copiwinsdk";
import { RotatingLines } from "react-loader-spinner";
import { Alert, AlertsContainer } from '../components/alert'
import { UserContext } from "../context/UserContext";

export default function SalesTracker() {
  let copiwinSDK = new CopiwinSDK()
  const user = useContext(UserContext)
  const [initialized,setInitialized] = useState(false)
  const [stores,setStores] = useState([])
  const [loading,setLoading] = useState(false)
  const [alerts,setAlerts] = useState([])
  const [addedStore,setAddedStore] = useState(null)

  const dismissAlert = function(index) {
    var a = alerts.filter(function(value,i,array){
      return index != i
    })
    setAlerts(a)
  }

  let addStore = function(storeUrl){
    if(user){
      setLoading(true)
      copiwinSDK.addStore({storeUrl:storeUrl,access_token:user.access_token}).then((data)=>{
        console.log(data)
        if ("url" in data) {
          if("title" in data) {
            setAddedStore(data)
            var currentStores = stores
            currentStores.push(data)
            setStores(currentStores)
            console.log("Store added!")
          } else {
            var currentAlerts = alerts
            data.url.forEach((item)=>{
              currentAlerts.push(item)
            })
            setAlerts(currentAlerts)
          }
        }
        if ("non_field_errors" in data) {
          var currentAlerts = alerts
          data.non_field_errors.forEach((item)=>{
            currentAlerts.push(item)
          })
          setAlerts(currentAlerts)
        }
        if ("data" in data && "store" in data) {
          setAddedStore(data["store"])
          setStores(data["data"])
          if (data["filtered"].length > 0) {
            var currentAlerts = alerts
            currentAlerts.push(`Store ${data["filtered"][0]["store"]}, has been added!`)
            setAlerts(currentAlerts)
          } else {
            loadStores()
          }
        }
        if ("detail" in data) {
          var currentAlerts = alerts
          currentAlerts.push(data.detail)
          setAlerts(currentAlerts)
        }
        console.log(data)
        setLoading(false)
      }).catch((reason)=>{
        console.log(reason)
        if ("statusText" in reason) {
          var currentAlerts=alerts
          currentAlerts.push(reason.statusText)
          setAlerts(currentAlerts)
        }
        setLoading(false)
      })
    }
  }

  let loadStores = function() {
    if(user) {
      setLoading(true)
      setInitialized(true)
      copiwinSDK.stores({access_token:user.access_token}).then((data)=>{
        console.log(data)
        setStores(data)
        setLoading(false)
      }).catch((reason)=>{
        if("statusText" in reason) {
          var currentAlerts = alerts
          currentAlerts.push(reason.statusText)
        }
        console.log(reason)
        setLoading(false)
      })
    }
  }

  useEffect(()=>{
    if(!initialized) {
      loadStores()
    }
  })

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

    <center>
    <RotatingLines visible={loading} />
    </center>

    {addedStore ? <h4>{"The store "+addedStore.title+" Has been added and is currently being tracked. If data does not appear instantly check back after 24hrs."}</h4>:null}

    {(alerts.length > 0) ? (
    <AlertsContainer>
    {alerts.map((value,index,array)=>{
      return <Alert message={value} key={index} index={index} dismiss={dismissAlert} />
    })}
    </AlertsContainer>
    ) : null}
    
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
        {stores.map((store,index,array)=>{
          return (
            store.track_data ? (
              <tr key={index}>
                <td className="first">
                  {store.track_data.store}
                </td>
                <td>
                  {store.track_data.today}
                </td>
                <td>
                {store.track_data.yesterday}
                </td>
                <td>
                {store.track_data["7days"]}
                </td>
                <td>
                {store.track_data["30days"]}
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td className="first">
                  {store.hostname}
                </td>
                <td>
                  {"$0 \n0 sales"}
                </td>
                <td>
                {"$0 \n0 sales"}
                </td>
                <td>
                {"$0 \n0 sales"}
                </td>
                <td>
                {"$0 \n0 sales"}
                </td>
              </tr>
            )
            // <tr>
            // <td className="first">
            //   <div className="top">{store.name}</div>
            //   <div className="bottom">{store.url}</div>
            // </td>
            // <td>
            //   <div className="top">$0</div>
            //   <div className="bottom">0 sales</div>
            // </td>
            // <td>
            //   <div className="top">$0</div>
            //   <div className="bottom">0 sales</div>
            // </td>
            // <td>
            //   <div className="top">$0</div>
            //   <div className="bottom">0 sales</div>
            // </td>
            // <td>
            //   <div className="top">$0</div>
            //   <div className="bottom">0 sales</div>
            // </td>
            // </tr>
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