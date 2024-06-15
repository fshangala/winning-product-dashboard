import { Link, Outlet, useNavigate } from "react-router-dom"
import brandImage from "../assets/images/detailed-brand.png"
import userIcon from "../assets/images/user-icon.svg"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"

export default function Root() {
  const user = useContext(UserContext)
  const navigate = useNavigate()

  const [profile,setProfile] = useState(null)

  useEffect(()=>{
    if(user == null) {
      navigate("/login")
    }
  },[user])

  return (
    <>
    <nav className="navbar">
      <div className="container">
        <a href="home.html" className="brand">
          <img src={brandImage} alt="logo" />
        </a>
        <div className="topnav">
          <Link to="/" className="topnav-link">Facebook Ads</Link>
          <Link to="/meta-advertisers" className="topnav-link">Meta Advertisers</Link>
          <Link to="/tiktok-ads" className="topnav-link">Tiktok Ads</Link>
          <Link to="/tiktok-creative-center" className="topnav-link">Tiktok Creative Center</Link>
          <a href="#" className="topnav-link">Sales Tracker</a>
          <a href="#" className="topnav-link">Magic AI</a>
          <a href="#" className="topnav-link">Saved Ads</a>
        </div>
        <div className="actions">
          {user?(
            <>
              <button className="btn btn-primary">Upgrade</button>
              <button className="btn">Tutorials</button>
              <button className="btn-avatar">
                <img src={user.profile.picture_url} alt="user" className="avatar" />
              </button>
            </>
          ):(
          <>
            <button className="btn">Tutorials</button>
          </>)}
        </div>
      </div>
    </nav>
    <div className="main">
      <Outlet />
    </div>
    </>
  )
}