
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="text-white font-bold text-2xl font-outfit tracking-tight">
            CHRONOPAY
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#solutions" className="text-gray-300 hover:text-white transition-all duration-300 font-poppins text-sm font-medium relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <button onClick={() => navigate('/store')} className="text-gray-300 hover:text-white transition-all duration-300 font-poppins text-sm font-medium relative group">
              Store
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 font-poppins text-sm font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton fallbackRedirectUrl="/">
              <Button 
                variant="outline" 
                className="hidden md:block bg-transparent border-gray-600 text-white hover:bg-white/10 hover:border-gray-400 transition-all duration-300 font-poppins"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <Button 
              onClick={() => navigate('/dashboard')}
              className="hidden md:block bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 font-poppins"
            >
              Dashboard
            </Button>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800/50">
          <div className="px-6 py-4 space-y-4">
            <a href="#solutions" className="block text-gray-300 hover:text-white transition-colors font-poppins">Solutions</a>
            <button onClick={() => navigate('/store')} className="block text-gray-300 hover:text-white transition-colors font-poppins text-left">Store</button>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors font-poppins">Contact</a>
            <SignedOut>
              <SignInButton fallbackRedirectUrl="/">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 font-poppins">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button 
                onClick={() => navigate('/dashboard')}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 font-poppins"
              >
                Dashboard
              </Button>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
