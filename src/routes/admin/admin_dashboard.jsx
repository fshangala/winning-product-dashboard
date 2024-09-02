import {Card} from 'primereact/card'
import facebookLogo from '../../assets/images/facebook.svg'
import tiktokLogo from '../../assets/images/tiktok.svg'
import metaLogo from '../../assets/images/meta.png'
import { Chart } from 'primereact/chart';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [chartData,setChartData] = useState({})

  useEffect(function(){
    setChartData({
      labels:[
        "shopify",
        "shoplazza",
        "wix",
        "wordpress",
        "woocommerce",
      ],
      datasets:[
        {
          label: 'stores',
          data: [600,543,234,300,516]
        }
      ]
    })
  },[])

    return (
      <>
      <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gap:"24px", width:"100%"}}>
        <Card style={{padding:"8px",background:"linear-gradient(to right,green,#039be5)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",color:"white"}}>
            <div style={{display:'flex',flexDirection:'column'}}>
              <span style={{textShadow:"0 0 8px white"}}>Facebook Ads</span>
              <span style={{fontWeight:700,fontSize:"24px"}}>8076</span>
            </div>
            <span>
              <img src={facebookLogo} width="50" height="50" alt='facebook' />
            </span>
          </div>
        </Card>
        <Card style={{padding:"8px",background:"linear-gradient(to right,green,#e63964)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",color:"white"}}>
            <div style={{display:'flex',flexDirection:'column'}}>
              <span style={{textShadow:"0 0 8px white"}}>Tiktok Ads</span>
              <span style={{fontWeight:700,fontSize:"24px"}}>6435</span>
            </div>
            <span>
              <img src={tiktokLogo} width="50" height="50" alt='tiktok' />
            </span>
          </div>
        </Card>
        <Card style={{padding:"8px",background:"linear-gradient(to right,green,white)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",color:"white"}}>
            <div style={{display:'flex',flexDirection:'column'}}>
              <span style={{textShadow:"0 0 8px white"}}>Meta Advertisers</span>
              <span style={{fontWeight:700,fontSize:"24px"}}>519</span>
            </div>
            <span>
              <img src={metaLogo} width="50" height="50" alt='meta' />
            </span>
          </div>
        </Card>
      </div>
      <br />
      <Card style={{padding:"8px"}}>
        <Chart type='bar' data={chartData} options={{}} />
      </Card>
      </>
    )
}