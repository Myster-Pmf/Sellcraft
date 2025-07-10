import React from 'react';
import { 
  Store, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      
      { name: 'Integrations', href: '#' },
      { name: 'API Documentation', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      
      
      { name: 'Affiliate Program', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Support', href: '#' },
      
      
      
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      
      
      
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <Store className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">SellCraft</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering Bangladeshi businesses to thrive online with our comprehensive 
              e-commerce platform. Built locally, trusted nationally.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-indigo-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-indigo-400" />
                <span>+880 1700-000000</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-indigo-400" />
                <span>hello@sellcraft.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-gray-400">
                © 2024 SellCraft. All rights reserved. Built with 
              </span>
              <Heart className="w-4 h-4 text-red-500 mx-2 fill-current" />
              <span className="text-gray-400">by PMF</span>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:bg-gray-700 transform hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
