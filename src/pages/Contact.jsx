import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl text-center mb-10 text-red-600 font-bold drop-shadow-lg"
      >
        Contact Us
      </motion.h1>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-xl border border-red-700 shadow-lg"
      >
        {submitted ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-center text-xl"
          >
            Thank you! We'll haunt you shortly. 👻
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-red-400 mb-1">Name</label>
              <input type="text" required className="w-full p-2 rounded bg-black text-white border border-red-700" />
            </div>
            <div>
              <label className="block text-red-400 mb-1">Email</label>
              <input type="email" required className="w-full p-2 rounded bg-black text-white border border-red-700" />
            </div>
            <div>
              <label className="block text-red-400 mb-1">Message</label>
              <textarea required className="w-full p-2 rounded bg-black text-white border border-red-700 h-32"></textarea>
            </div>
            <button type="submit" className="w-full py-2 bg-red-700 hover:bg-red-600 transition text-white font-bold rounded">
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}