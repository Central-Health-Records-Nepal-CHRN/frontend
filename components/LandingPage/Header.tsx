'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#b4decf]/30">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0e9e6e] to-[#093627] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#093627] to-[#0e9e6e] bg-clip-text text-transparent">
              Mero Health
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#093627] hover:text-[#0e9e6e] font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0e9e6e] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/services" className="text-[#093627] hover:text-[#0e9e6e] font-medium transition-colors duration-200 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0e9e6e] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/blogs" className="text-[#093627] hover:text-[#0e9e6e] font-medium transition-colors duration-200 relative group">
              Blogs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0e9e6e] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-[#093627] hover:text-[#0e9e6e] font-medium transition-colors duration-200 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0e9e6e] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowLoginDropdown(!showLoginDropdown);
                  setShowRegisterDropdown(false);
                }}
                className="px-5 py-2.5 text-[#093627] font-semibold hover:text-[#0e9e6e] transition-colors duration-200 flex items-center gap-2"
              >
                Login
                <svg className={`w-4 h-4 transition-transform duration-200 ${showLoginDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showLoginDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-[#b4decf]/30 overflow-hidden animate-fade-in">
                  <Link
                    href="/login/patient"
                    className="block px-6 py-3 text-[#093627] hover:bg-[#b4decf]/20 transition-colors duration-200 flex items-center gap-3"
                  >
                    <svg className="w-5 h-5 text-[#0e9e6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium">Patient Login</span>
                  </Link>
                  <Link
                    href="/login/provider"
                    className="block px-6 py-3 text-[#093627] hover:bg-[#b4decf]/20 transition-colors duration-200 flex items-center gap-3 border-t border-[#b4decf]/30"
                  >
                    <svg className="w-5 h-5 text-[#0e9e6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-medium">Provider Login</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Register Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowRegisterDropdown(!showRegisterDropdown);
                  setShowLoginDropdown(false);
                }}
                className="px-5 py-2.5 bg-gradient-to-r from-[#0e9e6e] to-[#093627] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                Register
                <svg className={`w-4 h-4 transition-transform duration-200 ${showRegisterDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showRegisterDropdown && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-[#b4decf]/30 overflow-hidden animate-fade-in">
                  <Link
                    href="/register/patient"
                    className="block px-6 py-3 text-[#093627] hover:bg-[#b4decf]/20 transition-colors duration-200 flex items-center gap-3"
                  >
                    <svg className="w-5 h-5 text-[#0e9e6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span className="font-medium">Register as Patient</span>
                  </Link>
                  <Link
                    href="/register/provider"
                    className="block px-6 py-3 text-[#093627] hover:bg-[#b4decf]/20 transition-colors duration-200 flex items-center gap-3 border-t border-[#b4decf]/30"
                  >
                    <svg className="w-5 h-5 text-[#0e9e6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="font-medium">Register as Provider</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#093627] hover:text-[#0e9e6e] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[#b4decf]/30 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-[#093627] hover:text-[#0e9e6e] font-medium py-2">
                Home
              </Link>
              <Link href="/services" className="text-[#093627] hover:text-[#0e9e6e] font-medium py-2">
                Services
              </Link>
              <Link href="/blogs" className="text-[#093627] hover:text-[#0e9e6e] font-medium py-2">
                Blogs
              </Link>
              <Link href="/contact" className="text-[#093627] hover:text-[#0e9e6e] font-medium py-2">
                Contact
              </Link>
              
              <div className="pt-4 border-t border-[#b4decf]/30 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-[#093627] mb-2">Login</p>
                  <Link href="/login/patient" className="block px-4 py-2 text-[#093627] bg-[#b4decf]/20 rounded-lg mb-2">
                    Patient Login
                  </Link>
                  <Link href="/login/provider" className="block px-4 py-2 text-[#093627] bg-[#b4decf]/20 rounded-lg">
                    Provider Login
                  </Link>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-[#093627] mb-2">Register</p>
                  <Link href="/register/patient" className="block px-4 py-2 text-white bg-gradient-to-r from-[#0e9e6e] to-[#093627] rounded-lg mb-2">
                    Register as Patient
                  </Link>
                  <Link href="/register/provider" className="block px-4 py-2 text-white bg-gradient-to-r from-[#0e9e6e] to-[#093627] rounded-lg">
                    Register as Provider
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;