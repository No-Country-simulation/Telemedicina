// import { Button } from "@mui/material"
// import { Link } from "react-router-dom"

import { Card } from '@mui/material';
import Medicine from '../../../assets/medicine.svg';
import Medicine2 from '../../../assets/medicine2.svg';

export const TreatmentsPatient = () => {
  return (
    <Card className="md:col-start-2 md:col-end-4 mx-3 py-2 md:p-3 md:my-3 flex flex-col justify-center items-center gap-2  justify-self-center">
      <h2 className="secondHeaders text-slate-900 text-center md:text-left py-3  md:text-xl md:py-0">
        Tratamientos y Recetas
      </h2>
      <p className='text-sm text-center md:text-left '>Revisa tus tratamientos y recetas médicas.</p>
      <img
        src={Medicine}
        alt="imagen medicamento"
        className="hidden md:block w-[200px] lg:w-auto"
      />
      <img src={Medicine2} alt="imagen medicamento"
      className='w-[200px] lg:w-auto' />
    </Card>
  );
};

{
  /* <Link to={'historial-medico/tratamientos'}>
      <Button className="bg-blue-300">Ver tabla de tratamientos</Button>
      </Link> */
}
