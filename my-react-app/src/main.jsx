import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Countdown from './components/Countdown.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Countdown />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
