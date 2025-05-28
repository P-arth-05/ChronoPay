
import React from 'react';
import { CheckCircle, Clock, Calendar, Rocket, Target, Sparkles } from 'lucide-react';

const Roadmap = () => {
  const roadmapItems = [
    { 
      quarter: "Q1 2024", 
      title: "Foundation & Architecture", 
      status: "completed",
      description: "Core infrastructure and security protocols",
      icon: CheckCircle
    },
    { 
      quarter: "Q2 2024", 
      title: "Development & Integration", 
      status: "completed",
      description: "Payment systems and API development",
      icon: CheckCircle
    },
    { 
      quarter: "Q3 2024", 
      title: "Testing & Optimization", 
      status: "current",
      description: "Comprehensive testing and performance tuning",
      icon: Clock
    },
    { 
      quarter: "Q4 2024", 
      title: "Global Launch", 
      status: "upcoming",
      description: "Worldwide platform deployment",
      icon: Rocket
    },
    { 
      quarter: "Q1 2025", 
      title: "Scale & Expansion", 
      status: "upcoming",
      description: "Market expansion and feature enhancement",
      icon: Target
    },
    { 
      quarter: "Q2 2025", 
      title: "Next Generation", 
      status: "upcoming",
      description: "AI integration and advanced analytics",
      icon: Sparkles
    },
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300 font-poppins backdrop-blur-sm mb-6">
            <Calendar size={16} className="text-purple-400" />
            Development Timeline
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-outfit">
            ROADMAP
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-poppins">
            Our journey towards revolutionizing time monetization and creating the future of digital payments.
          </p>
        </div>
        
        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-px h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500"></div>
          
          <div className="space-y-16">
            {roadmapItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className={`bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                      item.status === 'current' 
                        ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20 bg-gradient-to-br from-cyan-900/20 to-purple-900/20' 
                        : item.status === 'completed'
                        ? 'border-green-400/30 bg-gradient-to-br from-green-900/10 to-gray-900/80'
                        : 'border-gray-700/50 hover:border-gray-600/50'
                    }`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          item.status === 'completed' ? 'bg-green-500/20' :
                          item.status === 'current' ? 'bg-cyan-500/20' :
                          'bg-purple-500/20'
                        }`}>
                          <IconComponent size={20} className={
                            item.status === 'completed' ? 'text-green-400' :
                            item.status === 'current' ? 'text-cyan-400' :
                            'text-purple-400'
                          } />
                        </div>
                        
                        <h3 className="text-white font-bold text-xl font-outfit">{item.quarter}</h3>
                      </div>
                      
                      <h4 className="text-gray-200 font-semibold text-lg mb-3 font-poppins">{item.title}</h4>
                      <p className="text-gray-400 mb-4 font-poppins leading-relaxed">{item.description}</p>
                      
                      <div className={`px-4 py-2 rounded-full text-xs inline-flex items-center gap-2 font-poppins font-medium ${
                        item.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                        item.status === 'current' ? 'bg-cyan-500/20 text-cyan-300' :
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        {item.status === 'completed' ? 'Completed' : 
                         item.status === 'current' ? 'In Progress' : 'Upcoming'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced timeline dot */}
                  <div className="relative z-10">
                    <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                      item.status === 'completed' ? 'bg-green-400 border-green-400' :
                      item.status === 'current' ? 'bg-cyan-400 border-cyan-400' :
                      'bg-purple-400/30 border-purple-400'
                    }`}>
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
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
