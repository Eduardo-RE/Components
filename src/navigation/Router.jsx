import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import HomeLogin from '../pages/Login/HomeLogin'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<HomeLogin />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router