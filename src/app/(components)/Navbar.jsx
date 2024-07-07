import Link from "next/link";
import React from "react";
import {  MdArrowForward, MdWindow } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="md:sticky top-0 w-full z-10 hidden md:flex items-center justify-between bg-white md:px-4 md:space-x-2 lg:space-x-0 lg:px-16 py-3 border-b border-slate-200">
      <div className="logo flex items-center">
        <button
          className="flex items-center md:text-xs lg:text-base  md:p-1 lg:p-4 rounded-md"
          style={{ background: "#7AC74F", color: "white" }}
        >
          <MdWindow className="mr-2" />
          Browse all categories
          <RiArrowDropDownLine className=" md:text-xl lg:text-3xl"/>
        </button>
      </div>
      <div className="flex items-center text-black space-x-8">
        <ul className=" inline-flex items-center space-x-8 md:text-xs lg:text-base">
          <li ><Link href='#home'className="flex items-center"  style={{ color: "#7AC74F" }}>Home <RiArrowDropDownLine className=" text-3xl"/></Link></li>
          <li><Link href='#categories'>Categories</Link></li>
          <li><Link href='#popular' className="flex items-center">Shop<RiArrowDropDownLine className=" text-3xl"/></Link></li>
          <li><Link href='#contact'>Contact</Link></li>
        </ul>
        <button
          className="p-2 rounded-md ml-3 text-xs flex items-center text-green-700"
          style={{ background: "#79c74f60"}}
        >
          Become Vendor<MdArrowForward className="ml-3 text-green-700"/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
