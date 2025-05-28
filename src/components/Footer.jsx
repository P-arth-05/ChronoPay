
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-t from-black to-gray-900 py-16 px-6 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="col-span-1 md:col-span-2">
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-white font-bold text-2xl mb-4 font-outfit"
            >
              CHRONOPAY
            </motion.h3>
            <p className="text-gray-400 font-poppins mb-6 leading-relaxed">
              Turn your time into value. ChronoPay is the revolutionary platform that monetizes your productive hours, 
              helping you earn while you grow.
            </p>
            <div className="space-y-3">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <Phone size={18} className="text-purple-400" />
                <span className="font-poppins">+91 9839239238</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <Phone size={18} className="text-purple-400" />
                <span className="font-poppins">+91 7738372818</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <Mail size={18} className="text-cyan-400" />
                <span className="font-poppins">chronopay@email.com</span>
              </motion.div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 font-outfit">Platform</h4>
            <div className="space-y-3">
              <motion.a 
                whileHover={{ x: 5, color: '#a855f7' }}
                href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins"
              >
                Dashboard
              </motion.a>
              <motion.a 
                whileHover={{ x: 5, color: '#a855f7' }}
                href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins"
              >
                Tasks
              </motion.a>
              <motion.a 
                whileHover={{ x: 5, color: '#a855f7' }}
                href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins"
              >
                Store
              </motion.a>
              <motion.a 
                whileHover={{ x: 5, color: '#a855f7' }}
                href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins"
              >
                Analytics
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 font-outfit">Support</h4>
            <div className="space-y-3">
              <motion.a 
                whileHover={{ x: 5, color: '#06b6d4' }}
                href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins"
              >
                Help Center
              </motion.a>
              <motion.a 
                whileHover={{ x: 5, color: '#06b6d4' }}
                href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins"
              >
                Community
              </motion.a>
              <motion.a 
                whileHover={{ x: 5, color: '#06b6d4' }}
                href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                whileHover={{ x: 5, color: '#06b6d4' }}
                href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 font-poppins">
            © 2024 ChronoPay. All rights reserved. Time is money, make it count.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
