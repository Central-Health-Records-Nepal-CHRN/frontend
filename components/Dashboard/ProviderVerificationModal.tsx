// components/ProviderVerificationModal.tsx
'use client';

import { useState } from 'react';
import { Provider } from '@/types';
import { X, CheckCircle, XCircle, FileText, Download } from 'lucide-react';
import { adminAPI } from '@/lib/api';
import Link from 'next/link';

interface ProviderVerificationModalProps {
  provider: Provider | null;
  onClose: () => void;
  onVerified: () => void;
}

export default function ProviderVerificationModal({
  provider,
  onClose,
  onVerified,
}: ProviderVerificationModalProps) {
  const [rejectionReason, setRejectionReason] = useState('');
  const [processing, setProcessing] = useState(false);
  const [showRejectForm, setShowRejectForm] = useState(false);

  if (!provider) return null;

  const handleVerify = async (approved: boolean) => {
    if (!approved && !rejectionReason.trim()) {
      alert('Please provide a rejection reason');
      return;
    }

    setProcessing(true);
    try {
      await adminAPI.verifyProvider(provider.id.toString(), {
        approved,
        rejection_reason: approved ? undefined : rejectionReason,
      });

      alert(approved ? 'Provider verified successfully!' : 'Provider rejected');
      onVerified();
      onClose();
    } catch (error) {
      console.error('Verification error:', error);
      alert('Failed to process verification');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Provider Verification</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Provider Info */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Provider Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-semibold text-gray-900">{provider.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-900">{provider.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Specialty</p>
                <p className="font-semibold text-gray-900">{provider.specialty}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">License Number</p>
                <p className="font-semibold text-gray-900">{provider.license_number}</p>
              </div>
              {provider.phone && (
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold text-gray-900">{provider.phone}</p>
                </div>
              )}
              {provider.clinic_name && (
                <div>
                  <p className="text-sm text-gray-600">Clinic Name</p>
                  <p className="font-semibold text-gray-900">{provider.clinic_name}</p>
                </div>
              )}
              {provider.clinic_address && (
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Clinic Address</p>
                  <p className="font-semibold text-gray-900">{provider.clinic_address}</p>
                </div>
              )}
              {provider.bio && (
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Bio</p>
                  <p className="font-semibold text-gray-900">{provider.bio}</p>
                </div>
              )}
            </div>
          </div>

          {/* Documents */}
          {provider.documents && provider.documents.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Verification Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {provider.documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition"
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="text-indigo-600 mt-1" size={24} />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 capitalize">
                          {doc.document_type.replace('_', ' ')}
                        </p>
                        <p className="text-sm text-gray-600">{doc.document_name}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(doc.uploaded_at).toLocaleDateString()}
                        </p>
                      </div>
                      <Link
                        href={doc.document_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-gray-100 rounded-lg transition"
                      >
                        <Download size={20} className="text-gray-600" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Registration Date */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Registration Date:</span>{' '}
              {new Date(provider.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>

          {/* Rejection Form */}
          {showRejectForm && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Rejection Reason
              </label>
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows={4}
                placeholder="Please provide a detailed reason for rejection..."
              />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
            disabled={processing}
          >
            Cancel
          </button>

          {!showRejectForm ? (
            <>
              <button
                onClick={() => setShowRejectForm(true)}
                className="px-6 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition flex items-center gap-2"
                disabled={processing}
              >
                <XCircle size={20} />
                Reject
              </button>
              <button
                onClick={() => handleVerify(true)}
                className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2"
                disabled={processing}
              >
                {processing ? (
                  'Processing...'
                ) : (
                  <>
                    <CheckCircle size={20} />
                    Approve
                  </>
                )}
              </button>
            </>
          ) : (
            <button
              onClick={() => handleVerify(false)}
              className="px-6 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition flex items-center gap-2"
              disabled={processing}
            >
              {processing ? 'Processing...' : 'Confirm Rejection'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}