// Typed API client for Espanova
import { 
  Job, 
  Application, 
  Package, 
  Post, 
  Training, 
  VisaRequest, 
  TicketRequest,
  ContactForm,
  CustomPackageRequest,
  ApiResponse,
  PaginatedResponse,
  LoginCredentials,
  RegisterData,
  User
} from '@/types';

// API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE || 'https://api.espanova.com';

class ApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  // Get auth token from localStorage
  private getAuthToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Create headers with auth token
  private getHeaders(includeAuth = true): HeadersInit {
    const headers = { ...this.defaultHeaders };
    
    if (includeAuth) {
      const token = this.getAuthToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }
    
    return headers;
  }

  // Generic fetch wrapper
  private async fetch<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.getHeaders(),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Multipart form data helper
  private async fetchMultipart<T>(
    endpoint: string,
    formData: FormData
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const headers = this.getHeaders();
    // Remove Content-Type for multipart - browser will set it with boundary
    delete (headers as any)['Content-Type'];
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth endpoints
  async login(credentials: LoginCredentials): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(data: RegisterData): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async me(): Promise<ApiResponse<User>> {
    return this.fetch('/auth/me');
  }

  // Job endpoints
  async getJobs(params?: {
    q?: string;
    country?: string;
    category?: string;
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<PaginatedResponse<Job>>> {
    const searchParams = new URLSearchParams();
    
    if (params?.q) searchParams.set('q', params.q);
    if (params?.country) searchParams.set('country', params.country);
    if (params?.category) searchParams.set('category', params.category);
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    
    const query = searchParams.toString();
    return this.fetch(`/jobs${query ? `?${query}` : ''}`);
  }

  async getJob(slug: string): Promise<ApiResponse<Job>> {
    return this.fetch(`/jobs/${slug}`);
  }

  // Application endpoints
  async applyForJob(application: {
    job_id: string;
    name: string;
    email: string;
    phone: string;
    resume: File;
    cover_note?: string;
  }): Promise<ApiResponse<Application>> {
    const formData = new FormData();
    formData.append('job_id', application.job_id);
    formData.append('name', application.name);
    formData.append('email', application.email);
    formData.append('phone', application.phone);
    formData.append('resume', application.resume);
    if (application.cover_note) {
      formData.append('cover_note', application.cover_note);
    }
    
    return this.fetchMultipart('/api/apply.php', formData);
  }

  // Contact endpoints
  async submitContact(contact: ContactForm): Promise<ApiResponse<{ success: boolean }>> {
    return this.fetch('/api/contact.php', {
      method: 'POST',
      body: JSON.stringify(contact),
    });
  }

  // Package endpoints
  async getPackages(type?: string): Promise<ApiResponse<Package[]>> {
    const query = type ? `?type=${type}` : '';
    return this.fetch(`/packages${query}`);
  }

  async getPackage(id: string): Promise<ApiResponse<Package>> {
    return this.fetch(`/packages/${id}`);
  }

  async requestCustomPackage(request: CustomPackageRequest): Promise<ApiResponse<{ success: boolean }>> {
    return this.fetch('/api/custom-package', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // Blog/Content endpoints
  async getPosts(params?: {
    category?: string;
    tag?: string;
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<PaginatedResponse<Post>>> {
    const searchParams = new URLSearchParams();
    
    if (params?.category) searchParams.set('category', params.category);
    if (params?.tag) searchParams.set('tag', params.tag);
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    
    const query = searchParams.toString();
    return this.fetch(`/posts${query ? `?${query}` : ''}`);
  }

  async getPost(slug: string): Promise<ApiResponse<Post>> {
    return this.fetch(`/posts/${slug}`);
  }

  // Training endpoints
  async getTrainings(): Promise<ApiResponse<Training[]>> {
    return this.fetch('/trainings');
  }

  async getTraining(id: string): Promise<ApiResponse<Training>> {
    return this.fetch(`/trainings/${id}`);
  }

  // Visa services
  async submitVisaRequest(request: Omit<VisaRequest, 'id' | 'status' | 'submittedAt'>): Promise<ApiResponse<VisaRequest>> {
    return this.fetch('/api/visa-request', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // Ticket services
  async submitTicketRequest(request: Omit<TicketRequest, 'id' | 'status' | 'submittedAt'>): Promise<ApiResponse<TicketRequest>> {
    return this.fetch('/api/ticket-request', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // File upload helper
  async uploadFile(file: File, type: 'resume' | 'document' | 'image'): Promise<ApiResponse<{ url: string }>> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    
    return this.fetchMultipart('/api/upload', formData);
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export individual methods for convenience
export const {
  login,
  register,
  me,
  getJobs,
  getJob,
  applyForJob,
  submitContact,
  getPackages,
  getPackage,
  requestCustomPackage,
  getPosts,
  getPost,
  getTrainings,
  getTraining,
  submitVisaRequest,
  submitTicketRequest,
  uploadFile,
} = apiClient;

export default apiClient;