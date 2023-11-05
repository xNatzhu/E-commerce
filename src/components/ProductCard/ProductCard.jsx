import { Link } from "react-router-dom";

const ProductCard = ({ product}) => {
    return (
        <Link to={"/product/"+product._id}>
            <div className="relative overflow-hidden bg-white shadow rounded-xl dark:bg-[#232222] w-[300px] md:mr-[20px]">
              <div className="relative overflow-hidden">
                <div className="mb-5 overflow-hidden">
                  <img
                    className="object-cover w-full mx-auto transition-all rounded h-72 hover:scale-110"
                    src={product.img}
                    alt=""
                  />
                </div>
                <button className="absolute top-0 left-0 p-3 bg-[#48a259] rounded-l-none hover:bg-[#48a259] rounded-b-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    ></path>
                  </svg>
                </button>
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
                <button className="flex-1 text-sm text-white transition-all bg-[#48a259] rounded-r-none hover:bg-[#326e3d] rounded-t-xl">
                  Agregar a carrito
                </button>
              </div>
            </div>
            </Link>
    );
  };
  
  export default ProductCard;