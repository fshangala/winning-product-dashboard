import { useParams } from "react-router-dom"
import salesTrackerDetailTemplate from "../templates/sales_tracker_detail_template"
import { useContext, useEffect, useReducer, useState } from "react"
import CopiwinSDK from "../copiwinsdk/copiwinsdk"
import { UserContext } from "../context/UserContext"
import initialize from "../utils/initialize"
import salesTrackerDetailTableTemplate from "../templates/sales_tracker_detail_table_template"
import salesTrackerDetailTableRowTemplate from "../templates/sales_tracker_detail_table_row_template"

function salesTrackerDetailReducer(state,action) {
  switch (action.type) {
    case "set-store":
      return {
        ...state,
        store:action.store,
      }
    
    case "set-products":
      return {
        ...state,
        products:action.products,
      }
  
    default:
      break;
  }
}

export default function SalesTrackerDetail() {
  const copiwinSDK = new CopiwinSDK()
  const user = useContext(UserContext)
  const [salesTrackerDetailState,dispatch] = useReducer(salesTrackerDetailReducer,{
    loading:false,
    store:null,
    products:[],
  })

  const params = useParams()
  const template = salesTrackerDetailTemplate
  template.id = params.storeId
  template.table = salesTrackerDetailTableTemplate.html

  function handleSetStore(store) {
    dispatch({
      type:"set-store",
      store:store,
    })
  }

  function handleSetProducts(products) {
    dispatch({
      type:"set-products",
      products:products,
    })
  }

  async function getStoreProducts(store) {
    var response = await fetch(`https://${store.hostname}/products.json`)
    return await response.json()
  }

  useEffect(function(){
    copiwinSDK.store({access_token:user.access_token,id:params.storeId}).then(function(data){
      handleSetStore(data)
    }).catch(function(reason){
      console.log(reason)
    })
  },[])

  useEffect(function(){
    if(salesTrackerDetailState.store) {
      getStoreProducts(salesTrackerDetailState.store).then((products)=>{
        console.log(products)
        handleSetProducts(products.products)
      })

      template.store_hostname=salesTrackerDetailState.store.hostname
      template.store_name=salesTrackerDetailState.store.title
      template.locale=salesTrackerDetailState.store.locale
      template.product_count=salesTrackerDetailState.products.length
      template.theme=salesTrackerDetailState.store.themedata.name

      if(salesTrackerDetailState.store.track_data) {
        template.today = salesTrackerDetailState.store.track_data.today
      }
    }

    var table = salesTrackerDetailTableTemplate
    table.rows = salesTrackerDetailState.products.map((product) => {
      var row = salesTrackerDetailTableRowTemplate
      row.store_hostname = template.store_hostname
      row.title = product.title
      row.handle = product.handle
      row.image = product.images[0].src
      row.variants = product.variants.length
      row.created_at = product.created_at
      row.price = function() {
        var v = 0
        var d = 1
        product.variants.forEach((variant)=>{
          v += parseFloat(variant.price)
          d +=1
        })
        return Math.ceil(v/d)
      }()
      return row.html
    }).join("")
    template.table = table.html

    initialize({querySelector:"#revenue-chart-container"}).then(function(elem){
      elem.innerHTML=''
      var chart = document.createElement("canvas")
      chart.setAttribute('width',1022)
      chart.setAttribute('height',306)
      chart.setAttribute('role','img')
      chart.style.boxSizing='border-box'

      elem.appendChild(chart)

      const data = [
        { time: '30days', count: 25 },
        { time: '7days', count: 22 },
        { time: 'yesterday', count: 30 },
        { time: 'today', count: 28 },
      ];

      new Chart(chart, {
        type:"line",
        data: {
          labels:data.map(row => row.time),
          datasets: [
            {
              label:'Time',
              data:data.map(row => row.count)
            }
          ]
        }
      });
    
    })

    initialize({querySelector:"#products-table"}).then(function(elem){
      let table = new DataTable('#products-table')
    })
  })

  return <>
  <div dangerouslySetInnerHTML={{__html:template.html}} />
  </>
}