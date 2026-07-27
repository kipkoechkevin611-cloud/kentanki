'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ApplicationsSection: React.FC = () => {
  const applications = [
    {
      title: 'Homes',
      description: 'Perfect for residential water storage needs',
      image: '/assets/vertical (2).jpeg',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Schools',
      description: 'Reliable water supply for educational institutions',
      image: '/assets/vertical (2).jpeg',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Hotels',
      description: 'Large capacity for hospitality industry',
      image: '/assets/horizontal (2).jpeg',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Hospitals',
      description: 'Clean water storage for healthcare facilities',
      image: '/assets/vertical (2).jpeg',
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Farms',
      description: 'Irrigation and agricultural water storage',
      image: '/assets/vertical (2).jpeg',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      title: 'Factories',
      description: 'Industrial water solutions for manufacturing',
      image: '/assets/vertical (2).jpeg',
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Churches',
      description: 'Community water storage solutions',
      image: '/assets/vertical (2).jpeg',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Applications</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-64 rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${app.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                  <p className="text-sm opacity-90">{app.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
