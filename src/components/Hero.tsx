import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            College Life Through the Lens
          </h1>
          <p className="text-xl mb-8">
            Discover beautiful photos and practical tips to enhance your college experience.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-white text-emerald-700 hover:bg-emerald-50 font-medium py-2 px-6 rounded-full transition-colors">
              Explore Gallery
            </button>
            <button className="bg-transparent hover:bg-white/20 border border-white text-white font-medium py-2 px-6 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;