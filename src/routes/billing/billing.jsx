import { Outlet, useNavigate } from 'react-router-dom'
import brandImage from '../../assets/images/detailed-brand.png'
import {Button} from 'primereact/button'

export default function BillingPortal() {

  return (
    <>
    <div style={{display:"flex"}}>
      <div style={{width:"35rem",backgroundColor:"#F7F7F8",padding:"16px"}}>
        <div>
          <img src={brandImage} alt="Copiwin" style={{width:"10rem"}} />
        </div>
        <h4>Manage your subscription and billing settings</h4>
        <p>View payment history, download invoices, and manage subscriptions and payment methods.</p>
        <a href='/#/profile'>back</a>
      </div>
      <div style={{padding:"16px",flexGrow:1}}>
        <Outlet />
      </div>
    </div>
    </>
  )
}