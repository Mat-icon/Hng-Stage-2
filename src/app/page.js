import React from 'react'
import Header from './(components)/Header'
import Navbar from './(components)/Navbar'
import Hero from './(components)/Hero'
import Featured from './(components)/Featured'
import Popular from './(components)/Popular'
import Promo from './(components)/Promo'
import Vegetables from './(components)/Vegetables'
import NewsLetter from './(components)/NewsLetter'
import Footer from './(components)/Footer'

const page = () => {
  return (
    <div className='poppins'>
      <Header/>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Popular/>
      <Promo/>
      <Vegetables/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default page