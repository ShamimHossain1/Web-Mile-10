import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Phones from './Components/Phones.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import PhoneDetails from './Components/PhoneDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader: () => fetch('http://localhost:3000/phones'),
      },
      {
        path: "/phones/:id",
        element:<PhoneDetails></PhoneDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/phones/${params.id}`),
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
