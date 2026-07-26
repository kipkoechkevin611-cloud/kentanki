import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <Shield className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-orange-500" />
                Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us when you place an order, contact us, or interact with our website. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Name and contact information (phone number, email)</li>
                <li>Delivery address and location details</li>
                <li>Order information (product selection, quantity)</li>
                <li>Payment information (processed securely)</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-orange-500" />
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders</li>
                <li>Provide customer support</li>
                <li>Improve our products and services</li>
                <li>Send you promotional communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-orange-500" />
                Data Protection
              </h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Secure encryption for data transmission</li>
                <li>Restricted access to personal information</li>
                <li>Regular security reviews and updates</li>
                <li>Compliance with data protection regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Delivery partners (for order fulfillment)</li>
                <li>Payment processors (for transaction processing)</li>
                <li>Service providers who assist our operations</li>
                <li>When required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li><strong>Email:</strong> info@kentank.co.ke</li>
                <li><strong>Phone:</strong> +254 740 272 542</li>
                <li><strong>Address:</strong> Nairobi, Kenya</li>
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
