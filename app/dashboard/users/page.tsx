// app/dashboard/users/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { adminAPI } from '@/lib/api';
import { User } from '@/types';
import Header from '@/components//Dashboard/Header';
import DataTable from '@/components/Dashboard/DataTable';
import { Users as UsersIcon, Filter } from 'lucide-react';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [roleFilter, setRoleFilter] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadUsers();
  }, [page, roleFilter, searchQuery]);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const response = await adminAPI.getUsers({
        page,
        limit: 20,
        role: roleFilter || undefined,
        search: searchQuery || undefined,
      });

      if (response.data.success) {
        setUsers(response.data.data);
        setTotal(response.data.pagination.total);
      }
    } catch (error) {
      console.error('Failed to load users:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      header: 'User',
      accessor: (user: User) => (
        <div>
          <p className="font-semibold text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      ),
    },
    {
      header: 'Role',
      accessor: (user: User) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            user.role === 'patient'
              ? 'bg-blue-100 text-blue-700'
              : user.role === 'provider'
              ? 'bg-purple-100 text-purple-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {user.role.charAt(0).toUpperCase() + user.role.slice(1) || 'N/A'}
        </span>
      ),
    },
    {
      header: 'Contact',
      accessor: (user: User) => (
        <div className="text-sm">
          {user.phone_number && <p>{user.phone_number}</p>}
          {user.gender && (
            <p className="text-gray-500 capitalize">{user.gender}</p>
          )}
        </div>
      ),
    },
    {
      header: 'Activity',
      accessor: (user: User) =>
        user.role === 'patient' ? (
          <div className="text-sm">
            <p className="text-gray-700">
              {user.appointment_count || 0} appointments
            </p>
            <p className="text-gray-500">
              {user.medication_count || 0} medications
            </p>
          </div>
        ) : (
          <span className="text-gray-400">N/A</span>
        ),
    },
    {
      header: 'Joined',
      accessor: (user: User) => (
        <span className="text-sm text-gray-600">
          {new Date(user.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
      ),
    },
    {
      header: 'Admin',
      accessor: (user: User) =>
        user.is_admin ? (
          <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">
            Yes
          </span>
        ) : (
          <span className="text-gray-400 text-sm">No</span>
        ),
    },
  ];

  if (loading && users.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div>
      <Header title="User Management" />

      <div className="p-8">
        {/* Filters */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-600" />
            <select
              value={roleFilter}
              onChange={(e) => {
                setRoleFilter(e.target.value);
                setPage(1);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">All Roles</option>
              <option value="patient">Patients</option>
              <option value="provider">Providers</option>
              <option value="admin">Admins</option>
            </select>
          </div>

          <div className="ml-auto bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2">
            <UsersIcon size={20} className="text-gray-600" />
            <span className="font-semibold text-gray-900">{total}</span>
            <span className="text-gray-600">Total Users</span>
          </div>
        </div>

        <DataTable
          data={users}
          columns={columns}
          searchable
          searchPlaceholder="Search by name or email..."
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