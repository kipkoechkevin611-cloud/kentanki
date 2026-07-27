'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, School, Hotel, Building2, Tractor, Factory, Church } from 'lucide-react';

const ApplicationsSection: React.FC = () => {
  const applications = [
    {
      icon: Home,
      title: 'Homes',
      description: 'Perfect for residential water storage needs',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: School,
      title: 'Schools',
      description: 'Reliable water supply for educational institutions',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Hotel,
      title: 'Hotels',
      description: 'Large capacity for hospitality industry',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Building2,
      title: 'Hospitals',
      description: 'Clean water storage for healthcare facilities',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Tractor,
      title: 'Farms',
      description: 'Irrigation and agricultural water storage',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: Factory,
      title: 'Factories',
      description: 'Industrial water solutions for manufacturing',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Church,
      title: 'Churches',
      description: 'Community water storage solutions',
      color: 'bg-pink-100 text-pink-600',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Applications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our water tanks serve diverse sectors across Kenya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100 hover:border-orange-200">
                  <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{app.title}</h3>
                  <p className="text-sm text-gray-600">{app.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
