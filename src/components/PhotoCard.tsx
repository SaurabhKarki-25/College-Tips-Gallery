import React, { useState } from 'react';
import { Heart, Download, Share2, Maximize } from 'lucide-react';
import { Photo } from '../types';

interface PhotoCardProps {
  photo: Photo;
  onLike: (id: number) => void;
  onView: (photo: Photo) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onLike, onView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = photo.imageUrl;
    link.download = `college-tip-${photo.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(photo.id);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: photo.title,
          text: photo.description,
          url: window.location.href,
        });
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div 
      className="group relative rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-4 aspect-h-3 overflow-hidden relative">
        <img
          src={photo.imageUrl}
          alt={photo.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button 
            onClick={() => onView(photo)}
            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
          >
            <Maximize size={20} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-serif font-bold text-lg text-gray-800 mb-1">{photo.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{photo.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <button 
              onClick={handleLike}
              className={`p-1.5 rounded-full transition-colors ${
                isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart size={18} fill={isLiked ? "#ef4444" : "none"} />
            </button>
            <span className="text-sm text-gray-500">{isLiked ? photo.likes + 1 : photo.likes}</span>
          </div>
          
          <div className="flex space-x-1">
            <button 
              onClick={handleDownload}
              className="p-1.5 text-gray-400 hover:text-emerald-600 transition-colors rounded-full"
              title="Download photo"
            >
              <Download size={18} />
            </button>
            <button 
              onClick={handleShare}
              className="p-1.5 text-gray-400 hover:text-emerald-600 transition-colors rounded-full"
              title="Share photo"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;