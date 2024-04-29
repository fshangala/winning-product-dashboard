import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/style.scss'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import Login from './routes/login.jsx'
import UserProvider from './context/UserContext.jsx'
import FacebookAds from './routes/facebook_ads.jsx'
import { initFacebookSdk } from './vendor/facebook.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    errorElement:<ErrorPage />,
    children: [
      {
        path:'/',
        element:<FacebookAds />
      }
    ]
  },
  {
    path:'/login',
    element:<Login />
  }
])

initFacebookSdk().then(startApp)

function startApp(){
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <GoogleOAuthProvider clientId="1053050806046-t1ne3ogj3jf5qupfk9heaahia06mih75.apps.googleusercontent.com">
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </GoogleOAuthProvider>
    </React.StrictMode>,
  )
}

