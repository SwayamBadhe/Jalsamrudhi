import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface ImageBoxProps {
  imageUrl: string;
  alt: string;
  description: string;
  handlePreviousSlide: () => void;
  handleNextSlide: () => void;
  
}

const ImageBox: React.FC<ImageBoxProps> = ({
  imageUrl,
  alt,
  description,
  handlePreviousSlide,
  handleNextSlide,
}) => {
  return (
    // <div className="p-3">
    //   <div className="text-center bg-slate-500 bg-opacity-10">
    //     <img src={imageUrl} alt={alt} className="w-screen h-96 px-24 pt-4" />
    //     <div className="">
    //       <p className="text-white">{description}</p>
    //     </div>
    //   </div>
    // </div>
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        textAlign: 'center',
        marginBottom: '5%',
      }}
    >
      <Box
        sx={{
          width: '80%',
          height: '80%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        {/* Left arrow button */}
        <IconButton
          onClick={handlePreviousSlide}
          sx={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <ArrowBack sx={{ color: 'white' }} />
        </IconButton>

        {/* Slide text */}
        <Box sx={{ padding: '20px', color: 'white', textAlign: 'center' }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            {alt}
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {description}
          </Typography>
          {/* Add a "Donate" button */}
          <Link to="/donate">
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
            >
              Donate
            </Button>
          </Link>
        </Box>

        {/* Right arrow button */}
        <IconButton
          onClick={handleNextSlide}
          sx={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <ArrowForward sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageBox;
