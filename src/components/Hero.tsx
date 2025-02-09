import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      title: 'Designing Dreams,',
      subtitle: 'Crafting Timeless Elegance'
    },
    {
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
      title: 'Where Vision',
      subtitle: 'Meets Artistry'
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      title: 'Elevating Spaces',
      subtitle: 'Beyond Imagination'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `scale(${currentSlide === index ? '1.1' : '1'})`,
              transition: 'transform 6s ease-out'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div className="text-center space-y-6 transform translate-y-[-20%]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-4 tracking-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 tracking-wide">
            {slides[currentSlide].subtitle}
          </p>
          <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#D1B527] to-transparent" />
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-16 flex flex-col items-center space-y-4">
          <span className="text-sm tracking-widest uppercase">Discover Our World</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-[2px] transition-all duration-500 ${
              currentSlide === index ? 'w-12 bg-[#D1B527]' : 'w-6 bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;