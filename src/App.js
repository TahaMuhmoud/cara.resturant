import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home Components/Home'
import Navbar from './Components/Navbar'
import './index.css'
import Shop from './Shop Components/Shop'
import Footer from './Components/Footer'
import SignUpSec from './Components/SignUpSec'
import ProductDetails from './Components/ProductDetails'



export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='home' element={ <Home/> }></Route>
        <Route path='shop' element={ <Shop/> }></Route>
        <Route path='productdetails' element={<ProductDetails/>}>
          <Route path=':id' element={<ProductDetails/>}></Route>
        </Route>
      </Routes>
      <SignUpSec/>
      <Footer/>
    </>
  )
}

