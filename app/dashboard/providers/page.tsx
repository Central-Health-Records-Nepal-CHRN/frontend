// app/dashboard/providers/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { adminAPI } from '@/lib/api';
import { Provider } from '@/types';
import Header from '@/components/Dashboard/Header';
import DataTable from '@/components/Dashboard/DataTable';
import { UserCog, Filter, CheckCircle, Clock, XCircle } from 'lucide-react';

export default function ProvidersPage() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadProviders();
  }, [page, statusFilter, searchQuery]);

  const loadProviders = async () => {
    try {
      setLoading(true);
      const response = await adminAPI.getProviders({
        page,
        limit: 20,
        status: statusFilter || undefined,
        search: searchQuery || undefined,
      });

      if (response.data.success) {
        setProviders(response.data.data);
        setTotal(response.data.pagination.total);
      }
    } catch (error) {
      console.error('Failed to load providers:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const configs = {
      verified: {
        bg: 'bg-green-100',
        text: 'text-green-700',
        icon: CheckCircle,
        label: 'Verified',
      },
      pending: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-700',
        icon: Clock,
        label: 'Pending',
      },
      rejected: {
        bg: 'bg-red-100',
        text: 'text-red-700',
        icon: XCircle,
        label: 'Rejected',
      },
    };

    const config = configs[status as keyof typeof configs] || configs.pending;
    const Icon = config.icon;

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text} flex items-center gap-1 w-fit`}
      >
        <Icon size={14} />
        {config.label}
      </span>
    );
  };

  const columns = [
    {
      header: 'Provider',
      accessor: (provider: Provider) => (
        <div>
          <p className="font-semibold text-gray-900">{provider.name}</p>
          <p className="text-sm text-gray-600">{provider.email}</p>
        </div>
      ),
    },
    {
      header: 'Specialty',
      accessor: (provider: Provider) => (
        <div>
          <p className="font-medium text-gray-900">{provider.specialty}</p>
          {provider.clinic_name && (
            <p className="text-sm text-gray-500">{provider.clinic_name}</p>
          )}
        </div>
      ),
    },
    {
      header: 'License',
      accessor: (provider: Provider) => (
        <span className="text-sm font-mono text-gray-700">
          {provider.license_number}
        </span>
      ),
    },
    {
      header: 'Status',
      accessor: (provider: Provider) => getStatusBadge(provider.verification_status),
    },
    {
      header: 'Patients',
      accessor: (provider: Provider) => (
        <span className="text-sm font-semibold text-gray-900">
          {provider.patient_count || 0}
        </span>
      ),
    },
    {
      header: 'Verified Date',
      accessor: (provider: Provider) =>
        provider.verified_at ? (
          <span className="text-sm text-gray-600">
            {new Date(provider.verified_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        ) : (
          <span className="text-gray-400 text-sm">-</span>
        ),
    },
    {
      header: 'Actions',
      accessor: (provider: Provider) => (
        <button
          onClick={() => window.location.href = `/dashboard/providers/${provider.id}`}
          className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
        >
          View
        </button>
      ),
    },
  ];

  if (loading && providers.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const stats = {
    total: total,
    verified: providers.filter((p) => p.verification_status === 'verified').length,
    pending: providers.filter((p) => p.verification_status === 'pending').length,
    rejected: providers.filter((p) => p.verification_status === 'rejected').length,
  };

  return (
    <div>
      <Header title="Provider Management" />

      <div className="p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Providers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <UserCog className="text-gray-400" size={32} />
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700">Verified</p>
                <p className="text-2xl font-bold text-green-900">{stats.verified}</p>
              </div>
              <CheckCircle className="text-green-500" size={32} />
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-700">Pending</p>
                <p className="text-2xl font-bold text-yellow-900">{stats.pending}</p>
              </div>
              <Clock className="text-yellow-500" size={32} />
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-700">Rejected</p>
                <p className="text-2xl font-bold text-red-900">{stats.rejected}</p>
              </div>
              <XCircle className="text-red-500" size={32} />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-600" />
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">All Status</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <DataTable
          data={providers}
          columns={columns}
          searchable
          searchPlaceholder="Search by name, email, or specialty..."
          onSearch={(query) => {
            setSearchQuery(query);
            setPage(1);
          }}
          pagination={{
            page,
            limit: 20,
            total,
            onPageChange: setPage,
          }}
        />
      </div>
    </div>
  );
}