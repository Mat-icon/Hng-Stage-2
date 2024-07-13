'use client'

import Link from "next/link";
import React from "react";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { MdMenu,MdClose } from "react-icons/md";
import { useState } from "react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

const toggleMenu =()=>{
  setIsOpen(!isOpen);
}

  return (
    <div className="relative">
      <div className=" flex items-center justify-between bg-white px-8 md:px-16 py-3 border-b border-slate-200 poppins">
        <div className="logo flex items-center">
          <Link href="/">
            <img src="/images/Logo.png" alt="logo" className="w-44" />
          </Link>
          <form className="ml-8 hidden md:hidden lg:block">
            <input
              placeholder="search for product"
              type="text"
              className="p-4 rounded-md w-96 bg-slate-50 "
              style={{ border: "1px solid #7AC74F" }}
            />
            <button
              className="p-4 rounded-md ml-3"
              style={{ background: "#7AC74F", color: "white" }}
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/checkout" className="relative">
            <FaCartShopping className=" text-black mr-4 md:mr-8" />
            <span className=" text-x translate-x-1/2 translate-y-1/2 py-1 px-2 absolute bottom-5  bg-lime-500 rounded-full text-white">
              12
            </span>
          </Link>
          <button onClick={toggleMenu} className="text-black block md:hidden lg:hidden focus:outline-none">
            {isOpen ? <MdClose /> : <MdMenu  />}
          </button>
          <button
            className="p-4 rounded-md ml-3 md:text-sm lg:text-base hidden md:hidden lg:block"
            style={{ background: "#7AC74F", color: "white" }}
          >
            My Account
          </button>
        </div>
      </div>
      {isOpen && (
         <div
         className={`absolute top-full z-10 left-0 right-0 bg-white border-b border-slate-200 shadow-lg transform transition-transform duration-300 ease-in-out 
          
         `}
       >
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="/" className="block text-black hover:bg-gray-100 p-2 rounded-md">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block text-black hover:bg-gray-100 p-2 rounded-md">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="block text-black hover:bg-gray-100 p-2 rounded-md">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block text-black hover:bg-gray-100 p-2 rounded-md">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/account" className="block text-black hover:bg-gray-100 p-2 rounded-md">
                My Account
              </Link>
            </li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default Header;
