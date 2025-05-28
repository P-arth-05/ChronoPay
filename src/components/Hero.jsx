
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300 font-poppins backdrop-blur-sm"
          >
            <Sparkles size={16} className="text-purple-400" />
            Revolutionizing Time & Payment
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-6xl lg:text-8xl font-bold text-white leading-tight font-outfit"
          >
            Spend Time
            <br />
            Like It's{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Money
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl lg:text-2xl text-gray-400 max-w-2xl leading-relaxed font-poppins"
          >
            ChronoPay transforms idle moments into valuable opportunities, creating a revolutionary ecosystem where time becomes your most powerful currency.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg h-auto font-poppins font-medium transition-all duration-300">
                Choose Payment
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                className="border-gray-600 text-white bg-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:border-transparent px-8 py-4 text-lg h-auto font-poppins flex items-center gap-3 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <Play size={16} className="text-white ml-0.5" />
                </div>
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced phone mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative w-72 h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-700 backdrop-blur-sm p-2"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 relative overflow-hidden">
                {/* Phone UI */}
                <div className="text-center space-y-6">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl mx-auto flex items-center justify-center"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                  </motion.div>
                  
                  <div className="space-y-3">
                    <motion.div 
                      animate={{ width: ["75%", "60%", "75%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded mx-auto"
                    ></motion.div>
                    <motion.div 
                      animate={{ width: ["50%", "70%", "50%"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="h-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded mx-auto"
                    ></motion.div>
                  </div>
                  
                  <div className="space-y-2">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="h-12 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-lg flex items-center justify-center"
                    >
                      <div className="w-6 h-6 bg-purple-400/50 rounded"></div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="h-12 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-lg flex items-center justify-center"
                    >
                      <div className="w-6 h-6 bg-cyan-400/50 rounded"></div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-xl backdrop-blur-sm border border-purple-400/20 flex items-center justify-center"
                >
                  <div className="w-4 h-4 bg-purple-400/60 rounded"></div>
                </motion.div>
                
                <motion.div 
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-4 w-16 h-8 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-lg backdrop-blur-sm border border-cyan-400/20"
                ></motion.div>
              </div>
            </motion.div>
            
            {/* Floating cards */}
            <motion.div 
              animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-16 bg-gradient-to-br from-purple-500/80 to-pink-500/80 rounded-xl backdrop-blur-sm border border-purple-400/30 p-3"
            >
              <div className="w-full h-2 bg-white/40 rounded mb-2"></div>
              <div className="w-2/3 h-2 bg-white/40 rounded"></div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [5, -5, 5], rotate: [2, -2, 2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 w-28 h-20 bg-gradient-to-br from-cyan-500/80 to-blue-500/80 rounded-xl backdrop-blur-sm border border-cyan-400/30 p-3"
            >
              <div className="w-full h-2 bg-white/40 rounded mb-2"></div>
              <div className="w-3/4 h-2 bg-white/40 rounded mb-2"></div>
              <div className="w-1/2 h-2 bg-white/40 rounded"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
