'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Shield } from 'lucide-react';

const TopAnnouncementBar: React.FC = () => {
  const announcements = [
    { icon: Truck, text: 'Free Countrywide Delivery' },
    { icon: Clock, text: 'Delivery: 2–3 Days' },
    { icon: Shield, text: '15 Years Warranty' },
  ];

  return (
    <div className="bg-navy-900 text-white py-2 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto">
          {announcements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-xs md:text-sm whitespace-nowrap"
              >
                <Icon className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">{item.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopAnnouncementBar;
