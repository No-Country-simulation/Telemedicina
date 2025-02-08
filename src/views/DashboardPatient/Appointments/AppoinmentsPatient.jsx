// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';

import { Button, Card, CardContent } from '@mui/material';

const appoinments = [
  {
    doctor: 'Samuel Medina',
    specialist: 'Dermatólogo',
    date: '25 de Enero, 2025',
    time: '4:00 PM',
  },
  {
    doctor: 'Laboratorio',
    specialist: 'Exámenes',
    date: '25 de Enero, 2025',
    time: '4:00 PM',
  },
];

const AppoinmentsPatient = () => {
  return (
    <section className="bg-blueLight  flex flex-col items-start rounded-lg w-[90%] mx-auto md:mx-4 md:w-full xl:max-w-[680px] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-white p-2 md:col-start-1 md:col-end-4 justify-self-center">
      <div className="flex items-center w-full">
        <h2 className="secondHeaders text-center md:text-left text-white px-3 mb-2">
          Citas Programadas
        </h2>
        <div className='text-btns font-medium bg-white px-2  py-2 rounded-lg'>3</div>
      </div>
      <div className="w-full space-y-3 ">
        <Button className="text-white  font-light text-sm text-center capitalize underline decoration-1 ml-[310px] block">
          Ver Todas
        </Button>
        {appoinments.map((appoinment, index) => {
          return (
            <article
              key={index}
              className="flex items-center gap-4 flex-nowrap w-max mt-5"
            >
              <Card className="border flex-shrink-0">
                <CardContent className=" grid grid-cols-[auto_1fr] gap-3 w-[400px]">
                  <div className="bg-blueLight flex justify-center items-center capitalize h-10 w-10 rounded-full text-white font-bold">
                    C
                  </div>
                  <div>
                    <h3 className="flex-1">
                      {appoinment.doctor} - {appoinment.specialist}
                    </h3>
                    <div className="flex justify-center md:justify-start space-x-2">
                      <span>{appoinment.date}</span>
                      <span className="border-l-2 pl-2">{appoinment.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="space-x-3 flex-shrink-0">
                <Button className="font-poppins text-black font-semibold capitalize bg-white px-4 rounded-full">
                  Reprogramar
                </Button>
                <Button className="text-white bg-btns font-semibold capitalize px-4 rounded-full">
                  Confirmar
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default AppoinmentsPatient;

{
  /* <Link to={'/dashboard-paciente/citas-programadas'}>
        {' '}
        <Button className='bg-blue-300'>Ver tabla citas</Button>
      </Link> */
}
