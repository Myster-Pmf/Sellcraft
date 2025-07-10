import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "Forever",
      description: "Perfect for testing the waters",
      icon: Star,
      color: "from-gray-500 to-gray-600",
      borderColor: "border-gray-200",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      popular: false,
      features: [
        "Up to 10 products",
        "Basic store customization",
        "Mobile responsive design",
        "SSL certificate included",
        "Email support",
        "SellCraft branding"
      ]
    },
    {
      name: "Professional",
      price: "৳999",
      period: "per month",
      description: "Best for growing businesses",
      icon: Zap,
      color: "from-indigo-500 to-purple-600",
      borderColor: "border-indigo-200",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      popular: true,
      features: [
        "Unlimited products",
        "Advanced customization",
        "Payment gateway integration",
        "Inventory management",
        "Order tracking",
        "Analytics dashboard",
        "Priority support",
        "Remove SellCraft branding"
      ]
    },
    {
      name: "Enterprise",
      price: "৳2,999",
      period: "per month",
      description: "For established businesses",
      icon: Crown,
      color: "from-amber-500 to-orange-600",
      borderColor: "border-amber-200",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      textColor: "text-gray-900",
      popular: false,
      features: [
        "Everything in Professional",
        "Multi-store management",
        "Advanced analytics",
        "Custom domain",
        "API access",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no setup costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative ${plan.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${plan.borderColor} ${plan.popular ? 'ring-4 ring-indigo-500/20' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className={`text-2xl font-bold ${plan.textColor} mb-2`}>
                  {plan.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.textColor}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500 ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-xl hover:shadow-indigo-500/25' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
                {plan.price === 'Free' ? 'Start Free' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            <span className="font-semibold">30-day money-back guarantee</span> • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;