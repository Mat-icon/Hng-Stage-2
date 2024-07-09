"use client";
import Link from "next/link";
import { MdFilterList, MdSearch, MdShoppingCart } from "react-icons/md";
import products from "./Products";
import { useState } from "react";

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto px-4 py-16 poppins">
      <div className="w-full flex items-center justify-between">
        <div className="relative inline-block text-left  md:block lg:hidden">
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              All Products
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>




          {isOpen && (
            <div
              className="origin-top-right absolute z-20 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Fruits
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Vegetables
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Organic
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Packaged
                </a>
              </div>
            </div>
          )}
        </div>





        <div className="hidden md:hidden lg:block">
          <ul className="inline-flex space-x-2 md:space-x-8 text-gray-500  md:text-xl">
            <li>
              <Link href="/" className=" active:text-green-500">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/">Fruits</Link>
            </li>
            <li>
              <Link href="/">Vegetables</Link>
            </li>
            <li>
              <Link href="/">Organic</Link>
            </li>
            <li>
              <Link href="/">Packaged</Link>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4 items-center">
          <MdSearch className=" text-lg" />
          <MdFilterList className=" text-lg" />
        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden"
          >
            <span className="absolute top-0 left-0 p-2 px-2 w-14 text-xs bg-green-500 text-white ">
              {product.discount}% off
            </span>
            <img
              src={`/images/${product.image}`}
              alt={product.name}
              className=" h-1/2 w-4/5"
            />
            <div className="popular-text text-center">
              <h2 className="font-bold">{product.name}</h2>
              <p className=" text-green-600">₦{product.price}</p>
              <p className=" text-gray-400 line-through">
                ₦{product.discountedPrice}
              </p>
            </div>{" "}
            <Link
              href="/cart"
              className="p-2 rounded-md text-sm flex  items-center text-green-700 add hover:bg-gray-200"
            >
              <MdShoppingCart className=" text-green-700 mr-2" />
              Add
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
