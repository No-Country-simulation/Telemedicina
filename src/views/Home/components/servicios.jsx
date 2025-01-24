import ChildCareIcon from "@mui/icons-material/ChildCare";
import MedicationIcon from "@mui/icons-material/Medication";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
const Servicios = () => {
  const items = [
    {
      id: 1,
      title: "Pediatría",
      description: "Programa una consulta para tus hijos.",
      icon: (
        <ChildCareIcon sx={{ fontSize: { xs: 16, sm: 20, md: 29, lg: 34 } }} />
      ),
      style: "top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    },
    {
      id: 2,
      title: "Consulta General",
      description: "Consulta de rutina.",
      icon: (
        <MedicationIcon sx={{ fontSize: { xs: 16, sm: 20, md: 29, lg: 34 } }} />
      ),
      style:
        "top-1/2 right-[10%] transform translate-x-[80%] -translate-y-full",
    },
    {
      id: 3,
      title: "Psicología",
      description: "Consulta para tus hijos.",
      icon: (
        <PsychologyIcon sx={{ fontSize: { xs: 16, sm: 20, md: 29, lg: 34 } }} />
      ),
      style:
        "bottom-[10%] left-1/2 transform translate-x-[70%] translate-y-[15%]",
    },
    {
      id: 4,
      title: "Dermatología",
      description: "Consulta para tus hijos.",
      icon: (
        <AccessibilityIcon
          sx={{ fontSize: { xs: 16, sm: 20, md: 29, lg: 34 } }}
        />
      ),
      style:
        "top-1/2 left-[10%] transform -translate-x-[80%] -translate-y-full",
    },
    {
      id: 5,
      title: "Ortopedia",
      description: "Consulta para tus hijos.",
      icon: (
        <AccessibilityIcon
          sx={{ fontSize: { xs: 16, sm: 20, md: 29, lg: 34 } }}
        />
      ),
      style:
        "top-1/2 left-1/2 transform -translate-x-[170%] translate-y-[45%] bg-white border-4 border-blue-300/50 shadow-[0_0_15px_rgba(52,152,219,0.5)] max-custom-sm:translate-x-[-160%] max-custom-sm:translate-y-[6%]",
    },
  ];

  return (
    <div className=" relative bg-white flex items-center justify-center flex-col py-[5%]">
      <div className="absolute w-screen h-full max-custom-sm:hidden">
        <svg
          width="160"
          height="160"
          viewBox="0 0 274 591"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 max-md:w-[100px] max-md:h-[100px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-55.449 590.829C126.005 590.829 273.102 458.568 273.102 295.415C273.102 132.262 126.005 0 -55.449 0C-236.903 0 -384 132.262 -384 295.415C-384 458.568 -236.903 590.829 -55.449 590.829ZM-55.449 510.262C76.5173 510.262 183.497 414.072 183.497 295.415C183.497 176.758 76.5173 80.5679 -55.449 80.5679C-187.415 80.5679 -294.395 176.758 -294.395 295.415C-294.395 414.072 -187.415 510.262 -55.449 510.262Z"
            fill="#ECF6FF"
          />
        </svg>
        <svg
          width="100"
          height="100"
          viewBox="0 0 215 214"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[10%] left-[18%] max-md:w-[100px] max-md:h-[100px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M107.5 214C166.871 214 215 166.094 215 107C215 47.9055 166.871 0 107.5 0C48.1294 0 0 47.9055 0 107C0 166.094 48.1294 214 107.5 214ZM107.5 184.818C150.679 184.818 185.682 149.978 185.682 107C185.682 64.0223 150.679 29.1819 107.5 29.1819C64.3213 29.1819 29.3181 64.0223 29.3181 107C29.3181 149.978 64.3213 184.818 107.5 184.818Z"
            fill="#ECF6FF"
          />
        </svg>
        <svg
          width="160"
          height="160"
          viewBox="0 0 273 376"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 max-md:w-[100px] max-md:h-[100px]" 
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.5 414.829C172.936 414.829 273 321.967 273 207.415C273 92.8627 172.936 0 49.5 0C-73.9356 0 -174 92.8627 -174 207.415C-174 321.967 -73.9356 414.829 49.5 414.829ZM49.5001 358.262C139.271 358.262 212.046 290.725 212.046 207.415C212.046 124.104 139.271 56.5678 49.5001 56.5678C-40.2713 56.5678 -113.045 124.104 -113.045 207.415C-113.045 290.725 -40.2713 358.262 49.5001 358.262Z"
            fill="#ECF6FF"
          />
        </svg>
        <svg
          width="140"
          height="140"
          viewBox="0 0 215 214"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-6%] right-[10%] max-md:w-[100px] max-md:h-[100px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M107.5 214C166.871 214 215 166.094 215 107C215 47.9055 166.871 0 107.5 0C48.1294 0 0 47.9055 0 107C0 166.094 48.1294 214 107.5 214ZM107.5 184.818C150.679 184.818 185.682 149.978 185.682 107C185.682 64.0223 150.679 29.1819 107.5 29.1819C64.3213 29.1819 29.3181 64.0223 29.3181 107C29.3181 149.978 64.3213 184.818 107.5 184.818Z"
            fill="#ECF6FF"
          />
        </svg>
        <svg
          width="100"
          height="100"
          viewBox="0 0 215 214"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[5%] right-[3%] max-md:w-[100px] max-md:h-[100px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M107.5 214C166.871 214 215 166.094 215 107C215 47.9055 166.871 0 107.5 0C48.1294 0 0 47.9055 0 107C0 166.094 48.1294 214 107.5 214ZM107.5 184.818C150.679 184.818 185.682 149.978 185.682 107C185.682 64.0223 150.679 29.1819 107.5 29.1819C64.3213 29.1819 29.3181 64.0223 29.3181 107C29.3181 149.978 64.3213 184.818 107.5 184.818Z"
            fill="#ECF6FF"
          />
        </svg>
      </div>
      <h1 className=" relative text-4xl text-[#234A6B] mb-[5%] z-10 max-custom-sm:text-2xl">
        SERVICIOS
      </h1>
      <div className="relative w-[500px] h-[500px] max-md:w-[320px] max-md:h-[320px] max-custom-sm:w-[190px] max-custom-sm:h-[190px] max-custom-sm:mt-6">
        {/* Círculo decorativo */}
        <div className="absolute inset-0 rounded-full bg-[#ECF6FF] z-0 w-full h-full">
          <div className="absolute w-[360px] h-[360px] bg-white rounded-[50%] top-0 right-0 bottom-0 left-0 m-auto max-md:w-[240px] max-md:h-[240px] max-custom-sm:w-[130px] max-custom-sm:h-[130px]"></div>
        </div>
        {/* Elementos */}
        {items.map((item) => (
          <div
            key={item.id}
            className={`absolute w-[160px] h-[150px] px-6 py-2 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center ${item.style} max-md:w-[115px] max-md:h-[100px] max-custom-sm:w-[90px] max-custom-sm:h-[80px]`}
          >
            <div className="bg-[#ECF6FF] p-1 rounded-xl ">{item.icon}</div>
            <h3 className="text-blue-500 text-1xl font-semibold max-md:text-[12px]">
              {item.title}
            </h3>
            <p className="text-gray-500 text-[12px] max-md:text-[10px] max-custom-sm:hidden">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
