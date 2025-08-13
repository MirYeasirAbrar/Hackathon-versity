import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Welcome to DIU Computer Programming Club",
      subtitle: "Empowering coders, building futures",
      bg: "from-blue-600 via-purple-600 to-indigo-800",
    },
    {
      title: "Join Our Coding Community",
      subtitle: "Learn, compete, and grow together",
      bg: "from-emerald-500 via-teal-600 to-cyan-700",
    },
    {
      title: "Shape Your Programming Journey",
      subtitle: "Events, workshops, and endless opportunities",
      bg: "from-rose-500 via-pink-600 to-purple-700",
    },
  ];

  // Auto-slide carousel
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-gradient-to-r ${
            slide.bg
          } transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white z-10">
              <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl mb-8 opacity-90">{slide.subtitle}</p>
              <div className="space-x-4">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
