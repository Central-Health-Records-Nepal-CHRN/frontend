'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/services' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Security', href: '/security' },
      { name: 'Roadmap', href: '/roadmap' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blogs' },
      { name: 'Press Kit', href: '/press' }
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'Contact', href: '/contact' },
      { name: 'API Status', href: '/status' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'HIPAA Compliance', href: '/hipaa' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-[#093627] via-[#093627] to-[#0e9e6e] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556 15.858 12.14 28 0zm-.828 4.586l15.556 15.556-1.414 1.414L30 6.828 14.686 22.142l-1.414-1.414L28.828 4.586zM0 5.373l.828-.83L2.243 5.96 0 8.2V5.374zm60 0L59.172 4.543 57.757 5.96 60 8.2V5.374zM0 11.03l3.657-3.657 1.414 1.414L0 13.857v-2.828zm60 0l-3.657-3.657-1.414 1.414L60 13.857v-2.828zM0 16.686L6.485 10.2l1.415 1.414-7.9 7.9v-2.83zm60 0l-6.485-6.486-1.415 1.414 7.9 7.9v-2.83zM0 22.344L9.314 13.03l1.414 1.414L0 25.172v-2.83zm60 0l-9.314-9.314-1.414 1.414L60 25.172v-2.83zM0 28l12.142-12.142 1.414 1.414L0 30v-2zm60 0L47.858 15.858l1.414-1.414L60 26.586V28zM0 33.657l15.556-15.556 1.414 1.414L0 36.071v-2.414zm60 0l-15.556-15.556-1.414 1.414L60 36.07v-2.414zM0 39.313L18.9 20.414l1.414 1.414L0 41.727v-2.414zm60 0L41.1 20.414l-1.414 1.414L60 41.727v-2.414zM0 44.97l22.628-22.628 1.414 1.414L0 47.8v-2.83zm60 0L37.372 22.342l-1.414 1.414L60 47.8v-2.83zM0 50.626L26.343 24.284l1.414 1.414L0 53.456v-2.83zm60 0L33.657 24.284l-1.414 1.414L60 53.456v-2.83zM0 56.284L30.07 26.212l1.414 1.414L0 58.97v-2.686zm60 0L29.93 26.212l-1.414 1.414L60 58.97v-2.686zM33 60L0 27V11.314L33 44.314V60zm27-48.686L27 44.314V60l33-33V11.314z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#0e9e6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">
                Mero Health
              </span>
            </Link>

            <p className="text-white/70 leading-relaxed">
              Your AI-powered health navigator. Transforming complex medical data into clear, 
              actionable insights for better health outcomes.
            </p>

            <div className="flex gap-3">
              {['facebook', 'twitter', 'linkedin', 'instagram', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white hover:text-[#093627] rounded-lg flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#b4decf] transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#b4decf] transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#b4decf] transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#b4decf] transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-xl">
            <h3 className="font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest health tech insights and updates.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-[#093627] font-semibold rounded-xl hover:bg-[#b4decf] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Mero Health. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 text-[#b4decf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                HIPAA Compliant
              </div>
              
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 text-[#b4decf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                256-bit Encryption
              </div>
            </div>

            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/cookies" className="text-white/60 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;