import Image from "next/image";
import Header from "./Header";
import { FaArrowDown, FaArrowDown19, FaStar, FaStarHalf } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown, MdShoppingCart } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Footer from "./Footer";


const ProductDetail = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-2 md:p-8 poppins">
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex flex-col md:flex-row  justify-between  md:w-5/6 p-4">
          <div className="flex flex-col">
            <Image
              src="/images/pngwing.com (19).png"
              alt="Sweet Bell Hami Mix"
              width={350}
              height={350}
              className="p-4 bg-slate-50 h-4/6 shadow-md shadow-gray-300 rounded-md"
            />
            <div className=" bg-slate-50 shadow-lg shadow-gray-400 p-4 rounded-lg mt-4">
              <h2 className="text-xl font-bold mb-2">Usage Tips</h2>
              <ul className="list-disc list-inside">
                <li>Add to salads for a vibrant and nutritious touch</li>
                <li>Use in stir-fries for a sweet and colorful twist</li>
                <li>Enjoy as a fresh and healthy snack</li>
              </ul>
            </div>
          </div>
            

            <div className="w-full md:w-2/4 space-y-4">
            <h1 className="text-4xl font-bold mb-2 mt-6 md:mt-0">Sweet Bell Hami Mix</h1>{" "}
            <p className=" text-sm">
              Indulge in the vibrant and delicious flavors of our Sweet Bell
              Hami Mix, a delightful assortment of the freshest bell peppers.
              Perfectly packaged for convenience, this mix is ideal for adding a
              splash of color and a burst of sweetness to your meals.{" "}
            </p>
            <div className="w-full text-yellow-400 flex items-center space-x-4 text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
              <p className="flex items-center font-bold text-2xl text-black">
                4.5
                <span className=" text-sm font-normal ml-2">
                  &#40;7 reviews&#41;
                </span>
              </p>
            </div>
            <p className="text-4xl mb-2 flex flex-col text-green-700 font-bold">
              <span className="font-bold text-xs text-black">Total Price</span>
              ₦4000{" "}
              <span className=" text-base line-through text-gray-500">
                ₦7000
              </span>
            </p>{" "}
            <Link
              href="/cart"
              className="p-4 w-2/3 rounded-md text-sm flex justify-center items-center text-green-700"
              style={{ background: "#79c74f60" }}
            >
              <MdShoppingCart className=" text-green-700 mr-2" />
              Add To Shopping Cart
            </Link>
          </div>
          </div>
         
          <div className="w-full md:w-1/2  p-4">
        

            <div className="bg-gray-50  shadow-lg shadow-gray-300 rounded-lg space-y-6 p-2">
                <div className=" p-8">
              
              <h2 className="text-xl font-bold mb-2 ">Key Features</h2>
              <ul className="list-disc list-inside">
                <li>
                  <span className=" font-bold">Fresh and flavorful:</span> A mix of red, yellow, and orange bell
                  peppers
                </li>
                <li>
                <span className=" font-bold">Nutritious:</span> Packed with vitamins A and C, antioxidants, and
                  essential nutrients
                </li>
                <li><span className=" font-bold">Convenient packaging:</span> Pre-washed and ready to use</li>
              </ul>
      
              </div>
              <div className="pt-4 border-t border-gray-400  p-8" >
              <h2 className="text-xl font-bold mb-2">Reviews</h2>
              <div>
                <p>
                  Jane D: <span className="text-yellow-500">★★★★★</span>
                </p>
                <p>
                  The sweet bell hami mix is a game-changer for my meal preps.
                </p>
              </div>
              <div>
                <p>
                  Mark R: <span className="text-yellow-500">★★★★★</span>
                </p>
                <p>My kids love the colorful bell peppers in their lunches.</p>
              </div>
            </div> <MdOutlineKeyboardArrowDown className="w-full text-center text-3xl cursor-pointer"/>
            </div>
            
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-4">You may also like</h2>
            <div className="arrows space-x-4 flex items-center justify-end mt-2">
              <FaArrowLeft className=" w-8 text-gray-400 h-8 p-1 border-size rounded-full  border-gray-500 hover:text-green-500 hover:border-green-500 cursor-pointer" />
              <FaArrowRight className=" w-8 text-gray-400 h-8 p-1 border-size rounded-full  border-gray-500 hover:text-green-500 hover:border-green-500 cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
           
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
              <h3 className="text-lg font-bold mt-2">Farm-Fresh Tomatoes</h3>
              <p className="text-gray-600 flex flex-col">
                ₦6000 <span className="line-through text-gray-400">₦8000</span>
              </p>
              <Link href='/cart'
              className="p-2 rounded-md text-sm flex font-bold items-center mt-2 text-green-700"
              style={{ background: "#79c74f60" }}
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
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
              <h3 className="text-lg font-bold mt-2">Farm-Fresh Tomatoes</h3>
              <p className="text-gray-600 flex flex-col">
                ₦6000 <span className="line-through text-gray-400">₦8000</span>
              </p>
              <Link href='/cart'
              className="p-2 rounded-md text-sm flex font-bold items-center mt-2 text-green-700"
              style={{ background: "#79c74f60" }}
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
            </Link>
            </div>  <div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
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
              <h3 className="text-lg font-bold mt-2">Farm-Fresh Tomatoes</h3>
              <p className="text-gray-600 flex flex-col">
                ₦6000 <span className="line-through text-gray-400">₦8000</span>
              </p>
              <Link href='/cart'
              className="p-2 rounded-md text-sm flex font-bold items-center mt-2 text-green-700"
              style={{ background: "#79c74f60" }}
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
            </Link>
            </div>  <div className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
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
              <Link href='/cart'
              className="p-2 rounded-md text-sm flex font-bold items-center mt-2 text-green-700"
              style={{ background: "#79c74f60" }}
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
            </Link>
            </div>
          </div>
        </div>
       
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetail;
