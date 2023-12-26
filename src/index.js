import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./output.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './routes/Index';
import FourOFour from './routes/FourOFour';
import Project from './routes/Project';
import Projects from './routes/Projects';
import Admin from './routes/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
    errorElement: <FourOFour/>,
  },
  {
    path:"/project/:route",
    element: <Project/>,
  },
  {
    path:"/projects",
    element: <Projects/>,
  },
  {
    path:"/projecteditor/:route",
    element: <Admin/>,
  }
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);