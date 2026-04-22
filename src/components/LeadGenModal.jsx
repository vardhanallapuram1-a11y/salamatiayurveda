import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const LeadGenModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-primary transition-colors"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:p-12 w-full">
              <h3 className="text-3xl mb-2">Order Inquiry</h3>
              <p className="text-text-muted mb-8">
                Interested in <span className="text-primary font-bold">{product?.name || 'our products'}</span>? 
                Leave your details and our expert will contact you shortly.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Mobile Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 font-bold">+91</span>
                    <input 
                      type="tel" 
                      placeholder="98765 43210" 
                      className="w-full px-4 py-4 rounded-r-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <button className="w-full btn-accent py-5 text-lg mt-4 flex items-center justify-center space-x-3">
                  <span>Send Inquiry</span>
                  <Send size={20} />
                </button>
              </form>
              
              <p className="text-center text-xs text-gray-400 mt-6 font-medium uppercase tracking-widest">
                🔒 Your data is 100% secure with us
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LeadGenModal;
