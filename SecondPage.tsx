import React, { useEffect, useState } from 'react';
import { Gamepad2, Zap, Shield, Globe2, ChevronRight, Menu, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './index.css';

const SecondPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleSearchClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-lg border-b border-purple-900/30 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center logo-glow">
              <Gamepad2 className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">
                XENO
              </span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <div className={`relative flex items-center w-full h-10 rounded-lg 
                  bg-gray-900/50 border ${isSearchFocused ? 'border-purple-500' : 'border-purple-900/30'} 
                  search-bar-glow backdrop-blur-sm transition-all duration-300`}>
                  <Search className="h-4 w-4 ml-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for gaming products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="w-full bg-transparent border-none focus:outline-none text-white placeholder-gray-400 px-3"
                  />
                  {searchQuery && (
                    <button
                      onClick={handleSearchClear}
                      className="p-1 hover:text-purple-400 transition-colors mr-2"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                {searchQuery && (
                  <div className="absolute w-full mt-2 bg-gray-900/95 border border-purple-900/30 rounded-lg backdrop-blur-sm shadow-xl">
                    <div className="p-2">
                      <p className="text-gray-400 text-sm">No results found for "{searchQuery}"</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-purple-400 transition-colors">Products</Link>
              <Link to="/second-page" className="hover:text-purple-400 transition-colors">Pricing</Link>
              <Link to="/" className="hover:text-purple-400 transition-colors">About</Link>
              <Link to="/" className="hover:text-purple-400 transition-colors">Contact</Link>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
                Sign In
              </button>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
          <div className="text-center reveal">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Welcome to the Second Page
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              This page has the same design and functionality as the first page.
            </p>
            <Link to="/payment">
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 inline-flex items-center">
                Proceed to Payment <ChevronRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-900/30 backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all reveal-on-scroll">
            <Zap className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Boost Performance</h3>
            <p className="text-gray-400">Optimize your gaming experience with our advanced performance enhancement tools.</p>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-900/30 backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all reveal-on-scroll delay-200">
            <Shield className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Anti-Cheat Protection</h3>
            <p className="text-gray-400">Play with confidence knowing you're protected by our state-of-the-art security system.</p>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-900/30 backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all reveal-on-scroll delay-400">
            <Globe2 className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Global Servers</h3>
            <p className="text-gray-400">Connect to our worldwide network of high-performance gaming servers.</p>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent reveal-on-scroll">
          Choose Your Plan
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 rounded-2xl border border-purple-900/30 backdrop-blur-sm p-8 reveal-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-8">$9.99<span className="text-lg text-gray-400">/month</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> Basic Performance Boost</li>
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> Standard Protection</li>
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> 5 Server Locations</li>
            </ul>
            <button className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
          <div className="bg-gradient-to-b from-purple-900/50 to-cyan-900/50 rounded-2xl border border-purple-500/30 backdrop-blur-sm p-8 transform scale-105 reveal-on-scroll delay-200">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-8">$19.99<span className="text-lg text-gray-400">/month</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> Advanced Performance Boost</li>
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> Enhanced Protection</li>
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> 15 Server Locations</li>
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> Priority Support</li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 px-6 py-3 rounded-lg transition-opacity">
              Get Started
            </button>
          </div>
          <div className="bg-gray-900/50 rounded-2xl border border-purple-900/30 backdrop-blur-sm p-8 reveal-on-scroll delay-400">
            <h3 className="text-2xl font-bold mb-4">Ultimate</h3>
            <p className="text-4xl font-bold mb-8">$29.99<span className="text-lg text-gray-400">/month</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> Maximum Performance Boost</li>
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> Premium Protection</li>
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> All Server Locations</li>
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> 24/7 Premium Support</li>
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> Custom Features</li>
            </ul>
            <button className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
