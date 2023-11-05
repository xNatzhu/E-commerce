export default function ProductTable() {
  return (
    <div className="w-full px-4  xl:w-8/12 xl:mb-0 ">
      <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8 px-8">
        <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
          <h2 className="font-bold dark:text-white ">Nombre de producto</h2>
        </div>
        <div className="hidden px-4 lg:block lg:w-2/12">
          <h2 className="font-bold dark:text-white">Precio</h2>
        </div>
        <div className="hidden md:block px-4 md:w-1/6 lg:w-2/12">
          <h2 className="font-bold dark:text-white">Cantidad</h2>
        </div>
        <div className="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12">
          <h2 className="font-bold dark:text-white">Subtotal</h2>
        </div>
      </div>
    </div>
  );
}
