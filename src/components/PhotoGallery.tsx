import React from 'react';
import { Photo } from '../types';
import PhotoCard from './PhotoCard';

interface PhotoGalleryProps {
  photos: Photo[];
  onLike: (id: number) => void;
  onViewPhoto: (photo: Photo) => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, onLike, onViewPhoto }) => {
  if (photos.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-500 text-lg">No photos found. Try a different search or category.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <PhotoCard 
            key={photo.id} 
            photo={photo} 
            onLike={onLike} 
            onView={onViewPhoto}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;