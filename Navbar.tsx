import { Menu, X, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-black/90 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <TrendingUp className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">Wave</span>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#services" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#pricing" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              <a href="#faq" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Get Started
              </motion.button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <a href="#services" className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#pricing" className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="#faq" className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}