import "./css/CartSlider.css"
import ProductCart from "./ProductCart.jsx"
export default function CartSlider(params) {
    return(
        <div className="slider-cart">
        <div className="bg-white dark:bg-[#161616a9] flex flex-col relative z-20 items-center overflow-hidden">
              <div className="container mx-auto px-6 flex flex-col relative pt-[40px]">
                <div className=" relative z-20">
                    <ProductCart/>
                </div>
                <div className="block  w-full md:w-1/3 lg:w-3/5 relative pt-0 md:pt-[100px] pb-[0px]">
                  <img src="https://static.vecteezy.com/system/resources/previews/023/743/212/original/colored-plants-illustration-png.png" className=" h-[250px]  md:h-auto  max-w-xs md:max-w-sm m-auto" alt="Hero Image" />
                </div>
              </div>
              <div className="absolute z-28 top-[300px] md:top-[170px] w-[100%]">
               {/* <img className="w-[100%] h-[300px] md:h-[420px] " src="https://static.vecteezy.com/system/resources/previews/024/077/013/original/green-grass-isolated-png.png" alt="" srcSet="" />*/}
              </div>
            </div>
            </div>
    )
}