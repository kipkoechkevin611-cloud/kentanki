'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CategoryNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { href: '/products?category=vertical', label: 'Vertical Tanks' },
    { href: '/products?category=horizontal', label: 'Horizontal Tanks' },
    { href: '/products?category=loft', label: 'Loft Tanks' },
    { href: '/products?category=underground', label: 'Underground Tanks' },
    { href: '/products?category=industrial', label: 'Industrial Tanks' },
    { href: '/products?category=accessories', label: 'Accessories' },
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
        <div className="flex items-center justify-center gap-2 md:gap-4 py-2.5 overflow-x-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="text-xs md:text-sm text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap px-2 py-1.5 rounded-lg hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label={`Browse ${category.label}`}
            >
              {category.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default CategoryNavigation;
