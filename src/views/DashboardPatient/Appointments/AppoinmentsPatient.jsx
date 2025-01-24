import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AppoinmentsPatient = () => {
  return (
    <div>
      Citas Programadas
      <Link to={'/dashboard-paciente/citas-programadas'}>
        {' '}
        <Button className='bg-blue-300'>Ver tabla citas</Button>
      </Link>
    </div>
  );
};

export default AppoinmentsPatient;
