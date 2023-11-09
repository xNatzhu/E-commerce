import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import Product from "./Product";
import ProductTable from "./ProductTable";
import AlertNotProduct from "./AlertNotProduct.jsx";

export default function ProductCart(params) {
  const [priceAndQuantity, setPriceAndQuantity] = useState({});

  const onPriceAndQuantity = (product) => {
    setPriceAndQuantity(product);
  }

  return (
    <section className="flex font-bebas-neue pt-[60px] ">
      <div className="justify-center flex-1">
        <div className="">
          <div className="flex  flex-wrap -mx-4">
            <ProductTable />
            <Product onPriceAndQuantity={onPriceAndQuantity} />
            <PaymentMethod priceAndQuantity={priceAndQuantity} />
            {Object.keys(priceAndQuantity).length === 0 ? (
              <AlertNotProduct/>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
