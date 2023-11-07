import { Link } from "react-router-dom";
import { useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {cart_product} from "../../store/actions/cart.js"
import toast, { Toaster } from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const [cartProduct, setCartProduct] = useState([])
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.cartProductReducer.listProduct);

  const onCart = (product)=>{
    const productCartFilter = listProduct.some((productCart)=>productCart.cartProduct._id === product._id)
    if (!productCartFilter) {
      console.log(productCartFilter);
      setCartProduct([...cartProduct, product]);
      dispatch(cart_product(product));
      toast.success('Se agrego un producto al carrito')
      
    }else{
      toast.error("El producto existe en el carrito")
    }
    
  }
  console.log("nuevo producto agregado", cartProduct);
  return (
    <div className="relative overflow-hidden bg-white shadow rounded-xl dark:bg-[#232222] w-[300px] md:mr-[20px]">
      <div className="relative overflow-hidden">
        <div className="mb-5 overflow-hidden">
          <img
            className="object-cover w-full mx-auto transition-all rounded h-72 hover:scale-110"
            src={product.img}
            alt=""
          />
        </div>
        <button onClick={()=>onCart(product)} className="absolute top-0 left-0 p-3 bg-[#48a259] rounded-l-none hover:bg-[#48a259] rounded-b-xl">
          
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        </button>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
      <a>
        <h3 className="px-5 mb-4 text-lg font-bold dark:text-white">
          {product.name}
        </h3>
      </a>
      <div className="flex">
        <div className="w-1/2 px-5 pb-3">
          <p className="text-lg font-bold text-[#48a259] dark:text-[#48a259]">
            {product.price}
          </p>
          <span className="block -mt-1 text-xs font-semibold text-gray-400 line-through">
            $399.99
          </span>
        </div>
        <Link
          to={"/product/"+product._id}
          className="flex-1 text-sm text-white transition-all bg-[#48a259] rounded-r-none hover:bg-[#326e3d] rounded-t-xl"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
