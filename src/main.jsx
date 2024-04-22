import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';

import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updateCoffee',
    element: <UpdateCoffee></UpdateCoffee>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
