// components/Footer/index.jsx
"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden nav-links">
      <video
        className="absolute inset-0 object-contain transform scale-260 w-full h-full z-0 opacity-10 "
        src="/videos/footer-bg.webm"
        autoPlay
        loop
        muted
        playsInline
        
      />
      <div className="absolute inset-0 bg-[#c86e3b] opacity-30 z-10 "></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-600 pb-12 mb-12 grid md:grid-cols-3 lg:grid-cols-5 gap-8  md:gap-6 lg:gap-8 text-center md:text-left">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-2xl font-bold mb-2">AWARDS</h4>
            <div className="text-sm">
              <p>x2 Nominee</p>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2">10x Awards</h4>
            <p className="text-sm">Site of the Day</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2">10x Awards</h4>
            <p className="text-sm">Mobile Excellence</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2">3x Awards</h4>
            <p className="text-sm">Site of the Day</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2">37x Awards</h4>
            <p className="text-sm">Honorable Mention</p>
          </div>
        </div>
        <div className="border border-gray-600 pb-12 mb-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="border-r border-gray-600 px-4 py-2">
            <h4 className="text-2xl font-bold mb-4">About Us</h4>
            <div className="space-y-4"></div>
            <h4 class=" font-medium flex items-center gap-1">
              Email
            </h4>
            <p className="hover:text-[#c86e3b] pb-6">info@piebaldcapital.com</p>

            <h4 class="font-medium flex items-center gap-1">
              Phone 
            </h4>
            <p className="hover:text-[#c86e3b] pb-6">+1 (786) 612-6784</p>

            <h4 class="font-medium flex items-center gap-1">
              Address
              <span ></span>
            </h4>
            <p className="hover:text-[#c86e3b]">
              Lorem ipsum dolor sit 
            </p>
          </div>
          <div className="border-r border-gray-600 px-4 py-2 ">
            <h4 className="text-2xl font-bold mb-4 ">Links</h4>
            <ul className="space-y-4 text-white nav-links">
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  Financial Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  Real Estate Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  Digital Tranformation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="border-r border-gray-600 px-4 py-2">
            <h4 className="text-2xl font-bold mb-4">Social Media</h4>
            <ul className="space-y-4 text-white nav-links">
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className=" px-4 py-2">
            <h4 className="text-2xl font-bold mb-4">Legal</h4>
            <ul className="space-y-4 text-white nav-links">
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c86e3b] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center text-sm text-gray-400">
          <p>Copyright © 2025 Piebald Capital Partners. All rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
