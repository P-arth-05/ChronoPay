
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BentoGrid from '@/components/BentoGrid';
import Roadmap from '@/components/Roadmap';
import HowItWorks from '@/components/HowItWorks';
import StorePreview from '@/components/StorePreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-black relative overflow-hidden"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Animated background gradient */}
      <motion.div 
        animate={{ 
          background: [
            "linear-gradient(45deg, #1f2937, #000000, #374151)",
            "linear-gradient(45deg, #374151, #000000, #1f2937)",
            "linear-gradient(45deg, #1f2937, #000000, #374151)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-0"
      ></motion.div>
      
      {/* Floating orbs with animations */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl z-0"
      ></motion.div>
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl z-0"
      ></motion.div>
      <motion.div 
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-full blur-2xl"
      ></motion.div>
      
      <div className="relative z-10">
        <Header />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='z-5'
        >
          <Hero />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <HowItWorks />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Features />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <StorePreview />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Roadmap />
        </motion.div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Index;
