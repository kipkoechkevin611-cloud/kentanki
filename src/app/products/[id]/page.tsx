'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import WhatsAppOrderModal from '../../../components/WhatsAppOrderModal';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import { useCart } from '../../../context/CartContext';
import {
  ShoppingCart,
  Truck,
  Shield,
  CheckCircle,
  ArrowLeft,
  Star,
  Ruler,
  Droplets,
  Phone,
  MessageCircle,
  HelpCircle,
  Package,
  Award,
  ThumbsUp,
  Sun
} from 'lucide-react';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = {
    id: params.id,
    name: 'Vertical Tank 5000L',
    capacity: '5000L',
    originalPrice: 35000,
    salePrice: 27500,
    description: 'Premium quality Rototank vertical water tank designed for durability and longevity. Perfect for residential homes, small businesses, and agricultural use. Made from food-grade polyethylene material that is UV resistant and corrosion-free.',
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
      warranty: '15 Years',
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
      cost: 'FREE countrywide delivery',
    },
    reviews: [
      {
        id: 1,
        name: 'John Kamau',
        rating: 5,
        text: 'Excellent quality tank! Delivered on time and installation was smooth. The free delivery was a great bonus!',
        date: '2 weeks ago',
      },
      {
        id: 2,
        name: 'Mary Wanjiku',
        rating: 5,
        text: 'Best investment for my home. The tank is sturdy and looks great. Genuine Rototank quality.',
        date: '1 month ago',
      },
      {
        id: 3,
        name: 'Peter Ochieng',
        rating: 5,
        text: 'Outstanding service and product. The 25-year warranty gives me peace of mind.',
        date: '2 months ago',
      },
    ],
    faqs: [
      {
        question: 'What is the warranty period for this tank?',
        answer: 'All Rototank products come with a 25-year warranty against manufacturing defects and UV degradation.',
      },
      {
        question: 'Is the tank suitable for drinking water?',
        answer: 'Yes, all our tanks are made from food-grade polyethylene material that is KEBS certified and safe for storing drinking water.',
      },
      {
        question: 'How long does delivery take?',
        answer: 'We offer free nationwide delivery to all 47 counties. Delivery typically takes 3-7 business days depending on your location.',
      },
      {
        question: 'Do you provide installation services?',
        answer: 'Yes, we provide professional installation services at an additional cost. Our team ensures proper setup and positioning.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept M-Pesa, bank transfers, and cash on delivery for your convenience.',
      },
    ],
    relatedProducts: [
      {
        id: 2,
        name: 'Vertical Tank 3000L',
        capacity: '3000L',
        price: 'KSh 14,500',
        image: '/assets/vertical.jpeg',
      },
      {
        id: 3,
        name: 'Vertical Tank 10000L',
        capacity: '10000L',
        price: 'KSh 51,000',
        image: '/assets/vertical (2).jpeg',
      },
      {
        id: 4,
        name: 'Horizontal Tank 5000L',
        capacity: '5000L',
        price: 'KSh 27,500',
        image: '/assets/horizontal (2).jpeg',
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
              <div className="relative mb-4 h-96">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  quality={85}
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all h-20 ${selectedImage === index ? 'border-orange-500' : 'border-transparent'
                      }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="25vw"
                      quality={75}
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
              <div className="mb-6">
                <p className="text-2xl text-gray-400 line-through">KSh {product.originalPrice.toLocaleString()}</p>
                <p className="text-4xl font-bold text-green-600">KSh {product.salePrice.toLocaleString()}</p>
                <p className="text-lg text-green-600 font-semibold">You Save KSh {(product.originalPrice - product.salePrice).toLocaleString()}</p>
                <p className="text-sm text-orange-500 mt-2">Special Offer – Limited Time Price</p>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center font-bold text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-12 text-center border border-gray-300 rounded-lg font-bold text-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center font-bold text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  onClick={() => {
                    addToCart({
                      id: parseInt(product.id),
                      name: product.name,
                      capacity: product.capacity,
                      price: `KSh ${product.salePrice.toLocaleString()}`,
                      image: product.images[0],
                    });
                    setQuantity(1);
                  }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Link href="/products" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full">Back to Products</Button>
                </Link>
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
                <span className="text-gray-600">15-Year Warranty Included</span>
              </div>

              {/* Product Benefits */}
              <Card className="p-6 mt-6 bg-orange-50 border-orange-200">
                <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  Product Benefits
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-orange-500" />
                    <span>UV Stabilized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <span>Food Grade Plastic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-green-500" />
                    <span>Heavy Duty Construction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Safe for Drinking Water</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-purple-500" />
                    <span>Long Service Life</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <span>Leak Resistant</span>
                  </div>
                </div>
              </Card>
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

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-orange-500" />
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {product.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="font-bold text-navy-900 mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-8">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4 flex items-center gap-3">
              <Package className="w-8 h-8 text-orange-500" />
              Related Products
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={80}
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {relatedProduct.capacity}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-xl font-bold text-orange-500 mb-4">{relatedProduct.price}</p>
                    <Link href={`/products/${relatedProduct.id}`} className="mt-auto">
                      <Button variant="outline" className="w-full">View Details</Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
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
