import { Link, Outlet, useNavigate } from "react-router-dom"
import brandImage from "../assets/images/detailed-brand.png"
import userIcon from "../assets/images/user-icon.svg"
import { useContext, useEffect, useState } from "react"
import { SetUserContext, UserContext } from "../context/UserContext"
import CopiwinSDK from "../copiwinsdk/copiwinsdk"
import Navbar from "../components/navbar"
import { toast } from "react-toastify"

export default function Root() {
  const user = useContext(UserContext)
  const setUser = useContext(SetUserContext)
  const navigate = useNavigate()
  let sdk = new CopiwinSDK()

  const [profile,setProfile] = useState(null)

  useEffect(()=>{
    if(user === null) {
      var userauth = localStorage.getItem("auth")
      if (userauth === null) {
        navigate("/login")
      } else {
        setUser(JSON.parse(userauth))
      }
    } else {
      if (profile === null) {
        sdk.me({access_token:user.access_token}).then((response)=>{
          if("profile" in response) {
            setProfile(response)
          }
        }).catch((reason)=>{
          if("statusText" in reason) {
            toast.warn(reason.statusText)
            if(reason.status === 401) {
              navigate("/login")
            }
          }
          console.log(reason)
        })
      }
    }
  })

  if (user) {

    return (
      <>
      <div className="page-wrapper">
        <div className="global-styles w-embed"></div>
        <main className="main-wrapper">
          <Navbar />
          <header className="section_dashboard">
            <div className="padding-global">
              <div>
                <div className="padding-section-medium">
                  <Outlet />
                </div>
              </div>
            </div>
          </header>
        </main>
      </div>
      </>
    )
  }

  return null

  // return (
  //   <>
  //   <Navbar />
  //   {/* <nav className="navbar">
  //     <div className="container">
  //       <a href="home.html" className="brand">
  //         <img src={brandImage} alt="logo" />
  //       </a>
  //       <div className="topnav">
  //         <Link to="/" className="topnav-link">Facebook Ads</Link>
  //         <Link to="/meta-advertisers" className="topnav-link">Meta Advertisers</Link>
  //         <Link to="/tiktok-ads" className="topnav-link">Tiktok Ads</Link>
  //         <Link to="/tiktok-creative-center" className="topnav-link">Tiktok Creative Center</Link>
  //         <Link to="/sales-tracker" className="topnav-link">Sales Tracker</Link>
  //         <Link to="/magic-ai" className="topnav-link">Magic AI</Link>
  //         <Link to="/saved-ads" className="topnav-link">Saved Ads</Link>
  //       </div>
  //       <div className="actions">
  //         {user?(
  //           <>
  //             <button className="btn btn-primary">Upgrade</button>
  //             <button className="btn">Tutorials</button>
  //             <button className="btn-avatar">
  //               {profile ? <img src={profile.profile.picture_url ? profile.profile.picture_url : "https://avatar.iran.liara.run/public"} alt="user" className="avatar" /> : null}
  //             </button>
  //           </>
  //         ):(
  //         <>
  //           <button className="btn">Tutorials</button>
  //         </>)}
  //       </div>
  //     </div>
  //   </nav> */}
  //   <div className="main">
  //     <Outlet />
  //   </div>
  //   </>
  // )
}