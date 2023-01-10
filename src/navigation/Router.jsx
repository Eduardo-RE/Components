import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeCRUD from '../pages/CRUD/HomeCRUD'
import Home from '../pages/Home'
import HomeLogin from '../pages/Login/HomeLogin'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<HomeLogin />} />
      <Route path="/crud" element={<HomeCRUD />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router