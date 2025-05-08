import React from 'react';
import Navbar from '@/app/_components/Navbar';
import Footer from '@/app/_components/Footer';

export default function GalleryPage() {
  // Placeholder images - replace with actual image data and structure
  const images = [
    { src: "/placeholder-childhood.jpg", alt: "Childhood (Placeholder)", caption: "Early life in Chicago." },
    { src: "/placeholder-peru-ministry.jpg", alt: "Ministry in Peru (Placeholder)", caption: "Serving the community in Peru." },
    { src: "/placeholder-episcopal.jpg", alt: "Episcopal Consecration (Placeholder)", caption: "Becoming Bishop of Chiclayo." },
    { src: "/placeholder-cardinal-creation.jpg", alt: "Cardinal Creation (Placeholder)", caption: "Receiving the red hat from Pope Francis." },
    { src: "/placeholder-election-smoke.jpg", alt: "Conclave White Smoke (Placeholder)", caption: "White smoke signals a new Pope." },
    { src: "/placeholder-first-appearance.jpg", alt: "First Appearance (Placeholder)", caption: "Pope Leo XIV greets the world." },
  ];

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navbar activePage="Gallery" />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">Moments in Time</h1>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Gallery of Pope Leo XIV
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Visual highlights from the life and ministry of His Holiness.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {images.map((image, index) => (
            <div key={index} className="group relative">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">{image.caption}</p>
            </div>
          ))}
        </div>
         <p className="mt-12 text-center text-2xl font-bold text-gray-800">
             More images coming soon!
         </p>
      </div>

      <Footer />
    </div>
  );
}