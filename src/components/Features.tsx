
import React from 'react';
import { Clock, Zap, Shield, TrendingUp, Users, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    { 
      icon: Clock, 
      title: "TIME MONETIZATION", 
      description: "Transform idle moments into valuable opportunities with our revolutionary time-to-value conversion system."
    },
    { 
      icon: Zap, 
      title: "INSTANT PAYMENTS", 
      description: "Lightning-fast transactions with seamless integration across all major payment platforms and digital wallets."
    },
    { 
      icon: TrendingUp, 
      title: "REAL-TIME ANALYTICS", 
      description: "Advanced dashboard with comprehensive insights, performance metrics, and predictive analytics for optimization."
    },
    { 
      icon: Globe, 
      title: "GLOBAL COMPATIBILITY", 
      description: "Multi-platform support with worldwide accessibility, supporting 150+ currencies and payment methods."
    },
    { 
      icon: Shield, 
      title: "ENTERPRISE SECURITY", 
      description: "Bank-grade encryption with advanced security protocols, ensuring maximum protection for all transactions."
    },
    { 
      icon: Users, 
      title: "24/7 PREMIUM SUPPORT", 
      description: "Dedicated customer success team with round-the-clock assistance and personalized onboarding experience."
    },
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300 font-poppins backdrop-blur-sm mb-6">
            <Zap size={16} className="text-purple-400" />
            Revolutionary Features
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-outfit leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              CHRONOPAY
            </span>{' '}
            transforms idle time
            <br />
            into endless possibilities
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-poppins leading-relaxed">
            Experience the future of time monetization with cutting-edge technology that revolutionizes how we perceive and utilize every moment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={28} className="text-white" />
                </div>
                
                <h3 className="text-gray-300 font-bold text-sm mb-4 group-hover:text-white transition-colors font-outfit tracking-wider">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed font-poppins">
                  {feature.description}
                </p>
                
                <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-cyan-600/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default Features;
