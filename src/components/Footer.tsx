
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">infofyAI</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your comprehensive resource for discovering, comparing, and understanding the latest AI tools and applications. Stay ahead of the AI revolution with our curated collection of cutting-edge solutions.
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 infofyAI. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Content Creation</span>
              </li>
              <li>
                <span className="text-gray-400">Image Generation</span>
              </li>
              <li>
                <span className="text-gray-400">Chatbots</span>
              </li>
              <li>
                <span className="text-gray-400">Productivity</span>
              </li>
              <li>
                <span className="text-gray-400">Development</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Disclaimer: This website contains affiliate links. We may earn a commission from purchases made through these links at no additional cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
