// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { adminAPI } from '@/lib/api';
import { DashboardStats } from '@/types';
import Header from '@/components/Dashboard/Header';
import StatsCard from '@/components/Dashboard/StatsCard';
import { Users, UserCog, Calendar, Pill, TrendingUp, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await adminAPI.getDashboardStats();
      if (response.data.success) {
        setStats(response.data.data);
      }
    } catch (error) {
      console.error('Failed to load stats:', error);
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
      <Header title="Dashboard Overview" />

      <div className="p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Patients"
            value={stats?.total_patients || 0}
            icon={Users}
            color="bg-blue-500"
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Total Providers"
            value={stats?.total_providers || 0}
            icon={UserCog}
            color="bg-purple-500"
          />
          <StatsCard
            title="Pending Verifications"
            value={stats?.pending_providers || 0}
            icon={UserPlus}
            color="bg-yellow-500"
          />
          <StatsCard
            title="Verified Providers"
            value={stats?.verified_providers || 0}
            icon={TrendingUp}
            color="bg-green-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Appointments"
            value={stats?.total_appointments || 0}
            icon={Calendar}
            color="bg-indigo-500"
          />
          <StatsCard
            title="Total Medications"
            value={stats?.total_medications || 0}
            icon={Pill}
            color="bg-pink-500"
          />
          <StatsCard
            title="New Users (7 days)"
            value={stats?.new_users_week || 0}
            icon={UserPlus}
            color="bg-cyan-500"
          />
          <StatsCard
            title="New Providers (7 days)"
            value={stats?.new_providers_week || 0}
            icon={TrendingUp}
            color="bg-emerald-500"
          />
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/dashboard/providers/pending"
              className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition"
            >
              <UserPlus className="text-yellow-600" size={24} />
              <div>
                <p className="font-semibold text-gray-900">Review Providers</p>
                <p className="text-sm text-gray-600">
                  {stats?.pending_providers || 0} pending
                </p>
              </div>
            </Link>

            <Link
              href="/dashboard/users"
              className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition"
            >
              <Users className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold text-gray-900">Manage Users</p>
                <p className="text-sm text-gray-600">
                  {stats?.total_patients || 0} users
                </p>
              </div>
            </Link>

            <Link
              href="/dashboard/logs"
              className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition"
            >
              <TrendingUp className="text-purple-600" size={24} />
              <div>
                <p className="font-semibold text-gray-900">View Activity</p>
                <p className="text-sm text-gray-600">Recent actions</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}