import React, { useEffect, useRef } from 'react';
import { X, Download, Heart, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { Photo } from '../types';

interface LightboxProps {
  photo: Photo | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onLike: (id: number) => void;
  hasNext: boolean;
  hasPrev: boolean;
  isLiked: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({
  photo,
  onClose,
  onPrev,
  onNext,
  onLike,
  hasNext,
  hasPrev,
  isLiked,
}) => {
  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (lightboxRef.current && e.target === lightboxRef.current) {
      onClose();
    }
  };

  if (!photo) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = photo.imageUrl;
    link.download = `college-tip-${photo.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      ref={lightboxRef}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex items-center justify-center w-full h-full">
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        <div className="max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
          <div className="relative flex-1 bg-gray-100 min-h-[300px] md:min-h-0">
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full md:w-96 p-6 flex flex-col">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">{photo.title}</h2>
            <p className="text-gray-600 mb-6">{photo.description}</p>
            
            <div className="mt-auto flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onLike(photo.id)}
                  className={`p-2 rounded-full transition-colors ${
                    isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart size={20} fill={isLiked ? "#ef4444" : "none"} />
                </button>
                <span className="text-gray-500">{isLiked ? photo.likes + 1 : photo.likes} likes</span>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={handleDownload}
                  className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
                  title="Download photo"
                >
                  <Download size={20} />
                </button>
                <button
                  className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
                  title="Share photo"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Lightbox;