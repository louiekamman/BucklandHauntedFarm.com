import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl text-center mb-10 text-red-600 font-bold drop-shadow-lg"
      >
        About the Farm
      </motion.h1>

      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto space-y-8 text-gray-300"
      >
        <p>Deep in the heart of Fear County lies a farm unlike any other...</p>
        <blockquote className="border-l-4 border-red-600 pl-4 italic text-red-400">
          “Don’t go near that place after dark. The farm feeds on fear.”
        </blockquote>
        <p>Revived decades later, the Haunted Farm now stands as a monument to everything wicked...</p>
      </motion.section>
    </div>
  );
}