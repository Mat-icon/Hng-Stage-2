import Link from 'next/link'
import { MdFilterList, MdSearch, MdShoppingCart } from "react-icons/md";
import products from './Products';

  const ProductList = () => {
    return (
      <div className="container mx-auto px-4 py-16 poppins">
<div className="w-full flex items-center justify-between">
     <div >
        <ul className="inline-flex space-x-2 md:space-x-8 text-gray-500  md:text-xl">
            <li><Link href='/' className=' active:text-green-500'>All Products</Link></li>
            <li><Link href='/'>Fruits</Link></li>
            <li><Link href='/'>Vegetables</Link></li>
            <li><Link href='/'>Organic</Link></li>
            <li><Link href='/'>Packaged</Link></li>
        </ul>
     </div>
     <div className="flex space-x-2 items-center">
        <MdSearch className=' text-lg'/>
        <MdFilterList className=' text-lg'/>
     </div>
</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {products.map(product => (
            <div key={product.id} className="relative border border-slate-200 rounded-xl product-card2 bg-slate-50 flex flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-0 left-0 p-2 px-2 w-14 text-xs bg-green-500 text-white ">
          {product.discount}% off
          </span>
          <img
            src={`/images/${product.image}`} alt={product.name}
            className=" h-1/2 w-4/5"
          />
          <div className="popular-text text-center">
            <h2 className="font-bold">{product.name}</h2>
            <p className=' text-green-600'>₦{product.price}</p>
            <p className=" text-gray-400 line-through">₦{product.discountedPrice}</p>
          
          </div>   <Link href='/cart'
              className="p-2 rounded-md text-sm flex  items-center text-green-700 add hover:bg-gray-200"
            
              
            >
            
              <MdShoppingCart className=" text-green-700 mr-2" />Add
            </Link>
        </div>
          ))}

        </div>
      </div>
    );
  }
  
  export default ProductList;
  