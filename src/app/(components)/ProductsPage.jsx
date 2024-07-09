import Link from "next/link";
import Header from "./Header";
import { MdArrowRight } from "react-icons/md";

const ProductsPage = () => {
  return (
    <>
    <Header/>
    <div className="w-full h-14 md:p-4 flex space-x-4 pl-8 md:pl-16 items-center text-sm poppins">
        <Link href='/'>Home</Link><MdArrowRight/><Link href='/products' className=" text-green-500">Products</Link>
    </div>
      <div
        className="bg-cover h-112 bg-top relative  text-white"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="md:pl-16 pl-8 relative md:top-48 top-36  text-left poppins">
          <h1 className="text-3xl md:text-5xl font-bold">
            Naturally Grown, Packed <br />
            with Nutrients
          </h1>
          <p className=" text-sm md:text-base mt-4">
            Start your daily shopping with our exclusive offers and<br/>  enjoy
            unbeatable freshness.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
