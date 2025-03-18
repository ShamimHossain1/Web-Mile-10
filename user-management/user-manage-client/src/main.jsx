import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './componant/users.jsx';
import Update from './componant/update.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element:<Users></Users>
  },
  {
    path: '/update/:_id',
    element:<Update></Update>,
    loader: ({params}) => fetch(`http://localhost:3000/users/${params._id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
