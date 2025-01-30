import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Doctor1 from '../../assets/doctor1.svg';
import Doctor2 from '../../assets/doctor2.svg';
import Doctor3 from '../../assets/doctor3.svg';

const doctors = [
  {
    name: 'Michael Montoya',
    speciality: 'Pediatra',
    image: Doctor1,
    date:'25 de Enero, 2025',
    time:'4:00 PM'
  },
  {
    name: 'Rafael Santos',
    speciality: 'General',
    image: Doctor2,
    date:'25 de Enero, 2025',
    time:'4:00 PM'
  },
  {
    name: 'Luisa Gonzales',
    speciality: 'Dermatóloga',
    image: Doctor3,
    date:'25 de Enero, 2025',
    time:'4:00 PM'
  },
];

export default function MedicalList() {
  return (
    <div className='md:col-start-4 md:col-end-6 bg-white shadow-xl  justify-self-center md:mx-2'>
      <h2 className='secondHeaders text-slate-900 text-center md:text-xl py-3 md:py-0 md:text-left'>Historial Médico</h2>
  <div className='w-[95%] py-5 md:py-0 md:w-full  mx-auto max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-white '>
      {doctors.map((doctor, index) => {
        return (
          <List key={index} sx={{ width: '100%', maxWidth: 330, bgcolor: 'background.paper' }} >
          <ListItem  alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={doctor.image} />
            </ListItemAvatar>
            <ListItemText
              primary={`${doctor.name}- ${doctor.speciality}`}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    {doctor.date } | {doctor.time}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
           <Divider variant="inset" component="li" />
           </List>
        );
      })}
     </div>
     </div>
  );
}
