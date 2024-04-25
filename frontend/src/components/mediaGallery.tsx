import { useEffect, useState } from 'react';
import axios from 'axios';

interface MediaItem {
  id: string;
  alt: string;
  filename: string;
  createdAt: string;
}

const MediaGallery = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get('http://localhost:5500/fetch-media');
        setMedia(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.message);
        }
      }
    };

    fetchMedia();
  }, []);

  const getImageUrl = (filename: string) => {
    return `http://localhost:5500/media/${filename}`;
  };

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6">
        {media.map((item) => (
          <div key={item.id} className="">
            <img src={getImageUrl(item.filename)} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MediaGallery;
