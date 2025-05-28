
import React from 'react';
import { Clock, Coins, ShoppingCart, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { 
      icon: Clock, 
      title: "COMPLETE TASKS", 
      description: "Choose from our curated selection of micro-tasks, surveys, and activities designed to fit into your daily routine.",
      step: "01"
    },
    { 
      icon: Coins, 
      title: "EARN CHRONOCOINS", 
      description: "Every second spent on tasks converts directly into ChronoCoins - our premium digital currency with real value.",
      step: "02"
    },
    { 
      icon: ShoppingCart, 
      title: "SHOP & REDEEM", 
      description: "Use your earned ChronoCoins in our exclusive store for coupons, products, and premium experiences.",
      step: "03"
    },
    { 
      icon: TrendingUp, 
      title: "GROW YOUR WEALTH", 
      description: "Watch your time investment compound as you unlock higher-tier tasks and multiplier bonuses.",
      step: "04"
    },
  ];

  return (
    <section className="py-32 px-6 relative" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300 font-poppins backdrop-blur-sm mb-6">
            <Clock size={16} className="text-purple-400" />
            How It Works
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-outfit leading-tight">
            Turn Every
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              MOMENT
            </span>{' '}
            Into Money
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-poppins leading-relaxed">
            Transform your spare time into a valuable asset. Complete tasks, earn ChronoCoins, and unlock a world of rewards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-800/30 font-outfit">
                  {step.step}
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={28} className="text-white" />
                </div>
                
                <h3 className="text-gray-300 font-bold text-sm mb-4 group-hover:text-white transition-colors font-outfit tracking-wider">
                  {step.title}
                </h3>
                
                <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed font-poppins">
                  {step.description}
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

export default HowItWorks;
