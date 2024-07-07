import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Featured = () => {
  return (
    <div id="categories" className="w-full h-auto px-4 md:px-12 pb-4">
      <div className="flex flex-col mt-20">
        <h1 className="w-full text-center text-2xl font-extrabold text-green-700">
          Featured Categories
        </h1>
        <div className="arrows space-x-4 flex items-center justify-end mt-2">
          <FaArrowLeft className=" w-8 text-gray-400 h-8 p-1 border-size rounded-full  border-gray-500 hover:text-green-500 hover:border-green-500 cursor-pointer" />
          <FaArrowRight className=" w-8 text-gray-400 h-8 p-1 border-size rounded-full  border-gray-500 hover:text-green-500 hover:border-green-500 cursor-pointer" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-2 md:gap-4 mt-4">
          <div
            className="flex flex-col items-center p-8 rounded-md justify-center relative product-card"
            style={{ background: "#79c74f60" }}
          >
            <img src="/images/pngwing.com (5).png" alt="product" />
            <p className=" font-bold text-green-800 text-sm md:text-base lg:text-xl absolute bottom-2">
              Vegetables
            </p>
          </div>
          <div
            className="flex flex-col items-center p-8 rounded-md justify-center relative product-card"
            style={{ background: "#79c74f60" }}
          >
            <img src="/images/pngwing.com (6).png" alt="product" />
            <p className=" font-bold text-green-800 text-sm md:text-base lg:text-xl absolute bottom-2">
             Strawberries
            </p>
          </div>
          <div
            className="flex flex-col items-center p-8 rounded-md justify-center relative product-card"
            style={{ background: "#79c74f60" }}
          >
            <img src="/images/pngwing.com (7).png" alt="product" />
            <p className=" font-bold text-green-800 text-sm md:text-base lg:text-xl absolute bottom-2">
              Meats
            </p>
          </div>
          <div
            className="flex flex-col items-center p-8 rounded-md justify-center relative product-card"
            style={{ background: "#79c74f60" }}
          >
            <img src="/images/pngwing.com (8).png" alt="product" className="smoothie"/>
            <p className=" font-bold text-green-800 text-sm md:text-base lg:text-xl absolute bottom-2">
              Coffee and Tea
            </p>
          </div>
        </div>
      </div>

      <div className="contain md:hidden lg:block hidden  mt-20  border-green-400  rounded-xl p-4">
        <div className="flex flex-col md:flex-row product-card space-x-12">
          <img
            src="/images/pngwing.com (9).png"
            about="product-img"
            className="product-card w-96 rounded-lg"
            style={{ background: "#67686660" }}
          />
          <div className="product-content py-8 w-full">
            <h1 className="text-3xl font-extrabold">Fresh Tomato</h1>
            <div className="price flex space-x-4 mt-4 font-semibold">
              <p className=" text-green-700">$5000</p>
              <p className="text-gray-400 line-through">$7000</p>
            </div>
            <div className=" poppins flex items-center justify-between mt-8 text-gray-400">
              <p>Avaliable : 89</p>
              <p>Already Sold : 120</p>
            </div>
            <div className="range w-full h-3 mt2 rounded-xl bg-slate-300 relative"></div>
            <div className="w-2/5 grid grid-cols-4 gap-2 mt-8">
              <div
                className="time p-3 rounded-xl  text-center font-semibold"
                style={{ background: "#58b426", color: "white" }}
              >
                15 <br />
                DAYS
              </div>
              <div
                className="time p-3 rounded-xl  text-center font-semibold"
                style={{ background: "#58b426", color: "white" }}
              >
                15 <br />
                HR
              </div>
              <div
                className="time p-3 rounded-xl  text-center font-semibold"
                style={{ background: "#58b426", color: "white" }}
              >
                15 <br />
                MIN
              </div>
              <div
                className="time p-3 rounded-xl text-center font-semibold "
                style={{ background: "#58b426", color: "white" }}
              >
                13 <br />
                SEC
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nourish grid-cols-1 grid md:grid-cols-1 lg:grid-cols-2 items-center  gap-2 mt-20">
        <div
          className="flex flex-row items-center p-6 rounded-md  relative w-full md:w-full overflow-hidden"
          style={{ background: "#79c74f60" }}
        >
          <div className="nourish-content">
            <h1 className=" text-lg md:text-2xl font-bold">
              Nourish Your Body Now with Freshness
            </h1>
            <button
              className="p-2 md:p-4 px-12 md:px-6 rounded-md mt-8 text-xs"
              style={{ background: "#7AC74F", color: "white" }}
            >
              Shop Now
            </button>
          </div>

          <img
            src="/images/pngwing.com (10).png"
            alt="product"
            className="smoothie"
          />
        </div>
        <div
          className="flex flex-row items-center p-6 rounded-md  relative w-full md:w-full overflow-hidden"
          style={{ background: "#79c74f60" }}
        >
          <div className="nourish-content w-96">
            <h1 className=" text-lg md:text-2xl font-bold">
              From Our Field to Your Plate
            </h1>
            <button
              className="p-2 text-center md:p-4 px-12 md:px-6 text-xs rounded-md mt-8"
              style={{ background: "#7AC74F", color: "white" }}
            >
              Shop Now
            </button>
          </div>

          <img
            src="/images/pngwing.com (11).png"
            alt="product"
            className="smoothie2 relative left-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
