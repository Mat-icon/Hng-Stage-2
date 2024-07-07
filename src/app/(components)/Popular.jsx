import Link from "next/link";
import React from "react";
import { MdShoppingCart } from "react-icons/md";

const Popular = () => {
  return (
    <div className="w-full h-auto py-8 px-4 md:px-12">
      <h1 className="w-full text-center text-2xl font-bold text-green-700">
        Popular Product
      </h1>
      <ul className="flex mt-8 justify-center text-slate-400 space-x-4 md:space-x-16">
      <li>
          <Link href="/" className=' hover:text-green-500'>All</Link>
        </li>
        <li>
          <Link href="/" className=' hover:text-green-500'>Products</Link>
        </li>
        <li>
          <Link href="/" className=' hover:text-green-500'>Deal</Link>
        </li>
        <li>
          <Link href="/" className=' hover:text-green-500'>New</Link>
        </li>
        <li>
          <Link href="/" className=' hover:text-green-500'>On Sale</Link>
        </li>
      </ul>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4">
        <div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-0 left-0 p-2 px-4 w-14 text-sm bg-green-500 text-white">
            12%
          </span>
          <img
            src="/images/pngwing.com (12).png"
            alt="popular-img"
            className=" h-1/2 "
          />
          <div className="popular-text text-center">
            <h2 className="font-bold">Fresh Kale Greens</h2>
            <p>$4000</p>
            <p className=" text-gray-400 line-through">$4300</p>
          
          </div>    <Link href='/cart'
              className="p-2 rounded-md text-sm flex font-bold items-center text-green-700"
              style={{ background: "#79c74f60" }}
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
            </Link>
        </div>
        <div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-0 left-0 p-2 px-4 w-14 text-sm bg-green-500 text-white">
            12%
          </span>
          <img
            src="/images/pngwing.com (19).png"
            alt="popular-img"
            className=" h-1/2"
          />
          <div className="popular-text text-center">
            <h2 className="font-bold">Fresh Kale Greens</h2>
            <p>$4000</p>
            <p className=" text-gray-400 line-through">$4300</p>
          
          </div>    <Link href='/cart'
              className="p-2 rounded-md text-sm flex font-bold items-center text-green-700"
              style={{ background: "#79c74f60" }}
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
            </Link>
        </div><div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-0 left-0 p-2 px-4 w-14 text-sm bg-green-500 text-white">
            12%
          </span>
          <img
            src="/images/pngwing.com (13).png"
            alt="popular-img"
            className=" h-1/2"
          />
          <div className="popular-text text-center">
            <h2 className="font-bold">Fresh Kale Greens</h2>
            <p>$4000</p>
            <p className=" text-gray-400 line-through">$4300</p>
          
          </div>    <Link href='/cart'
              className="p-2 rounded-md text-sm flex font-bold items-center text-green-700"
              style={{ background: "#79c74f60" }}
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
            </Link>
        </div><div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-0 right-0 p-2 px-4 w-14 text-sm bg-yellow-300 text-yellow-900 font-bold">
            New
          </span>
          <img
            src="/images/pngwing.com (14).png"
            alt="popular-img"
            className=" h-1/2 "
          />
          <div className="popular-text text-center">
            <h2 className="font-bold">Fresh Kale Greens</h2>
            <p>$4000</p>
            <p className=" text-gray-400 line-through">$4300</p>
          
          </div>    <Link href='/cart'
              className="p-2 rounded-md text-sm flex font-bold items-center text-green-700"
              style={{ background: "#79c74f60" }}
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
            </Link>
        </div><div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-0 left-0 p-2 px-4 w-14 text-sm bg-green-500 text-white">
            12%
          </span>
          <img
            src="/images/pngwing.com (15).png"
            alt="popular-img"
            className=" h-1/2"
          />
          <div className="popular-text text-center">
            <h2 className="font-bold">Fresh Kale Greens</h2>
            <p>$4000</p>
            <p className=" text-gray-400 line-through">$4300</p>
          
          </div>    <Link href='/cart'
              className="p-2 rounded-md text-sm flex font-bold items-center text-green-700"
              style={{ background: "#79c74f60" }}
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
            </Link>
        </div><div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-0 left-0 p-2 px-4 w-14 text-sm bg-green-500 text-white">
            12%
          </span>
          <img
            src="/images/pngwing.com (16).png"
            alt="popular-img"
            className=" h-1/2 "
          />
          <div className="popular-text text-center">
            <h2 className="font-bold">Fresh Kale Greens</h2>
            <p>$4000</p>
            <p className=" text-gray-400 line-through">$4300</p>
          
          </div>    <Link href='/cart'
              className="p-2 rounded-md text-sm flex font-bold items-center text-green-700"
              style={{ background: "#79c74f60" }}
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
            </Link>
        </div><div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
        <span className="absolute top-0 right-0 p-2 px-4 w-14 text-sm bg-yellow-300 text-yellow-900 font-bold">
            New
          </span>
          <img
            src="/images/pngwing.com (17).png"
            alt="popular-img"
            className=" h-1/2 "
          />
          <div className="popular-text text-center">
            <h2 className="font-bold">Fresh Kale Greens</h2>
            <p>$4000</p>
            <p className=" text-gray-400 line-through">$4300</p>
          
          </div>    <Link href='/cart'
              className="p-2 rounded-md text-sm flex font-bold items-center text-green-700"
              style={{ background: "#79c74f60" }}
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
            </Link>
        </div><div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-0 left-0 p-2 px-4 w-14 text-sm bg-green-500 text-white">
            12%
          </span>
          <img
            src="/images/pngwing.com (18).png"
            alt="popular-img"
            className=" h-1/2 w-4/5"
          />
          <div className="popular-text text-center">
            <h2 className="font-bold">Fresh Kale Greens</h2>
            <p>$4000</p>
            <p className=" text-gray-400 line-through">$4300</p>
          
          </div>    <Link href='/cart'
              className="p-2 rounded-md text-sm flex font-bold items-center text-green-700"
              style={{ background: "#79c74f60" }}
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Popular;
