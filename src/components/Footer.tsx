'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    products: [
      { href: '/products', label: 'Vertical Tanks' },
      { href: '/products', label: 'Horizontal Tanks' },
      { href: '/products', label: 'Loft Tanks' },
      { href: '/products', label: 'Underground Tanks' },
      { href: '/products', label: 'Septic Tanks' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/about', label: 'Our History' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/delivery', label: 'Delivery Policy' },
    ],
    support: [
      { href: '/contact', label: 'Get a Quote' },
      { href: '/contact', label: 'Installation' },
      { href: '/contact', label: 'FAQs' },
      { href: '/contact', label: 'Technical Support' },
      { href: '/contact', label: 'Warranty Claims' },
    ],
  };

  const paymentMethods = [
    { name: 'M-Pesa', icon: '💳' },
    { name: 'Bank Transfer', icon: '🏦' },
    { name: 'Cash on Delivery', icon: '💵' },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/logo.jpeg"
                  alt="Kentank Logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                  quality={90}
                />
              </div>
              <span className="font-bold text-2xl">Kentank</span>
            </div>
            <p className="text-gray-400 mb-6">
              Kenya&apos;s leading manufacturer of premium water storage solutions. Trusted by homes, farms, and industries nationwide.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-6 capitalize">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-400">+254 736 010 873</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-400">info@kentank.co.ke</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-400">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Kentank Kenya. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Payment Methods:</span>
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                  <span>{method.icon}</span>
                  <span className="text-sm">{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
