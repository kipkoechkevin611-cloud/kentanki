'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppOrderModal from '../../components/WhatsAppOrderModal';
import DeliveryEstimator from '../../components/DeliveryEstimator';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { ShoppingCart, Filter, ArrowRight, Plus, Phone, MessageCircle, CheckCircle, Truck, Search, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Products() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      capacity: product.capacity,
      price: `KSh ${product.salePrice.toLocaleString()}`,
      image: product.image,
    });
  };

  const categories = [
    { id: 'all', name: 'All Tanks' },
    { id: 'vertical', name: 'Vertical Tanks' },
    { id: 'horizontal', name: 'Horizontal Tanks' },
    { id: 'loft', name: 'Loft Tanks' },
    { id: 'underground', name: 'Underground Tanks' },
    { id: 'septic', name: 'Septic Tanks' },
  ];

  const products = [
    // Vertical Tanks - Use the correctly named vertical tank images
    {
      id: 1,
      name: 'Vertical Tank 100L',
      category: 'vertical',
      capacity: '100L',
      originalPrice: 1500,
      salePrice: 1100,
      image: '/images/products/vertical-100l.webp',
      description: 'Compact vertical tank perfect for small households',
      dimensions: '0.6m x 0.8m',
    },
    {
      id: 2,
      name: 'Vertical Tank 250L',
      category: 'vertical',
      capacity: '250L',
      originalPrice: 2500,
      salePrice: 1800,
      image: '/images/products/vertical-100l.webp',
      description: 'Small vertical tank for basic water storage',
      dimensions: '0.8m x 1.0m',
    },
    {
      id: 3,
      name: 'Vertical Tank 500L',
      category: 'vertical',
      capacity: '500L',
      originalPrice: 3800,
      salePrice: 2800,
      image: '/images/products/vertical-100l.webp',
      description: 'Medium vertical tank for small families',
      dimensions: '1.0m x 1.2m',
    },
    {
      id: 4,
      name: 'Vertical Tank 1000L',
      category: 'vertical',
      capacity: '1000L',
      originalPrice: 7500,
      salePrice: 5500,
      image: '/images/products/vertical-100l.webp',
      description: 'Standard vertical tank for average households',
      dimensions: '1.2m x 1.5m',
    },
    {
      id: 5,
      name: 'Vertical Tank 1500L',
      category: 'vertical',
      capacity: '1500L',
      originalPrice: 9500,
      salePrice: 6800,
      image: '/images/products/vertical-100l.webp',
      description: 'Large vertical tank for family use',
      dimensions: '1.4m x 1.8m',
    },
    {
      id: 6,
      name: 'Vertical Tank 2000L',
      category: 'vertical',
      capacity: '2000L',
      originalPrice: 15000,
      salePrice: 10500,
      image: '/images/products/vertical-100l.webp',
      description: 'Extra-large vertical tank for homes',
      dimensions: '1.6m x 2.0m',
    },
    {
      id: 7,
      name: 'Vertical Tank 2300L',
      category: 'vertical',
      capacity: '2300L',
      originalPrice: 15500,
      salePrice: 10800,
      image: '/images/products/vertical-100l.webp',
      description: 'Premium vertical tank capacity',
      dimensions: '1.8m x 2.1m',
    },
    {
      id: 8,
      name: 'Vertical Tank 3000L',
      category: 'vertical',
      capacity: '3000L',
      originalPrice: 20000,
      salePrice: 14500,
      image: '/images/products/vertical-100l.webp',
      description: 'Large capacity for homes and small businesses',
      dimensions: '1.8m x 2.0m',
    },
    {
      id: 9,
      name: 'Vertical Tank 4000L',
      category: 'vertical',
      capacity: '4000L',
      originalPrice: 26000,
      salePrice: 18500,
      image: '/images/products/vertical-4000l.webp',
      description: 'Extra-large capacity for commercial use',
      dimensions: '2.0m x 2.2m',
    },
    {
      id: 10,
      name: 'Vertical Tank 5000L',
      category: 'vertical',
      capacity: '5000L',
      originalPrice: 38000,
      salePrice: 27500,
      image: '/images/products/vertical-4000l.webp',
      description: 'Premium capacity for homes and businesses',
      dimensions: '2.2m x 2.5m',
    },
    {
      id: 11,
      name: 'Vertical Tank 6000L',
      category: 'vertical',
      capacity: '6000L',
      originalPrice: 45000,
      salePrice: 32500,
      image: '/images/products/vertical-4000l.webp',
      description: 'Large capacity for commercial properties',
      dimensions: '2.4m x 2.8m',
    },
    {
      id: 12,
      name: 'Vertical Tank 8000L',
      category: 'vertical',
      capacity: '8000L',
      originalPrice: 55000,
      salePrice: 38500,
      image: '/images/products/vertical-4000l.webp',
      description: 'Extra-large capacity for industrial use',
      dimensions: '2.6m x 3.0m',
    },
    {
      id: 13,
      name: 'Vertical Tank 10000L',
      category: 'vertical',
      capacity: '10000L',
      originalPrice: 70000,
      salePrice: 51000,
      image: '/images/products/vertical-4000l.webp',
      description: 'Massive capacity for commercial and industrial',
      dimensions: '2.8m x 3.2m',
    },
    {
      id: 14,
      name: 'Vertical Tank 12000L',
      category: 'vertical',
      capacity: '12000L',
      originalPrice: 80000,
      salePrice: 58000,
      image: '/images/products/vertical-4000l.webp',
      description: 'Extra-large capacity for major operations',
      dimensions: '3.0m x 3.5m',
    },
    {
      id: 15,
      name: 'Vertical Tank 16000L',
      category: 'vertical',
      capacity: '16000L',
      originalPrice: 100000,
      salePrice: 72500,
      image: '/images/products/vertical-4000l.webp',
      description: 'Premium industrial capacity',
      dimensions: '3.2m x 3.8m',
    },
    {
      id: 16,
      name: 'Vertical Tank 20000L',
      category: 'vertical',
      capacity: '20000L',
      originalPrice: 135000,
      salePrice: 98500,
      image: '/images/products/vertical-4000l.webp',
      description: 'Massive industrial tank for factories',
      dimensions: '4.0m x 4.0m',
    },
    {
      id: 17,
      name: 'Vertical Tank 24000L',
      category: 'vertical',
      capacity: '24000L',
      originalPrice: 180000,
      salePrice: 132500,
      image: '/images/products/vertical-4000l.webp',
      description: 'Largest capacity for major industrial operations',
      dimensions: '4.5m x 4.5m',
    },
    // Horizontal Tanks - Use the correctly named horizontal tank image
    {
      id: 18,
      name: 'Horizontal Tank 1000L',
      category: 'horizontal',
      capacity: '1000L',
      originalPrice: 7500,
      salePrice: 5500,
      image: '/images/products/horizontal-1000l.webp',
      description: 'Space-saving horizontal design',
      dimensions: '1.5m x 0.9m',
    },
    {
      id: 19,
      name: 'Horizontal Tank 2000L',
      category: 'horizontal',
      capacity: '2000L',
      originalPrice: 15000,
      salePrice: 10500,
      image: '/images/products/horizontal-1000l.webp',
      description: 'Medium horizontal tank',
      dimensions: '2.5m x 1.2m',
    },
    {
      id: 20,
      name: 'Horizontal Tank 3000L',
      category: 'horizontal',
      capacity: '3000L',
      originalPrice: 20000,
      salePrice: 14500,
      image: '/images/products/horizontal-1000l.webp',
      description: 'Large horizontal tank for limited height spaces',
      dimensions: '3.0m x 1.4m',
    },
    {
      id: 21,
      name: 'Horizontal Tank 5000L',
      category: 'horizontal',
      capacity: '5000L',
      originalPrice: 38000,
      salePrice: 27500,
      image: '/images/products/horizontal-1000l.webp',
      description: 'Extra-large horizontal tank',
      dimensions: '4.0m x 1.5m',
    },
    // Loft Tanks - Use the correctly named loft tank image
    {
      id: 22,
      name: 'Loft Tank 100L',
      category: 'loft',
      capacity: '100L',
      originalPrice: 2200,
      salePrice: 1500,
      image: '/images/products/loft-100l.webp',
      description: 'Compact loft tank for rooftop installation',
      dimensions: '0.5m x 0.6m',
    },
    {
      id: 23,
      name: 'Loft Tank 250L',
      category: 'loft',
      capacity: '250L',
      originalPrice: 3200,
      salePrice: 2200,
      image: '/images/products/loft-100l.webp',
      description: 'Small loft tank',
      dimensions: '0.6m x 0.8m',
    },
    {
      id: 24,
      name: 'Loft Tank 500L',
      category: 'loft',
      capacity: '500L',
      originalPrice: 4500,
      salePrice: 3200,
      image: '/images/products/loft-100l.webp',
      description: 'Standard loft tank for multi-story buildings',
      dimensions: '0.8m x 1.0m',
    },
    {
      id: 25,
      name: 'Loft Tank 1000L',
      category: 'loft',
      capacity: '1000L',
      originalPrice: 7500,
      salePrice: 5500,
      image: '/images/products/loft-100l.webp',
      description: 'Large loft tank for buildings',
      dimensions: '1.0m x 1.2m',
    },
    // Underground Tanks - Use the correctly named underground tank image
    {
      id: 26,
      name: 'Underground Tank 3000L',
      category: 'underground',
      capacity: '3000L',
      originalPrice: 20000,
      salePrice: 14500,
      image: '/images/products/underground-3000l.webp',
      description: 'Durable underground tank for rainwater harvesting',
      dimensions: '1.5m x 1.8m',
    },
    {
      id: 27,
      name: 'Underground Tank 5000L',
      category: 'underground',
      capacity: '5000L',
      originalPrice: 38000,
      salePrice: 27500,
      image: '/images/products/underground-3000l.webp',
      description: 'Large capacity underground storage',
      dimensions: '2.0m x 2.0m',
    },
    {
      id: 28,
      name: 'Underground Tank 10000L',
      category: 'underground',
      capacity: '10000L',
      originalPrice: 70000,
      salePrice: 51000,
      image: '/images/products/underground-3000l.webp',
      description: 'Extra-large underground storage',
      dimensions: '2.5m x 2.5m',
    },
    // Septic Tanks - Use the correctly named septic tank image
    {
      id: 29,
      name: 'Septic Tank 3000L',
      category: 'septic',
      capacity: '3000L',
      originalPrice: 20000,
      salePrice: 14500,
      image: '/images/products/septic-3000l.webp',
      description: 'Heavy-duty septic tank for waste management',
      dimensions: '2.0m x 1.8m',
    },
    {
      id: 30,
      name: 'Septic Tank 5000L',
      category: 'septic',
      capacity: '5000L',
      originalPrice: 38000,
      salePrice: 27500,
      image: '/images/products/septic-3000l.webp',
      description: 'Large septic tank for commercial properties',
      dimensions: '2.5m x 2.2m',
    },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const searchedProducts = searchQuery
    ? filteredProducts.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.capacity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredProducts;

  const handleOrder = (productName: string) => {
    setSelectedProduct(productName);
    setIsOrderModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Premium quality water storage solutions for every need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter & Search */}
      <section className="py-8 bg-white border-b sticky top-20 z-30 bg-opacity-95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-navy-900" />
              <span className="font-semibold text-navy-900">Filter by Category:</span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-500 w-full md:w-64"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-3" role="group" aria-label="Product categories">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm ${selectedCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                aria-pressed={selectedCategory === category.id}
                aria-label={`Filter by ${category.name}`}
              >
                {category.name}
              </button>
            ))}
          </div>
          {searchedProducts.length !== filteredProducts.length && (
            <p className="mt-3 text-sm text-gray-600">
              Found {searchedProducts.length} of {filteredProducts.length} products
            </p>
          )}
        </div>
      </section>

      {/* Delivery Estimator */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <DeliveryEstimator />
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {searchedProducts.map((product, index) => {
              const savings = product.originalPrice - product.salePrice;
              const isBestSeller = index === 0 || index === 3 || index === 7;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col group border border-gray-100 hover:border-orange-200">
                    <div className="relative h-44 md:h-52 overflow-hidden bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        quality={80}
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 flex flex-col gap-1.5">
                        {isBestSeller && (
                          <span className="bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                            BEST SELLER
                          </span>
                        )}
                        <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                          SALE
                        </span>
                        <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                          <CheckCircle className="w-2.5 h-2.5" />
                          In Stock
                        </span>
                        <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Truck className="w-2.5 h-2.5" />
                          Free Delivery
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                        {product.capacity}
                      </div>
                    </div>
                    <div className="p-4 md:p-5 flex-1 flex flex-col">
                      <h3 className="text-sm md:text-base font-bold text-navy-900 mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-xs text-gray-500 mb-3">{product.dimensions}</p>
                      <div className="mb-3">
                        <p className="text-xs text-gray-400 line-through">KSh {product.originalPrice.toLocaleString()}</p>
                        <p className="text-lg md:text-xl font-bold text-green-600">KSh {product.salePrice.toLocaleString()}</p>
                        <p className="text-xs text-green-600 font-semibold">You Save KSh {savings.toLocaleString()}</p>
                        <p className="text-xs text-orange-500 mt-1">Special Offer – Limited Time Price</p>
                      </div>
                      <div className="mt-auto space-y-2">
                        <div className="flex gap-2">
                          <Button
                            variant="primary"
                            className="flex-1 text-xs py-2.5"
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingCart className="w-3 h-3 mr-1" />
                            Add to Cart
                          </Button>
                          <Link href={`/products/${product.id}`} className="flex-1">
                            <Button variant="outline" className="w-full text-xs py-2.5">Details</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {searchedProducts.length === 0 && (
            <div className="text-center py-20 col-span-full">
              <p className="text-gray-500 text-xl">No products found matching your search.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-orange-500 hover:text-orange-600 font-semibold"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Need Help Choosing?</h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you find the perfect water storage solution
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsOrderModalOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                Request Quote
              </Button>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
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
        productName={selectedProduct}
      />
    </main>
  );
}
