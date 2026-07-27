'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'John Kamau',
      location: 'Nairobi',
      text: 'Excellent quality tanks! The delivery was fast and the installation team was professional. Highly recommended!',
      rating: 5,
      date: '2 weeks ago',
    },
    {
      name: 'Mary Wanjiku',
      location: 'Mombasa',
      text: 'Best water tanks in Kenya. Have been using Kentank for 5 years now and never had any issues.',
      rating: 5,
      date: '1 month ago',
    },
    {
      name: 'Peter Ochieng',
      location: 'Kisumu',
      text: 'Great customer service and durable products. The tank calculator helped me choose the right size.',
      rating: 5,
      date: '3 weeks ago',
    },
    {
      name: 'Grace Njoroge',
      location: 'Nakuru',
      text: 'Ordered a 5000L tank and it arrived within 3 days. The quality is outstanding and the price was very competitive.',
      rating: 5,
      date: '1 week ago',
    },
    {
      name: 'David Kimani',
      location: 'Eldoret',
      text: 'Professional installation team and excellent after-sales support. Would definitely buy again.',
      rating: 5,
      date: '2 months ago',
    },
    {
      name: 'Sarah Akinyi',
      location: 'Thika',
      text: 'The WhatsApp ordering process was so convenient. Got my tank delivered to my farm without any hassle.',
      rating: 5,
      date: '3 days ago',
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Customer Testimonials</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What our customers say about Kentank water tanks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 flex-1 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.location} • {testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
