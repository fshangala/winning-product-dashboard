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
import TiktokCreativeCenter from './routes/tiktok_creative_center.jsx'
import MetaAdvertisers from './routes/meta_advertisers.jsx'
import SavedAds from './routes/saved_ads.jsx'
import MagicAI from './routes/magic_ai.jsx'
import SalesTracker from './routes/sales_tracker.jsx'
import TestFacebookAds from './routes/test/facebook_ads.jsx'
import Dashboard from './routes/test/dashboard.jsx'

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
      },
      {
        path:'/tiktok-creative-center',
        element:<TiktokCreativeCenter />
      },
      {
        path:'/meta-advertisers',
        element:<MetaAdvertisers />
      },
      {
        path:'/magic-ai',
        element:<MagicAI />
      },
      {
        path:'/saved-ads',
        element:<SavedAds />
      },
      {
        path:'/sales-tracker',
        element:<SalesTracker />
      },
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
    path:'/test-facebook-ads',
    element:<FacebookAds />
  },
  {
    path:'/test-tiktok-ads',
    element:<TiktokAds />
  },
  {
    path:'/test-tiktok-creative-center',
    element:<TiktokCreativeCenter />
  },
  {
    path:'/test-meta-advertisers',
    element:<MetaAdvertisers />
  },
  {
    path:'/test-saved-ads',
    element:<SavedAds />
  },
  {
    path:'/test-magic-ai',
    element:<MagicAI />
  },
  {
    path:'/test-dashboard',
    element:<TestFacebookAds />
  },
  {
    path:'/test',
    element:<Dashboard />
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
