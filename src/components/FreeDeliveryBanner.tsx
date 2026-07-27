'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle, Shield, Clock } from 'lucide-react';

const FreeDeliveryBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5" />
            <span className="font-semibold text-sm md:text-base">FREE Countrywide Delivery</span>
          </div>
          <span className="hidden md:inline text-white/60">|</span>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="text-sm md:text-base">3-7 Business Days</span>
          </div>
          <span className="hidden md:inline text-white/60">|</span>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm md:text-base">15-Year Warranty</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FreeDeliveryBanner;
