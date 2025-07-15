// src/pages/Attractions.jsx
import React from "react";
import { motions } from "framer-motion";

const attractions = [
  {
    title: "The Haunted Corn Maze",
    description: "Wander through endless rows of terror — but beware what lurks in the stalks.",
    image: "/images/corn-maze.jpg", // Replace with real paths later
  },
  {
    title: "Zombie Paintball",
    description: "Arm yourself and ride the apocalypse bus. Can you survive the undead ambush?",
    image: "/images/zombie-paintball.jpg",
  },
  {
    title: "Clown House",
    description: "Step into the twisted world of killer clowns. Laughter never sounded so wrong.",
    image: "/images/clown-house.jpg",
  },
];

export default function Attractions() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl md:text-6xl text-center mb-12 text-red-600 font-bold drop-shadow-lg">
        Attractions
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {attractions.map((attr, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-gray-900 border-2 border-red-700 rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-red-600/50 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={attr.image}
              alt={attr.title}
              className="w-full h-48 object-cover grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-red-500">{attr.title}</h2>
              <p className="mt-2 text-gray-300">{attr.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}