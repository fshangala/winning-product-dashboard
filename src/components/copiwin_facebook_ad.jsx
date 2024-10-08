import facebookAdTemplate from "../templates/facebook_ad_template";
import facebookAdImageTemplate from "../templates/facebook_ad_image_template";
import facebookAdVideoTemplate from "../templates/facebook_ad_video_template";
import facebookAdPagePopupTemplate from "../templates/facebook_ad_page_popup_template";
import { useContext, useEffect, useReducer } from "react";
import useFacebookAdMenu from "../hooks/facebook_ad_menu";
import useFacebookAdDetail from "../hooks/facebook_ad_detail";
import useFacebookAdPageads from "../hooks/facebook_ad_pageads";
import { toast } from "react-toastify";
import CopiwinSDK from "../copiwinsdk/copiwinsdk";
import { UserContext } from "../context/UserContext";
import {Dialog} from 'primereact/dialog';
import { Dropdown } from "primereact/dropdown";
import {Button} from "primereact/button";

function theReducer(state,action) {
  switch (action.type) {
    case 'open-import-product-dialog':
      return {
        ...state,
        open_import_product_dialog:true,
      }
  
    case 'close-import-product-dialog':
      return {
        ...state,
        open_import_product_dialog:false,
      }
    
    case 'set-user-store':
      return {
        ...state,
        user_store_url:action.store_url
      }

    default:
      break;
  }
}

export default function CFacebookAd({ad}) {
  const [componentState,dispatch] = useReducer(theReducer,{
    open_import_product_dialog:false,
    user_store_url:'',
  })

  const user = useContext(UserContext)
  const copiwinSDK = new CopiwinSDK(user.auth.access_token)
  const facebookAdMenu = useFacebookAdMenu(ad.ad_archive_id)
  const facebookAdDetail = useFacebookAdDetail(ad.ad_archive_id)
  const facebookPageAds = useFacebookAdPageads(ad.ad_archive_id)

  function handleOpenImportProductDialog() {
    dispatch({
      type:'open-import-product-dialog'
    })
  }

  function handleCloseImportProductDialog() {
    dispatch({
      type:'close-import-product-dialog'
    })
  }

  function handleSetUserStore(store_url) {
    dispatch({
      type:'set-user-store',
      store_url:store_url,
    })
  }

  useEffect(function(){
    window.openPiModal=function(a,b){
      handleOpenImportProductDialog()
    }
  },[])

  function updateTemplate() {
    let template = new facebookAdTemplate(
      ad.ad_archive_id,
    )
    template.id = ad.ad_archive_id
    template.title = ad.body_html
    template.adsets = ad.ad_creative_id
    template.product_creation_date = ad.creation_time
    template.page_ads = ad.page.id
    template.page_name = ad.page.name
    template.publisherPlatforms = ['facebook','instagram','audience','messenger'].map(function(platform,index,arr){
      switch (platform) {
        case 'facebook':
          return '<img src="https://app.winninghunter.com/images/facebook-48.svg" height="20px" width="20px">'
        
        case 'instagram':
          return '<img src="https://app.winninghunter.com/images/instagram.svg" height="20px" width="20px">'
          
        case 'audience':
          return '<img src="https://app.winninghunter.com/images/audience_network.png" height="20px" width="20px">'
        
        case 'messenger':
          return '<img src="https://app.winninghunter.com/images/messenger.svg" height="20px" width="20px">'
      
        default:
          return '';
      }
    }).join("")
    template.page_profile_picture_url = ad.page.profile_picture_url
    switch (ad.display_format) {
      case "image":
        var content_template = facebookAdImageTemplate
        content_template.image_url = ad.image
        template.content_template = content_template.html
        break;
      
      case "video":
        var content_template = facebookAdVideoTemplate
        content_template.image_url = ad.video_preview
        content_template.video_url = ad.video
        template.content_template = content_template.html
    
      default:
        break;
    }
    // if (ad.snapshot.display_format === "carousel") {
    //   var content_template = facebookAdImageTemplate
    //   content_template.image_url = ad.image
    //   template.content_template = content_template.html
    // }
  
    template.store_revenue=Math.ceil(Math.random()*(5000-50) + 50);
    template.link_url=ad.link_url
    template.caption=ad.caption
    template.cta_text=ad.cta_text
    // template.shopify=ad.shopifyProduct !== null
    template.shopify=true

    return template
  }

  function importProduct() {
    copiwinSDK.importProduct({store_url:componentState.user_store_url,product_url:ad.link_url}).then(function(response){
      if ("product" in response) {
        toast.success(`${response.product.title} successfully imported!`)
      }
      console.log(response)
    }).catch(function(reason){
      console.log(reason)
      if("data" in reason) {
        if ("non_field_errors" in reason.data) {
          reason.data.non_field_errors.forEach(item => {
            toast.error(item)
          });
        }
        if ("content" in reason) {
          toast.error(reason.content.toString())
        }
      }
    })
  }

  return (
    <>
    <div dangerouslySetInnerHTML={{__html:updateTemplate().html}} />
    <Dialog header={ad.link_url} visible={componentState.open_import_product_dialog} style={{width:"50vw"}} onHide={handleCloseImportProductDialog}>
      <div style={{display:"flex",flexDirection:"column",padding:"10px",gap:"8px"}}>
        <Dropdown value={componentState.user_store_url} onChange={function(e){handleSetUserStore(e.value)}} options={user.profile?user.profile.my_stores.map(function(store){
          return {title:store.store.title,url:store.store.url}
        }):[]} optionLabel="title" optionValue="url" />
        <Button style={{padding:"10px",color:"white"}} label="Import" onClick={importProduct} />
      </div>
    </Dialog>
    </>
  )
}