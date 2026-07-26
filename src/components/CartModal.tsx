'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Modal from './ui/Modal';
import Image from 'next/image';

const CartModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleWhatsAppCheckout = () => {
    const message = cart
      .map(
        (item) =>
          `• ${item.name} (${item.capacity}) - ${item.price} x ${item.quantity}`
      )
      .join('\n');
    const total = cartTotal.toLocaleString();
    const whatsappMessage = encodeURIComponent(
      `Hello, I would like to order:\n\n${message}\n\n*Total: KSh ${total}*\n\nPlease contact me with delivery details and payment options.`
    );
    window.open(`https://wa.me/2540740272542?text=${whatsappMessage}`, '_blank');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Shopping Cart">
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="relative w-20 h-20">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="80px"
                  quality={75}
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-navy-900">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.capacity}</p>
                <p className="text-orange-500 font-bold">{item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold text-orange-500">
                KSh {cartTotal.toLocaleString()}
              </span>
            </div>
            <div className="space-y-2">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                Checkout via WhatsApp
              </button>
              <button
                onClick={clearCart}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CartModal;
