import PaymentMethod from "./PaymentMethod";
import Product from "./Product";
import ProductTable from "./ProductTable";
export default function ProductCart(params) {
  return (
    <section className="flex  font-bebas-neue pt-[60px]">
    <div className="justify-center flex-1">
      <div className="">
        <div className="flex flex-wrap -mx-4">
          <ProductTable/>
          <Product/>
          <PaymentMethod/>
        </div>
      </div>
    </div>
    
  </section>
  );
}
