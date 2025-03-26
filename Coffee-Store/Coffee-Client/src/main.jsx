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
import Users from './Componants/Users.jsx';

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users2 from './Componants/Users2.jsx';

// Firebase deploy
// https://fir-auth-9dc31.firebaseapp.com/


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch("https://coffee-server-xi-nine.vercel.app/coffee")
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-server-xi-nine.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: ()=>fetch("https://coffee-server-xi-nine.vercel.app/users")
      },
      {
        path: "/users2",
        element: <Users2></Users2>
        
      }

    ]
  },

]);

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider>
   
  </StrictMode>,
)
