import { useMediaQuery } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MedicationIcon from '@mui/icons-material/Medication';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  // Detectar tamaños de pantalla
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Móviles

  const location = useLocation();
  console.log(location);

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      route: '/dashboard-paciente',
    },
    {
      text: 'Citas Médicas',
      icon: <PermContactCalendarIcon />,
      route: '/dashboard-paciente/citas-programadas',
    },
    {
      text: 'Tratamientos y Recetas',
      icon: <VaccinesIcon />,
      route: '/dashboard-paciente/historial-medico/tratamientos',
    },
    {
      text: 'Resumen de Diagnósticos',
      icon: <MedicationIcon />,
      route: '/dashboard-paciente/historial-medico/diagnosticos',
    },
    {
      text: 'Programar Cita',
      icon: <IntegrationInstructionsIcon />,
      route: '/dashboard-paciente/programar-cita',
    },

    {
      text: 'Salir',
      icon: <ExitToAppIcon />,
      route: '/',
    },
  ];

  return (
    <ul className="w-full h-3/5 lg:h-4/5 flex flex-col justify-between">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            to={item.route}
            className={`flex gap-3 px-2 py-1 xl:px-5 text-white xl:text-3xl rounded-xl hover:bg-white/20 ${
              location.pathname === item.route ? 'bg-white/20' : ''
            }`}
          >
            {item.icon}
            <p className="font-poppins font-light">
              {!isSmallScreen && item.text}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
