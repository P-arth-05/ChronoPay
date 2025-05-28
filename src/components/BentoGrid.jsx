
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Coins, TrendingUp, Gift, Users, Zap } from 'lucide-react';

const BentoGrid = () => {
  const features = [
    {
      id: 1,
      title: "Time Tracking",
      description: "Track your productive hours automatically",
      icon: Clock,
      color: "from-purple-500 to-pink-500",
      size: "col-span-2 row-span-1"
    },
    {
      id: 2,
      title: "Earn Coins",
      description: "Convert time into ChronoCoins",
      icon: Coins,
      color: "from-yellow-500 to-orange-500",
      size: "col-span-1 row-span-2"
    },
    {
      id: 3,
      title: "Analytics",
      description: "View detailed productivity insights",
      icon: TrendingUp,
      color: "from-green-500 to-teal-500",
      size: "col-span-1 row-span-1"
    },
    {
      id: 4,
      title: "Rewards",
      description: "Redeem coins for amazing rewards",
      icon: Gift,
      color: "from-pink-500 to-rose-500",
      size: "col-span-2 row-span-1"
    },
    {
      id: 5,
      title: "Community",
      description: "Join thousands of time earners",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      size: "col-span-1 row-span-1"
    },
    {
      id: 6,
      title: "Instant Rewards",
      description: "Get instant rewards for completed tasks",
      icon: Zap,
      color: "from-indigo-500 to-purple-500",
      size: "col-span-1 row-span-1"
    }
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
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-outfit">
            FEATURES
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-poppins">
            Discover the powerful features that make ChronoPay the ultimate time monetization platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[600px]">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className={`${feature.size} bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 relative overflow-hidden group hover:border-gray-600/50 transition-all duration-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2 font-outfit">{feature.title}</h3>
                    <p className="text-gray-400 font-poppins text-sm leading-relaxed">{feature.description}</p>
                  </div>
                  
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-4`}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
