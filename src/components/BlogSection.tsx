'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Right Water Tank',
      excerpt: 'Learn about the factors to consider when selecting a water tank for your home or business, including capacity, material, and installation requirements.',
      date: 'January 15, 2026',
      readTime: '5 min read',
      image: '/assets/vertical (2).jpeg',
      category: 'Guide',
    },
    {
      id: 2,
      title: 'Water Tank Sizes Explained',
      excerpt: 'Understanding different water tank capacities and which size is best suited for your household needs, from small 500L tanks to large 10,000L tanks.',
      date: 'January 10, 2026',
      readTime: '4 min read',
      image: '/assets/horizontal (2).jpeg',
      category: 'Education',
    },
    {
      id: 3,
      title: 'How to Maintain Your Water Tank',
      excerpt: 'Essential tips for keeping your water tank clean and in optimal condition, including regular cleaning schedules and maintenance best practices.',
      date: 'January 5, 2026',
      readTime: '6 min read',
      image: '/assets/vertical (2).jpeg',
      category: 'Maintenance',
    },
    {
      id: 4,
      title: 'Benefits of Food Grade Water Tanks',
      excerpt: 'Discover why food-grade plastic water tanks are essential for storing drinking water safely and the health benefits they provide.',
      date: 'December 28, 2025',
      readTime: '5 min read',
      image: '/assets/vertical (2).jpeg',
      category: 'Health',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Blog & Resources</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert tips and guides to help you make informed decisions about water storage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`} className="block h-full">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col group border border-gray-100 hover:border-orange-200">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm mt-auto">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <button className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
