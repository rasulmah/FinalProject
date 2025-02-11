import React from 'react'
import { Container } from 'react-bootstrap'
import './assets/scss/styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
