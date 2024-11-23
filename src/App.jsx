import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProductVR from './components/ProductVR'
import ProductAR from './components/ProductAR'
import Transaction from './components/Transaction'
import Payment from './components/Payment'
import About from './components/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/productVR' element={<ProductVR />} />
        <Route path='/productAR' element={<ProductAR />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/transaction' element={<Transaction />} /> */}
      </Routes>
       {/* <Login /> */}
       </BrowserRouter>
    </div>
  )
}

export default App






