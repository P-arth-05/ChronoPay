import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Filter, Star, ShoppingCart, Coins } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Store = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [userCoins] = useState(1250); // Mock user coins

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'gift-cards', name: 'Gift Cards' },
    { id: 'subscriptions', name: 'Subscriptions' },
    { id: 'coupons', name: 'Coupons' },
    { id: 'electronics', name: 'Electronics' },
  ];

  const storeItems = [
    {
      id: 1,
      name: "Amazon Gift Card $25",
      price: 500,
      originalPrice: 625,
      image: "🎁",
      category: "gift-cards",
      rating: 4.8,
      discount: 20,
      popular: true
    },
    {
      id: 2,
      name: "Netflix Premium 1 Month",
      price: 800,
      originalPrice: 1000,
      image: "📺",
      category: "subscriptions",
      rating: 4.9,
      discount: 20,
      popular: true
    },
    {
      id: 3,
      name: "Starbucks $10 Voucher",
      price: 300,
      originalPrice: 400,
      image: "☕",
      category: "coupons",
      rating: 4.7,
      discount: 25,
      popular: false
    },
    {
      id: 4,
      name: "Spotify Premium 3 Months",
      price: 1200,
      originalPrice: 1500,
      image: "🎵",
      category: "subscriptions",
      rating: 4.8,
      discount: 20,
      popular: true
    },
    {
      id: 5,
      name: "Apple AirPods Pro",
      price: 5000,
      originalPrice: 6250,
      image: "🎧",
      category: "electronics",
      rating: 4.9,
      discount: 20,
      popular: true
    },
    {
      id: 6,
      name: "Steam Gift Card $20",
      price: 450,
      originalPrice: 500,
      image: "🎮",
      category: "gift-cards",
      rating: 4.6,
      discount: 10,
      popular: false
    },
  ];

  const filteredItems = storeItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Store Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black border-b border-gray-800 pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <SignedIn>
            <div className="flex justify-end mb-6">
              <div className="flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 px-4 py-2 rounded-full border border-purple-500/30">
                <Coins size={20} className="text-cyan-400" />
                <span className="text-white font-bold font-outfit">{userCoins.toLocaleString()}</span>
                <span className="text-gray-300 text-sm font-poppins">ChronoCoins</span>
              </div>
            </div>
          </SignedIn>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 font-outfit">
            ChronoCoin <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Store</span>
          </h1>
          <p className="text-xl text-gray-400 font-poppins">Redeem your earned ChronoCoins for amazing rewards</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for rewards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none font-poppins"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`whitespace-nowrap font-poppins ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-0'
                    : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800/50'
                }`}
              >
                <Filter size={16} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <SignedOut>
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 font-outfit">Sign In to Shop</h2>
            <p className="text-gray-400 font-poppins mb-8">Create an account to start earning ChronoCoins and redeem rewards</p>
            <SignInButton fallbackRedirectUrl="/store">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 font-poppins px-8 py-3">
                Sign In to Continue
              </Button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl"
              >
                {item.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold mb-4 inline-block">
                    POPULAR
                  </div>
                )}

                <div className="text-6xl mb-4 text-center">{item.image}</div>

                <h3 className="text-white font-bold text-lg mb-2 font-poppins group-hover:text-cyan-400 transition-colors">
                  {item.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-gray-300 text-sm font-poppins">{item.rating}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <span className="text-green-400 text-sm font-bold">{item.discount}% OFF</span>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-cyan-400 font-outfit">{item.price}</span>
                      <span className="text-gray-400 text-sm font-poppins">ChronoCoins</span>
                    </div>
                    <div className="text-gray-500 text-sm line-through font-poppins">
                      {item.originalPrice} ChronoCoins
                    </div>
                  </div>
                </div>

                <Button
                  className={`w-full font-poppins ${
                    userCoins >= item.price
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700'
                      : 'bg-gray-700 cursor-not-allowed'
                  }`}
                  disabled={userCoins < item.price}
                >
                  {userCoins >= item.price ? 'Redeem Now' : 'Insufficient Coins'}
                </Button>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-poppins text-xl">No items found matching your criteria</p>
            </div>
          )}
        </SignedIn>
      </div>

      <Footer />
    </div>
  );
};

export default Store;
