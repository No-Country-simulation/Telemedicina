import doctora from "../assets/doc.png";
import calendario from "../assets/calendario.jpg";
import ResponsiveAppBar from "./navbar";
const Presentacion = () => {
  return (
    <>
       <ResponsiveAppBar/>
      <div className="h-screen max-h-[600px] relative max-custom-md:bg-gradient-to-b from-[#3BA5D8] to-[#BCE1F3] max-custom-md:max-h-fit  max-custom-md:py-[4%]">
        <div className="relative w-[100%] top-[20%] max-custom-md:top-0">
          <div className=" relative w-1/2 top-[20%] max-md:w-fit z-20 pl-20 max-md:pl-0 max-md:my-0 max-md:mx-auto max-md:px-6 max-custom-sm:px-4">
            <h1 className="text-5xl leading-[60px] text-left font-extrabold mb-4 max-w-[400px] text-[#1D7CAD] max-md:text-4xl max-sm:text-3xl max-custom-sm:text-2xl">
              TELEMEDICINA AL CUIDADO DE TU SALUD
            </h1>
            <p className="text-[18px] mb-8 text-left text-black max-custom-md:text-[#757575] max-sm:text-[14px] max-md:mb-4">
              Consultas Online con Medicos certificados.
            </p>
            <div className="flex justify-between items-center max-w-[500px] max-md:justify-start max-md:gap-3">
              <button className="bg-white border-[#546FEA] drop-shadow-[0px 4px 12.9px rgba(0, 0, 0, 0.25)]  border-2 rounded-[40px] py-[10px] px-[40px] min-w-fit max-sm:text-[14px] max-sm:py-2 max-sm:px-5 max-custom-sm:text-[10px]">
                Ingresa a tu consulta
              </button>
              <button className="bg-[#546FEA] text-white drop-shadow-[0px 4px 12.9px rgba(0, 0, 0, 0.25)] rounded-[40px] py-[10px] px-[40px] min-w-fit max-sm:text-[14px] max-sm:py-2 max-sm:px-5 max-custom-sm:text-[10px]">
                Programa tu consulta
              </button>
            </div>
          </div>
        </div>
        <div className=" absolute top-0 right-0 max-h-[600px] h-[85%] w-[50%] my-background xl:bg-cover max-custom-md:hidden">
          <img
            src={doctora}
            alt="Doctora"
            className="absolute bottom-2 right-0 w-[40%] ml-24  "
            style={{"mask-image": "linear-gradient(black 90%, transparent)"}}
          />
          <img
            src={calendario}
            alt="Calendario"
            className="absolute h-[200px] bottom-[-5%] left-[-6%] z-10 rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};
export default Presentacion;
