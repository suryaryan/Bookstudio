import React from 'react'
import Navbar from '../components/navbar'
import Courses from '../components/Courses'
import Footer from '../components/Footer'

export default function Crs() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Courses/>
    </div>
    <Footer/>
    </>
  )
}
