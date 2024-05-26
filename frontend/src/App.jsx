import React from 'react'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Page/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import  {Signup}  from './components/login/Signup'
import AllProduct from './components/product/AllProduct'
import Deshboard from './components/deshboard/Deshboard'
import DeshboardProduct from './components/deshboard/product/DeshboardProduct'
import ProductDetails from './components/home/ProductDetails'
import Cart from './components/cart/Cart'
import CheckOut from './components/cart/CheckOut'
import Download from './components/download/Download'

export default function App() {
 
  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Signup/>}/> 
        <Route path="/all-product" element={<AllProduct/>}/> 
        <Route path="/product/:id" element={<ProductDetails/>}/> 
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/checkout" element={<CheckOut/>}/> 
        <Route path="/download" element={<Download/>}/> 


        <Route path="/deshboard" element={<Deshboard/>}/> 
        <Route path="/deshboard/product" element={<DeshboardProduct/>}/> 
      </Routes>
      <Footer/> 

    </BrowserRouter>
  )
}
