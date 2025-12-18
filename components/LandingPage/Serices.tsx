'use client';

import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Unified Medical Records',
      description: 'Consolidate all your health data from different providers into one secure, organized platform. No more scattered paperwork or lost documents.',
      color: 'from-[#0e9e6e] to-[#093627]',
      delay: '0s'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'AI-Powered Summaries',
      description: 'Transform complex medical jargon into clear, actionable insights. Our LLM technology translates clinical language into information you can understand.',
      color: 'from-[#093627] to-[#0e9e6e]',
      delay: '0.1s'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Medication Management',
      description: 'Never miss a dose with intelligent reminders and comprehensive medication tracking. Stay adherent to your treatment plan effortlessly.',
      color: 'from-[#0e9e6e] to-[#093627]',
      delay: '0.2s'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Symptom Checker',
      description: 'AI-driven symptom analysis to help you understand your health concerns. Get preliminary insights before consulting with healthcare providers.',
      color: 'from-[#093627] to-[#0e9e6e]',
      delay: '0.3s'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Secure Provider Access',
      description: 'Grant time-limited access to healthcare providers for seamless care coordination. Your data remains under your control with enterprise-grade security.',
      color: 'from-[#0e9e6e] to-[#093627]',
      delay: '0.4s'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Health Analytics',
      description: 'Visualize your health trends over time with intelligent analytics. Track progress, identify patterns, and make data-driven health decisions.',
      color: 'from-[#093627] to-[#0e9e6e]',
      delay: '0.5s'
    }
  ];

  return (
    <section id="services" className="py-24 bg-linear-to-b from-white to-[#b4decf]/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0e9e6e 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0e9e6e]/10 rounded-full text-[#093627] font-medium text-sm">
            <span className="w-2 h-2 bg-[#0e9e6e] rounded-full"></span>
            Our Services
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[#093627]">
            Comprehensive Health Management{' '}
            <span className="bg-linear-to-r from-[#0e9e6e] to-[#093627] bg-clip-text text-transparent">
              Platform
            </span>
          </h2>
          
          <p className="text-xl text-[#093627]/70 max-w-3xl mx-auto">
            Experience the future of personalized healthcare with our AI-powered suite of tools 
            designed to put you in control of your health journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-[#b4decf]/30 hover:border-[#0e9e6e]/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: service.delay }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#093627] mb-3 group-hover:text-[#0e9e6e] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-[#093627]/70 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#0e9e6e] font-semibold group-hover:gap-3 transition-all"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#0e9e6e] to-[#093627] text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out backwards;
        }
      `}</style>
    </section>
  );
};

export default Services;