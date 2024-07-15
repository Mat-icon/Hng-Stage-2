"use client";

import Image from "next/image";
import { MdArrowRight } from "react-icons/md";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown, MdShoppingCart } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "../(components)/Header";
import Footer from "../(components)/Footer";
import { BallTriangle } from "react-loader-spinner";

const SubCartDetails = () => {
  const params = useSearchParams();
  const id = params.get("id");

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(
          `https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=7101c48ff6214e71a6cfff321ff556aa&Appid=MGUL2NAI5DLU5GH&Apikey=8ecfeb5549904529afd093898202424a20240712121850955434`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  if (!product) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <BallTriangle/>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-col lg:flex-row">
      <div className="w-full flex flex-col md:flex-row justify-between md:w-5/6 p-4">
        <div className="flex flex-col">
          <img
            src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
            alt={product.name}
            width={280}
            height={200}
            className="p-10 bg-slate-50 w-11/12 h-4/7 shadow-md shadow-gray-300 rounded-md"
          />
          <div className="bg-slate-50 shadow-lg shadow-gray-400 p-6 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-2">Usage Tips</h2>
            <ul className="list-disc list-inside">
              <li>Add to salads for a vibrant and nutritious touch</li>
              <li>Use in stir-fries for a sweet and colorful twist</li>
              <li>Enjoy as a fresh and healthy snack</li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-2/4 md:w-full md:ml-4 lg:ml-2 space-y-4">
          <h1 className="text-4xl font-bold mb-2 mt-6 md:mt-0">
            {product.name}
          </h1>
          <p className="text-sm">
            Indulge in the vibrant and delicious flavors of our Sweet Bell Hami
            Mix, a delightful assortment of the freshest bell peppers. Perfectly
            packaged for convenience, this mix is ideal for adding a splash of
            color and a burst of sweetness to your meals.
          </p>
          <div className="w-full text-yellow-400 flex items-center space-x-2 md:space-x-4 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
            <p className="flex items-center font-bold text-2xl text-black">
              4.5
              <span className="text-sm font-normal ml-2">
                &#40;7 reviews&#41;
              </span>
            </p>
          </div>
          <p className="text-4xl mb-2 flex flex-col text-green-700 font-bold">
            <span className="font-bold text-xs text-black">Total Price</span>₦
            {product.current_price}
            <span className="text-base line-through text-gray-500">₦7000</span>
          </p>
          <Link
            href={`/checkout?id=${product.id}`}
            className="p-4 md:w-3/4 w-full rounded-md text-sm flex justify-center items-center hover:bg-gray-100 add text-green-700"
          >
            <MdShoppingCart className="text-green-700 mr-2" />
            Add To Shopping Cart
          </Link>
        </div>
      </div>

      <div className="w-full md:w-full lg:w-1/2 p-4">
        <div className="bg-gray-50 shadow-lg shadow-gray-300 rounded-lg space-y-6 p-2">
          <div className="p-4 md:p-8">
            <h2 className="text-xl font-bold mb-2">Key Features</h2>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Fresh and flavorful:</span> A mix of
                red, yellow, and orange bell peppers
              </li>
              <li>
                <span className="font-bold">Nutritious:</span> Packed with
                vitamins A and C, antioxidants, and essential nutrients
              </li>
              <li>
                <span className="font-bold">Convenient packaging:</span>{" "}
                Pre-washed and ready to use
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-gray-400 md:p-8 p-4">
            <h2 className="text-lg text-yellow-600 font-bold mb-2">Review</h2>
            <div className="space-y-4">
              <div>
                <p className="flex items-center justify-between font-bold">
                  Jane D: <span className="text-yellow-300">★★★★★</span>
                </p>
                <p className="text-sm">
                  The Sweet Bell Hami Mix is a game-changer for my meal preps.
                  Fresh and flavorful every time!
                </p>
              </div>
              <div>
                <p className="flex items-center justify-between font-bold">
                  Mark R: <span className="text-yellow-300">★★★★★</span>
                </p>
                <p className="text-sm">
                  My kids love the colorful bell peppers in their lunchboxes. A
                  healthy and tasty option!
                </p>
              </div>
            </div>
          </div>
          <MdOutlineKeyboardArrowDown className="w-full text-center text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
const CartDetails = () => {
  return (
    <>
      <Header />
      <div className="w-full h-14 md:p-4 flex space-x-4 pl-8 md:pl-16 items-center text-sm poppins">
        <Link href="/">Home</Link>
        <MdArrowRight />
        <Link href="/products">Products</Link>
        <MdArrowRight />
        <Link href="/cart" className=" text-green-500">
          Cart
        </Link>
      </div>
      <div className="container mx-auto p-2 md:p-4 lg:p-8 poppins">
        <SubCartDetails />
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="md:text-2xl font-bold mb-4 text-xl">
              You may also like
            </h2>
            <div className="arrows space-x-4 flex items-center justify-end">
              <FaArrowLeft className=" w-8 text-gray-400 h-8 p-1 border-size rounded-full  border-gray-500 hover:text-green-500 hover:border-green-500 cursor-pointer" />
              <FaArrowRight className=" w-8 text-gray-400 h-8 p-1 border-size rounded-full  border-gray-500 hover:text-green-500 hover:border-green-500 cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
              <span className="absolute top-0 left-0 p-2 px-4 w-14 text-sm bg-green-500 text-white">
                12%
              </span>
              <Image
                src="/images/pngwing.com (17).png"
                alt="Farm-Fresh Tomatoes"
                width={200}
                height={200}
                className="rounded-lg h-1/2"
              />
              <h3 className="text-lg font-bold mt-2">
                Organic Zucchini Squash
              </h3>
              <p className="text-gray-600 flex flex-col">
                ₦2000 <span className="line-through text-gray-400">₦3000</span>
              </p>
              <Link
                href="/cart"
                className="p-2 rounded-md text-sm flex font-bold items-center mt-2 text-green-700"
                style={{ background: "#79c74f60" }}
              >
                <MdShoppingCart className=" text-green-700 mr-2" />
                Add
              </Link>
            </div>
            <div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
              <span className="absolute top-0 left-0 p-2 px-4 w-14 text-sm bg-green-500 text-white">
                12%
              </span>
              <Image
                src="/images/pngwing.com (19).png"
                alt="Farm-Fresh Tomatoes"
                width={200}
                height={200}
                className="rounded-lg  h-1/2"
              />
              <h3 className="text-lg font-bold mt-2">Herb Infused Olive Oil</h3>
              <p className="text-gray-600 flex flex-col">
                ₦7000 <span className="line-through text-gray-400">₦10000</span>
              </p>
              <Link
                href="/cart"
                className="p-2 rounded-md text-sm flex font-bold items-center mt-2 text-green-700"
                style={{ background: "#79c74f60" }}
              >
                <MdShoppingCart className=" text-green-700 mr-2" />
                Add
              </Link>
            </div>{" "}
            <div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
              <span className="absolute top-0 left-0 p-2 px-4 w-14 text-sm bg-green-500 text-white">
                12%
              </span>
              <Image
                src="/images/pngwing.com (18).png"
                alt="Farm-Fresh Tomatoes"
                width={200}
                height={200}
                className="rounded-lg  h-1/2"
              />
              <h3 className="text-lg font-bold mt-2">Crisp Romaine Lettuce</h3>
              <p className="text-gray-600 flex flex-col">
                ₦4000 <span className="line-through text-gray-400">₦7000</span>
              </p>
              <Link
                href="/cart"
                className="p-2 rounded-md text-sm flex font-bold items-center mt-2 text-green-700"
                style={{ background: "#79c74f60" }}
              >
                <MdShoppingCart className=" text-green-700 mr-2" />
                Add
              </Link>
            </div>{" "}
            <div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
              <span className="absolute top-0 left-0 p-2 px-4 w-14 text-sm bg-green-500 text-white">
                12%
              </span>
              <Image
                src="/images/pngwing.com (16).png"
                alt="Farm-Fresh Tomatoes"
                width={200}
                height={200}
                className="rounded-lg  h-1/2"
              />
              <h3 className="text-lg font-bold mt-2">Farm-Fresh Tomatoes</h3>
              <p className="text-gray-600 flex flex-col">
                ₦6000 <span className="line-through text-gray-400">₦8000</span>
              </p>
              <Link
                href="/cart"
                className="p-2 rounded-md text-sm flex font-bold items-center mt-2 text-green-700"
                style={{ background: "#79c74f60" }}
              >
                <MdShoppingCart className=" text-green-700 mr-2" />
                Add
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartDetails;
