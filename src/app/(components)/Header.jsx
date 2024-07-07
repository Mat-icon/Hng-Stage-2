import Link from "next/link";
import React from "react";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <div className=" flex items-center justify-between bg-white px-8 md:px-16 py-3 border-b border-slate-200 poppins">
      <div className="logo flex items-center">
        <Link href='/'><img src="/images/Logo.png" alt="logo" className="w-44" /></Link>
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
      <div className="flex items-center">
        <FaCartShopping className=" text-black mr-4 md:mr-8" />
        <MdMenu className=" text-black block  md:block lg:hidden"/>
        <button
          className="p-4 rounded-md ml-3 md:text-sm lg:text-base hidden md:hidden lg:block"
          style={{ background: "#7AC74F", color: "white" }}
        >
          My Account
        </button>
      </div>
    </div>
  );
};

export default Header;
