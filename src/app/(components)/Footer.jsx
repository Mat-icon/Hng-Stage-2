import {
    FaApple,
    FaFacebook,
    FaInstagram,
    FaXTwitter,
    FaLinkedin,
    FaYoutube,
  } from "react-icons/fa6";
  import { RiGooglePlayFill } from "react-icons/ri";
  
  export default function Footer() {
    return (
      <footer className="text-white pt-10 poppins" style={{ background: "#589C32" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row items-start justify-between">
            
            <div className="w-full md:w-6/12 space-y-4">
              <img
                src="/images/Logo white.png"
                alt="logowhite"
                className="w-38 h-16 mx-0"
              />
              <p className="lg:text-sm md:text-xs text-xs  text-left">
                At Farmfresh, we are committed to delivering the freshest and
                healthiest vegetables straight from the farm to your table. Our
                mission is to make healthy eating easy and accessible for
                everyone. Join us on our journey towards a healthier lifestyle.
              </p>
            
                <div className="flex flex-row justify-between md:justify-normal items-center space-x-2  md:space-x-4">
                  <img src="/images/Frame 71.png" alt="download" className="w-32 md:w-32 lg:w-44 cursor-pointer"/>
                  <img src="/images/Frame 70.png" alt="download" className="w-32 md:w-32 lg:w-44  cursor-pointer"/>
               
              </div>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-white hover:text-gray-200"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-white hover:text-gray-200"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-white hover:text-gray-200"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-white hover:text-gray-200"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-white hover:text-gray-200"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
  
           <div className="flex flex-row space-x-6 lg:space-x-12 md:space-x-6">
            <div className="w-full md:w-auto  md:text-left">
              <h2 className="text-sm md:text-sm lg:text-lg font-semibold mb-4">My Account</h2>
              <ul className="text-x md:text-xs lg:text-sm space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Log In
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Order History
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Account Settings
                  </a>
                </li>
              </ul>
            </div>
  
           
            <div className="w-full md:w-auto text-left">
              <h2 className="text-sm md:text-sm lg:text-lg  font-semibold mb-4">Helps</h2>
              <ul className="text-x md:text-xs lg:text-sm space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
  
       
            <div className="w-full md:w-auto text-left">
              <h2 className="text-sm md:text-sm lg:text-lg font-semibold mb-4">Proxy</h2>
              <ul className="text-x md:text-xs lg:text-sm space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div></div>
        <div className="w-full h-14 bg-white mt-10 md:pr-4 flex justify-center md:justify-end">
          <div className="flex space-x-4 py-4">
            <img
               src="/images/Payment Method/PayPal.png"
              alt="Mastercard"
              className="h-8"
            />
            <img
              src="/images/Payment Method/MasterCard.png"
              alt="PayPal"
              className="h-8"
            />
            <img
               src="/images/Payment Method/Payoneer.png"
              alt="Payoneer"
              className="h-8"
            />
            <img
              src="/images/Payment Method/visa.png"
              alt="Visa"
              className="h-8"
            />
             <img
              src="/images/Payment Method/BanContact.png"
              alt="Visa"
              className="h-8"
            />
          </div>
        </div>
      </footer>
    );
  }
  