"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import fetchProducts from "../api/proxy";
import { MdCamera, MdFilterList, MdSearch, MdShoppingCart } from "react-icons/md";
import axios from "axios";
import { useRouter } from "next/navigation";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts({
          organization_id: process.env.TIMBU_ORGANIZATION,
          Appid: process.env.TIMBU_CLOUD_ID,
          Apikey: process.env.TIMBU_CLOUD_KEY,
          page: currentPage,
          size: pageSize,
          reverse_sort: false
        });
        setProducts(data.items);
        setTotalPages(Math.ceil(data.total / pageSize));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [currentPage]);

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    handleSearch(newQuery);
  };

  const handleSearch = (query) => {
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(result);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  const handleAddClick = async (product_id) => {
    try {
      const response = await axios.get('/api/router', {
        params: {
          organization_id: '7101c48ff6214e71a6cfff321ff556aa',
          Appid: 'MGUL2NAI5DLU5GH',
          Apikey: '8ecfeb5549904529afd093898202424a20240712121850955434'
        }
      });
      const productDetails = response.data.items;
      // Navigate to ProductDetail page with product details
      console.log(productDetails)
      router.push({
        pathname: '/cart',
        query: { productDetails: JSON.stringify(productDetails) }
      });
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-16 poppins">
      <div className="w-full flex items-center justify-between">
        <div className="relative inline-block text-left md:block lg:hidden">
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
                  id="menu-item-3"
                >
                  Packaged
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="hidden md:hidden lg:block">
          <ul className="inline-flex space-x-2 md:space-x-8 text-gray-500 md:text-xl">
            <li>
              <Link href="/" className="active:text-green-500">
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
          <MdFilterList className="text-lg cursor-pointer" />
          <MdCamera className="text-lg cursor-pointer" />
        </div>
      </div>
      <form className="lg:w-4/6 w-full mt-8 flex">
        <input
          placeholder="search for product"
          type="text"
          className="md:p-4 p-2 rounded-md text-xs w-4/6 bg-slate-50"
          style={{ border: "1px solid #7AC74F" }}
          value={query}
          onChange={handleInputChange}
        />
        <button
          className="md:p-4 p-2 rounded-md ml-3 text-xs"
          style={{ background: "#7AC74F", color: "white" }}
          onClick={(e) => e.preventDefault()}
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden"
          >
            <span className="absolute top-0 left-0 p-2 px-2 w-14 text-xs bg-green-500 text-white">
              {product.discount}% off
            </span>
            <img
              src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
              alt={product.name}
              className="h-1/2 w-4/5"
            />
            <div className="popular-text text-center">
              <h2 className="font-bold">{product.name}</h2>
              <p className="text-green-600">₦{product.current_price[0].NGN[0]}</p>
              <p className="text-gray-400 line-through">₦{product.discountedPrice}</p>
            </div>
            <button
             onClick={() => handleAddClick(product.id)}
              className="p-2 rounded-md text-sm flex items-center text-green-700 add hover:bg-gray-200"
            >
              <MdShoppingCart className="text-green-700 mr-2" />
              Add
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md text-sm"
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-md text-sm"
        >
          Next
        </button>
      </div>
      
    </div>
  );
};

export default ProductList;
