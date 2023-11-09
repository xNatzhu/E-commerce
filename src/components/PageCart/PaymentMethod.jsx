import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { cleanCart } from "../../store/actions/cleanCart";
import { useDispatch } from "react-redux";

export default function PaymentMethod({ priceAndQuantity }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    for (const product of Object.values(priceAndQuantity)) {
      total += product.price * product.quantity;
    }

    setTotalPrice(total);
  }, [priceAndQuantity]);

  const onBuy = () => {
    console.log("probando", totalPrice.toFixed(2));
    Swal.fire({
      title: "¡Compra exitosa!",
      text: `Su compra: ${totalPrice.toFixed(2)} ha sido realizada con éxito.`,
      icon: "success",
      iconColor: "#48a259",
      confirmButtonText: "Ok",
      confirmButtonColor: "#48a259",
    });
    dispatch(cleanCart());
  }

  return (
    <div className="w-full px-4 xl:w-4/12">
      {totalPrice > 0.00 && (
        <div className="p-6 border border-blue-100 dark:bg-[#17130F] dark:border-[#17130F] shadow rounded-xl bg-blue-50 md:p-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-white">Orden de compra</h2>
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-[#48a259]">
            <span className="text-gray-700 dark:text-gray-400">Subtotal</span>
            <span className="text-xl font-bold text-gray-700 dark:text-gray-400">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between pb-4 mb-4">
            <span className="text-gray-700 dark:text-gray-400">Envío</span>
            <span className="text-xl font-bold text-gray-700 dark:text-gray-400">Gratis</span>
          </div>
          <div className="flex items-center justify-between pb-4 mb-4">
            <span className="text-gray-700 dark:text-gray-400">Orden total</span>
            <span className="text-xl font-bold text-gray-700 dark:text-gray-400">${totalPrice.toFixed(2)}</span>
          </div>
          <h2 className="text-lg text-gray-500 dark:text-gray-400">Método de pago:</h2>
          <div className="flex items-center mb-4">
            <a href="#">
              <img src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png" alt="" className="object-cover h-16 mr-2 w-26" />
            </a>
            <a href="#">
              <img src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png" alt="" className="object-cover h-16 mr-2 w-26" />
            </a>
            <a href="#">
              <img src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png" alt="" className="object-cover h-16 mr-2 w-26" />
            </a>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={onBuy} className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-[#48a259] rounded-md hover-bg-blue-600">Comprar</button>
          </div>
        </div>
      )}
    </div>
  );
}
