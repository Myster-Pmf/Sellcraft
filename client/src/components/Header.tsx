import React, { useState, useEffect } from 'react';
import { Store, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Demo', href: '#demo' },
    { name: 'Success Stories', href: '#testimonials' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
              <Store className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              SellCraft
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-medium transition-colors hover:text-indigo-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            <div className="relative group">
              <button className={`flex items-center font-medium transition-colors hover:text-indigo-600 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}>
                Resources
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Help Center</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Blog</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">API Docs</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Community</a>
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className={`font-medium transition-colors hover:text-indigo-600 ${
              isScrolled ? 'text-gray-700' : 'text-white/90'
            }`}>
              Sign In
            </button>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="py-4 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">Help Center</a>
                <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">Blog</a>
                <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">API Docs</a>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4 px-4 space-y-3">
                <button className="w-full text-left py-2 text-gray-700 font-medium">
                  Sign In
                </button>
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;