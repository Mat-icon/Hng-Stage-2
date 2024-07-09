"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaArrowLeft, FaGooglePay, FaMinus } from "react-icons/fa6";
import {
  MdAdd,
  MdDeleteOutline,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaApplePay } from "react-icons/fa6";
import { MdArrowRight } from "react-icons/md";

const Checkout = () => {
  const [activeTab, setActiveTab] = useState("Free");
  return (
    <div className="w-full h-auto poppins">
      <Header />
      <div className="w-full h-14 md:p-4 flex space-x-4 pl-8 md:pl-16 items-center text-sm poppins">
        <Link href="/">Home</Link>
        <MdArrowRight />
        <Link href="/cart">
          Cart
        </Link><MdArrowRight />
        <Link href="/checkout" className=" text-green-500">
          Checkout
        </Link>
      </div>
      <div className="w-full h-auto md:p-8 p-2 pb-2 container items-center mx-auto flex flex-col md:flex-col lg:flex-row space-y-8 md:space-x-4">
        <div className="lg:w-9/12 md:w-full w-full bg-slate-50 h-full shadow-md shadow-gray-300 p-2 md:p-4 rounded-lg">
          <div className="flex items-center pb-4 border-b border-slate-400">
            <Link href="/cart">
              <FaArrowLeft className=" cursor-pointer" />
            </Link>
            <h2 className=" ml-6 text-sm md:text-base">Continue Shopping</h2>
          </div>
          <div className=" space-y-2 p-4 text-x md:text-base">
            <h2>Cart</h2>
            <div className="flex items-center justify-between">
              <p>You have 4 items in your cart</p>
              <p className="flex items-center font-medium space-x-4">
                Sort by :{" "}
                <MdOutlineKeyboardArrowDown className=" cursor-pointer font-normal" />
              </p>
            </div>
          </div>
          <div className=" md:p-4 h-4/5 space-y-2">
            <div className="bg-white md:p-6 p-2 h-1/3  shadow rounded-md flex justify-between space-x-4 relative">
              <div className="flex items-center space-x-2 md:space-x-6">
                <Image
                  src="/images/pngwing.com (14).png"
                  alt="Farm-Fresh Tomatoes"
                  width={200}
                  height={100}
                  className="rounded-lg w-16 h-24 md:w-24 p-4 md:h-32 bg-green-100"
                />
                <div className="flex flex-col space-y-2">
                  <h3 className="font-semibold md:text-lg text-xs">
                    Sweet Bell Harri Mix
                  </h3>
                  <div className="price flex md:text-base text-x items-center space-x-4 text-gray-500">
                    <p>₦4000</p>
                    <span className=" text-green-500">In stock</span>
                  </div>
                  <div className="quantity md:text-base text-sm space-x-2 md:space-x-4 flex items-center">
                    <FaMinus className="p-1 bg-slate-200 rounded-sm text-sm md:text-lg cursor-pointer" />
                    <span>2</span>
                    <MdAdd className="p-1 bg-slate-200 rounded-sm text-sm md:text-lg cursor-pointer" />
                    <span className="text-x">X</span>
                    <p className=" text-x">₦4000</p>
                  </div>
                </div>
              </div>

              <h1 className=" text-sm md:text-2xl font-bold flex flex-col items-center absolute right-5 bottom-5">
                ₦4000{" "}
                <MdDeleteOutline className=" text-sm md:text-3xl mt-6 text-red-500 cursor-pointer" />
              </h1>
            </div>

            <div className="bg-white md:p-6 p-2 h-1/3  shadow rounded-md flex justify-between space-x-4 relative">
              <div className="flex items-center space-x-2 md:space-x-6">
                <Image
                  src="/images/pngwing.com (12).png"
                  alt="Farm-Fresh Tomatoes"
                  width={200}
                  height={100}
                  className="rounded-lg w-16 h-24 md:w-24 p-4 md:h-32 bg-green-100"
                />
                <div className="flex flex-col space-y-2">
                  <h3 className="font-semibold md:text-lg text-xs">
                    Fresh Kale Greens
                  </h3>
                  <div className="price flex md:text-base text-x items-center space-x-2 md:space-x-4 text-gray-500">
                    <p>₦2000</p>
                    <span className=" text-gray-500">avaliable in 3 days</span>
                  </div>
                  <div className="quantity md:text-base text-sm space-x-2 md:space-x-4 flex items-center">
                    <FaMinus className="p-1 bg-slate-200 rounded-sm text-sm md:text-lg cursor-pointer" />
                    <span>2</span>
                    <MdAdd className="p-1 bg-slate-200 rounded-sm text-sm md:text-lg cursor-pointer" />
                    <span className=" text-x">X</span>
                    <p className=" text-x">₦4000</p>
                  </div>
                </div>
              </div>

              <h1 className=" text-sm md:text-2xl font-bold flex flex-col items-center absolute right-5 bottom-5 text-gray-400">
                ₦4000{" "}
                <MdDeleteOutline className=" text-sm md:text-3xl mt-6 text-red-500 cursor-pointer" />
              </h1>
            </div>
            <div className="bg-white md:p-6 p-2 h-1/3  shadow rounded-md flex justify-between space-x-4 relative">
              <div className="flex items-center space-x-2 md:space-x-6">
                <Image
                  src="/images/pngwing.com (15).png"
                  alt="Farm-Fresh Tomatoes"
                  width={200}
                  height={100}
                  className="rounded-lg w-16 h-24 md:w-24 p-4 md:h-32 bg-green-100"
                />
                <div className="flex flex-col space-y-2">
                  <h3 className="font-semibold md:text-lg text-xs">
                    Fresh Green Wafers
                  </h3>
                  <div className="price flex md:text-base text-x items-center space-x-4 text-gray-500">
                    <p>₦4000</p>
                    <span className=" text-red-500">Out of stock</span>
                  </div>
                  <div className="quantity md:text-base text-sm space-x-2 md:space-x-4 flex items-center">
                    <FaMinus className="p-1 bg-slate-200 rounded-sm text-sm md:text-lg cursor-pointer" />
                    <span>2</span>
                    <MdAdd className="p-1 bg-slate-200 rounded-sm text-sm md:text-lg cursor-pointer" />
                    <span className=" text-x">X</span>
                    <p className=" text-x">₦4000</p>
                  </div>
                </div>
              </div>

              <h1 className=" text-sm md:text-2xl font-bold flex flex-col items-center absolute right-5 bottom-5 text-gray-400">
                ₦7000{" "}
                <MdDeleteOutline className=" text-sm md:text-3xl mt-6 text-red-500 cursor-pointer" />
              </h1>
            </div>
          </div>
        </div>
        <div className="md:w-full lg:w-4/12 w-full">
          <div className="bg-slate-50 p-4 shadow-md rounded-md space-y-6">
            <div className="w-full bg-gray-200 rounded-lg h-16 flex items-center justify-center space-x-2 py-0 px-2">
              <div
                className={`font-bold w-1/2 h-4/5 rounded-md text-center p-2 cursor-pointer text-lg ${
                  activeTab === "Free" ? "bg-slate-50" : " bg-transparent"
                }`}
                onClick={() => setActiveTab("Free")}
              >
                Free
              </div>
              <div
                className={`font-bold w-1/2 h-4/5 rounded-md text-center p-2 cursor-pointer text-lg ${
                  activeTab === "Express" ? "bg-slate-50" : ""
                }`}
                onClick={() => setActiveTab("Express")}
              >
                Express
              </div>
            </div>
            {activeTab === "Free" && (
              <div>
                <div className=" space-y-2">
                  <h3 className="text-gray-400 text-sm">
                    Delivery date: July 8th, 2024
                  </h3>
                  <h3>Card type</h3>
                  <div className="flex space-x-2 md:space-x-2 py-4">
                    <img
                      src="/images/Payment Method/PayPal.png"
                      alt="PayPal"
                      className="md:h-10 h-8"
                    />
                    <img
                      src="/images/Payment Method/MasterCard.png"
                      alt="MasterCard"
                      className="md:h-10 h-8"
                    />
                    <img
                      src="/images/Payment Method/Payoneer.png"
                      alt="Payoneer"
                      className="md:h-10 h-8"
                    />
                    <img
                      src="/images/Payment Method/visa.png"
                      alt="Visa"
                      className="md:h-10 h-8"
                    />
                    <img
                      src="/images/Payment Method/BanContact.png"
                      alt="BanContact"
                      className="md:h-10 h-8"
                    />
                  </div>
                </div>
                <form className="mt-4">
                  <label className="block">
                    <span className="text-gray-700">Name on card</span>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-4 text-sm"
                    />
                  </label>
                  <label className="block mt-4">
                    <span className="text-gray-700">Card Number</span>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm p-4"
                      placeholder="0000 0000 0000 0000"
                    />
                  </label>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <label className="block">
                      <span className="text-gray-700">Expiration Date</span>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-4 text-sm"
                        placeholder="mm/yy"
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700">CVV</span>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-4 text-sm"
                        placeholder="123"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col space-y-2 pt-6 border-t border-gray-400 mt-8">
                    <div className="flex items-center justify-between">
                      <p>Subtotal</p>
                      <p className="font-bold">₦4000.00</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Delivery</p>
                      <p className="font-bold">₦200.00</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Total&#40;tax. incl&#41;</p>
                      <p className="font-bold">₦5000.00</p>
                    </div>
                  </div>
                  <button className="mt-4 bg-lime-600 text-white p-4 font-bold rounded-md w-full text-lg hover:text-lime-600 transition-all duration-300 hover:bg-gray-100">
                    Checkout <span className="ml-2">₦5,000</span>
                  </button>
                </form>
              </div>
            )}
            {activeTab === "Express" && (
              <div>
                <div className=" space-y-2">
                  <h3 className="text-gray-400 text-sm">
                    Delivery date: July 8th, 2024
                  </h3>
                  <h3>Card type</h3>
                  <div className="flex flex-col  w-full space-y-2 md:space-y-2 py-4 ">
                    <Link
                      href="/"
                      className=" bg-black p-2 rounded-md text-center flex items-center justify-center"
                    >
                      <p className=" text-4xl text-white">
                        <FaGooglePay />
                      </p>
                    </Link>
                    <Link
                      href="/"
                      className=" bg-green-500 p-2 rounded-md text-center flex items-center justify-center"
                    >
                      <p className=" text-4xl">
                        <FaApplePay />
                      </p>
                    </Link>
                  </div>
                  <form className="mt-4">
                    <label className="block">
                      <span className="text-gray-700">Name on card</span>
                      <input
                        type="text"
                        placeholder="Full name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-4 text-sm"
                      />
                    </label>
                    <label className="block mt-4">
                      <span className="text-gray-700">Card Number</span>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sm p-4"
                        placeholder="0000 0000 0000 0000"
                      />
                    </label>

                    <div className="flex flex-col space-y-2 pt-6 border-t border-gray-400 mt-8">
                      <div className="flex items-center justify-between">
                        <p>Subtotal</p>
                        <p className="font-bold">₦4000.00</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Delivery</p>
                        <p className="font-bold">₦200.00</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Total&#40;tax. incl&#41;</p>
                        <p className="font-bold">₦5000.00</p>
                      </div>
                    </div>
                    <button className="mt-4 bg-lime-600 text-white p-4 font-bold rounded-md w-full text-lg hover:text-lime-600 transition-all duration-300 hover:bg-gray-100">
                      Checkout <span className="ml-2">₦5,000</span>
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
