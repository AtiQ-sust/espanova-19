// Core Types for Espanova API
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  created_at: string;
  updated_at: string;
}

export type UserRole = 'Visitor' | 'Candidate' | 'Recruiter' | 'TravelAgent' | 'Editor' | 'Admin';

export interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  country: string;
  category: string;
  location: string;
  salary_range?: string;
  experience_required: string;
  description: string;
  requirements: string[];
  benefits: string[];
  employment_type: 'Full-time' | 'Part-time' | 'Contract' | 'Temporary';
  posted_date: string;
  expires_date: string;
  is_featured: boolean;
  applications_count: number;
  status: 'active' | 'closed' | 'draft';
}

export interface Application {
  id: string;
  job_id: string;
  candidate_name: string;
  candidate_email: string;
  candidate_phone: string;
  resume_url: string;
  cover_note?: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
  applied_date: string;
}

export interface Package {
  id: string;
  type: 'hajj' | 'umrah' | 'tourism' | 'business';
  name: string;
  description: string;
  price_range: string;
  duration_days: number;
  includes: string[];
  excludes: string[];
  itinerary: PackageDay[];
  is_featured: boolean;
  available_dates: string[];
}

export interface PackageDay {
  day: number;
  title: string;
  activities: string[];
  meals: string[];
  accommodation?: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  author: string;
  category: string;
  tags: string[];
  published_date: string;
  updated_date: string;
  status: 'published' | 'draft' | 'archived';
  is_featured: boolean;
}

export interface Training {
  id: string;
  title: string;
  description: string;
  duration_weeks: number;
  cost: number;
  curriculum: string[];
  prerequisites: string[];
  certification: string;
  next_batch_date: string;
  max_participants: number;
  current_enrollments: number;
}

export interface VisaRequest {
  id: string;
  applicant_name: string;
  passport_number: string;
  nationality: string;
  destination_country: string;
  visa_type: string;
  travel_date: string;
  purpose: string;
  documents_submitted: string[];
  status: 'submitted' | 'processing' | 'approved' | 'rejected';
  submitted_date: string;
}

export interface TicketRequest {
  id: string;
  passenger_name: string;
  from_city: string;
  to_city: string;
  departure_date: string;
  return_date?: string;
  class: 'economy' | 'business' | 'first';
  special_requirements?: string;
  contact_email: string;
  contact_phone: string;
  status: 'requested' | 'quoted' | 'booked' | 'cancelled';
  requested_date: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  status: 'success' | 'error';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    current_page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
}

// Form Types
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface JobApplicationForm {
  job_id: string;
  name: string;
  email: string;
  phone: string;
  resume: File;
  cover_note?: string;
}

export interface CustomPackageForm {
  type: 'hajj' | 'umrah' | 'tourism' | 'business';
  details: string;
  travelers: number;
  start_date: string;
  budget_range: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
}