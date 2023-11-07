import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cart_product } from "../store/actions/cart.js";
import toast, { Toaster } from "react-hot-toast";
import "./css/ProductDetail.css";
export default function ProductDetail(params) {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const listProduct = useSelector((state) => state.cartProductReducer.listProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ultramarine-deer-yoke.cyclic.cloud/api/products/" + id
        );
        setProductDetail(response.data);
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchData();
  }, []);

  const onCart = (product) => {
    const productCartFilter = listProduct.some((productCart)=>productCart.cartProduct._id === product._id)
    if (!productCartFilter) {
      console.log(productCartFilter);
      setCartProduct([...cartProduct, product]);
      dispatch(cart_product(product));
      toast.success('Se agrego un producto al carrito')
      
    }else{
      toast.error("El producto existe en el carrito")
    }
  };
  console.log(cartProduct);
  return (
    <section className="background-detail-product">
      <div className=" dark:bg-[#17130fe6] blur-2 ">
        <div className="container mx-auto px-6  overflow-hidden  pt-[60px] font-poppins">
          <div className="max-w-6xl px-4 mx-auto md:px-6">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full mb-8 md:w-1/2 md:mb-0">
                <div className="sticky top-0 z-50 overflow-hidden">
                  <div className="relative mb-6 lg:mb-10 lg:h-2/4">
                    <img
                      src={productDetail.img}
                      alt=""
                      className="object-cover shadow rounded-xl w-full h-full"
                    />
                  </div>
                  <div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400">
                    <div className="flex flex-wrap items-center mt-6">
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 h-4 text-gray-700 dark:text-[#48a259] bi bi-truck"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                        </svg>
                      </span>
                      <h2 className="text-lg font-bold text-gray-700 dark:text-gray-200">
                        Envio gratis
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="lg:pl-20">
                  <div className="mb-8">
                    <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-200 md:text-4xl capitalize">
                      {productDetail.name}
                    </h2>
                    <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-[#48a259] ">
                      <span>${productDetail.price}</span>
                      <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                        $1800.99
                      </span>
                    </p>
                    <p className="max-w-md text-gray-700 dark:text-gray-300">
                      {productDetail.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="w-16 pb-1 mb-6 text-xl font-semibold border-b border-blue-300 dark:border-gray-600 dark:text-gray-200">
                      Stock
                    </h2>
                    <div>
                      <div className="flex flex-wrap">
                        <button className="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-gray-200 hover:bg-gray-200 hover:text-[#48a259] dark:border-[#48a259] dark:hover-border-gray-300 dark:text-[#48a259]">
                          {productDetail.quantity}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-32 mb-8">
                    <label
                      htmlFor=""
                      className="w-full pb-1 text-xl font-semibold text-gray-700 border-b border-blue-300 dark:border-gray-600 dark:text-gray-200"
                    >
                      Cantidad
                    </label>
                    <div className="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
                      <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover-bg-gray-700 dark:text-gray-400 hover-text-gray-700 dark:bg-gray-200 hover-bg-gray-400">
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <input
                        type="text"
                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-[#221c17] focus:outline-none text-md hover-text-black"
                        placeholder="1"
                      />
                      <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover-bg-gray-700 dark:text-gray-400 dark-bg-gray-900 hover-text-gray-700 hover-bg-gray-400">
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onCart(productDetail)}
                      className="w-full p-4 bg-[#48a259] rounded-lg lg:w-2/5 dark-text-gray-200 text-gray-50 hover-bg-blue-600 dark-bg-blue-500 dark-hover-bg-blue-700"
                    >
                      Carrito
                    </button>
                    <Toaster position="top-right" reverseOrder={true} />
                    <button className="flex items-center justify-center w-full p-4 text-[#48a259] border border-[#48a259] rounded-lg lg:w-2/5 dark-text-gray-200 dark-border-blue-600 hover-bg-blue-600 hover-border-blue-600 hover-text-gray-100 dark-bg-blue-500 dark-hover-bg-blue-700 dark-hover-border-blue-700 dark-hover-text-gray-300">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative w-full h-[200px]">
          <div className="flex w-[100%] justify-center">
            <img
              class="w-auto h-[300px]"
              src="https://static.vecteezy.com/system/resources/previews/023/743/207/original/colored-plants-illustration-png.png"
              alt=""
            />
          </div>
          <div class="absolute top-0 left-0 w-full h-[300px]">
            <img
              class="w-full h-full"
              src="https://static.vecteezy.com/system/resources/previews/024/077/013/original/green-grass-isolated-png.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
