import axios from 'axios';
import { useEffect, useState } from 'react';
import ImageBox from './ImageBox';

interface MediaItem {
  id: string;
  alt: string;
  description: string;
  filename: string;
  createdAt: string;
  thumbnailUrl: string;
}

const HeroSection = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slides, setSlides] = useState<MediaItem[]>([]);

  // Rotate slides every 5 seconds (5000 milliseconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get('http://localhost:5500/fetch-media');
        setSlides(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.message);
        }
      }
    };

    fetchMedia();
  }, []);

  const getImageUrl = (thumbnailUrl: string) => {
    return `http://localhost:5500${thumbnailUrl}`;
  };
  const handlePreviousSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Get the current slide
  const currentSlide = slides[currentSlideIndex];

  return (
    <>
      {slides.length > 0 && currentSlide ? (
        <ImageBox
          imageUrl={getImageUrl(currentSlide.thumbnailUrl)}
          alt={currentSlide.alt}
          description={currentSlide.description}
          handlePreviousSlide={handlePreviousSlide}
          handleNextSlide={handleNextSlide}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default HeroSection;
