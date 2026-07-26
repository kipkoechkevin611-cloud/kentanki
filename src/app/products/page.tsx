'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppOrderModal from '../../components/WhatsAppOrderModal';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { ShoppingCart, Filter, ArrowRight, Plus, Phone, MessageCircle, CheckCircle, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Products() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState('');
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      capacity: product.capacity,
      price: product.price,
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
      price: 'KSh 1,100',
      image: '/assets/vertical.jpeg',
      description: 'Compact vertical tank perfect for small households',
      dimensions: '0.6m x 0.8m',
    },
    {
      id: 2,
      name: 'Vertical Tank 250L',
      category: 'vertical',
      capacity: '250L',
      price: 'KSh 1,800',
      image: '/assets/vertical.jpeg',
      description: 'Small vertical tank for basic water storage',
      dimensions: '0.8m x 1.0m',
    },
    {
      id: 3,
      name: 'Vertical Tank 500L',
      category: 'vertical',
      capacity: '500L',
      price: 'KSh 2,800',
      image: '/assets/vertical.jpeg',
      description: 'Medium vertical tank for small families',
      dimensions: '1.0m x 1.2m',
    },
    {
      id: 4,
      name: 'Vertical Tank 1000L',
      category: 'vertical',
      capacity: '1000L',
      price: 'KSh 5,500',
      image: '/assets/vertical.jpeg',
      description: 'Standard vertical tank for average households',
      dimensions: '1.2m x 1.5m',
    },
    {
      id: 5,
      name: 'Vertical Tank 1500L',
      category: 'vertical',
      capacity: '1500L',
      price: 'KSh 6,800',
      image: '/assets/vertical.jpeg',
      description: 'Large vertical tank for family use',
      dimensions: '1.4m x 1.8m',
    },
    {
      id: 6,
      name: 'Vertical Tank 2000L',
      category: 'vertical',
      capacity: '2000L',
      price: 'KSh 10,500',
      image: '/assets/vertical.jpeg',
      description: 'Extra-large vertical tank for homes',
      dimensions: '1.6m x 2.0m',
    },
    {
      id: 7,
      name: 'Vertical Tank 2300L',
      category: 'vertical',
      capacity: '2300L',
      price: 'KSh 10,800',
      image: '/assets/vertical.jpeg',
      description: 'Premium vertical tank capacity',
      dimensions: '1.8m x 2.1m',
    },
    {
      id: 8,
      name: 'Vertical Tank 3000L',
      category: 'vertical',
      capacity: '3000L',
      price: 'KSh 14,500',
      image: '/assets/vertical.jpeg',
      description: 'Large capacity for homes and small businesses',
      dimensions: '1.8m x 2.0m',
    },
    {
      id: 9,
      name: 'Vertical Tank 4000L',
      category: 'vertical',
      capacity: '4000L',
      price: 'KSh 18,500',
      image: '/assets/vertical (2).jpeg',
      description: 'Extra-large capacity for commercial use',
      dimensions: '2.0m x 2.2m',
    },
    {
      id: 10,
      name: 'Vertical Tank 5000L',
      category: 'vertical',
      capacity: '5000L',
      price: 'KSh 27,500',
      image: '/assets/vertical (2).jpeg',
      description: 'Premium capacity for homes and businesses',
      dimensions: '2.2m x 2.5m',
    },
    {
      id: 11,
      name: 'Vertical Tank 6000L',
      category: 'vertical',
      capacity: '6000L',
      price: 'KSh 32,500',
      image: '/assets/vertical (2).jpeg',
      description: 'Large capacity for commercial properties',
      dimensions: '2.4m x 2.8m',
    },
    {
      id: 12,
      name: 'Vertical Tank 8000L',
      category: 'vertical',
      capacity: '8000L',
      price: 'KSh 38,500',
      image: '/assets/vertical (2).jpeg',
      description: 'Extra-large capacity for industrial use',
      dimensions: '2.6m x 3.0m',
    },
    {
      id: 13,
      name: 'Vertical Tank 10000L',
      category: 'vertical',
      capacity: '10000L',
      price: 'KSh 51,000',
      image: '/assets/vertical (2).jpeg',
      description: 'Massive capacity for commercial and industrial',
      dimensions: '2.8m x 3.2m',
    },
    {
      id: 14,
      name: 'Vertical Tank 12000L',
      category: 'vertical',
      capacity: '12000L',
      price: 'KSh 58,000',
      image: '/assets/vertical (2).jpeg',
      description: 'Extra-large capacity for major operations',
      dimensions: '3.0m x 3.5m',
    },
    {
      id: 15,
      name: 'Vertical Tank 16000L',
      category: 'vertical',
      capacity: '16000L',
      price: 'KSh 72,500',
      image: '/assets/vertical (2).jpeg',
      description: 'Premium industrial capacity',
      dimensions: '3.2m x 3.8m',
    },
    {
      id: 16,
      name: 'Vertical Tank 20000L',
      category: 'vertical',
      capacity: '20000L',
      price: 'KSh 98,500',
      image: '/assets/vertical (2).jpeg',
      description: 'Massive industrial tank for factories',
      dimensions: '4.0m x 4.0m',
    },
    {
      id: 17,
      name: 'Vertical Tank 24000L',
      category: 'vertical',
      capacity: '24000L',
      price: 'KSh 132,500',
      image: '/assets/vertical (2).jpeg',
      description: 'Largest capacity for major industrial operations',
      dimensions: '4.5m x 4.5m',
    },
    // Horizontal Tanks - Use the correctly named horizontal tank image
    {
      id: 18,
      name: 'Horizontal Tank 1000L',
      category: 'horizontal',
      capacity: '1000L',
      price: 'KSh 5,500',
      image: '/assets/horizontal (2).jpeg',
      description: 'Space-saving horizontal design',
      dimensions: '1.5m x 0.9m',
    },
    {
      id: 19,
      name: 'Horizontal Tank 2000L',
      category: 'horizontal',
      capacity: '2000L',
      price: 'KSh 10,500',
      image: '/assets/horizontal (2).jpeg',
      description: 'Medium horizontal tank',
      dimensions: '2.5m x 1.2m',
    },
    {
      id: 20,
      name: 'Horizontal Tank 3000L',
      category: 'horizontal',
      capacity: '3000L',
      price: 'KSh 14,500',
      image: '/assets/horizontal (2).jpeg',
      description: 'Large horizontal tank for limited height spaces',
      dimensions: '3.0m x 1.4m',
    },
    {
      id: 21,
      name: 'Horizontal Tank 5000L',
      category: 'horizontal',
      capacity: '5000L',
      price: 'KSh 27,500',
      image: '/assets/horizontal (2).jpeg',
      description: 'Extra-large horizontal tank',
      dimensions: '4.0m x 1.5m',
    },
    // Loft Tanks - Use the correctly named loft tank image
    {
      id: 22,
      name: 'Loft Tank 100L',
      category: 'loft',
      capacity: '100L',
      price: 'KSh 1,500',
      image: '/assets/loft tank.jpeg',
      description: 'Compact loft tank for rooftop installation',
      dimensions: '0.5m x 0.6m',
    },
    {
      id: 23,
      name: 'Loft Tank 250L',
      category: 'loft',
      capacity: '250L',
      price: 'KSh 2,200',
      image: '/assets/loft tank.jpeg',
      description: 'Small loft tank',
      dimensions: '0.6m x 0.8m',
    },
    {
      id: 24,
      name: 'Loft Tank 500L',
      category: 'loft',
      capacity: '500L',
      price: 'KSh 3,200',
      image: '/assets/loft tank.jpeg',
      description: 'Standard loft tank for multi-story buildings',
      dimensions: '0.8m x 1.0m',
    },
    {
      id: 25,
      name: 'Loft Tank 1000L',
      category: 'loft',
      capacity: '1000L',
      price: 'KSh 5,500',
      image: '/assets/loft tank.jpeg',
      description: 'Large loft tank for buildings',
      dimensions: '1.0m x 1.2m',
    },
    // Underground Tanks - Use the correctly named underground tank image
    {
      id: 26,
      name: 'Underground Tank 3000L',
      category: 'underground',
      capacity: '3000L',
      price: 'KSh 14,500',
      image: '/assets/under ground.jpeg',
      description: 'Durable underground tank for rainwater harvesting',
      dimensions: '1.5m x 1.8m',
    },
    {
      id: 27,
      name: 'Underground Tank 5000L',
      category: 'underground',
      capacity: '5000L',
      price: 'KSh 27,500',
      image: '/assets/under ground.jpeg',
      description: 'Large capacity underground storage',
      dimensions: '2.0m x 2.0m',
    },
    {
      id: 28,
      name: 'Underground Tank 10000L',
      category: 'underground',
      capacity: '10000L',
      price: 'KSh 51,000',
      image: '/assets/under ground.jpeg',
      description: 'Extra-large underground storage',
      dimensions: '2.5m x 2.5m',
    },
    // Septic Tanks - Use the correctly named septic tank image
    {
      id: 29,
      name: 'Septic Tank 3000L',
      category: 'septic',
      capacity: '3000L',
      price: 'KSh 14,500',
      image: '/assets/Septic Tank.jpeg',
      description: 'Heavy-duty septic tank for waste management',
      dimensions: '2.0m x 1.8m',
    },
    {
      id: 30,
      name: 'Septic Tank 5000L',
      category: 'septic',
      capacity: '5000L',
      price: 'KSh 27,500',
      image: '/assets/Septic Tank.jpeg',
      description: 'Large septic tank for commercial properties',
      dimensions: '2.5m x 2.2m',
    },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

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

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-navy-900" />
            <span className="font-semibold text-navy-900">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-3" role="group" aria-label="Product categories">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${selectedCategory === category.id
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
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={80}
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        In Stock
                      </span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Truck className="w-3 h-3" />
                        Free Delivery
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.capacity}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 flex-1">{product.description}</p>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500">Dimensions: {product.dimensions}</p>
                    </div>
                    <p className="text-2xl font-bold text-orange-500 mb-4">{product.price}</p>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="primary"
                        className="w-full"
                        onClick={() => handleAddToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <div className="flex gap-2">
                        <Link href={`/products/${product.id}`} className="flex-1">
                          <Button variant="outline" className="w-full" aria-label={`View details for ${product.name}`}>Details</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No products found in this category.</p>
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
