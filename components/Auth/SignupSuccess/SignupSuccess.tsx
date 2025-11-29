'use client';

import { useState } from 'react';

export default function SignupSuccess() {
  const [isResending, setIsResending] = useState(false);
  const [resendMessage, setResendMessage] = useState('');

  const handleResendEmail = async () => {
    setIsResending(true);
    setResendMessage('');
    
    // Simulate API call - replace with your actual API endpoint
    try {
      // await fetch('/api/resend-verification', { method: 'POST' });
      setTimeout(() => {
        setResendMessage('Verification email sent! Please check your inbox.');
        setIsResending(false);
      }, 1500);
    } catch (error) {
      setResendMessage('Failed to resend email. Please try again.');
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-12 text-center animate-slideUp">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-900 rounded-full flex items-center justify-center mx-auto mb-6 animate-scaleIn">
          <div className="w-10 h-10 border-4 border-white rounded-full relative">
            <div className="absolute left-2 top-0.5 w-3 h-5 border-white border-r-4 border-b-4 transform rotate-45" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Successfully Signed Up!
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          Your account has been created successfully. We've sent a verification email to your inbox.
        </p>

        {/* Email Box */}
        <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 mb-8">
          <div className="text-4xl mb-2">📧</div>
          <p className="text-gray-800 text-sm font-medium">
            Check your email and click the verification link to activate your account
          </p>
        </div>

        {/* Steps */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-5 text-left mb-6">
          <h3 className="text-yellow-700 text-sm font-semibold uppercase tracking-wide mb-3">
            Next Steps
          </h3>
          <ol className="list-decimal ml-5 text-yellow-900 space-y-2">
            <li className="text-sm">Open your email inbox</li>
            <li className="text-sm">Look for our verification email</li>
            <li className="text-sm">Click the verification link</li>
            <li className="text-sm">Log in to your account</li>
          </ol>
        </div>

        {/* Footer */}
        <div className="text-gray-600 text-sm">
          Didn't receive the email?{' '}
          <button
            onClick={handleResendEmail}
            disabled={isResending}
            className="text-purple-600 font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isResending ? 'Sending...' : 'Resend verification email'}
          </button>
        </div>

        {/* Resend Message */}
        {resendMessage && (
          <p className={`mt-3 text-sm ${resendMessage.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
            {resendMessage}
          </p>
        )}
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

        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}