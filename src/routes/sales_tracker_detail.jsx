import { useParams } from "react-router-dom"
import salesTrackerDetailTemplate from "../templates/sales_tracker_detail_template"

export default function SalesTrackerDetail() {
  const params = useParams()
  const template = salesTrackerDetailTemplate
  template.id = params.storeId

  return <>
  <div dangerouslySetInnerHTML={{__html:template.html}} />
  </>
}