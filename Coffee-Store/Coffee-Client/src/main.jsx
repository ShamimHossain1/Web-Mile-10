import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './Componants/UpdateCoffee.jsx';
import AddCoffee from './Componants/AddCoffee.jsx';
import Home from './Componants/Home.jsx';
import LogIn from './Componants/LogIn.jsx';
import Register from './Componants/Regester.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch("http://localhost:5000/coffee")
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      }

    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
