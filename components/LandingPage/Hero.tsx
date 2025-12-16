'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative  flex items-center justify-center bg-linear-to-br from-white via-[#b4decf]/10 to-white pt-0 md:pt-20 lg:pt-0">
      {/* Animated Background Elements */}

      <div className="relative max-w-7xl mx-auto px-6 md:py-20 lg:pt-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b4decf]/30 rounded-full text-[#093627] font-medium text-sm backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#0e9e6e] rounded-full animate-pulse"></span>
              Your AI Health Navigator
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-[#093627] leading-tight">
              Take Control of Your{' '}
              <span className="bg-linear-to-r from-[#0e9e6e] to-[#093627] bg-clip-text text-transparent">
                Health Journey
              </span>
            </h1>

            <p className="text-xl text-[#093627]/70 leading-relaxed max-w-2xl">
              Mero Health unifies your medical records, translates complex jargon into clear insights, 
              and empowers you with AI-driven health management. All your health data, one intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/register/patient"
                className="group px-8 py-4 bg-linear-to-r from-[#0e9e6e] to-[#093627] text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 bg-white text-[#093627] font-semibold rounded-2xl border-2 border-[#0e9e6e] hover:bg-[#b4decf]/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Features
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-[#0e9e6e]">99.9%</p>
                <p className="text-sm text-[#093627]/60">Uptime</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-[#0e9e6e]">256-bit</p>
                <p className="text-sm text-[#093627]/60">Encryption</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-[#0e9e6e]">HIPAA</p>
                <p className="text-sm text-[#093627]/60">Compliant</p>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Main Card */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-[#b4decf]/30 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  {/* Health Record Card */}
                  <div className="bg-linear-to-br from-[#b4decf]/20 to-[#0e9e6e]/10 rounded-2xl p-6 border border-[#0e9e6e]/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#0e9e6e] rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#093627]">Medical Records</h3>
                        <p className="text-sm text-[#093627]/60">All in one place</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-[#0e9e6e]/20 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0e9e6e] rounded-full w-4/5 animate-pulse"></div>
                      </div>
                      <div className="h-2 bg-[#0e9e6e]/20 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0e9e6e] rounded-full w-3/5 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* AI Summary Card */}
                  <div className="bg-linear-to-br from-[#093627]/5 to-[#0e9e6e]/5 rounded-2xl p-6 border border-[#093627]/10">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-linear-to-br from-[#0e9e6e] to-[#093627] rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#093627] mb-2">AI Summary</h4>
                        <div className="space-y-1">
                          <div className="h-1.5 bg-[#b4decf]/40 rounded-full w-full"></div>
                          <div className="h-1.5 bg-[#b4decf]/40 rounded-full w-4/5"></div>
                          <div className="h-1.5 bg-[#b4decf]/40 rounded-full w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Medication Reminder */}
                  <div className="bg-[#0e9e6e]/10 rounded-2xl p-4 border border-[#0e9e6e]/20 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0e9e6e] rounded-full flex items-center justify-center shrink-0 animate-pulse">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#093627] text-sm">Medication Reminder</p>
                      <p className="text-xs text-[#093627]/60">Take your medicine at 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0e9e6e] rounded-2xl flex items-center justify-center shadow-xl animate-float">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#093627] rounded-xl flex items-center justify-center shadow-xl animate-float-delayed">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;