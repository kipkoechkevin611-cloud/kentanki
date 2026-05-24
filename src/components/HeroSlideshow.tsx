'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: '/assets/vertical (2).jpeg',
      title: 'Premium Water Storage Solutions',
      subtitle: 'Quality tanks for homes, farms, and industries across Kenya',
    },
    {
      image: '/assets/horizontal (2).jpeg',
      title: 'Durable & Long-Lasting',
      subtitle: '25-year warranty on all our water tanks',
    },
    {
      image: '/assets/loft tank.jpeg',
      title: 'Nationwide Delivery',
      subtitle: 'We deliver to all 47 counties in Kenya',
    },
    {
      image: '/assets/under ground.jpeg',
      title: 'KEBS Certified Quality',
      subtitle: '100% food-grade polyethylene material',
    },
    {
      image: '/assets/Septic Tank.jpeg',
      title: 'Complete Water Solutions',
      subtitle: 'From storage to waste management - we have it all',
    },
    {
      image: '/assets/vertical.jpeg',
      title: 'Affordable Pricing',
      subtitle: 'Competitive rates for all tank sizes',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/80" />
              </div>
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl"
                  >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">
                      {slide.subtitle}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;
