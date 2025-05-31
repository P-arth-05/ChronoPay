import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coins, Clock, TrendingUp, Gift, ListTodo, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <SignedOut>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4 font-outfit">Access Denied</h1>
            <p className="text-gray-400 font-poppins mb-8">Please sign in to access your dashboard</p>
            <SignInButton fallbackRedirectUrl="/dashboard">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 font-poppins">
                Sign In
              </Button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <Header />
        
        <div className="bg-gradient-to-r from-gray-900 to-black border-b border-gray-800 pt-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 font-outfit">
              Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-400 font-poppins">Track your progress and manage your ChronoCoins</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Coins size={24} className="text-purple-400" />
                <span className="text-purple-300 text-sm font-poppins">Total Earned</span>
              </div>
              <div className="text-3xl font-bold text-white font-outfit">550</div>
              <div className="text-purple-300 text-sm font-poppins">ChronoCoins</div>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 border border-cyan-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Clock size={24} className="text-cyan-400" />
                <span className="text-cyan-300 text-sm font-poppins">Time Invested</span>
              </div>
              <div className="text-3xl font-bold text-white font-outfit">12.5</div>
              <div className="text-cyan-300 text-sm font-poppins">Hours</div>
            </div>

            <div className="bg-gradient-to-br from-cyan-800/20 to-cyan-600/20 border border-cyan-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp size={24} className="text-cyan-400" />
                <span className="text-cyan-300 text-sm font-poppins">Tasks Completed</span>
              </div>
              <div className="text-3xl font-bold text-white font-outfit">24</div>
              <div className="text-cyan-300 text-sm font-poppins">This month</div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Gift size={24} className="text-purple-400" />
                <span className="text-purple-300 text-sm font-poppins">Rewards Claimed</span>
              </div>
              <div className="text-3xl font-bold text-white font-outfit">8</div>
              <div className="text-purple-300 text-sm font-poppins">Total</div>
            </div>
          </div>

          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-white mb-4 font-outfit">Dashboard Coming Soon</h2>
            <p className="text-gray-400 font-poppins mb-8">We're building an amazing dashboard experience for you!</p>
            <Button
              onClick={() => navigate('/store')}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 font-poppins"
            >
              Visit Store
            </Button>
          </div>
        </div>
        <Footer />
      </SignedIn>
    </div>
  );
};

export default Dashboard;
