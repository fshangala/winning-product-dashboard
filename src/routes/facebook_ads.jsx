import { useState, useContext, useReducer } from 'react'
import CopiwinSDK from '../copiwinsdk/copiwinsdk'
import { UserContext } from '../context/UserContext'
import PageHeader from "../components/page_header"
import FacebookFilters from '../templates/facebook_filters'
import FacebookAdset from '../templates/facebook_adset'
import Loading from '../components/loading'

function facebookAdsReducer(state,action) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading:true,
      }
    
    case 'loaded':
      return {
        ...state,
        loading:false,
      }
    
    case 'set_adsets':
      return {
        ...state,
        adsets:action.adsets
      }
  
    default:
      break;
  }
}

export default function FacebookAds() {
  const [facebookAds,dispatch] = useReducer(facebookAdsReducer,{
    loading:false,
    adsets:[]
  })

  const user = useContext(UserContext)
  const [loadAds,setLoadAds] = useState({
    loading:false,
    ads:[]
  })
  const copiwinSDK = new CopiwinSDK()

  function handleSetAdsets(adsets){
    dispatch({
      type:'set_adsets',
      adsets:adsets
    })
  }

  function handleSetLoading() {
    dispatch({
      type:'loading'
    })
  }

  function handleSetLoaded() {
    dispatch({
      type:'loaded'
    })
  }

  const applyFilters = function(filters) {
    console.log(filters,user)
    if(user) {
      handleSetLoading()
      copiwinSDK.facebookAds({...filters,access_token:user.access_token}).then((data)=>{
        if ('results' in data) {
          handleSetAdsets(data.results)
        }
        console.log(data)
        handleSetLoaded()
      }).catch((reason)=>{
        handleSetLoaded()
      })
    }
  }

  // useEffect(function(){
  //   initialize({querySelector:".glide"}).then(function(elem){
  //     var elems = Array.from(document.querySelectorAll(".glide"))
  //     elems.forEach(function(element){
  //       var glide = new Glide(element, {
  //         type: 'carousel',
  //         dragThreshold: 1,
  //         swipeThreshold: 1,
  //         animationDuration: 100
  //       }).mount()
  //     })
  //   })
  // },[])

  return (
    <>
    <div>
      <div className="margin-bottom margin-xlarge">
        <div>
          <PageHeader />
          <hr />
          <FacebookFilters applyFilters={applyFilters} />
        </div>
      </div>
      <Loading visible={facebookAds.loading} />
      <div className="add_list relative" data-wg-notranslate="">
        {facebookAds.adsets.map(function(adset,index,arr){
          return <FacebookAdset adset={adset} key={index} />
        })}
      </div>
    </div>
    </>
  )
}