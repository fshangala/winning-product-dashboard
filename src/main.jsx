import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/style.scss'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import Login from './routes/login.jsx'
import UserProvider from './context/UserContext.jsx'
import FacebookAds from './routes/facebook_ads.jsx'
//import { initFacebookSdk } from './vendor/facebook.jsx'
import TiktokAds from './routes/tiktok_ads.jsx'
import Signup from './routes/signup.jsx'

const router = createHashRouter([
  {
    path:'/',
    element:<Root />,
    errorElement:<ErrorPage />,
    children: [
      {
        path:'/',
        element:<FacebookAds />
      },
      {
        path:'/tiktok-ads',
        element:<TiktokAds />
      }
    ]
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<Signup />
  },
  {
    path:'/facebook-ads',
    element:<FacebookAds />
  },
  {
    path:'/test-tiktok-ads',
    element:<TiktokAds />
  }
])

//initFacebookSdk().then(startApp)
startApp()

function startApp(){
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <GoogleOAuthProvider clientId="211046741429-jk2tmkimn7b1q6gq0vf49n7vvhair2ck.apps.googleusercontent.com">
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </GoogleOAuthProvider>
    </React.StrictMode>,
  )
}
