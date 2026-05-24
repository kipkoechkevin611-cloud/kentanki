'use client';

import React, { useState } from 'react';
import Modal from './ui/Modal';
import { motion } from 'framer-motion';
import { ShoppingCart, User, Phone, MapPin, Package } from 'lucide-react';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({ isOpen, onClose, productName = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    product: productName,
    quantity: '1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
Hello Kentank! I would like to place an order:

*Customer Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Location: ${formData.location}

*Order Details:*
• Product: ${formData.product}
• Quantity: ${formData.quantity}

Please contact me with delivery details and payment options.
    `.trim();

    const whatsappUrl = `https://wa.me/2540740272542?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Order Now">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="e.g., 0712 345 678"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delivery Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your location"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product
          </label>
          <div className="relative">
            <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              required
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Select product"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <input
            type="number"
            required
            min="1"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
          Order Now
        </motion.button>
      </form>
    </Modal>
  );
};

export default WhatsAppOrderModal;
