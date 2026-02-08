// app/dashboard/logs/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { adminAPI } from '@/lib/api';
import { ActivityLog } from '@/types';
import Header from '@/components/Dashboard/Header';
import DataTable from '@/components/Dashboard/DataTable';
import { FileText, CheckCircle, XCircle, UserX, Shield } from 'lucide-react';

export default function ActivityLogsPage() {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadLogs();
  }, [page]);

  const loadLogs = async () => {
    try {
      setLoading(true);
      const response = await adminAPI.getActivityLogs({ page, limit: 50 });

      if (response.data.success) {
        setLogs(response.data.data);
        setTotal(response.data.pagination.total);
      }
    } catch (error) {
      console.error('Failed to load activity logs:', error);
    } finally {
      setLoading(false);
    }
  };

  const getActionIcon = (actionType: string) => {
    switch (actionType) {
      case 'verify_provider':
        return <CheckCircle className="text-green-600" size={20} />;
      case 'reject_provider':
        return <XCircle className="text-red-600" size={20} />;
      case 'suspend_user':
        return <UserX className="text-orange-600" size={20} />;
      default:
        return <Shield className="text-blue-600" size={20} />;
    }
  };

  const getActionLabel = (actionType: string) => {
    const labels: { [key: string]: string } = {
      verify_provider: 'Verified Provider',
      reject_provider: 'Rejected Provider',
      suspend_user: 'Suspended User',
      activate_user: 'Activated User',
    };
    return labels[actionType] || actionType.replace(/_/g, ' ');
  };

  const columns = [
    {
      header: 'Action',
      accessor: (log: ActivityLog) => (
        <div className="flex items-center gap-3">
          {getActionIcon(log.action_type)}
          <div>
            <p className="font-semibold text-gray-900 capitalize">
              {getActionLabel(log.action_type)}
            </p>
            <p className="text-sm text-gray-500">
              {log.target_type} ID: {log.target_id}
            </p>
          </div>
        </div>
      ),
    },
    {
      header: 'Admin',
      accessor: (log: ActivityLog) => (
        <div>
          <p className="font-medium text-gray-900">{log.admin_name}</p>
          <p className="text-sm text-gray-600">{log.admin_email}</p>
        </div>
      ),
    },
    {
      header: 'Details',
      accessor: (log: ActivityLog) => {
        if (!log.details) return <span className="text-gray-400">-</span>;

        const details = typeof log.details === 'string' 
          ? JSON.parse(log.details) 
          : log.details;

        return (
          <div className="text-sm text-gray-700">
            {details.approved !== undefined && (
              <span className={details.approved ? 'text-green-600' : 'text-red-600'}>
                {details.approved ? 'Approved' : 'Rejected'}
              </span>
            )}
            {details.rejection_reason && (
              <p className="text-xs text-gray-500 mt-1">
                Reason: {details.rejection_reason}
              </p>
            )}
          </div>
        );
      },
    },
    {
      header: 'Timestamp',
      accessor: (log: ActivityLog) => (
        <div className="text-sm text-gray-600">
          <p>
            {new Date(log.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
          <p className="text-xs text-gray-500">
            {new Date(log.created_at).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
      ),
    },
  ];

  if (loading && logs.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div>
      <Header title="Activity Logs" />

      <div className="p-8">
        <div className="mb-6 bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 w-fit">
          <FileText size={20} className="text-gray-600" />
          <span className="font-semibold text-gray-900">{total}</span>
          <span className="text-gray-600">Total Activities</span>
        </div>

        <DataTable
          data={logs}
          columns={columns}
          pagination={{
            page,
            limit: 50,
            total,
            onPageChange: setPage,
          }}
        />
      </div>
    </div>
  );
}