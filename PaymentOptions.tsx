import React from 'react';
import { useLocation } from 'react-router-dom';
import { PayPal, Bitcoin, CreditCard } from 'lucide-react';
import './index.css';

const PaymentOptions = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const plan = queryParams.get('plan');

  const planDetails = {
    basic: { name: 'Basic', price: '$9.99' },
    pro: { name: 'Pro', price: '$19.99' },
    ultimate: { name: 'Ultimate', price: '$29.99' }
  };

  const selectedPlan = planDetails[plan] || { name: 'Unknown', price: '$0.00' };

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
              Payment Options
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Complete your purchase for the <span className="text-purple-500">{selectedPlan.name}</span> plan ({selectedPlan.price}/month).
            </p>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 rounded-2xl border border-purple-900/30 backdrop-blur-sm p-8 reveal-on-scroll">
            <PayPal className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">PayPal</h3>
            <p className="text-gray-400 mb-8">Pay securely with your PayPal account.</p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
              Pay with PayPal
            </button>
          </div>
          <div className="bg-gray-900/50 rounded-2xl border border-purple-900/30 backdrop-blur-sm p-8 reveal-on-scroll delay-200">
            <Bitcoin className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Crypto</h3>
            <p className="text-gray-400 mb-8">Pay with Bitcoin, Ethereum, or other cryptocurrencies.</p>
            <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 px-6 py-3 rounded-lg transition-opacity">
              Pay with Crypto
            </button>
          </div>
          <div className="bg-gray-900/50 rounded-2xl border border-purple-900/30 backdrop-blur-sm p-8 reveal-on-scroll delay-400">
            <CreditCard className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Credit/Debit Card</h3>
            <p className="text-gray-400 mb-8">Pay securely with your credit or debit card.</p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
              Pay with Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
