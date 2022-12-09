import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Header/Navbar'


const HomeTemplate = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default HomeTemplate