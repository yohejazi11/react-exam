import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Library from './Library.jsx'
import Displaybook from './Displaybook.jsx'

import Favorite from './Favorite.jsx'
import Readed from './Readed.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/library",
    element: <Library></Library>,
  },
  {
    path: "/book/:isbn",
    element: <Displaybook></Displaybook>,
  },
  {
    path: "/likes",
    element: <Favorite></Favorite>,
  },
  {
    path: "/readed",
    element: <Readed></Readed>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
