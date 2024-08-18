import { useContext, useEffect, useState } from "react"
import CopiwinSDK from "../copiwinsdk/copiwinsdk"
import { UserContext } from '../context/UserContext'
import { toast } from "react-toastify"

export default function useFacebookAdMenu(id) {
  const [open,setOpen] = useState(false)
  const user = useContext(UserContext)
  const copiwinSDK = new CopiwinSDK(user.access_token)

  function handleClick(e) {
    setOpen(function(state){
      return !state
    })
  }

  function handleSaveAd(e) {
    copiwinSDK.saveFacebookAd({ad_archive_id:id}).then(function(response){
      if("id" in response) {
        toast.success("Ad successfully saved!")
      } else {
        toast.warning(response.toString())
      }
    }).catch(function(reason){
      if("statusText" in reason) {
        toast.error(reason.statusText)
      }
      console.log(reason)
    })
  }

  useEffect(function(){
    document.querySelector(`#tooltip${id}`).style.display=open?"block":"none"

    let element = document.querySelector(`[copiwin-id="${id}"]`)
    element.querySelector(".threedot-more-info").addEventListener("click",handleClick)
    element.querySelector("button.save-ad-lid").addEventListener("click",handleSaveAd)
  })

  return open
}