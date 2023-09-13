import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import OwnerPage from './owner_page/Owner.jsx'
import AdminPanel from './admin_panel/AdminPanel.jsx'
import UserHomePage from './user_homepage/UserHomePage.jsx'

import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/owner",
    element: <OwnerPage />
  },
  {
    path:"/adminpanel",
    element: <AdminPanel />
  },
  {
    path:"/userhomepage",
    element: <UserHomePage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
