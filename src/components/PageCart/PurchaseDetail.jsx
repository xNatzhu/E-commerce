import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import Product from "./Product";
import ProductTable from "./ProductTable";

export default function ProductCart(params) {
  const [priceAndQuantity, setPriceAndQuantity] = useState({});

  const onPriceAndQuantity = (product)=>{
    setPriceAndQuantity(product)
  }

  console.log("precio de lala",priceAndQuantity);
  return (
    <section className="flex font-bebas-neue pt-[60px]">
      <div className="justify-center flex-1">
        <div className="">
          <div className="flex flex-wrap -mx-4">
            <ProductTable />
            <Product onPriceAndQuantity={onPriceAndQuantity} />
            <PaymentMethod priceAndQuantity={priceAndQuantity}/>
          </div>
        </div>
      </div>
    </section>
  );
}

