import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/Layout'


function App() {
const router = createBrowserRouter([
    { path : "" , element : <Layout/> , children : [
        { index:true, element: <Home/> },
        { path: '/about', element: <About/> },
        { path: '/portfolio', element: <Portfolio/> },
        { path: '/contact', element: <Contact/>},
        { path: '*' , element: <div> 404 user not found</div> }
    ]}




  
  ])


  return <RouterProvider router={router} />;
}

export default App
