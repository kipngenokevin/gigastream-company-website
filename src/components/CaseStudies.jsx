import React, { useState, useEffect, useRef } from "react";
import HewaSafi from "../../public/hewasafi.png";
import Express from "../../public/expressway.png";
import Tolls from "../../public/tollbooths.png";

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const images = [
    { src: HewaSafi, alt: "Hewa Safi Case Study" },
    { src: Express, alt: "Expressway Case Study" },
    { src: Tolls, alt: "Tollbooths Case Study" },
  ];

  const extendedImages = [...images, ...images, ...images];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % (images.length * 3));
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => setCurrentIndex(images.length), 0);
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? images.length * 3 - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= images.length * 3 ? images.length : prev + 1
    );
  };

  return (
    <section className="case-section py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="title text-center">
          Latest Case Studies
        </h2>

        <div
          className="relative max-w-7xl mx-auto group"
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex - images.length) * (100 / 3)
                }%)`,
              }}
            >
              {extendedImages.map((image, index) => {
                const distance = Math.abs(index - currentIndex);
                const isCenter = distance === 2;
                const isAdjacent = distance === 1;

                return (
                  <div
                    key={index}
                    className="w-1/3 flex-shrink-0 flex justify-center items-center"
                  >
                    <div
                      className={`relative p-4 transition-all duration-700 ${
                        isCenter
                          ? "scale-100 opacity-100"
                          : isAdjacent
                          ? "scale-75 opacity-70"
                          : "scale-60 opacity-40"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-2xl w-full h-120 object-cover shadow-md"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-xl font-semibold">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:scale-110 p-3 rounded-full transition-all duration-300 z-10 group-hover:opacity-100 opacity-0"
          >
            <svg
              className="w-6 h-6 text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:scale-110 p-3 rounded-full transition-all duration-300 z-10 group-hover:opacity-100 opacity-0"
          >
            <svg
              className="w-6 h-6 text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
