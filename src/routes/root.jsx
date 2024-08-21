import { Outlet, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserDispatchContext, UserContext } from "../context/UserContext"
import CopiwinSDK from "../copiwinsdk/copiwinsdk"
import Navbar from "../components/navbar"
import { toast } from "react-toastify"

export default function Root() {
  const user = useContext(UserContext)
  const userDispatch = useContext(UserDispatchContext)
  const navigate = useNavigate()
  let sdk = new CopiwinSDK()

  useEffect(()=>{
    if(user.auth === null) {
      var userauth = localStorage.getItem("auth")
      if (userauth === null) {
        navigate("/login")
      } else {
        userDispatch({type:'set-auth',auth:JSON.parse(userauth)})
      }
    } else {
      if (user.profile === null) {
        sdk.me({access_token:user.auth.access_token}).then((response)=>{
          if("profile" in response) {
            userDispatch({type:'set-profile',profile:response})
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

  if (user.auth) {

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
      <div id="page-bottom"></div>
      </>
    )
  }

  return null
}