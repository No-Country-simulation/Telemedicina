// import { Button } from "@mui/material"
// import { Link } from "react-router-dom"
import { Card, Typography } from '@mui/material';
import Calendar from '../../../assets/calendario.jpg';

const ScheduleAppoinmentsPatient = () => {
  return (
    <div className="mb-2 md:col-start-1 md:col-end-2 px-3 py-4 flex flex-col justify-around">
      <div className='md:space-y-3'>
        <h2 className="secondHeaders text-slate-900 text-center  md:text-sm">
          Programa tu proxima cita
        </h2>
        <figure>
          <img src={Calendar} alt="imagen calendario" />
        </figure>
      </div>
      <Card className="md:text-right md:items-end">
        <h2 className="secondHeaders text-slate-900 text-center md:text-left md:text-sm py-3 md:py-0">
          Fecha y Hora
        </h2>
        <article className="bg-blueLight px-3">
          <p>15 de Enero, 2025</p>
          <Typography
            component="span"
            variant="body2"
            sx={{ color: 'text.primary', display: 'inline' }}
          >
            Argentina | 18:00
          </Typography>
        </article>
      </Card>
    </div>
  );
};

export default ScheduleAppoinmentsPatient;

{
  /* <Link to={'programar-cita'}>
<Button className="bg-blue-300">Programar cita</Button>
</Link> */
}
