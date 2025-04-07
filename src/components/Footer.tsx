
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-scandi-red">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-scandi-red">Contact</Link></li>
              <li><Link to="/stores" className="text-sm text-gray-600 hover:text-scandi-red">Store Locations</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-600 hover:text-scandi-red">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-sm text-gray-600 hover:text-scandi-red">Help Center</Link></li>
              <li><Link to="/delivery" className="text-sm text-gray-600 hover:text-scandi-red">Delivery Information</Link></li>
              <li><Link to="/returns" className="text-sm text-gray-600 hover:text-scandi-red">Returns & Refunds</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-scandi-red">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">My Account</h3>
            <ul className="space-y-2">
              <li><Link to="/account/login" className="text-sm text-gray-600 hover:text-scandi-red">Sign In</Link></li>
              <li><Link to="/account/register" className="text-sm text-gray-600 hover:text-scandi-red">Register</Link></li>
              <li><Link to="/account/orders" className="text-sm text-gray-600 hover:text-scandi-red">Order History</Link></li>
              <li><Link to="/account/wishlist" className="text-sm text-gray-600 hover:text-scandi-red">My Wishlist</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gray-500" />
                <span className="text-sm text-gray-600">+1 (555) 234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                <span className="text-sm text-gray-600">info@scandipwa.com</span>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook size={20} className="text-gray-500 hover:text-scandi-red" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter size={20} className="text-gray-500 hover:text-scandi-red" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram size={20} className="text-gray-500 hover:text-scandi-red" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <Youtube size={20} className="text-gray-500 hover:text-scandi-red" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 ScandiPWA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
