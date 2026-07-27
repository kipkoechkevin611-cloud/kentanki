'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart, CheckCircle, Phone, Truck, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const OurProcess: React.FC = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Choose a Tank',
      description: 'Browse our catalog and select the perfect water tank for your needs',
      step: '1',
    },
    {
      icon: CheckCircle,
      title: 'Place Your Order',
      description: 'Add to cart or order directly via WhatsApp with your details',
      step: '2',
    },
    {
      icon: Phone,
      title: 'Confirm Your Order',
      description: 'Our team will contact you to confirm order and delivery details',
      step: '3',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get your tank delivered to your location within 2-3 business days',
      step: '4',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple 4-step process to get your water tank delivered
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 mt-2">
                    <Icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-orange-300" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <Button variant="primary" size="lg">
              Browse Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
