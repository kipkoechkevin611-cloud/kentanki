'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Truck, Clock, Users, Star } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: '15-Year Warranty',
      description: 'Industry-leading warranty on all products',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Award,
      title: 'KEBS Certified',
      description: 'All tanks meet strict quality standards',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: CheckCircle,
      title: '100% Authentic',
      description: 'Genuine Kentank products guaranteed',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Countrywide delivery to all 47 counties',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: '2-3 business days to most locations',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Users,
      title: '50K+ Customers',
      description: 'Trusted by thousands across Kenya',
      color: 'bg-teal-100 text-teal-600',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Why Trust Kentank?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing the highest quality water storage solutions with unmatched service
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-3 rounded-full ${badge.color} flex items-center justify-center`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-navy-900 text-sm mb-1">{badge.title}</h3>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-white">
              <Star className="w-6 h-6 text-orange-400 fill-current" />
              <span className="font-semibold">4.9/5 Customer Rating</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center gap-2 text-white">
              <Users className="w-6 h-6" />
              <span className="font-semibold">50,000+ Happy Customers</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">15+ Years Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
