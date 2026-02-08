// app/dashboard/providers/pending/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { adminAPI } from '@/lib/api';
import { Provider } from '@/types';
import Header from '@/components//Dashboard/Header';
import ProviderVerificationModal from '@/components/Dashboard/ProviderVerificationModal';
import { Clock, FileText, Mail, Phone, MapPin } from 'lucide-react';

export default function PendingProvidersPage() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);

  useEffect(() => {
    loadProviders();
  }, []);

  const loadProviders = async () => {
    try {
      const response = await adminAPI.getPendingProviders();
      if (response.data.success) {
        setProviders(response.data.data);
      }
    } catch (error) {
      console.error('Failed to load pending providers:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div>
      <Header title="Pending Provider Verifications" />

      <div className="p-8">
        {providers.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No Pending Verifications
            </h3>
            <p className="text-gray-600">
              All provider applications have been processed
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {providers.map((provider) => (
              <div
                key={provider.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
              >
                <div className="bg-linear-to-r from-yellow-400 to-orange-500 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {provider.name}
                    </h3>
                    <span className="bg-white text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Pending
                    </span>
                  </div>
                  <p className="text-yellow-50 mt-1">{provider.specialty}</p>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-gray-400" size={20} />
                    <span className="text-gray-700">{provider.email}</span>
                  </div>

                  {provider.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="text-gray-400" size={20} />
                      <span className="text-gray-700">{provider.phone}</span>
                    </div>
                  )}

                  {provider.clinic_name && (
                    <div className="flex items-center gap-3">
                      <MapPin className="text-gray-400" size={20} />
                      <span className="text-gray-700">{provider.clinic_name}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <FileText className="text-gray-400" size={20} />
                    <span className="text-gray-700">
                      License: {provider.license_number}
                    </span>
                  </div>

                  {provider.documents && provider.documents.length > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm font-semibold text-blue-900">
                        {provider.documents.length} document
                        {provider.documents.length !== 1 ? 's' : ''} uploaded
                      </p>
                    </div>
                  )}

                  <div className="text-xs text-gray-500 pt-2 border-t border-gray-200">
                    Applied on{' '}
                    {new Date(provider.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>

                  <button
                    onClick={() => setSelectedProvider(provider)}
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                  >
                    Review Application
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedProvider && (
        <ProviderVerificationModal
          provider={selectedProvider}
          onClose={() => setSelectedProvider(null)}
          onVerified={loadProviders}
        />
      )}
    </div>
  );
}