import "./css/Card.css"
export default function InfoBar(params) {
    return(
        <>
            <div className="w-[100%] h-[50px] background-body-card">
            </div>
            <div className="bg-[#17130F] relative">
            <img className="absolute top-1/2 left-1/2 md:left-[80%]  lg:left-[60%] transform -translate-x-1/2 -translate-y-1/2   w-[300px]" src="../../../public/img/raices.png" alt="" srcset="" />
            <div className=" container mx-auto px-6 flex md:flex-row justify-between relative z-50">
                <div className=" flex flex-col items-center">
                    <img className="w-[50px] h-[50px]" src="https://cdn-icons-png.flaticon.com/128/6670/6670681.png" alt="" srcset="" />
                    <h6 className="text-[#fff] font-bold font-bebas-neue pt-[15px]">Envio gratis</h6>
                </div>
                <div className=" flex flex-col items-center">
                    <img className="w-[50px] h-[50px]" src="https://cdn-icons-png.flaticon.com/128/3090/3090490.png" alt="" srcset="" />
                    <h6 className="text-[#fff] font-bold font-bebas-neue pt-[15px]">Paga en cuotas</h6>
                </div>
                <div className=" flex flex-col items-center">
                    <img className="w-[50px] h-[50px]" src="https://cdn-icons-png.flaticon.com/128/892/892926.png" alt="" srcset="" />
                    <h6 className="text-[#fff] font-bold font-bebas-neue pt-[15px]">Contactanos</h6>
                </div>
                
            </div>
            </div>

        </>
    )
}