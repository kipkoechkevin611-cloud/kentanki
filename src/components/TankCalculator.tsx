'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Droplets, Users, Home, Factory } from 'lucide-react';
import Card from './ui/Card';

const TankCalculator = () => {
  const [people, setPeople] = useState('');
  const [usage, setUsage] = useState('50');
  const [propertyType, setPropertyType] = useState('residential');
  const [result, setResult] = useState<number | null>(null);

  const calculateTankSize = () => {
    const numPeople = parseInt(people);
    const dailyUsage = parseInt(usage);
    
    if (!numPeople || numPeople <= 0) return;

    // Base calculation: people * daily usage * days (3-7 days backup)
    const daysBackup = propertyType === 'residential' ? 3 : propertyType === 'commercial' ? 5 : 7;
    const recommendedLiters = numPeople * dailyUsage * daysBackup;
    
    // Round up to nearest common tank size
    const commonSizes = [1000, 1500, 2000, 3000, 5000, 8000, 10000, 15000, 20000, 25000];
    let recommendedSize = commonSizes[0];
    
    for (const size of commonSizes) {
      if (size >= recommendedLiters) {
        recommendedSize = size;
        break;
      }
    }
    
    setResult(recommendedSize);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="w-8 h-8 text-orange-500" />
            <h2 className="text-4xl font-bold text-navy-900">Tank Size Calculator</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect tank size for your needs based on your water usage requirements
          </p>
        </motion.div>

        <Card className="max-w-4xl mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of People
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="e.g., 5"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Daily Water Usage per Person (Liters)
                </label>
                <div className="relative">
                  <Droplets className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="30">30L (Minimal)</option>
                    <option value="50">50L (Standard)</option>
                    <option value="75">75L (Comfortable)</option>
                    <option value="100">100L (High Usage)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'residential', icon: Home, label: 'Home' },
                    { value: 'commercial', icon: Factory, label: 'Business' },
                    { value: 'industrial', icon: Factory, label: 'Industry' },
                  ].map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setPropertyType(type.value)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        propertyType === type.value
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <type.icon className="w-6 h-6 mx-auto mb-2 text-navy-900" />
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculateTankSize}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Calculate Tank Size
              </motion.button>
            </div>

            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl p-8 text-white flex flex-col justify-center">
              {result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <p className="text-gray-300 mb-2">Recommended Tank Size</p>
                  <p className="text-6xl font-bold text-orange-500 mb-4">{result.toLocaleString()}L</p>
                  <p className="text-gray-300">
                    This tank size will provide adequate water storage for your needs
                  </p>
                  <button className="mt-6 bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    View {result}L Tanks
                  </button>
                </motion.div>
              ) : (
                <div className="text-center text-gray-400">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Enter your details to calculate the recommended tank size</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TankCalculator;
