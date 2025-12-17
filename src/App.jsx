import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Cart from './Cart'
import Contact from './Contact'
import Product from './Product'
import Navbar from './Navbar'
import Productdetails from './Productdetails';


function App()
{
  return(
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product/:id" element={<Productdetails/>}/>
        </Routes>
      </BrowserRouter>
  )
}
export default App