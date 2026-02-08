// types/index.ts
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'patient' | 'provider' | 'admin';
  date_of_birth?: string;
  gender?: string;
  phone_number?: string;
  created_at: string;
  is_admin: boolean;
  appointment_count?: number;
  medication_count?: number;
}

export interface Provider {
  id: number;
  user_id: number;
  name: string;
  email: string;
  specialty: string;
  license_number: string;
  phone?: string;
  clinic_name?: string;
  clinic_address?: string;
  bio?: string;
  verification_status: 'pending' | 'verified' | 'rejected';
  verified_at?: string;
  rejection_reason?: string;
  created_at: string;
  patient_count?: number;
  documents?: VerificationDocument[];
}

export interface VerificationDocument {
  id: number;
  document_type: string;
  document_url: string;
  document_name: string;
  uploaded_at: string;
}

export interface DashboardStats {
  total_patients: number;
  total_providers: number;
  verified_providers: number;
  pending_providers: number;
  total_appointments: number;
  total_medications: number;
  new_users_week: number;
  new_providers_week: number;
}

export interface ActivityLog {
  id: number;
  admin_id: number;
  admin_name: string;
  admin_email: string;
  action_type: string;
  target_type: string;
  target_id: number;
  details: any;
  created_at: string;
}