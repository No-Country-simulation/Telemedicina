import doctor from "./assets/doc-1.jpg";
const Profesionales= ()=>{
    return (
        <div className="bg-[#ECF6FF] pt-[5%] pb-[2%] relative">
      <svg
              width="600"
              height="400"
              viewBox="0 0 1618 1143"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 right-0 bottom-0 left-0 m-auto max-sm:hidden"
            >
              <path
                d="M1114.28 226.922C1310.98 289.52 1589.23 333.997 1615.62 411.421C1642.01 490.492 1411.73 602.509 1279.79 747.473C1147.86 892.436 1114.28 1070.35 987.146 1123.06C860.013 1177.42 641.726 1104.94 437.832 1039.05C233.938 973.155 44.437 913.852 8.45574 818.307C-29.9243 722.763 85.2158 590.978 114.001 444.367C140.387 296.109 80.4183 133.025 164.375 55.6017C245.932 -20.1747 469.016 -8.64347 636.929 37.4813C807.24 83.606 917.583 164.324 1114.28 226.922Z"
                fill="url(#paint0_linear_27_124)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_27_124"
                  x1="0.704834"
                  y1="1142.14"
                  x2="1076.13"
                  y2="-381.472"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C2E1F1" />
                  <stop offset="1" stop-color="#C2E1F1" />
                </linearGradient>
              </defs>
            </svg>
        <div className="flex items-start justify-between w-fit gap-40 my-0 mx-auto">
          <div className=" relative grid grid-cols-[150px] grid-rows-[100px]	my-0 mx-auto w-fit max-custom-md:hidden">
            <div className="">
              <img src={doctor} alt="" className="rounded-[40px]" />
            </div>
            <div className=" rounded-md">
              <img
                src={doctor}
                alt=""
                className="relative rounded-[40px] left-28 top-[-40px]"
              />
            </div>
            <div className="">
              <img
                src={doctor}
                alt=""
                className="relative rounded-[40px] left-8 top-[-60px]"
              />
            </div>
          </div>
          <div className="w-fit py-8 relative z-10 max-custom-sm:px-4">
            <h2 className="text-4xl text-[#234A6B] font-bold mb-8 max-custom-sm:text-[20px] max-custom-sm:mb-4">
              NUESTROS PROFESIONALES
            </h2>
            <p className="text-[18px] w-[350px] text-black mb-4 max-custom-sm:text-[12px] max-custom-sm:mb-2">
              Contamos con profesionales altamente calificados que te daran la
              mejor atención que necesita tu salud.
            </p>
            <p className="text-[18px] w-[350px] text-black mb-6 max-custom-sm:text-[12px] max-custom-sm:mb-3">
              Si eres uno de nuestros profesionales ingresa aqui.
            </p>
            <button className="bg-[#546FEA] text-white drop-shadow-[0px 4px 12.9px rgba(0, 0, 0, 0.25)] rounded-[40px] py-[5px] px-[40px] min-w-fit max-custom-sm:text-[10px]">
              Ingreso Médico
            </button>
          </div>
        </div>
      </div>
    )
}

export default Profesionales