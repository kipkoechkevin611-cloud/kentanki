'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Truck
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+254 740 272 542', '+254 720 123 456'],
      action: 'tel:+254740272542',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@kentank.co.ke', 'sales@kentank.co.ke'],
      action: 'mailto:info@kentank.co.ke',
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Industrial Area, Nairobi', 'Kenya'],
      action: '#',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 8:00 AM - 6:00 PM', 'Sunday: Closed'],
      action: '#',
    },
  ];

  const deliveryRegions = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika',
    'Kitale', 'Garissa', 'Kakamega', 'Meru', 'Nyeri', 'Machakos',
  ];

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
            <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with us for inquiries, quotes, or support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <info.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 mb-1">{detail}</p>
                  ))}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="0712 345 678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="order">Place an Order</option>
                      <option value="support">Technical Support</option>
                      <option value="delivery">Delivery Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full min-h-[500px] overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">Our Location</h3>
                    <p className="text-gray-600 mb-4">Industrial Area, Nairobi, Kenya</p>
                    <p className="text-gray-500 text-sm">
                      Google Maps integration would be embedded here
                    </p>
                    <Button variant="outline" className="mt-4">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-green-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Chat with us on WhatsApp</h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Get instant responses to your inquiries via WhatsApp
            </p>
            <a
              href="https://wa.me/2540740272542"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Delivery Regions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Truck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Delivery Coverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We deliver to all 47 counties in Kenya
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {deliveryRegions.map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <Truck className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-sm">{region}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  <span className="font-semibold text-navy-900">+35 more counties</span> across Kenya
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'How long does delivery take?',
                answer: 'Delivery typically takes 3-7 business days depending on your location within Kenya.',
              },
              {
                question: 'Do you offer installation services?',
                answer: 'Yes, we offer professional installation services for all our water tanks at an additional cost.',
              },
              {
                question: 'What is your warranty policy?',
                answer: 'All our tanks come with a 25-year warranty against manufacturing defects.',
              },
              {
                question: 'Can I get a custom tank size?',
                answer: 'Yes, we can manufacture custom tank sizes based on your specific requirements. Contact us for a quote.',
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold text-navy-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
