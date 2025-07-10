import React from 'react';
import { ArrowRight, Play, Store } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <img 
          src="/src/assets/bangladeshLow.svg" 
          alt="Bangladesh Map" 
          className="w-full h-full object-contain transform scale-150 animate-pulse"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Store className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-white/90 text-sm font-medium">Made for Bangladesh 🇧🇩</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Launch Your
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Online Store</span>
            <br />
            in Minutes
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            The easiest way for Bangladeshi businesses to sell online. No coding required, 
            full payment integration, and nationwide delivery support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Selling Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/70">Active Stores</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">64</div>
              <div className="text-white/70">Districts Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">৳50L+</div>
              <div className="text-white/70">Sales Generated</div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;