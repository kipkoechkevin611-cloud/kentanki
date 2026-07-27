'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Droplets, Home, Globe, Factory, Package } from 'lucide-react';

const CategoryNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { 
      href: '/products?category=vertical', 
      label: 'Vertical Tanks',
      icon: Droplets
    },
    { 
      href: '/products?category=horizontal', 
      label: 'Horizontal Tanks',
      icon: Droplets
    },
    { 
      href: '/products?category=loft', 
      label: 'Loft Tanks',
      icon: Home
    },
    { 
      href: '/products?category=underground', 
      label: 'Underground Tanks',
      icon: Globe
    },
    { 
      href: '/products?category=industrial', 
      label: 'Industrial Tanks',
      icon: Factory
    },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isScrolled ? 0 : 0 }}
      className={`sticky top-20 z-40 bg-white border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}
      role="navigation"
      aria-label="Category navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3 py-3 overflow-x-auto scrollbar-hide max-w-full">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.href;
              
              return (
                <Link
                  key={index}
                  href={category.href}
                  onClick={() => setActiveCategory(category.href)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive 
                      ? 'bg-orange-500 text-white shadow-md' 
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-300 hover:text-orange-500'
                  }`}
                  aria-label={`Browse ${category.label}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default CategoryNavigation;
