'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import {
  Award,
  Shield,
  Factory,
  Users,
  Target,
  Eye,
  CheckCircle,
  Globe
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality. Every tank is manufactured to the highest standards using premium materials.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. We strive to exceed expectations with every interaction.',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We are committed to environmental responsibility through sustainable manufacturing practices.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Continuously improving our products and processes to serve our customers better.',
    },
  ];

  const milestones = [
    { year: '2009', event: 'Company founded in Nairobi' },
    { year: '2012', event: 'Expanded to Mombasa and Kisumu' },
    { year: '2015', event: 'Achieved KEBS certification' },
    { year: '2018', event: 'Opened second manufacturing plant' },
    { year: '2020', event: 'Reached 30,000 customers milestone' },
    { year: '2024', event: 'Nationwide coverage - 47 counties' },
  ];

  const certifications = [
    {
      name: 'KEBS Certified',
      description: 'All products meet Kenya Bureau of Standards quality requirements',
      icon: Award,
    },
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System certified',
      icon: Shield,
    },
    {
      name: 'Food Grade Material',
      description: 'Safe for storing drinking water',
      icon: CheckCircle,
    },
    {
      name: '25 Year Warranty',
      description: 'Industry-leading warranty on all products',
      icon: Award,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=1920')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Kentank</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Kenya&apos;s leading manufacturer of premium water storage solutions. For over 15 years, we&apos;ve been providing durable, high-quality water tanks to homes, farms, and industries across the country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-10 h-10 text-orange-500" />
                <h2 className="text-3xl font-bold text-navy-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To provide Kenyans with affordable, durable, and high-quality water storage solutions that improve lives and contribute to sustainable development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to innovation, quality, and customer satisfaction, ensuring that every product we manufacture meets the highest standards of excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-10 h-10 text-orange-500" />
                <h2 className="text-3xl font-bold text-navy-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To be East Africa&apos;s most trusted and innovative water storage solutions provider, known for quality, reliability, and exceptional customer service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where every Kenyan household and business has access to reliable water storage, contributing to water security across the nation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From a small workshop in Nairobi to a nationwide manufacturing leader
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=800"
                alt="Manufacturing facility"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2009, Kentank started as a small manufacturing unit in Nairobi with a simple mission: to provide Kenyans with high-quality, affordable water storage solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Over the years, we have grown from a small team of 5 employees to a workforce of over 200 skilled professionals, operating from two state-of-the-art manufacturing facilities.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Today, we are proud to serve over 50,000 customers across all 47 counties in Kenya, making us one of the country&apos;s most trusted water tank manufacturers.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has earned us numerous certifications and awards, including KEBS certification and ISO 9001:2015 quality management certification.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <Card className={`p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <span className="text-3xl font-bold text-orange-500">{milestone.year}</span>
                      <p className="text-gray-700 mt-2">{milestone.event}</p>
                    </Card>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-orange-500 rounded-full items-center justify-center z-10">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-full bg-white/5 border-white/10">
                  <value.icon className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Certifications & Quality</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our commitment to quality is backed by industry certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-full">
                  <cert.icon className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-navy-900 mb-4">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Quality */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Manufacturing Excellence</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our state-of-the-art manufacturing facilities are equipped with the latest technology and staffed by skilled professionals who are committed to producing the highest quality water tanks.
              </p>
              <ul className="space-y-4">
                {[
                  'Advanced rotational molding technology',
                  'Strict quality control at every stage',
                  'Food-grade polyethylene materials',
                  'UV-stabilized for outdoor durability',
                  'Computer-aided design and testing',
                  'Environmentally friendly manufacturing process',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                alt="Manufacturing process"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Join the Kentank Family</h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Become one of our 50,000+ satisfied customers and experience the Kentank difference
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                View Products
              </Button>
              <Button variant="secondary" size="lg" className="bg-navy-900 text-white hover:bg-navy-800">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
