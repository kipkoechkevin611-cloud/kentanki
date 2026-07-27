'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Droplets } from 'lucide-react';

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      name: 'Vertical Tanks',
      description: 'Standard vertical water tanks for residential and commercial use',
      image: '/assets/vertical (2).jpeg',
      link: '/products?category=vertical',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Horizontal Tanks',
      description: 'Space-saving horizontal tanks for low-clearance areas',
      image: '/assets/horizontal (2).jpeg',
      link: '/products?category=horizontal',
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Loft Tanks',
      description: 'Compact loft tanks for rooftop installations',
      image: '/assets/loft tank.jpeg',
      link: '/products?category=loft',
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Underground Tanks',
      description: 'Durable underground tanks for space-efficient storage',
      image: '/assets/under ground.jpeg',
      link: '/products?category=underground',
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Industrial Tanks',
      description: 'Large-capacity tanks for industrial applications',
      image: '/assets/vertical (2).jpeg',
      link: '/products?category=industrial',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Our Best Selling Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of water storage solutions for every need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={category.link} className="block h-full">
                <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                    <Droplets className="w-12 h-12 mb-4 opacity-80" />
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90 mb-4">{category.description}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
