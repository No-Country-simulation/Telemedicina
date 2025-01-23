import Slider from 'react-slick';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Patient1 from '../../../../../assets/patient1.avif'
import Patient2 from '../../../../../assets/patient2.avif'
import Patient3 from '../../../../../assets/patient3.avif'
import Patient4 from '../../../../../assets/patient4.avif'

const testimonials = [
  {
    id: 1,
    name: 'Michael',
    role: 'Paciente',
    feedback: 'Asombrosa atención y resultados.',
    avatar: Patient1,
  },
  {
    id: 2,
    name: 'Anna',
    role: 'Paciente',
    feedback: 'El mejor tratamiento que he recibido.',
    avatar: Patient2,
  },
  {
    id: 3,
    name: 'John',
    role: 'Paciente',
    feedback: 'Muy profesional y amable.',
    avatar: Patient3,
  },
  {
    id: 4,
    name: 'Sarah',
    role: 'Paciente',
    feedback: '¡Altamente recomendado!',
    avatar: Patient4,
  },
];

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        maxWidth: 1300,
        mx: 'auto',        
      }}
     className='p-5'
    >
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <Box key={testimonial.id} sx={{ px: 2 }}  className='px-5'>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                textAlign: 'center',
                minHeight:"240px",
                backgroundColor:'rgba(255, 255, 255, 0.8)'
              }}
            >
              <CardContent className='bg-white/10'>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h6" className='font-poppins'>{testimonial.name}</Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                  className='font-poppins'
                >
                  {testimonial.role}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='font-poppins'>
                  {testimonial.feedback}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SimpleSlider;
