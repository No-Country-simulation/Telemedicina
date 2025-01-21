import { Card, CardContent } from '@mui/material';
import Doctor1 from '../../../assets/doctor1.svg';
import Doctor2 from '../../../assets/doctor2.svg';
import Doctor3 from '../../../assets/doctor3.svg';

const doctors = [
  {
    name: 'Michael Montoya',
    speciality: 'Médico Pediatra',
    image: Doctor1,
  },
  {
    name: 'Rafael Santos',
    speciality: 'Médico General',
    image: Doctor2,
  },
  {
    name: 'Luisa Gonzales',
    speciality: 'Médico Dermatóloga',
    image: Doctor3,
  },
];

const ShowDoctors = () => {
  return (
    <div className="py-4 flex flex-col items-center gap-5">
      <article className="text-center py-4">
        <h2 className="secondHeaders pb-4">Conoce Nuestros Médicos</h2>
      </article>
      {/* Grilla de Medicos */}
      <section className="mx-auto w-11/12 lg:w-[97%] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center gap-5 ">
        {doctors.map((doctor, index) => {
          return (
            <Card
              key={index}
              className="!rounded-[25px] max-w-[320px] bg-slate-500 flex flex-col items-center"
            >
              <img src={doctor.image} alt="doctor" className="w-full " />
              <CardContent className="text-center">
                <h2 className="text-gray-800 font-semibold">{doctor.name}</h2>
                <p className="text-gray-500 font-medium">{doctor.speciality}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>
      <button className="bg-btns rounded-full px-10 py-3 text-white font-medium">
        Ver Más
      </button>
    </div>
  );
};

export default ShowDoctors;
