'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import Button from './ui/Button';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-white font-bold text-2xl">Kentank</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-orange-500 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-navy-900">
              <Phone className="w-4 h-4" />
              Call Us
            </Button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-white hover:text-orange-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <Button variant="whatsapp" size="sm">
              Order Now
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900 border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-white hover:text-orange-500 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-navy-900">
                  <Phone className="w-4 h-4" />
                  Call Us
                </Button>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-white hover:text-orange-500 transition-colors"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
                <Button variant="whatsapp" size="sm">
                  Order Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </motion.nav>
  );
};

export default Navigation;
