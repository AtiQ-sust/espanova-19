// Core application types

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  verified: boolean;
  createdAt: string;
}

export type UserRole = 'Visitor' | 'Candidate' | 'Recruiter' | 'TravelAgent' | 'Editor' | 'Admin';

export interface AuthState {
  user: User | null;
  token: string | null;
  role: UserRole;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role?: UserRole;
}

// Job-related types
export interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  country: string;
  city: string;
  category: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  benefits: string[];
  employmentType: 'full-time' | 'part-time' | 'contract';
  experienceLevel: 'entry' | 'mid' | 'senior';
  postedAt: string;
  expiresAt: string;
  isActive: boolean;
  applicationDeadline?: string;
  documentsRequired: string[];
}

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  name: string;
  email: string;
  phone: string;
  resumeUrl: string;
  coverNote?: string;
  status: 'pending' | 'reviewing' | 'accepted' | 'rejected';
  appliedAt: string;
  updatedAt: string;
}

// Travel/Tourism types
export interface Package {
  id: string;
  type: 'hajj' | 'umrah' | 'tourism' | 'visa-ticketing' | 'custom';
  title: string;
  description: string;
  duration: number; // days
  price: {
    amount: number;
    currency: string;
  };
  includes: string[];
  excludes: string[];
  itinerary: ItineraryDay[];
  isActive: boolean;
  maxTravelers: number;
  availableDates: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: ('breakfast' | 'lunch' | 'dinner')[];
  accommodation?: string;
}

export interface CustomPackageRequest {
  type: 'hajj' | 'umrah' | 'tourism' | 'business';
  details: string;
  travelers: number;
  startDate: string;
  budgetRange: {
    min: number;
    max: number;
  };
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
  specialRequirements?: string;
}

// Content types
export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  featuredImage?: string;
  publishedAt: string;
  updatedAt: string;
  isPublished: boolean;
}

export interface Training {
  id: string;
  title: string;
  description: string;
  type: 'pre-departure' | 'skill-development' | 'language' | 'cultural';
  duration: number; // hours
  price: number;
  curriculum: string[];
  prerequisites: string[];
  certification: boolean;
  nextBatch: string;
  maxStudents: number;
  instructor: {
    name: string;
    qualification: string;
  };
}

// Service request types
export interface VisaRequest {
  id: string;
  applicantName: string;
  passportNumber: string;
  nationality: string;
  destination: string;
  visaType: string;
  travelDate: string;
  purpose: string;
  status: 'pending' | 'processing' | 'approved' | 'rejected';
  documentsSubmitted: string[];
  fee: number;
  submittedAt: string;
}

export interface TicketRequest {
  id: string;
  passengerName: string;
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  tripType: 'one-way' | 'round-trip';
  class: 'economy' | 'business' | 'first';
  passengers: number;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
  submittedAt: string;
}

// Contact form
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// API response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// Pagination
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}