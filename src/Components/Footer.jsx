import React from 'react';
import { Twitter, Facebook, Instagram, Github, Linkedin, Globe, Camera, Search, ShoppingBag, Code, Smartphone } from "lucide-react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import ddcLogo from '../assets/ddc logo 2.png';
const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4">
      {/* Top CTA Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50 p-8 rounded-2xl">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold">Transform your digital presence</h2>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Lets connect and discuss
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            
            <h3 className="text-xl font-bold"> Digital Digital Company</h3>
            <p className="text-gray-600">
              Empowering businesses with cutting-edge digital solutions. From web development to brand building, we create experiences that drive growth.
            </p>
            <div className="flex gap-4">
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <Link to="/" className="hover:text-black transition-colors">Web Development</Link>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <Link to="/" className="hover:text-black transition-colors">App Development</Link>
              </li>
              <li className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                <Link to="/" className="hover:text-black transition-colors">E-commerce Solutions</Link>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <Link to="/" className="hover:text-black transition-colors">Digital Marketing</Link>
              </li>
              <li className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <Link to="/" className="hover:text-black transition-colors">Photography</Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold mb-4">Solutions</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link to="/" className="hover:text-black transition-colors">Shopify Development</Link></li>
              <li><Link to="/" className="hover:text-black transition-colors">WordPress Development</Link></li>
              <li><Link to="/" className="hover:text-black transition-colors">Meta Ads Marketing</Link></li>
              <li><Link to="/" className="hover:text-black transition-colors">Brand Building</Link></li>
              <li><Link to="/" className="hover:text-black transition-colors">Market Research</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link to="/" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-black transition-colors">Case Studies</Link></li>
              <li><Link to="/" className="hover:text-black transition-colors">Resources</Link></li>
              <li><Link to="/" className="hover:text-black transition-colors">Blog</Link></li>
              <li><Link to="/" className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
            <p>© 2024 Digital Agency. All rights reserved.</p>
            <div className="flex gap-6">
              {/* Privacy Policy Link points to '/privacy-policy' */}
              <Link to="/privacy-policy">
                <p className="hover:text-black transition-colors">Privacy Policy</p>
              </Link>
              <Link to="/">
                <p className="hover:text-black transition-colors">Terms of Service</p>
              </Link>
              <Link to="/cookie-policy">
                <p className="hover:text-black transition-colors">Cookie Policy</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
