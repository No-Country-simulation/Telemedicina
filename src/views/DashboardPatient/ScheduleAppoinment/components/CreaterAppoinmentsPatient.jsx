import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CreaterAppoinmentsPatient = () => {
  return (
    <div>
      PROGRAMAR CITA
      <Link to={'estado-cita'}>
        <Button>Estado de la Cita</Button>
      </Link>
    </div>
  );
};

export default CreaterAppoinmentsPatient;
