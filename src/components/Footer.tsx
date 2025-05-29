import React from 'react';
import { Camera, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-emerald-500" />
              <h2 className="text-xl font-serif font-bold">
                <span className="text-emerald-500">Campus</span>Capture
              </h2>
            </div>
            <p className="text-gray-400">
              Beautiful photography and practical tips to enhance your college experience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Study Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Dorm Life</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Campus Activities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Student Wellness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Budget & Finance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400">Subscribe to our newsletter for the latest tips and photos.</p>
            <form className="mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-emerald-500 w-full max-w-xs"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CampusCapture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;