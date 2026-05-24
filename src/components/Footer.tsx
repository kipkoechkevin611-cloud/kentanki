'use client';

import React from 'react';
import Link from 'next/link';
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
      { href: '/about', label: 'Careers' },
      { href: '/about', label: 'Blog' },
    ],
    support: [
      { href: '/contact', label: 'Get a Quote' },
      { href: '/contact', label: 'Delivery Info' },
      { href: '/contact', label: 'Installation' },
      { href: '/contact', label: 'FAQs' },
      { href: '/contact', label: 'Support' },
    ],
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="font-bold text-2xl">Kentank</span>
            </div>
            <p className="text-gray-400 mb-6">
              Kenya's leading manufacturer of premium water storage solutions. Trusted by homes, farms, and industries nationwide.
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
                <p className="text-gray-400">+254 740 272 542</p>
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
              <Clock className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p className="font-semibold">Working Hours</p>
                <p className="text-gray-400">Mon - Sat: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kentank Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
