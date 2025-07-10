import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, UserCircle } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rashida Begum",
      business: "Rashida's Boutique",
      location: "Dhaka",
      
      rating: 5,
      text: "SellCraft transformed my small tailoring business into a thriving online store. Within 3 months, my sales increased by 300%. The bKash integration made it so easy for my customers to pay!"
    },
    {
      name: "Mohammad Karim",
      business: "Karim Electronics",
      location: "Chittagong",
      
      rating: 5,
      text: "I was hesitant about going online, but SellCraft made it incredibly simple. No technical knowledge needed! Now I'm selling electronics all over Bangladesh with their delivery network."
    },
    {
      name: "Fatima Khatun",
      business: "Fatima's Kitchen",
      location: "Sylhet",
      
      rating: 5,
      text: "The inventory management feature is a game-changer! I can track all my homemade food products and get alerts when I'm running low. Customer support is also excellent."
    },
    {
      name: "Abdul Rahman",
      business: "Rahman Handicrafts",
      location: "Rajshahi",
      
      rating: 5,
      text: "SellCraft helped me showcase my traditional handicrafts to customers worldwide. The mobile-optimized store looks beautiful and loads fast even on slow internet connections."
    },
    {
      name: "Nasir Ahmed",
      business: "Ahmed Agro Products",
      location: "Khulna",
      
      rating: 5,
      text: "As a farmer, I never thought I could sell directly to consumers. SellCraft made it possible! Now I sell fresh produce online and earn 40% more than selling to middlemen."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories from
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Real Entrepreneurs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of Bangladeshi businesses who have transformed their sales with SellCraft
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%), 
                                 radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)`
              }}></div>
            </div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4 border-4 border-indigo-100">
                  <UserCircle className="w-10 h-10 text-gray-500" />
                </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-indigo-600 font-medium">
                      {testimonials[currentTestimonial].business}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <button 
                  onClick={prevTestimonial}
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonial 
                          ? 'bg-indigo-600 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-2">4.9/5</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-2">1000+</div>
              <div className="text-gray-600 text-sm">Happy Merchants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">৳50L+</div>
              <div className="text-gray-600 text-sm">Sales Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;