import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Bell } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('https://sellcraft-8nd3.vercel.app/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        console.error('Failed to subscribe:', response.statusText);
        alert('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
              <Bell className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Early Access to
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> SellCraft Pro</span>
          </h2>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Be the first to know about new features, exclusive offers, and success tips 
            from fellow Bangladeshi entrepreneurs. Join our community of 10,000+ sellers.
          </p>

          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="relative">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-32 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Join
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-400 mr-3" />
                <span className="text-white font-medium">
                  Welcome to the SellCraft community! Check your email for confirmation.
                </span>
              </div>
            )}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
