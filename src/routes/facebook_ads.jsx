import { useContext, useReducer } from 'react'
import CopiwinSDK from '../copiwinsdk/copiwinsdk'
import { UserContext } from '../context/UserContext'
import PageHeader from "../components/page_header"
import FacebookFilters from '../templates/facebook_filters'
import Loading from '../components/loading'
import CFacebookAd from '../components/copiwin_facebook_ad'

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

    case 'set-ads':
      return {
        ...state,
        count:action.count,
        next:action.next,
        previous:action.previous,
        ads:action.ads,
      }
  
    default:
      break;
  }
}

export default function FacebookAds() {
  const [facebookAds,dispatch] = useReducer(facebookAdsReducer,{
    loading:false,
    adsets:[],
    count:0,
    next:null,
    previous:null,
    ads:[],
  })

  const user = useContext(UserContext)
  const copiwinSDK = new CopiwinSDK()

  function handleSetAds(response) {
    dispatch({
      type:'set-ads',
      count:response.count,
      next:response.next,
      previous:response.previous,
      ads:response.results,
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
    if(user) {
      handleSetLoading()
      copiwinSDK.facebookAds({...filters,access_token:user.access_token}).then((data)=>{
        if ('results' in data) {
          handleSetAds(data)
        }
        console.log(data)
        handleSetLoaded()
      }).catch((reason)=>{
        handleSetLoaded()
      })
    }
  }

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
        {/* {facebookAds.adsets.map(function(adset,index,arr){
          return <FacebookAdset adset={adset} key={index} />
        })} */}
        {facebookAds.ads.map(function(ad,index,arr){
          return <CFacebookAd ad={ad} key={index} />
        })}
      </div>
    </div>
    </>
  )
}