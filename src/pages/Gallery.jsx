import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { motion } from 'framer-motion';

const images = [
  '/images/haunted-corn-maze.jpg',
  '/images/zombie-paintball.jpg',
  '/images/clown-house.jpg',
  '/images/haunted-corn-2.jpg',
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl text-center mb-12 text-red-600 font-bold drop-shadow-lg"
      >
        Haunted Gallery
      </motion.h1>
      <PhotoProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <PhotoView key={i} src={src}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                src={src}
                alt={`Haunted scene ${i + 1}`}
                className="rounded-lg shadow-md cursor-pointer"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
}