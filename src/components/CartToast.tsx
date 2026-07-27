'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Check } from 'lucide-react';

interface CartToastProps {
  show: boolean;
  message?: string;
}

const CartToast: React.FC<CartToastProps> = ({ show, message = 'Added to cart!' }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-24 right-20 z-[60] bg-white rounded-lg shadow-2xl border border-green-200 p-4 flex items-center gap-3 min-w-[280px]"
        >
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-900 text-sm">{message}</p>
            <p className="text-xs text-gray-500">Item added successfully</p>
          </div>
          <ShoppingCart className="w-5 h-5 text-green-500 flex-shrink-0" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartToast;
