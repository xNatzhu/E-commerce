import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Product({onPriceAndQuantity}) {


  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.cartProductReducer.listProduct);

  const [productAmount, setProductAmount] = useState([]);
  useEffect(() => {
    // Inicializa la cantidad de productos en el estado local
    const amounts = {};
    listProduct.forEach((product) => {
      amounts[product.cartProduct._id] = {
        quantity: 1,
        price: product.cartProduct.price,
      };
    });
    setProductAmount(amounts);
  }, [listProduct]);


  useEffect(()=>{
    onPriceAndQuantity(productAmount);
  },[productAmount])


  const onSumarProduct = (productId, stock) => {
    if (productAmount[productId].quantity < stock) {
      setProductAmount((prevAmounts) => ({
        ...prevAmounts,
        [productId]: {
          ...prevAmounts[productId],
          quantity: prevAmounts[productId].quantity + 1,
        },
      }));
    }
  };

  const onRestarProduct = (productId) => {
    if (productAmount[productId].quantity > 1) {
      setProductAmount((prevAmounts) => ({
        ...prevAmounts,
        [productId]: {
          ...prevAmounts[productId],
          quantity: prevAmounts[productId].quantity - 1,
        },
      }));
    }
  };

  return (
    <div className="w-full px-4 xl:w-8/12 mb-[20px]">
      {listProduct.map((product, index) => (
        <div
          className="py-4 dark:bg-[#17130F] dark:border-[#17130F] shadow rounded-xl md:px-8 mb-2"
          key={index}
        >
          <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-0">
            <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full px-4 md:w-1/3">
                  <div className="w-full h-50 md:h-24 md:w-24">
                    <img
                      src={product.cartProduct.img}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="w-2/3 px-4">
                  <h2 className="mb-2 text-xl font-bold dark:text-white">
                    {product.cartProduct.name}
                  </h2>
                  <p className="dark:text-white">{product.category}</p>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-2/12">
              <p className="text-lg font-bold dark:text-white">
                {`$${product.cartProduct.price}`}
              </p>
            </div>

            <div className="w-auto px-4 md:w-1/6 lg:w-2/12">
              <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md dark:border-[#48a259]">
                <button
                  className="py-2 dark:text-white"
                  onClick={() => onRestarProduct(product.cartProduct._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                  </svg>
                </button>

                <p className="w-12 px-2 py-4 text-center border-0 rounded-md bg-gray-700 dark:text-gray-50 font-bold md:text-right">
                {productAmount[product.cartProduct._id]?.quantity || 0}
                </p>
                <button
                  className="py-2 dark-text-white"
                  onClick={() => onSumarProduct(product.cartProduct._id, product.cartProduct.quantity)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12">
              <p className="text-lg font-bold text-blue-500 dark:text-[#48a259]">
                {`$${parseFloat(product.cartProduct.price * productAmount[product.cartProduct._id]?.quantity || 0).toFixed(2)}`}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
