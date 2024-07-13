"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaArrowLeft, FaGooglePay, FaMinus, FaApplePay } from "react-icons/fa6";
import {
  MdAdd,
  MdDeleteOutline,
  MdOutlineKeyboardArrowDown,
  MdArrowRight,
} from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Checkout = ({pricePerUnit}) => {
  const [activeTab, setActiveTab] = useState("Free");
  const [products, setProducts] = useState([]);
  const params = useSearchParams();
  const id = params.get("id");
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const reduceQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Prevent quantity from going below 1
  };

  const calculateTotalPrice = quantity * pricePerUnit;

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
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-auto lg:h-200 poppins">
      <Header />
      <div className="w-full h-14 md:p-4 flex space-x-4 pl-8 md:pl-16 items-center text-sm poppins">
        <Link href="/">Home</Link>
        <MdArrowRight />
        <Link href="/cart">Cart</Link>
        <MdArrowRight />
        <Link href="/checkout" className="text-green-500">
          Checkout
        </Link>
      </div>
      <div className="w-full h-4/6 md:p-8 p-2 pb-2 container items-center mx-auto flex flex-col md:flex-col lg:flex-row space-y-8 md:space-x-4">
        <div className="lg:w-9/12  md:w-full w-full bg-slate-50 h-full shadow-md shadow-gray-300 p-2 md:p-4 rounded-lg">
          <div className="flex items-center pb-4 border-b border-slate-400">
            <Link href="/cart">
              <FaArrowLeft className="cursor-pointer" />
            </Link>
            <h2 className="ml-6 text-sm md:text-base">Continue Shopping</h2>
          </div>
          <div className="space-y-2 p-4 text-x md:text-base">
            <h2>Cart</h2>
            <div className="flex items-center justify-between">
              <p>You have 1 items in your cart</p>
              <p className="flex items-center font-medium space-x-4">
                Sort by :{" "}
                <MdOutlineKeyboardArrowDown className="cursor-pointer font-normal" />
              </p>
            </div>
          </div>
          <div className="md:p-4 md:h-3/5 lg:h-4/5 space-y-2 overflow-y-scroll">
            <div
              key={product.id}
              className="bg-white md:p-6 p-2 h-1/3 shadow rounded-md flex justify-between space-x-4 relative"
            >
              <div className="flex items-center space-x-2 md:space-x-6">
                <img
                  src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                  alt={product.name}
                  width={200}
                  height={100}
                  className="rounded-lg w-16 h-24 md:w-24 p-4 md:h-32 bg-green-100"
                />
                <div className="flex flex-col space-y-2">
                  <h3 className="font-semibold md:text-lg text-xs">
                    {product.name}
                  </h3>
                  <div className="price flex md:text-base text-x items-center space-x-4 text-gray-500">
                    <p>
                      {" "}
                      ₦{product.current_price}
                    </p>
                    <span className="text-green-500">
                      {product.stockStatus}
                    </span>
                  </div>
                  <div className="quantity md:text-base text-sm space-x-2 md:space-x-4 flex items-center">
                    <FaMinus
                      className="p-1 bg-slate-200 rounded-sm text-sm md:text-lg cursor-pointer"
                      onClick={reduceQuantity}
                    />
                    <span>{quantity}</span>
                    <MdAdd
                      className="p-1 bg-slate-200 rounded-sm text-sm md:text-lg cursor-pointer"
                      onClick={increaseQuantity}
                    />
                    <span className="text-x">X</span>
                    <p className="text-x">
                      ₦{(product.current_price * quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <h1 className="text-sm md:text-2xl font-bold flex flex-col items-center absolute right-5 bottom-5">
              ₦{(product.current_price * quantity).toFixed(2)}
                <MdDeleteOutline className="text-sm md:text-3xl mt-6 text-red-500 cursor-pointer" />
              </h1>
            </div>
          </div>

          <h3 className="font-semibold md:text-base text-xs pt-4 md:pt-0">
            Total: ₦{calculateTotalPrice.toFixed(2)}
          </h3>
        </div>

        <div className="md:w-full lg:w-4/12 w-full">
          <div className="bg-slate-50 p-4 shadow-md rounded-md space-y-6 ">
            <div className="w-full bg-gray-200 rounded-lg h-16 flex items-center justify-center space-x-2 py-0 px-2">
              <div
                className={`font-semibold w-1/2 h-4/5 rounded-md text-center p-2 cursor-pointer text-lg ${
                  activeTab === "Free" ? "bg-slate-50" : " bg-transparent"
                }`}
                onClick={() => setActiveTab("Free")}
              >
                Free
              </div>
              <div
                className={`font-semibold w-1/2 h-4/5 rounded-md text-center p-2 cursor-pointer text-lg ${
                  activeTab === "Express" ? "bg-slate-50" : ""
                }`}
                onClick={() => setActiveTab("Express")}
              >
                Express
              </div>
            </div>
            {activeTab === "Free" && (
              <div>
                <div className="space-y-2">
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
                        placeholder="MM/YY"
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700">CVV</span>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-4 text-sm"
                        placeholder="000"
                      />
                    </label>
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
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
                  <button className="mt-4 bg-lime-600 text-white p-4 rounded-md w-full text-base hover:text-lime-600 transition-all duration-300 hover:bg-gray-100">
                    Checkout{" "}
                    <span className="ml-2">₦{calculateTotalPrice.toFixed(2)}</span>
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
                    <button className="mt-4 bg-lime-600 text-white p-4 rounded-md w-full text-base hover:text-lime-600 transition-all duration-300 hover:bg-gray-100">
                      Checkout{" "}
                      <span className="ml-2">₦{calculateTotalPrice.toFixed(2)}</span>
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
