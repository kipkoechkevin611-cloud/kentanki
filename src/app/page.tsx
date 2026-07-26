'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TankCalculator from '../components/TankCalculator';
import WhatsAppOrderModal from '../components/WhatsAppOrderModal';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import {
  ShoppingCart,
  Phone,
  CheckCircle,
  Truck,
  Shield,
  Award,
  Star,
  ArrowRight,
  Droplets,
  Factory,
  Users,
  Clock,
  MessageCircle,
  MapPin,
  CreditCard
} from 'lucide-react';

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '50K+', label: 'Happy Customers', icon: Users },
    { value: '47', label: 'Counties Covered', icon: Truck },
    { value: '100%', label: 'KEBS Certified', icon: Shield },
  ];

  const products = [
    {
      id: 1,
      name: 'Vertical Tank',
      capacity: '5000L',
      price: 'KSh 24,500',
      image: '/assets/vertical (2).jpeg',
      description: 'Perfect for residential and commercial water storage',
    },
    {
      id: 2,
      name: 'Horizontal Tank',
      capacity: '3000L',
      price: 'KSh 14,200',
      image: '/assets/horizontal (2).jpeg',
      description: 'Ideal for spaces with height restrictions',
    },
    {
      id: 3,
      name: 'Loft Tank',
      capacity: '1000L',
      price: 'KSh 4,500',
      image: '/assets/loft tank.jpeg',
      description: 'Compact design for rooftop installations',
    },
  ];

  const testimonials = [
    {
      name: 'John Kamau',
      location: 'Nairobi',
      text: 'Excellent quality tanks! The delivery was fast and the installation team was professional. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Mary Wanjiku',
      location: 'Mombasa',
      text: 'Best water tanks in Kenya. Have been using Kentank for 5 years now and never had any issues.',
      rating: 5,
    },
    {
      name: 'Peter Ochieng',
      location: 'Kisumu',
      text: 'Great customer service and durable products. The tank calculator helped me choose the right size.',
      rating: 5,
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Genuine Rototank Products',
      description: '100% authentic Rototank water tanks with manufacturer warranty',
    },
    {
      icon: Truck,
      title: 'Free Countrywide Delivery',
      description: 'Free delivery to all 47 counties in Kenya',
    },
    {
      icon: Clock,
      title: '25 Year Warranty',
      description: 'Industry-leading warranty for peace of mind',
    },
    {
      icon: Users,
      title: 'Expert Installation',
      description: 'Professional team for perfect setup',
    },
    {
      icon: Award,
      title: 'KEBS Certified',
      description: 'All tanks meet strict quality standards',
    },
    {
      icon: CheckCircle,
      title: 'Secure Ordering',
      description: 'Safe and secure ordering process via WhatsApp',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section - Static */}
      <section className="relative h-[calc(100vh-80px)] min-h-[500px] md:min-h-[600px] bg-gradient-to-r from-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/vertical (2).jpeg"
            alt="Kentank Water Tanks"
            fill
            className="object-cover opacity-15"
            priority
            quality={80}
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl w-full"
          >
            <div className="bg-navy-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 lg:p-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Premium Water Storage Solutions in Kenya
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed">
                Genuine Rototank water tanks with free countrywide delivery. From 500L to 24,000L for homes, farms, and industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href="/products" className="flex-1 sm:flex-none">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Browse Products
                  </Button>
                </Link>
                <a href="tel:+254736010873" className="flex-1 sm:flex-none">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-navy-900">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +254 736 010 873
                  </Button>
                </a>
              </div>
              <div className="mt-6 md:mt-8 flex flex-wrap gap-4 md:gap-6 items-center">
                <div className="flex items-center gap-2 text-white">
                  <Truck className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                  <span className="text-xs md:text-sm">Free Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                  <span className="text-xs md:text-sm">25-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/30">
                  <Phone className="w-4 h-4 md:w-6 md:h-6 text-orange-500" />
                  <a href="tel:+254736010873" className="text-sm md:text-lg font-bold text-white hover:text-orange-400 transition-colors">
                    +254 736 010 873
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <p className="text-4xl font-bold text-navy-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular water storage solutions trusted by thousands of customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={80}
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.capacity}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-2xl font-bold text-orange-500 mb-4">{product.price}</p>
                    <div className="flex gap-3">
                      <Button
                        variant="primary"
                        className="flex-1"
                        onClick={() => setIsOrderModalOpen(true)}
                      >
                        Order Now
                      </Button>
                      <Link href="/products">
                        <Button variant="outline">Details</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="secondary" size="lg">
                View All Products
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Why Choose Kentank?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to providing the best water storage solutions in Kenya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <item.icon className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tank Calculator */}
      <TankCalculator />

      {/* Testimonials */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Trusted by thousands of satisfied customers across Kenya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <p className="font-bold text-navy-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">How to Order</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to get your water tank delivered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                title: 'Choose Your Tank',
                description: 'Browse our catalog and select the perfect tank for your needs',
                step: '1',
              },
              {
                icon: ShoppingCart,
                title: 'Place Your Order',
                description: 'Order via WhatsApp or call us directly',
                step: '2',
              },
              {
                icon: CreditCard,
                title: 'Make Payment',
                description: 'Pay via M-Pesa, bank transfer, or cash on delivery',
                step: '3',
              },
              {
                icon: Truck,
                title: 'Free Delivery',
                description: 'Get your tank delivered to your doorstep nationwide',
                step: '4',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <Card className="p-6 pt-8 h-full">
                  <item.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Delivery Timeline</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fast and reliable delivery to all 47 counties
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: 'Order Confirmation',
                  time: 'Within 1 hour',
                  description: 'We confirm your order and provide delivery details',
                },
                {
                  title: 'Processing',
                  time: '1-2 business days',
                  description: 'Your tank is prepared and scheduled for delivery',
                },
                {
                  title: 'Transit',
                  time: '2-5 business days',
                  description: 'Your tank is on the way to your location',
                },
                {
                  title: 'Delivery',
                  time: '3-7 business days total',
                  description: 'Your tank arrives at your location with installation support',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <Card className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                      <span className="text-orange-500 font-semibold">{item.time}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Order Your Water Tank?</h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Get premium quality water tanks delivered to your doorstep anywhere in Kenya
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-orange-500 hover:bg-gray-100"
                onClick={() => setIsOrderModalOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                Order Now
              </Button>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-navy-900 text-white hover:bg-navy-800">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delivery Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Nationwide Delivery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver to all 47 counties in Kenya with fast and reliable shipping
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru',
              'Eldoret', 'Thika', 'Kitale', 'Garissa',
            ].map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-orange-50 transition-colors cursor-pointer"
              >
                <Truck className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="font-semibold text-navy-900 text-sm">{city}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">And 39 more counties across Kenya</p>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </main>
  );
}
