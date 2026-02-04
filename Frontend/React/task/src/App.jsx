import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import axios from 'axios'

const App = () => {

  return (
    <Routes>
      <Route path = '/' element={<Home />}/>
      <Route path = '/products' element={<Product />}/>
      <Route path = '/products/:id' element={<ProductDetails />}/>
    </Routes>
  )
}

export default App