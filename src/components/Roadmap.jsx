
import React from 'react';
import { CheckCircle, Clock, Calendar, User, Target, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Roadmap = () => {
  const journeySteps = [
    { 
      step: "Step 1", 
      title: "Sign Up & Onboarding", 
      status: "start",
      description: "Create your account and complete your profile setup",
      icon: User
    },
    { 
      step: "Step 2", 
      title: "Choose Your First Task", 
      status: "active",
      description: "Browse available tasks and select ones that match your skills",
      icon: Target
    },
    { 
      step: "Step 3", 
      title: "Complete Tasks & Earn", 
      status: "progress",
      description: "Start working on tasks and earn ChronoCoins for your time",
      icon: Clock
    },
    { 
      step: "Step 4", 
      title: "Track Your Progress", 
      status: "upcoming",
      description: "Monitor your earnings and productivity in your dashboard",
      icon: Calendar
    },
    { 
      step: "Step 5", 
      title: "Redeem Rewards", 
      status: "upcoming",
      description: "Exchange your ChronoCoins for rewards in our store",
      icon: Sparkles
    },
    { 
      step: "Step 6", 
      title: "Become a Pro User", 
      status: "upcoming",
      description: "Unlock premium features and higher-paying opportunities",
      icon: CheckCircle
    },
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300 font-poppins backdrop-blur-sm mb-6">
            <Calendar size={16} className="text-purple-400" />
            Your Journey
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-outfit">
            USER JOURNEY
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-poppins">
            Follow these simple steps to start monetizing your time and unlock the full potential of ChronoPay.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-px h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500"></div>
          
          <div className="space-y-16">
            {journeySteps.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                        item.status === 'active' 
                          ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20 bg-gradient-to-br from-cyan-900/20 to-purple-900/20' 
                          : item.status === 'start'
                          ? 'border-green-400/30 bg-gradient-to-br from-green-900/10 to-gray-900/80'
                          : 'border-gray-700/50 hover:border-gray-600/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            item.status === 'start' ? 'bg-green-500/20' :
                            item.status === 'active' ? 'bg-cyan-500/20' :
                            'bg-purple-500/20'
                          }`}
                        >
                          <IconComponent size={20} className={
                            item.status === 'start' ? 'text-green-400' :
                            item.status === 'active' ? 'text-cyan-400' :
                            'text-purple-400'
                          } />
                        </motion.div>
                        
                        <h3 className="text-white font-bold text-xl font-outfit">{item.step}</h3>
                      </div>
                      
                      <h4 className="text-gray-200 font-semibold text-lg mb-3 font-poppins">{item.title}</h4>
                      <p className="text-gray-400 mb-4 font-poppins leading-relaxed">{item.description}</p>
                      
                      <div className={`px-4 py-2 rounded-full text-xs inline-flex items-center gap-2 font-poppins font-medium ${
                        item.status === 'start' ? 'bg-green-500/20 text-green-300' :
                        item.status === 'active' ? 'bg-cyan-500/20 text-cyan-300' :
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        {item.status === 'start' ? 'Getting Started' : 
                         item.status === 'active' ? 'Next Step' : 'Coming Up'}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced timeline dot */}
                  <div className="relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                        item.status === 'start' ? 'bg-green-400 border-green-400' :
                        item.status === 'active' ? 'bg-cyan-400 border-cyan-400' :
                        'bg-purple-400/30 border-purple-400'
                      }`}
                    >
                    </motion.div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-600/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-600/5 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default Roadmap;
