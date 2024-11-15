import React from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import { MessageCircle, Instagram, Twitter, TrendingUp, Youtube, Music2, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-black text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Boost Your Social Presence
            </motion.h1>
            <motion.p
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-blue-100"
            >
              Accelerate your growth across all major social media platforms
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Start Growing Today
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              title="Discord Members"
              description="Grow your Discord community with active members"
              Icon={MessageCircle}
              index={0}
            />
            <ServiceCard
              title="Instagram Growth"
              description="Increase your followers and engagement"
              Icon={Instagram}
              index={1}
            />
            <ServiceCard
              title="Twitter Promotion"
              description="Boost your Twitter presence and reach"
              Icon={Twitter}
              index={2}
            />
            <ServiceCard
              title="TikTok Growth"
              description="Expand your TikTok audience and views"
              Icon={Music2}
              index={3}
            />
            <ServiceCard
              title="YouTube Promotion"
              description="Grow your channel subscribers and views"
              Icon={Youtube}
              index={4}
            />
            <ServiceCard
              title="Custom Package"
              description="Tailored solution for your specific needs"
              Icon={TrendingUp}
              index={5}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              Get Started with Wave
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                question: "How fast will I see results?",
                answer: "You'll start seeing growth within 24-48 hours of starting your campaign. Results vary based on the package and platform."
              },
              {
                question: "Is this safe for my accounts?",
                answer: "Yes, we use safe and proven methods that comply with platform guidelines to grow your presence organically."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 100% satisfaction guarantee. If you're not happy with our services, we'll provide a full refund within 30 days."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center text-white">
                  <HelpCircle className="h-5 w-5 mr-2 text-blue-400" />
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">Wave</span>
            </div>
            <p className="text-sm">
              Your trusted partner for social media growth and engagement.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
              <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li>Email: support@waveboost.com</li>
              <li>Hours: 24/7 Support</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Wave. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;