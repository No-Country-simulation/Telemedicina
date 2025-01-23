import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const CustomFooter = () => {
  return (
    <>
      <div className="font-poppins text-white py-7 lg:py-9 pl-5 custom-sm:pl-0 bg-blueLight flex flex-col  gap-5">
        <section className="mx-auto grid grid-cols-1 custom-sm:grid-cols-2 custom-sm:grid-rows-3 md:grid-cols-4 lg:grid-cols-4 md:grid-rows-3 lg:grid-rows-none  gap-5 custom-sm:place-items-center lg:place-items-start lg:px-5 xl:px-10  md:gap-2 lg:gap-0 2xl:max-w-screen-2xl">
          {/* Telemedicina */}
          <article className="flex flex-col custom-sm:items-center custom-sm:text-center lg:text-left md:px-6 lg:px-0 custom-sm:justify-center md:pl-0 md:items-center lg:items-start custom-sm:col-span-2 md:col-span-4 lg:col-auto gap-3">
            <h2 className="font-medium text-xl md:text-2xl  tracking-wide">
              Telemedicina
            </h2>
            <p className="font-light md:text-xl ">
              Plataforma creada para facilitar la consulta medica de nuestros
              pacientes.
            </p>
            <div className="flex gap-2">
              <InstagramIcon className="h-10 w-10 md:h-10 md:w-10 hover:bg-white/30 hover:rounded-full hover:p-2" />
              <FacebookIcon className="h-10 w-10 md:h-10 md:w-10 hover:bg-white/30 hover:rounded-full hover:p-2" />
              <LinkedInIcon className="h-10 w-10 md:h-10 md:w-10 hover:bg-white/30 hover:rounded-full hover:p-2" />
            </div>
          </article>
          {/* Sobre Nosotros */}
          <article className="flex flex-col gap-2 custom-sm:self-start custom-sm:justify-self-end md:pl-0 md:col-start-2 md:col-end-3 lg:justify-self-center">
            <h2 className="font-medium text-xl md:text-2xl  tracking-wide ">
              Sobre Nosotros
            </h2>
            <ul className="font-light md:text-xl flex flex-col gap-2">
              <li>
                <a href="#" className="hover:border-b-2">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:border-b-2">
                  Nuestro Equipo
                </a>
              </li>
            </ul>
          </article>
          {/* Explora */}
          <article className="flex flex-col gap-2 md:col-start-3 md:col-end-4 lg:justify-self-center">
            <h2 className="font-medium text-xl md:text-2xl  tracking-wide">
              Explorar
            </h2>
            <ul className="font-light md:text-xl flex flex-col gap-2">
              <li><a href="#" className="hover:border-b-2">Servicios</a></li>
              <li><a href="#" className='hover:border-b-2'>Especialidades</a></li>
              <li><a href="#" className='hover:border-b-2'>Únete</a></li>
              <li><a href="#" className='hover:border-b-2'>Inicio de Sesión</a></li>
              <li><a href="#" className='hover:border-b-2'>Registro</a></li>
            </ul>
          </article>
          {/* Contactanos */}
          <article className="flex flex-col gap-2 md:col-span-4 custom-sm:col-span-2 lg:col-auto md:col-end-5 xl:justify-self-end">
            <h2 className="font-medium text-xl md:text-2xl  tracking-wide">
              Contáctanos
            </h2>
            <ul className="w-full max-w-sm font-light md:text-xl flex flex-col gap-2">
              <li>+45 66834567</li>
              <li className="break-all whitespace-normal">
                consultas@telemedicina.com
              </li>
              <li>Av Alegre Viva, Calle #02-68</li>
            </ul>
          </article>
        </section>
      </div>
      <div className="w-full text-center flex flex-col md:flex-row md:justify-center py-3 bg-[#ECF6FF] text-gray-500">
      <span>
        Proyecto No-Country.
      </span>
      <span>Todos los derechos reservados.</span>
      </div>
    </>
  );
};

export default CustomFooter;
