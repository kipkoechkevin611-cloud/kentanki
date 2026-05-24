'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import WhatsAppOrderModal from '../../../components/WhatsAppOrderModal';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import {
  ShoppingCart,
  Truck,
  Shield,
  CheckCircle,
  ArrowLeft,
  Star,
  Ruler,
  Droplets
} from 'lucide-react';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: params.id,
    name: 'Vertical Tank 5000L',
    capacity: '5000L',
    price: 'KSh 24,500',
    description: 'Premium quality vertical water tank designed for durability and longevity. Perfect for residential homes, small businesses, and agricultural use. Made from food-grade polyethylene material that is UV resistant and corrosion-free.',
    images: [
      '/assets/vertical (2).jpeg',
      '/assets/vertical (2).jpeg',
      '/assets/vertical (2).jpeg',
      '/assets/vertical (2).jpeg',
    ],
    specifications: {
      capacity: '5000 Liters',
      dimensions: '2.2m (Diameter) x 2.5m (Height)',
      material: 'Food-grade Polyethylene',
      color: 'Blue / Black / Green',
      warranty: '25 Years',
      weight: '180 kg',
      inlet: '150mm',
      outlet: '50mm',
    },
    features: [
      'UV resistant for outdoor use',
      'Corrosion and rust-free',
      'Food-grade material safe for drinking water',
      'Easy to install and maintain',
      'Impact resistant',
      'Temperature resistant (-5°C to 60°C)',
      'Algae growth prevention',
      'KEBS certified quality',
    ],
    benefits: [
      'Long-lasting durability with 25-year warranty',
      'Low maintenance requirements',
      'Cost-effective water storage solution',
      'Environmentally friendly material',
      'Suitable for all weather conditions',
      'Easy to clean and sanitize',
    ],
    delivery: {
      areas: 'Nationwide delivery to all 47 counties',
      timeline: '3-7 business days',
      installation: 'Professional installation available',
      cost: 'Calculated at checkout based on location',
    },
    reviews: [
      {
        id: 1,
        name: 'John Kamau',
        rating: 5,
        text: 'Excellent quality tank! Delivered on time and installation was smooth.',
        date: '2 weeks ago',
      },
      {
        id: 2,
        name: 'Mary Wanjiku',
        rating: 5,
        text: 'Best investment for my home. The tank is sturdy and looks great.',
        date: '1 month ago',
      },
      {
        id: 3,
        name: 'Peter Ochieng',
        rating: 4,
        text: 'Good quality tank. Delivery took a bit longer than expected but worth the wait.',
        date: '2 months ago',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Breadcrumb */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-navy-900">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-navy-900">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-navy-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-orange-500' : 'border-transparent'
                      }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="mb-6">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {product.capacity}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-navy-900 mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-orange-500 mb-6">{product.price}</p>
              <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

              <div className="flex gap-4 mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  onClick={() => setIsOrderModalOpen(true)}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order Now
                </Button>
                <Button variant="whatsapp" size="lg">
                  WhatsApp Order
                </Button>
              </div>

              <Card className="p-6 mb-8">
                <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-orange-500" />
                  Delivery Information
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• {product.delivery.areas}</li>
                  <li>• Delivery timeline: {product.delivery.timeline}</li>
                  <li>• {product.delivery.installation}</li>
                </ul>
              </Card>

              <div className="flex items-center gap-4">
                <Shield className="w-6 h-6 text-green-500" />
                <span className="text-gray-600">25-Year Warranty Included</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Specifications</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <Card key={key} className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Ruler className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold text-navy-900 capitalize">{key}</span>
                </div>
                <p className="text-gray-600">{value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Key Features</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Why Choose This Tank?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 h-full">
                  <Droplets className="w-8 h-8 text-orange-500 mb-4" />
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Customer Reviews</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-navy-900">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get your premium water tank delivered to your doorstep anywhere in Kenya
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsOrderModalOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                Order Now
              </Button>
              <Link href="/products">
                <Button variant="secondary" size="lg">
                  <ArrowLeft className="w-5 h-5" />
                  Back to Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        productName={product.name}
      />
    </main>
  );
}
