import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import deviceimg1 from './images/deviceimg1.jpg';
import deviceimg2 from './images/deviceimg2.jpg';
import deviceimg3 from './images/deviceimg3.jpg';

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: 'Slide 1',
      description: 'This is the first slide description.',
      image: deviceimg1,
    },
    {
      id: 2,
      title: 'Slide 2',
      description: 'This is the second slide description.',
      image: deviceimg2,
    },
    {
      id: 3,
      title: 'Slide 3',
      description: 'This is the third slide description.',
      image: deviceimg3,
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Rotate slides every 5 seconds (5000 milliseconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  // Get the current slide
  const currentSlide = slides[currentSlideIndex];

  return (
    <Box
      sx={{
        height: '400px',
        width: '100%',
        backgroundImage: `url(${currentSlide.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" sx={{ mb: 2 }}>
        {currentSlide.title}
      </Typography>
      <Typography variant="h6">
        {currentSlide.description}
      </Typography>
    </Box>
  );
};

export default HeroSection;
