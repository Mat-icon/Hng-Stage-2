import React from "react";

const Promo = () => {
  return (
    <div className="w-full h-5/6 flex flex-col-reverse md:flex-row items-center promo p-6">
      <img
        src="/images/pngwing.com (20).png"
        alt="promo-img"
        className="w-1/2"
      />
      <div className="promo-content space-y-4 text-center">
        <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold">
          Save up to 30% <br /> on Fresh Veggies
        </h1>
        <p className=" text-xs md:text-xs lg:text-sm font-bold">
          Start your daily shopping with our exclusive offers and
          <br /> enjoy unbeatable freshness.
        </p>
        <button
          className="p-4 px-8 md:px-16 rounded-md mt-12"
          style={{ background: "#7AC74F", color: "white" }}
        >
          Shop Now and Save
        </button>
      </div>
    </div>
  );
};

export default Promo;
