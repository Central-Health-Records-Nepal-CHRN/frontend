// app/dashboard/providers/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Dashboard/Header';
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  Calendar,
  Users,
  CheckCircle,
  XCircle,
  Clock,
  ArrowLeft,
} from 'lucide-react';

export default function ProviderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [provider, setProvider] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Load provider details
    // This is a placeholder - implement the actual API call
    setLoading(false);
  }, [params.id]);

  const getStatusConfig = (status: string) => {
    const configs = {
      verified: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        icon: CheckCircle,
        label: 'Verified',
      },
      pending: {
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        text: 'text-yellow-700',
        icon: Clock,
        label: 'Pending Verification',
      },
      rejected: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-700',
        icon: XCircle,
        label: 'Rejected',
      },
    };

    return configs[status as keyof typeof configs] || configs.pending;
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
      <Header title="Provider Details" />

      <div className="p-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </button>

        {/* Coming Soon Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-indigo-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Provider Detail View
          </h3>
          <p className="text-gray-600 mb-6">
            Detailed provider information and management will be available here
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-blue-800">
              This page will show comprehensive provider information including:
              <br />
              • Contact and clinic details
              <br />
              • Verification documents
              <br />
              • Patient enrollments
              <br />
              • Activity history
              <br />• Management actions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}