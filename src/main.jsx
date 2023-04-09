import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Users from './Users'
import UserDetails from './components/UserDetails'
import ErrorPage from './components/ErrorPage'
import LoadingSpinner from './components/LoadingSpinner'
import Visit from './Visit'
import { goForMeal } from './loaders/goForMeal'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    loader: goForMeal,
    children : [
      {
        path:'/',
        element:<Home></Home>
      },
      {
       path:'users',
       element:<Users></Users>,
       loader: () => fetch('https://restcountries.com/v3.1/all')
       
      },
      {
        path:'user/:userId',
        element:<UserDetails></UserDetails>,
        loader: ({params}) => {
          console.log(params);
          return fetch(`https://restcountries.com/v3.1/alpha/${params.userId}`)
        }
      },
      {
        path:'visit',
        element:<Visit></Visit>
      },

      {
        path:'about',
        element:<About></About>
      },
      {
        path:'loader',
        element:<LoadingSpinner></LoadingSpinner>
      }
    ]
  }
])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
