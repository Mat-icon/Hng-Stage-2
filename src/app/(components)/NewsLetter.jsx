import React from "react";

const NewsLetter = () => {
  return (
    <div className="relative w-full h-110 bg-slate-200 overflow-hidden">
      <img
        src="/images/pngwing.com (45).png"
        alt="popular-img"
        className=" absolute top-0 -left-14 lg:w-72 lg:h-72  md:w-44 md:h-44 w-28 h-28"
      />{" "}
      <img
        src="/images/pngwing.com (46).png"
        alt="popular-img"
        className=" absolute bottom-0 -right-14 lg:w-72 lg:h-72 md:w-44 md:h-44 w-28 h-28"
      />
      <div className="w-full h-full flex justify-center ">
        <div className="w-11/12 md:w-4/6 lg:w-3/6 h-3/5  bg-green-50 flex justify-center flex-col  rounded-md shadow-lg shadow-gray-300 mt-24 p-4 md:p-12 space-y-2">
          <p className="text-gray-400 text-xs md:text-sm">Stay Fresh For Our Updates</p>
          <p className="md:text-base text-sm">
            Never miss out on our latest arrivals, exclusive discounts, and
            fresh veggie tips
          </p>
          <h1 className=" text-green-500 font-bold text-sm md:text-xl">
            Subscribe today and enjoy a fresher way to shop!
          </h1>
          <form>
            <input
              placeholder="Enter your email"
              className="p-2 text-xs md:p-4  md:text-sm border border-green-800 w-3/5  rounded-md"
            />
            <button
              className="p-2 md:p-4 px-4 text-xs md:px-6 rounded-md md:text-sm mt-2 ml-2"
              style={{ background: "#7AC74F", color: "white" }}
            >
                Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
