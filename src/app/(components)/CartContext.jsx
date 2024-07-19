"use client";
import { useRouter } from "next/navigation";
import fetchProducts from "../api/products/proxy";
import { createContext, useContext, useState,useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
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

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    router.push("/checkout");

  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const contextValue = {
    products,
    loading,
    cart,
    addToCart,
    removeFromCart,
    toggleDropdown,
    handlePageChange,
    handleInputChange,
    error,
    currentPage,
    pageSize,
    totalPages,
    query,
    isOpen,

  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
