// src/pages/Visit.jsx
import React from 'react';

export default function Visit() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl md:text-6xl text-center mb-10 text-red-600 font-bold drop-shadow-lg">
        Plan Your Visit
      </h1>

      {/* Hours */}
      <section className="mb-10">
        <h2 className="text-2xl text-red-500 font-semibold mb-2">🎯 Hours of Operation</h2>
        <ul className="ml-4 list-disc text-gray-300">
          <li>Fridays & Saturdays: 7:00 PM – Midnight</li>
          <li>Sundays: 7:00 PM – 10:00 PM</li>
          <li>October 31st: Special Halloween Event!</li>
        </ul>
      </section>

      {/* Location */}
      <section className="mb-10">
        <h2 className="text-2xl text-red-500 font-semibold mb-2">📍 Location</h2>
        <p className="text-gray-300">123 Haunted Farm Lane, Fearville, ST 66666</p>
        <div className="mt-4 border border-red-600 shadow-lg">
          <iframe
            title="Map to Haunted Farm"
            className="w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.093558557302!2d-122.420679184681!3d37.77492977975983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2ebc57ac37%3A0x29b2d01b6d9a8c4f!2sYour%20Haunted%20Farm!5e0!3m2!1sen!2sus!4v0000000000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Parking */}
      <section className="mb-10">
        <h2 className="text-2xl text-red-500 font-semibold mb-2">🅿️ Parking</h2>
        <p className="text-gray-300">
          Free parking is available on-site. Overflow parking across the street. Arrive early for best spots!
        </p>
      </section>

      {/* Rules */}
      <section className="mb-10">
        <h2 className="text-2xl text-red-500 font-semibold mb-2">⚠️ Rules & Safety</h2>
        <ul className="ml-4 list-disc text-gray-300">
          <li>No touching actors or props.</li>
          <li>No alcohol, weapons, or pets allowed.</li>
          <li>Fog machines and strobe lights in use — enter at your own risk.</li>
        </ul>
      </section>

      {/* FAQ or Download */}
      <section>
        <h2 className="text-2xl text-red-500 font-semibold mb-2">📄 FAQ / Map</h2>
        <p className="text-gray-300">
          <a
            href="/documents/haunted-farm-map.pdf"
            className="underline text-red-400 hover:text-red-600"
            download
          >
            Download our event map & FAQ
          </a>
        </p>
      </section>
    </div>
  );
}
