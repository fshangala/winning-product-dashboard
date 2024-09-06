import { Card } from "primereact/card";
import { Column } from "primereact/column";
import {DataTable} from "primereact/datatable";
import { useContext, useEffect, useReducer, useState } from "react";
import CopiwinSDK from "../../../copiwinsdk/copiwinsdk";
import { UserContext } from "../../../context/UserContext";

function adminMetaAdvertisersReducer(state,action) {
  switch (action) {
    case 'set-pages':
      return {
        ...state,
        pages:action.pages,
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
export default function AdminMetaAdvertisers() {
  const [componentState,dispatch] = useReducer(adminMetaAdvertisersReducer,{
    pages:[],
    loading:false,
  })
  const [pages,setPages] = useState([])
  const user = useContext(UserContext)
  const copiwinSDK = new CopiwinSDK(user.auth.access_token)

  useEffect(function(){
    dispatch({type:'set-loading',loading:true})
    copiwinSDK.adminMetaAdvertisers().then(function(response){
      if ("results" in response) {
        dispatch({
          type:"set-pages",
          pages:response.results,
        })
        setPages(response.results)
      }
      console.log(response)
      dispatch({type:'set-loading',loading:false})
    }).catch(function(reason){
      console.log(reason)
      dispatch({type:'set-loading',loading:false})
    })
  },[])

  return (
    <div>
      <Card title="Meta Advertisers" style={{padding:"8px"}}>
        <div>
          <DataTable value={pages}>
            <Column field="page_id" header="Page ID" />
            <Column field="name" header="Name" />
            <Column field="likes" header="Likes" />
          </DataTable>
        </div>
      </Card>
    </div>
  )
}