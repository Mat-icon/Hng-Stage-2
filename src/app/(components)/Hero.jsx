import Link from 'next/link'
import React from 'react'
import { FaMoneyBill1Wave, FaTruckMoving, FaVanShuttle } from 'react-icons/fa6'
import { MdSupportAgent } from 'react-icons/md'
import { RiSecurePaymentLine } from 'react-icons/ri'

const Hero = () => {
  return (
    <div className='w-full h-auto pb-4 relative   overflow-x-hidden'>
      <div className="hero-image w-full h-screen">
      <div className="hero-content relative w-10/12 md:w-full text-left md:text-left top-20 md:top-32 left-8 md:left-16 text-black space-y-5">
        <span className=' hero-bold text-yellow-500 md:text-sm lg:text-base text-xs'>Taste the Freshness</span>
        <h1 className=' md:text-5xl lg:text-7xl  text-4xl font-bold'>Experience the <br/> True <span className=' text-green-700'>Taste of Fresh</span></h1>
        <p className=' text-gray-700 hero-bold pb-12 md:text-sm lg:text-base text-xs'>Farm-Fresh Vegetables Delivered Straight to Your Door</p>
        <Link href='/'
          className="p-4 px-16 rounded-md mt-12 md:text-sm lg:text-base"
          style={{ background: "#7AC74F", color: "white" }}
        >
          Shop Now
        </Link>
      </div></div>

      <div className="services w-11/12 mx-auto relative bottom-20 md:w-11/12 lg:w-4/6 h-auto py-5 px-5 lg:py-14 md:py-7 md:px-10 lg:px-20 rounded-xl  grid grid-cols-2 md:grid-cols-4 bg-slate-50 shadow-lg gap-8  shadow-gray-300">
        <div className=" flex flex-col items-center space-y-2">
          <FaTruckMoving className='text-2xl md:text-4xl'   style={{ color: "#7AC74F"}}/>
          <p className=' font-bold md:text-xs lg:text-base text-xs'>Free Shipping</p>
          <p className=' text-gray-400 text-center text-x'>From Shipping Within Lagos</p>
        </div>
        <div className=" flex flex-col items-center space-y-2">
          <FaMoneyBill1Wave className=' text-2xl md:text-4xl'   style={{ color: "#7AC74F"}}/>
          <p className=' font-bold md:text-xs lg:text-base text-xs'>100% Money Back</p>
          <p className=' text-gray-400 text-center text-x'>30 days money guarantees</p>
        </div>
        <div className=" flex flex-col items-center space-y-2">
          <MdSupportAgent className='text-2xl md:text-4xl'   style={{ color: "#7AC74F"}}/>
          <p className=' font-bold md:text-xs lg:text-base text-xs'>Support 24/7</p>
          <p className=' text-gray-400 text-center text-x'>From Shipping Within Lagos</p>
        </div>
        <div className=" flex flex-col items-center space-y-2">
          <RiSecurePaymentLine className=' text-2xl md:text-4xl'   style={{ color: "#7AC74F"}}/>
          <p className=' font-bold md:text-xs lg:text-base text-xs'>Secure Payment</p>
          <p className=' text-gray-400 text-center text-x'>We ensure secure payment</p>
        </div>
      </div>
    </div>
  )
}

export default Hero