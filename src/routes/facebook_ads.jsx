import { useContext, useEffect, useReducer } from 'react'
import CopiwinSDK from '../copiwinsdk/copiwinsdk'
import { UserContext } from '../context/UserContext'
import PageHeader from "../components/page_header"
import FacebookFilters from '../components/facebook_filters'
import Loading from '../components/loading'
import CFacebookAd from '../components/copiwin_facebook_ad'
import useReachedBottom from '../hooks/reached_bottom'

function facebookAdsReducer(state,action) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading:true,
      }
    
    case 'set-bottomLoading':
      return {
        ...state,
        bottomLoading:action.value,
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
    bottomLoading:false,
    adsets:[],
    count:0,
    next:null,
    previous:null,
    ads:[],
  })
  const reachedBottom = useReachedBottom()

  const user = useContext(UserContext)
  const copiwinSDK = new CopiwinSDK(user.auth.access_token)

  function handleSetAds(response,nextPage=false) {
    let ads = response.results
    if (nextPage) {
      ads = facebookAds.ads
      ads = ads.concat(response.results)
    }
    dispatch({
      type:'set-ads',
      count:response.count,
      next:response.next,
      previous:response.previous,
      ads:ads,
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

  function handleSetBottomLoading(loading) {
    dispatch({
      type:'set-bottomLoading',
      value:loading,
    })
  }

  const applyFilters = function(filters) {
    if(user) {
      handleSetLoading()
      console.log(filters)
      copiwinSDK.facebookAds({...filters,access_token:user.access_token}).then((data)=>{
        if ('results' in data) {
          handleSetAds(data)
        }
        console.log(data)
        handleSetLoaded()
      }).catch((reason)=>{
        handleSetLoaded()
        console.log(reason)
      })
    }
  }

  useEffect(function(){
    if (!facebookAds.bottomLoading && facebookAds.ads.length >= 10) {
      if (reachedBottom) {
        if (facebookAds.next) {
          handleSetBottomLoading(true)
          copiwinSDK.nextPage({nextPageUrl:facebookAds.next}).then((data)=>{
            if ('results' in data) {
              handleSetAds(data,true)
              window.scrollTo(0,window.scrollY - 20)
            }
            console.log(data)
            handleSetBottomLoading(false)
          }).catch((reason)=>{
            handleSetBottomLoading(false)
            console.log(reason)
          })
        }
      }
    }
  })

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
      <Loading visible={facebookAds.bottomLoading} />
    </div>
    </>
  )
}