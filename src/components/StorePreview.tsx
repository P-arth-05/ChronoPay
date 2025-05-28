
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StorePreview = () => {
  const navigate = useNavigate();
  
  const storeItems = [
    { 
      name: "Amazon Gift Card", 
      price: "500", 
      image: "🎁",
      discount: "20% OFF"
    },
    { 
      name: "Netflix Premium", 
      price: "800", 
      image: "📺",
      discount: "EXCLUSIVE"
    },
    { 
      name: "Starbucks Voucher", 
      price: "300", 
      image: "☕",
      discount: "LIMITED"
    },
    { 
      name: "Spotify Premium", 
      price: "600", 
      image: "🎵",
      discount: "HOT DEAL"
    },
  ];

  return (
    <section className="py-32 px-6 relative" id="store">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300 font-poppins backdrop-blur-sm mb-6">
            <ShoppingBag size={16} className="text-purple-400" />
            ChronoCoin Store
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-outfit leading-tight">
            Redeem Your
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              CHRONOCOINS
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-poppins leading-relaxed mb-12">
            Transform your earned ChronoCoins into real-world rewards. From gift cards to premium subscriptions, unlock endless possibilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {storeItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="relative mb-4">
                <div className="text-6xl mb-4 text-center">{item.image}</div>
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  {item.discount}
                </div>
              </div>
              
              <h3 className="text-white font-bold text-lg mb-2 font-poppins group-hover:text-cyan-400 transition-colors">
                {item.name}
              </h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-cyan-400 font-outfit">{item.price}</span>
                  <span className="text-gray-400 text-sm font-poppins">ChronoCoins</span>
                </div>
                <Star size={16} className="text-yellow-400" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => navigate('/store')}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-6 text-xl h-auto font-poppins font-medium transition-all duration-300 hover:scale-105"
          >
            Explore Full Store
            <ArrowRight size={24} className="ml-3" />
          </Button>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default StorePreview;
