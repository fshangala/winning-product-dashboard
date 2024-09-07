import { Card } from "primereact/card";
import { useContext, useEffect, useReducer, useRef } from "react";
import {InputSwitch} from "primereact/inputswitch";
import {BlockUI} from "primereact/blockui";
import { Button } from "primereact/button";
import CopiwinSDK from "../../copiwinsdk/copiwinsdk";
import {UserContext} from "../../context/UserContext";
import {Toast} from "primereact/toast";

function adminSiteSettingsReducer(state,action) {
  switch (action.type) {
    case 'set-auto_load_facebook_ads':
      return {
        ...state,
        auto_load_facebook_ads:action.auto_load_facebook_ads
      }

    case 'set-loading':
      return {
        ...state,
        loading:action.loading,
      }
  
    default:
      break;
  }
}
export default function AdminSiteSettings() {
  const [componentState,dispatch] = useReducer(adminSiteSettingsReducer,{
    auto_load_facebook_ads:true,
    loading:false,
  })
  const user = useContext(UserContext)
  const copiwinSDK = new CopiwinSDK(user.auth.access_token)
  const toastRef = useRef(null)

  useEffect(function(){
    dispatch({type:'set-loading',loading:true})
    copiwinSDK.adminGetSiteSettings().then(function(response){
      dispatch({type:'set-auto_load_facebook_ads',auto_load_facebook_ads:response.auto_load_facebook_ads})
      dispatch({type:'set-loading',loading:false})
      console.log(response)
    }).catch(function(reason){
      console.log(reason)
      dispatch({type:'set-loading',loading:false})
    })
  },[])

  function saveSettings(){
    dispatch({type:'set-loading',loading:true})
    copiwinSDK.adminSaveSiteSettings(componentState).then(function(response){
      dispatch({type:'set-auto_load_facebook_ads',auto_load_facebook_ads:response.auto_load_facebook_ads})
      dispatch({type:'set-loading',loading:false})
      toastRef.current.show({severity:"success",summary:"Settings saved!"})
      console.log(response)
    }).catch(function(reason){
      dispatch({type:'set-loading',loading:false})
      toastRef.current.show({severity:"error",summary:"Error saving settings."})
      console.log(reason)
    })
  }

  return (
    <>
    <BlockUI blocked={componentState.loading}>
      <Card title="Site Settings" style={{padding:"8px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
          <div style={{display:"flex"}}>
            <div style={{flexGrow:1}}>
              Auto load facebook ads
            </div>
            <div>
              <InputSwitch checked={componentState.auto_load_facebook_ads} onClick={function(e){
                dispatch({type:'set-auto_load_facebook_ads',auto_load_facebook_ads:!componentState.auto_load_facebook_ads})
              }} />
            </div>
          </div>
          <div style={{textAlign:"end"}}>
            <Button label="Save" icon="pi pi-save" onClick={function(e){saveSettings()}} style={{padding:"8px",color:"white"}} />
          </div>
        </div>
      </Card>
    </BlockUI>
    <Toast ref={toastRef} />
    </>
  )
}