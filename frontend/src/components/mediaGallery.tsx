import { useEffect, useState } from 'react';
import axios from 'axios';

interface MediaItem {
  id: string;
  alt: string;
  filename: string;
  createdAt: string;
  thumbnailUrl: string;
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

  const getImageUrl = (thumbnailUrl: string) => {
    return `http://localhost:5500${thumbnailUrl}`;
  };

  return (
    <div className="py-6 ml-6">
      <div className="grid grid-cols-3 gap-6">
        {media.map((item) => (
          <div key={item.id} className="relative">
            <img src={getImageUrl(item.thumbnailUrl)} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MediaGallery;
