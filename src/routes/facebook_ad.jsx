import { useParams } from "react-router-dom"
import CFacebookAd from "../components/copiwin_facebook_ad"
import Loading from '../components/loading'
import { useContext, useEffect, useState } from "react"
import CopiwinSDK from "../copiwinsdk/copiwinsdk"
import { UserContext } from '../context/UserContext'
import PageHeader from "../components/page_header"

export default function FacebookAd() {
  const [ad,setAd] = useState(null)
  const [loading,setLoading] = useState(false)

  const params = useParams()
  const user = useContext(UserContext)
  const copiwinSDK = new CopiwinSDK(user.access_token)

  useEffect(function(){
    setLoading(true)
    copiwinSDK.facebookAd({ad_id:params.ad_id}).then(function(response){
      if ("id" in response) {
        setAd(response)
      }
      console.log(response)
      setLoading(false)
    }).catch(function(reason){
      console.log(reason)
      setLoading(false)
    })
  },[])

  useEffect(function(){
  })

  return (
    <>
    <div>
      <div className="margin-bottom margin-xlarge">
        <div>
          <PageHeader />
          <hr />
        </div>
      </div>
      <Loading visible={loading} />
      <div className="add_list relative" data-wg-notranslate="">
        {ad !== null ? <CFacebookAd ad={ad} /> : null}
      </div>
    </div>
    </>
  )
}