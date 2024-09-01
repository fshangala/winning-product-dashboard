import { Outlet } from "react-router-dom"
import {Panel} from 'primereact/panel'
import {Avatar} from 'primereact/avatar'
import brandImage from "../../assets/images/detailed-brand.png";
import { PanelMenu } from 'primereact/panelmenu'

export default function AdminRoot() {

  const panelItems = [
    {
      label:"Dashboard",
      icon:"pi pi-th-large",
      url:"/#/admin/dashboard",
    },
    {
      label:"Exit",
      icon:"pi pi-sign-out",
      url:"/#/",
    },
  ]

  function headerTemplate(options) {
    return (
      <div>
        <div style={{fontWeight:"bolder",fontSize:"26px",textAlign:"center",color:"rgb(94, 148, 52)"}}>Admin Panel</div>
      </div>
    )
  }

  return (
    <>
    <div style={{display:"flex",padding:"8px",boxShadow:"0 1px 4px #5b8a3a",marginBottom:"8px"}}>
      <div>
        <img src={brandImage} style={{height:"50px"}} alt="brand" />
      </div>
      <div style={{flexGrow:1,display:"flex",justifyContent:"end",alignItems:"center"}}>
        <Avatar image="https://picsum.photos/200/200" shape="circle"/>
      </div>
    </div>
    <div style={{display:"flex",flexDirection:"row",backgroundColor:"#f8f9fa"}}>
      <div style={{width:"200px"}}>
        <Panel headerTemplate={headerTemplate} style={{padding:"8px"}}>
          <PanelMenu model={panelItems} />
        </Panel>
      </div>
      <div style={{flexGrow:1,padding:"0 8px"}}>
        <Outlet />
      </div>
    </div>
    </>
  )
}