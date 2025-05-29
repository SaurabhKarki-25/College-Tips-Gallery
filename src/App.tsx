import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import PhotoGallery from './components/PhotoGallery';
import Lightbox from './components/Lightbox';
import Footer from './components/Footer';
import { photos, categories } from './data/photos';
import { Photo } from './types';

function App() {
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>(photos);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<number[]>([]);

  useEffect(() => {
    let result = photos;
    
    if (selectedCategory) {
      result = result.filter(photo => photo.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        photo => 
          photo.title.toLowerCase().includes(query) || 
          photo.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredPhotos(result);
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleLike = (id: number) => {
    setLikedPhotos(prev => {
      const isLiked = prev.includes(id);
      if (isLiked) {
        return prev.filter(photoId => photoId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleViewPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoView = () => {
    setSelectedPhoto(null);
  };

  const viewNextPhoto = () => {
    if (!selectedPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    if (currentIndex < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[currentIndex + 1]);
    }
  };

  const viewPrevPhoto = () => {
    if (!selectedPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    if (currentIndex > 0) {
      setSelectedPhoto(filteredPhotos[currentIndex - 1]);
    }
  };

  const isPhotoLiked = (id: number) => likedPhotos.includes(id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />
      <section id="home">
        <Hero />
      </section>
      
      <main>
        <section id="categories" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">
              Browse Categories
            </h2>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>
        </section>

        <section id="gallery" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">
              Photo Gallery
            </h2>
            <PhotoGallery
              photos={filteredPhotos}
              onLike={handleLike}
              onViewPhoto={handleViewPhoto}
            />
          </div>
        </section>

        <section id="about" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">
              About CampusCapture
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 mb-6">
                CampusCapture is your go-to resource for college life inspiration and practical tips. 
                We curate beautiful photography alongside valuable advice to help students make the most 
                of their college experience.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to create a visual guide that inspires, educates, and connects college 
                students across the globe, making their academic journey more enriching and successful.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">
              Contact Us
            </h2>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={closePhotoView}
          onPrev={viewPrevPhoto}
          onNext={viewNextPhoto}
          onLike={handleLike}
          hasPrev={filteredPhotos.findIndex(p => p.id === selectedPhoto.id) > 0}
          hasNext={filteredPhotos.findIndex(p => p.id === selectedPhoto.id) < filteredPhotos.length - 1}
          isLiked={isPhotoLiked(selectedPhoto.id)}
        />
      )}
    </div>
  );
}

export default App;