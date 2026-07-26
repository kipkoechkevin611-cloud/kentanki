import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { FileText, ShoppingCart, AlertCircle, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
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
            <FileText className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
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
                <ShoppingCart className="w-6 h-6 text-orange-500" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-600">
                By accessing or using Kentank's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                Products and Services
              </h2>
              <p className="text-gray-600 mb-4">
                We offer genuine Rototank water tanks and related products. All products are:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>KEBS certified for quality assurance</li>
                <li>Covered by manufacturer warranty (25 years)</li>
                <li>Suitable for their intended purposes</li>
                <li>Delivered with free countrywide shipping</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Pricing and Payment</h2>
              <p className="text-gray-600 mb-4">
                All prices are quoted in Kenyan Shillings (KSh) and include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cost of the water tank</li>
                <li>Free countrywide delivery</li>
                <li>Basic warranty coverage</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We accept payment via M-Pesa, bank transfer, and cash on delivery. Prices are subject to change without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Orders and Cancellations</h2>
              <p className="text-gray-600 mb-4">
                <strong>Order Placement:</strong> Orders are placed via WhatsApp or phone call. We confirm orders within 1 hour during business hours.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Cancellation Policy:</strong> Orders can be cancelled within 24 hours of placement without penalty. After 24 hours, a 10% cancellation fee may apply.
              </p>
              <p className="text-gray-600">
                <strong>Modifications:</strong> Order modifications can be made before processing begins. Contact us immediately for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500" />
                Warranty and Returns
              </h2>
              <p className="text-gray-600 mb-4">
                All Rototank products come with a 25-year manufacturer warranty covering:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Manufacturing defects</li>
                <li>UV degradation</li>
                <li>Material failures under normal use</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Warranty does not cover damage from misuse, improper installation, or external factors. Returns are accepted within 7 days of delivery for manufacturing defects only.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Delivery Terms</h2>
              <p className="text-gray-600 mb-4">
                <strong>Delivery Timeline:</strong> 3-7 business days to all 47 counties in Kenya.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Delivery Responsibility:</strong> We deliver to your specified location. Customer is responsible for offloading and installation unless installation services are purchased.
              </p>
              <p className="text-gray-600">
                <strong>Delivery Issues:</strong> Report any delivery issues within 24 hours of delivery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                Kentank shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our liability is limited to the purchase price of the product.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Governing Law</h2>
              <p className="text-gray-600">
                These terms are governed by the laws of the Republic of Kenya. Any disputes shall be resolved in Kenyan courts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us:
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
