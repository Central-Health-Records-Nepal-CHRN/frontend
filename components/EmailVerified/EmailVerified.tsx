'use client';

import { useState, useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function EmailVerified() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          redirect("/auth/login") // Redirect to login page
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-12 text-center animate-slideUp">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 animate-scaleIn">
          <svg 
            className="w-12 h-12 text-white animate-checkmark" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Email Verified!
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          Your email has been successfully verified. You can now log in to your account.
        </p>

        {/* Countdown Box */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6 mb-8">
          <div className="text-6xl font-bold text-green-600 mb-2 animate-pulse">
            {countdown}
          </div>
          <p className="text-gray-700 text-sm font-medium">
            Redirecting to login page automatically...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${((10 - countdown) / 10) * 100}%` }}
          />
        </div>

        {/* Login Button */}
        <Link
          href="/auth/login"
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Login Now
        </Link>

        <p className="text-gray-500 text-sm mt-4">
          Don't want to wait? Click the button above to login immediately.
        </p>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes checkmark {
          0% {
            stroke-dasharray: 0, 100;
          }
          100% {
            stroke-dasharray: 100, 100;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out 0.2s both;
        }

        .animate-checkmark {
          animation: checkmark 0.5s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
}