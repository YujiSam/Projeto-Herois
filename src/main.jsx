import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Error from './routes/Error/Error.jsx'
import Produtos from './routes/Produtos/Produtos.jsx'
import Login from './routes/Login/Login.jsx'

const router=createBrowserRouter([{
  path:'/',element:<App/>,
  errorElement:<Error/>,

  children:[
    {path:'/produtos',element:<Produtos/>},
    {path:'/login',element:<Login/>},
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
