'use client';

import React from 'react';

const Features = () => {
  const features = [
    {
      stat: '99.9%',
      label: 'System Uptime',
      description: 'Enterprise-grade reliability you can count on',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      stat: '256-bit',
      label: 'Data Encryption',
      description: 'Bank-level security for your health data',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      stat: 'HIPAA',
      label: 'Fully Compliant',
      description: 'Meeting the highest healthcare standards',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      stat: '24/7',
      label: 'AI Support',
      description: 'Round-the-clock intelligent assistance',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#093627] via-[#0e9e6e] to-[#093627] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Why Choose Mero Health
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Your Health Data,{' '}
              <span className="text-[#b4decf]">
                Secured & Simplified
              </span>
            </h2>

            <p className="text-xl text-white/80 leading-relaxed">
              We combine cutting-edge AI technology with military-grade security to give you 
              complete control over your health information. Experience healthcare the way it should be.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-[#093627] font-semibold rounded-2xl hover:bg-[#b4decf] transition-all duration-300 flex items-center justify-center gap-2 group">
                Start Your Journey
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-[#b4decf] group-hover:text-[#093627] transition-all">
                  {feature.icon}
                </div>

                <div className="space-y-2">
                  <p className="text-3xl font-bold text-white">{feature.stat}</p>
                  <p className="text-sm font-semibold text-[#b4decf]">{feature.label}</p>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Testimonial Bar */}
        <div className="mt-20 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#b4decf]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl text-white/90 italic">
                "Mero Health has transformed how I manage my family's healthcare. Everything is in one place, 
                and the AI summaries make understanding medical reports so much easier."
              </p>
              <div>
                <p className="font-semibold text-white">Sarah Johnson</p>
                <p className="text-sm text-white/60">Verified Patient</p>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-5xl font-bold text-white mb-2">10,000+</p>
              <p className="text-[#b4decf] font-semibold">Happy Users</p>
              <p className="text-sm text-white/60 mt-2">Join our growing community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;