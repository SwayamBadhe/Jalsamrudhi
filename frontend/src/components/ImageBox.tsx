import { Box, Typography } from '@mui/material';
import React from 'react';

interface ImageBoxProps {
  imageUrl: string;
  alt: string;
  description: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({ imageUrl, alt, description }) => {
  return (
    <div className="p-3">
      <div className="text-center bg-slate-500 bg-opacity-10">
        <img src={imageUrl} alt={alt} className="w-screen h-96 px-24 pt-4" />
        <div className="">
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
    // <Box
    //   sx={{
    //     height: '400px',
    //     width: '100%',
    //     backgroundImage: `url(${imageUrl})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     px: 5,
    //     // color: 'white',
    //     textAlign: 'center',
    //   }}
    // >
    //   <Typography variant="h3" sx={{ mb: 2 }}>
    //     {alt}
    //   </Typography>
    //   <Typography variant="h6">{description}</Typography>
    // </Box>
  );
};

export default ImageBox;
