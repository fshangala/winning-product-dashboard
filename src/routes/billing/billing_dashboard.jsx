import {Button} from 'primereact/button'
import { useNavigate } from 'react-router-dom'

export default function BillingDashboard() {
  const navigate = useNavigate()
  return (
    <>
    <section style={{width:"100%"}}>
      <div style={{display:"flex"}}>
        <h5 style={{flexGrow:1}}>Subscriptions</h5>
        <div>
          <Button icon='pi pi-pen-to-square' onClick={function(e){
            navigate('/billing/update')
          }} />
        </div>
      </div>
      <div>
        <div style={{display:"flex",borderBottom:"2px solid rgba(0,0,0,0.1)",width:"100%"}}>
          <div style={{width:"200px"}}>Renews</div>
          <div>Next invoice (€94.80) due 4 Oct, 2024</div>
        </div>
        <div style={{display:"flex",borderBottom:"2px solid rgba(0,0,0,0.1)",width:"100%"}}>
          <div style={{width:"200px"}}>Discount</div>
          <div>-</div>
        </div>
        <div style={{display:"flex",borderBottom:"2px solid rgba(0,0,0,0.1)",width:"100%"}}>
          <div style={{width:"200px"}}>Payment</div>
          <div></div>
        </div>
      </div>
    </section>
    </>
  )
}