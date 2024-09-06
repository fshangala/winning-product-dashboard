import { Card } from "primereact/card"
import {DataView} from "primereact/dataview"
import { useContext, useEffect, useReducer } from "react"
import CopiwinSDK from "../../../copiwinsdk/copiwinsdk";
import {UserContext} from "../../../context/UserContext";
import {Button} from 'primereact/button';

function adminFacebookAdsReducer(state,action) {
  switch (action.type) {
    case 'set-ads':
      return {
        ...state,
        ads:action.ads
      }

    case 'set-loading':
      return {
        ...state,
        loading:action.loading
      }
  
    default:
      break;
  }
}

export default function AdminFacebookAds() {
  const [componentState,dispatch] = useReducer(adminFacebookAdsReducer,{
    ads:[],
    loading:false,
  })
  const user = useContext(UserContext)
  const copiwinSDK = new CopiwinSDK(user.auth.access_token)

  useEffect(function(){
    dispatch({type:'set-loading',loading:true})
    copiwinSDK.adminFacebookAds().then(function(response){
      if ("results" in response) {
        dispatch({
          type:"set-ads",
          ads:response.results,
        })
      }
      console.log(response)
      dispatch({type:'set-loading',loading:false})
    }).catch(function(reason){
      console.log(reason)
      dispatch({type:'set-loading',loading:false})
    })
  },[])

  function listTemplate(items) {
    if (!items || items.length === 0) return null;

    const listItems = items.map(function(item){
      return (
        <Card title={item.ad_archive_id} subTitle={(<div style={{height:"50px",overflow:"hidden"}}>{item.body_html}</div>)} style={{padding:"8px"}}>
          <div style={{textAlign:"center"}}>
            {item.display_format==="video"?
            <video controls>
              <source src={item.video} />
            </video>
            :null}
            {item.display_format==="image"?
            <img src={item.image} />
            :null}
          </div>
          <div style={{textAlign:"center"}}>
            <Button label={item.cta_text} style={{padding:"8px",color:"white"}} onClick={function(){ window.open(item.link_url, '_blank') }} />
          </div>
        </Card>
      )
    })

    return (
      <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gap:"8px"}}>
        {listItems}
      </div>
    )
  }

  return (
    <div>
      <Card title="Facebook Ads" style={{padding:"8px"}}>
        <DataView value={componentState.ads} listTemplate={listTemplate} />
      </Card>
    </div>
  )
}