import Slider from 'react-slick';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'Michael',
    role: 'Paciente',
    feedback: 'Asombrosa atención y resultados.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Anna',
    role: 'Paciente',
    feedback: 'El mejor tratamiento que he recibido.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'John',
    role: 'Paciente',
    feedback: 'Muy profesional y amable.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    id: 4,
    name: 'Sarah',
    role: 'Paciente',
    feedback: '¡Altamente recomendado!',
    avatar: 'https://via.placeholder.com/100',
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
        maxWidth: 1024,
        mx: 'auto',
        px: 2,
        paddingTop:{ xs:2,md:'25px'},
        paddingX:{xs:4,md:6},
        
      }}
     
    >
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <Box key={testimonial.id} sx={{ px: 2 }}  className='px-5'>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <CardContent>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {testimonial.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
