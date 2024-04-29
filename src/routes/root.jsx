import { Link, Outlet, useNavigate } from "react-router-dom"
import brandImage from "../assets/images/detailed-brand.png"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"

export default function Root() {
  const user = useContext(UserContext)
  const navigate = useNavigate()

  const [profile,setProfile] = useState(null)

  useEffect(()=>{
    if(user == null) {
      navigate("/login")
    } else {
      if(profile == null) {
        onGoogleLogin(user)
      }
    }
  })

  const onGoogleLogin = function(credentials) {
    fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${credentials.access_token}`, {
      headers: {
        Authorization: `Bearer ${credentials.access_token}`,
        Accept: 'application/json'
      }
    }).then((response)=>{
      response.json().then((data)=>{
        setProfile(data)
        console.log(data)
      })
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
    <nav className="navbar">
      <div className="container">
        <a href="home.html" className="brand">
          <img src={brandImage} alt="logo" />
        </a>
        <div className="topnav">
          <a href="#" className="topnav-link active">Facebook Ads</a>
          <a href="#" className="topnav-link">Meta Advertisers</a>
          <a href="#" className="topnav-link">Tiktok Creative Center</a>
          <a href="#" className="topnav-link">Sales Tracker</a>
          <a href="#" className="topnav-link">Magic AI</a>
          <a href="#" className="topnav-link">Saved Ads</a>
        </div>
        <div className="actions">
          {profile?(
            <>
              <button className="btn btn-primary">Upgrade</button>
              <button className="btn">Tutorials</button>
              <button className="btn-avatar">
                <img src={profile.picture} alt="user" className="avatar" />
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