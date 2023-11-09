import "./css/CartSlider.css";
import PurchaseDetail from "./PurchaseDetail.jsx";
export default function CartSlider(params) {
  return (
    <div className="slider-cart">
      <div className="bg-white dark:bg-[#161616ef] flex flex-col relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col relative pt-[40px]">
          <div className=" relative z-20 pt-[30px]">
          <p className="bg-blue-100 text-[#48a259] text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-200 dark:text-[#48a259] mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag pr-[5px]" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
              Compra
            </p>
            <h1 className="font-bebas-neue uppercase text-[30px] sm:text-[30px] font-black flex flex-col leading-none dark:text-white text-gray-800 pt-[10px]">
              Tu carrito de
              <span className="text-[42px] md:text-7xl">compra</span>
            </h1>
            <PurchaseDetail/>
          </div>
          <div className="block  fixed bottom-0 right-0 w-full md:w-1/3 lg:w-3/5  pt-0 md:pt-[100px] pb-[0px]">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/743/212/original/colored-plants-illustration-png.png"
              className=" h-[300px]   max-w-xs md:max-w-sm m-auto"
              alt="Hero Image"
            />
          </div>
        </div>
        <div className="fixed z-28 top-[300px] md:top-[250px] w-[100%]">
          <img className="w-[100%] h-[300px] md:h-[420px] " src="https://static.vecteezy.com/system/resources/previews/024/077/013/original/green-grass-isolated-png.png" alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
}
