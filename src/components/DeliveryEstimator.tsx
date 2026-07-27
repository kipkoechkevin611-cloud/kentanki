'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Clock, CheckCircle, X } from 'lucide-react';

interface DeliveryEstimatorProps {
  onClose?: () => void;
}

const DeliveryEstimator: React.FC<DeliveryEstimatorProps> = ({ onClose }) => {
  const [selectedCounty, setSelectedCounty] = useState('');
  const [estimatedDays, setEstimatedDays] = useState<number | null>(null);

  const counties = [
    { name: 'Nairobi', days: 2 },
    { name: 'Mombasa', days: 4 },
    { name: 'Kisumu', days: 3 },
    { name: 'Nakuru', days: 2 },
    { name: 'Eldoret', days: 3 },
    { name: 'Thika', days: 2 },
    { name: 'Malindi', days: 4 },
    { name: 'Kisii', days: 3 },
    { name: 'Meru', days: 3 },
    { name: 'Nyeri', days: 3 },
    { name: 'Machakos', days: 2 },
    { name: 'Kajiado', days: 3 },
    { name: 'Kiambu', days: 2 },
    { name: 'Murang\'a', days: 3 },
    { name: 'Kirinyaga', days: 3 },
    { name: 'Nyandarua', days: 3 },
    { name: 'Laikipia', days: 4 },
    { name: 'Nyeri', days: 3 },
    { name: 'Embu', days: 3 },
    { name: 'Kitui', days: 4 },
    { name: 'Makueni', days: 4 },
    { name: 'Machakos', days: 2 },
    { name: 'Kwale', days: 4 },
    { name: 'Kilifi', days: 4 },
    { name: 'Tana River', days: 5 },
    { name: 'Lamu', days: 5 },
    { name: 'Taita Taveta', days: 5 },
    { name: 'Garissa', days: 5 },
    { name: 'Wajir', days: 6 },
    { name: 'Mandera', days: 6 },
    { name: 'Marsabit', days: 6 },
    { name: 'Isiolo', days: 4 },
    { name: 'Meru', days: 3 },
    { name: 'Tharaka Nithi', days: 3 },
    { name: 'Embu', days: 3 },
    { name: 'Kitui', days: 4 },
    { name: 'Machakos', days: 2 },
    { name: 'Makueni', days: 4 },
    { name: 'Nyandarua', days: 3 },
    { name: 'Nyeri', days: 3 },
    { name: 'Kirinyaga', days: 3 },
    { name: 'Murang\'a', days: 3 },
    { name: 'Kiambu', days: 2 },
    { name: 'Turkana', days: 6 },
    { name: 'West Pokot', days: 5 },
    { name: 'Samburu', days: 5 },
    { name: 'Trans Nzoia', days: 4 },
    { name: 'Uasin Gishu', days: 3 },
    { name: 'Elgeyo Marakwet', days: 4 },
    { name: 'Nandi', days: 3 },
    { name: 'Baringo', days: 4 },
    { name: 'Laikipia', days: 4 },
    { name: 'Nakuru', days: 2 },
    { name: 'Narok', days: 4 },
    { name: 'Kajiado', days: 3 },
    { name: 'Kericho', days: 3 },
    { name: 'Bomet', days: 3 },
    { name: 'Kakamega', days: 3 },
    { name: 'Vihiga', days: 3 },
    { name: 'Bungoma', days: 3 },
    { name: 'Busia', days: 4 },
    { name: 'Siaya', days: 3 },
    { name: 'Kisumu', days: 3 },
    { name: 'Homa Bay', days: 4 },
    { name: 'Migori', days: 4 },
    { name: 'Kisii', days: 3 },
    { name: 'Nyamira', days: 3 },
  ];

  const handleCountyChange = (countyName: string) => {
    setSelectedCounty(countyName);
    const county = counties.find(c => c.name === countyName);
    setEstimatedDays(county ? county.days : null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Truck className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy-900">Delivery Estimator</h3>
            <p className="text-sm text-gray-600">Check delivery time to your location</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-2" />
            Select Your County
          </label>
          <select
            value={selectedCounty}
            onChange={(e) => handleCountyChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Choose a county...</option>
            {counties.map((county) => (
              <option key={county.name} value={county.name}>
                {county.name}
              </option>
            ))}
          </select>
        </div>

        {estimatedDays !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-lg p-4"
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-green-900 mb-2">Delivery to {selectedCounty}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-green-600 font-medium">Estimated Time</p>
                    <p className="text-green-800 font-bold text-lg">{estimatedDays} Business Days</p>
                  </div>
                  <div>
                    <p className="text-green-600 font-medium">Cost</p>
                    <p className="text-green-800 font-bold text-lg">FREE</p>
                  </div>
                </div>
                <p className="text-xs text-green-700 mt-3">
                  * Delivery times may vary based on weather conditions and accessibility
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-blue-900 mb-2">Delivery Information</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Free delivery to all 47 counties</li>
                <li>• Orders placed before 2 PM ship same day</li>
                <li>• You&apos;ll receive a call before delivery</li>
                <li>• Professional installation available on request</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryEstimator;
