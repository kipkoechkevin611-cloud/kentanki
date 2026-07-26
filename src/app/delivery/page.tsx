'use client';

import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Truck, Clock, MapPin, CheckCircle, AlertCircle, Package } from 'lucide-react';

export default function DeliveryPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Truck className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h1 className="text-5xl font-bold text-white mb-4">Delivery Policy</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Free nationwide delivery to all 47 counties in Kenya
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8"
          >
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="text-xl font-bold text-green-800">FREE Countrywide Delivery</h3>
                  <p className="text-green-700">We deliver to all 47 counties at no additional cost</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-orange-500" />
                Delivery Timeline
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Order Confirmation</h3>
                    <p className="text-gray-600">Within 1 hour during business hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Processing</h3>
                    <p className="text-gray-600">1-2 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Transit</h3>
                    <p className="text-gray-600">2-5 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Delivery</h3>
                    <p className="text-gray-600">3-7 business days total</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-orange-500" />
                Delivery Coverage
              </h2>
              <p className="text-gray-600 mb-4">
                We deliver to all 47 counties in Kenya, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                {['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Kitale', 'Garissa', 'Kakamega', 'Meru', 'Nyeri', 'Machakos'].map((county) => (
                  <div key={county} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {county}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                And 35 more counties across Kenya
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <Package className="w-6 h-6 text-orange-500" />
                Delivery Process
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Order confirmed via WhatsApp or phone</li>
                <li>Delivery scheduled based on your location</li>
                <li>You receive delivery confirmation with timeline</li>
                <li>Driver contacts you before arrival</li>
                <li>Tank delivered to your specified address</li>
                <li>Optional installation available at additional cost</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                Customer Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">
                To ensure smooth delivery, please:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide accurate delivery address and contact details</li>
                <li>Ensure someone is available to receive delivery</li>
                <li>Prepare the installation site (if applicable)</li>
                <li>Inspect the tank upon delivery</li>
                <li>Report any issues within 24 hours</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Installation Services</h2>
              <p className="text-gray-600 mb-4">
                Professional installation is available at an additional cost:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Site assessment and preparation</li>
                <li>Tank positioning and leveling</li>
                <li>Pipe connection (if applicable)</li>
                <li>Final inspection and testing</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Contact us for installation pricing based on your location and requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Delivery Issues</h2>
              <p className="text-gray-600 mb-4">
                If you experience any delivery issues:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Contact us immediately at +254 740 272 542</li>
                <li>Report damaged or missing items within 24 hours</li>
                <li>We will arrange replacement or refund as appropriate</li>
                <li>Document issues with photos if possible</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Special Delivery Requests</h2>
              <p className="text-gray-600">
                For special delivery requirements (urgent delivery, specific time slots, remote locations), please contact us directly. We will do our best to accommodate your needs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For delivery inquiries or special requests:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li><strong>Phone:</strong> +254 740 272 542</li>
                <li><strong>Email:</strong> info@kentank.co.ke</li>
                <li><strong>WhatsApp:</strong> +254 740 272 542</li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
