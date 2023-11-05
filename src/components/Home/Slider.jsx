import "./css/Slider.css"
export default function Slider(params) {
    return(
        <div className="slider-home">
<div className="bg-white dark:bg-[#161616a9] flex relative z-20 items-center overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row relative pt-[40px]">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-gray-800 dark:bg-[#48a259] mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-[30px] sm:text-[30px] font-black flex flex-col leading-none dark:text-white text-gray-800">
           Tus plantas a un
            <span className="text-[42px] md:text-7xl">guiño</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white pt-[10px]">
          Tu refugio de ensueño, donde la magia de la naturaleza se despliega en cada rincón, llenando tu vida de belleza y serenidad.
          </p>
          <div className="flex mt-8">
            <a href="#" className="uppercase py-2 px-[25px] transition-all rounded-lg bg-[#48a259] border-2 border-transparent text-white text-md mr-4 hover:bg-[#48a259]">
              Tienda
            </a>
          </div>
        </div>
        <div className="block  w-full md:w-1/3 lg:w-3/5 relative pt-0 md:pt-[100px] pb-[0px]">
          <img src="https://static.vecteezy.com/system/resources/previews/023/743/212/original/colored-plants-illustration-png.png" className=" h-[250px]  md:h-auto  max-w-xs md:max-w-sm m-auto" alt="Hero Image" />
        </div>
      </div>
      <div className="absolute z-28 top-[300px] md:top-[170px] w-[100%]">
        <img className="w-[100%] h-[300px] md:h-[420px] " src="https://static.vecteezy.com/system/resources/previews/024/077/013/original/green-grass-isolated-png.png" alt="" srcSet="" />
      </div>
    </div>
    </div>
    )
}