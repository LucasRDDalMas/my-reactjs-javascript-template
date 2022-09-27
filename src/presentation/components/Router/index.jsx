import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = ({ Home }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
