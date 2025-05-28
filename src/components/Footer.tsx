
import React from 'react';
import { Clock, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-black to-gray-900 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Clock size={24} className="text-white" />
              </div>
              <div className="text-white font-bold text-2xl font-outfit tracking-tight">
                CHRONOPAY
              </div>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed font-poppins mb-8 max-w-md">
              Transform your time into digital currency. Complete tasks, earn ChronoCoins, and unlock a world of rewards with our revolutionary time monetization platform.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-purple-600/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-purple-600/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Github size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-purple-600/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-purple-600/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Mail size={20} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-outfit">Platform</h4>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins">How It Works</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins">Tasks</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins">ChronoCoin Store</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins">Rewards</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins">Dashboard</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-outfit">Company</h4>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins">Careers</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins">Terms of Service</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-poppins">Support</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 font-poppins">
            © 2024 ChronoPay. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 font-poppins text-sm">Powered by time monetization</span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-t from-purple-600/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-t from-cyan-600/5 to-transparent rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
