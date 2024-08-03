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
          toast.error(reason.toString())
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
}