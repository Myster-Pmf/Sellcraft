import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import bangladeshLow from '../assets/bangladeshLow.svg';

const BangladeshMap = () => {
  

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Serving Businesses
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Nationwide</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From Teknaf to Tetulia, SellCraft empowers businesses across all 64 districts of Bangladesh
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="relative w-full h-96 md:h-[500px] mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={bangladeshLow} 
                  alt="Bangladesh Map" 
                  className="w-full h-full object-contain opacity-20 filter brightness-200"
                />
              </div>

              
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">1000+</div>
                <div className="text-gray-300">Active Stores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">64</div>
                <div className="text-gray-300">Districts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">495</div>
                <div className="text-gray-300">Upazilas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BangladeshMap;