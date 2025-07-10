import React from 'react';
import { 
  Palette, 
  Package, 
  CreditCard, 
  Truck, 
  BarChart3, 
  Smartphone,
  Zap,
  Shield
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "No-Code Store Builder",
      description: "Create stunning stores with our drag-and-drop builder. No technical skills needed.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track stock, manage variants, and get low-stock alerts automatically.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Accept bKash, Nagad, Rocket, and bank payments seamlessly.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Truck,
      title: "Delivery Network",
      description: "Integrated with Pathao, Steadfast, and local courier services.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Real-time insights into your sales, customers, and performance.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Your store looks perfect on all devices, especially mobile.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with 99.9% uptime guarantee.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-level security with SSL certificates and data protection.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Succeed Online</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built specifically for Bangladeshi businesses with local payment methods, 
            delivery partners, and customer preferences in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;