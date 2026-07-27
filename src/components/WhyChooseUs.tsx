'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Droplets, Sun, Wrench, Truck, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Genuine Water Tanks',
      description: '100% authentic Rototank products with manufacturer warranty',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Droplets,
      title: 'Food Grade Material',
      description: 'Safe for storing drinking water, certified for human consumption',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Sun,
      title: 'UV Protected',
      description: 'UV-stabilized tanks that withstand harsh sunlight for years',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: Wrench,
      title: 'Leak Resistant',
      description: 'Heavy-duty construction with seamless design prevents leaks',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Truck,
      title: 'Free Countrywide Delivery',
      description: 'Free delivery to all 47 counties in Kenya',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: HeadphonesIcon,
      title: 'Fast Customer Support',
      description: '24/7 support via phone and WhatsApp for all inquiries',
      color: 'bg-orange-100 text-orange-600',
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
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Why Choose Kentanki?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide premium water storage solutions with unmatched quality and service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
