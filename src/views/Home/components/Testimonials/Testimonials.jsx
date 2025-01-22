import SimpleSlider from './components/SimpleSlider';

const Testimonials = () => {
  return (
    <section className=" text-center h-[450px] pt-4 custom-sm:pt-0 custom-sm:h-screen md:text-left px-4  md:h-96 bg-testimonials bg-cover bg-center md:bg-top bg-no-repeat">
      <article className='bg-white/40 w-full pt-5 px-2 xl:pt-10 md:w-10/12 md:bg-transparent xl:max-w-[920px] md:mx-auto'>
        <h2 className="secondHeaders">Pacientes Felices!</h2>
        <p className="font-normal">
          Testimonios que demuestran la calidad y compromiso con nuestros
          pacientes
        </p>
      </article>
      <SimpleSlider />
    </section>
  );
};

export default Testimonials;
