import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import '/index.css';

const ProductSelection = () => {
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
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/second-page" className="hover:text-purple-400 transition-colors">Pricing</Link>
              <Link to="/" className="hover:text-purple-400 transition-colors">About</Link>
              <Link to="/" className="hover:text-purple-400 transition-colors">Contact</Link>
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
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Select the plan that best suits your gaming needs.
            </p>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 rounded-2xl border border-purple-900/30 backdrop-blur-sm p-8 reveal-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-8">$9.99<span className="text-lg text-gray-400">/month</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> Basic Performance Boost</li>
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> Standard Protection</li>
              <li className="flex items-center"><ChevronRight className="text-purple-500 mr-2" /> 5 Server Locations</li>
            </ul>
            <Link to="/payment-options?plan=basic">
              <button className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
                Select Plan <ChevronRight className="ml-2" />
              </button>
            </Link>
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
            <Link to="/payment-options?plan=pro">
              <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 px-6 py-3 rounded-lg transition-opacity">
                Select Plan <ChevronRight className="ml-2" />
              </button>
            </Link>
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
            <Link to="/payment-options?plan=ultimate">
              <button className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
                Select Plan <ChevronRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelection;
