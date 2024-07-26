import { useContext, useEffect, useReducer } from "react";
import CopiwinSDK from "../copiwinsdk/copiwinsdk";
import { UserContext } from "../context/UserContext";
import salesTrackerTemplate from "../templates/sales_tracker_template";
import { toast } from "react-toastify";
import salesTrackerStoresTableTemplate from "../templates/sales_tracker_stores_table_template";
import initialize from '../utils/initialize'
import salesTrackerRowTemplate from "../templates/sales_tracker_row_template";

function salesTrackerReducer(state,action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading:true,
      }
    
    case "loaded":
      return {
        ...state,
        loading:false,
      }
    
    case "set_stores":
      return {
        ...state,
        stores:action.stores,
      }
  
    default:
      return state
  }
}

export default function SalesTracker() {
  let copiwinSDK = new CopiwinSDK()
  const user = useContext(UserContext)

  const [salesTrackerState,dispatch] = useReducer(salesTrackerReducer,{
    loading:false,
    stores:[],
  })

  const template = salesTrackerTemplate
  template.id = "sales-tracker-template"
  const stores_table = salesTrackerStoresTableTemplate
  stores_table.table_rows = salesTrackerState.stores.map(function(store){
    const row = salesTrackerRowTemplate
    if(store.track_data === null) {
      row.hostname = store.hostname
      row.site_name = store.hostname
    }
    return row.html
  }).join("")
  template.stores_table = stores_table.html

  function handleLoading(){
    dispatch({
      type:"loading"
    })
  }

  function handleLoaded(){
    dispatch({
      type:"loaded"
    })
  }

  function handleSetStores(stores){
    dispatch({
      type:"set_stores",
      stores:stores,
    })
  }

  let addStore = function(storeUrl){
    if(user){
      handleLoading()
      copiwinSDK.addStore({storeUrl:storeUrl,access_token:user.access_token}).then((data)=>{
        console.log(data)
        if ("url" in data) {
          if("title" in data) {
            // setAddedStore(data)
            var currentStores = salesTrackerState.stores
            currentStores.push(data)
            handleSetStores(currentStores)
            toast.success("The store "+data.title+" Has been added and is currently being tracked. If data does not appear instantly check back after 24hrs.")
          } else {
            data.url.forEach((item)=>{
              toast.error(item)
            })
          }
        }
        if ("non_field_errors" in data) {
          data.non_field_errors.forEach((item)=>{
            toast.error(item)
          })
        }
        if ("data" in data && "store" in data) {
          handleSetStores(data["data"])
          if (data["filtered"].length > 0) {
            toast.info(`Store ${data["filtered"][0]["store"]}, has been added!`)
          } else {
            loadStores()
          }
        }
        if ("detail" in data) {
          toast.info(data.detail)
        }
        console.log(data)
        handleLoaded()
      }).catch((reason)=>{
        console.log(reason)
        if ("statusText" in reason) {
          toast.error(reason.statusText)
        }
        handleLoaded()
      })
    }
  }
  window.startTracking = addStore

  let loadStores = function() {
    handleLoading()
    copiwinSDK.stores({access_token:user.access_token}).then((data)=>{
      console.log(data)
      handleLoaded()
      handleSetStores(data)
    }).catch((reason)=>{
      if("statusText" in reason) {
        toast.error(reason.statusText)
      }
      console.log(reason)
      handleLoaded()
    })
  }

  useEffect(function(){
    loadStores()
    initialize({querySelector:"div[copiwin-id='sales-tracker-template']"}).then(function(elem){
      elem.querySelector("#start-tracking-btn").addEventListener("click",function(e){
        e.preventDefault()
        addStore(elem.querySelector("input[name='Store-URL']").value)
      })
    }).catch(function(reason){
      console.log(reason)
    })
  },[])

  return <>
  <div dangerouslySetInnerHTML={{__html:template.html}} />
  </>
}