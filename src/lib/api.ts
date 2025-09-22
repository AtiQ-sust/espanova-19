import type { 
  Job, 
  Application, 
  Package, 
  Post, 
  Training, 
  VisaRequest, 
  TicketRequest,
  ContactForm,
  JobApplicationForm,
  CustomPackageForm,
  ApiResponse,
  PaginatedResponse 
} from '@/types';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE || 'http://localhost:3001';

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem('espanova_token');

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  private async uploadFile(
    endpoint: string,
    formData: FormData
  ): Promise<any> {
    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem('espanova_token');

    const config: RequestInit = {
      method: 'POST',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`File upload failed: ${endpoint}`, error);
      throw error;
    }
  }

  // Job endpoints
  async getJobs(params?: {
    q?: string;
    country?: string;
    category?: string;
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponse<Job>> {
    const searchParams = new URLSearchParams();
    if (params?.q) searchParams.set('q', params.q);
    if (params?.country) searchParams.set('country', params.country);
    if (params?.category) searchParams.set('category', params.category);
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());

    return this.request<PaginatedResponse<Job>>(
      `/jobs?${searchParams.toString()}`
    );
  }

  async getJob(slug: string): Promise<ApiResponse<Job>> {
    return this.request<ApiResponse<Job>>(`/jobs/${slug}`);
  }

  async applyForJob(applicationData: JobApplicationForm): Promise<ApiResponse<Application>> {
    const formData = new FormData();
    formData.append('job_id', applicationData.job_id);
    formData.append('name', applicationData.name);
    formData.append('email', applicationData.email);
    formData.append('phone', applicationData.phone);
    formData.append('resume', applicationData.resume);
    if (applicationData.cover_note) {
      formData.append('cover_note', applicationData.cover_note);
    }

    return this.uploadFile('/api/apply.php', formData);
  }

  // Contact endpoint
  async submitContact(contactData: ContactForm): Promise<ApiResponse<any>> {
    return this.request<ApiResponse<any>>('/api/contact.php', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  // Package endpoints
  async getPackages(type?: string): Promise<ApiResponse<Package[]>> {
    const endpoint = type ? `/packages?type=${type}` : '/packages';
    return this.request<ApiResponse<Package[]>>(endpoint);
  }

  async requestCustomPackage(packageData: CustomPackageForm): Promise<ApiResponse<any>> {
    return this.request<ApiResponse<any>>('/api/custom-package', {
      method: 'POST',
      body: JSON.stringify(packageData),
    });
  }

  // Blog endpoints
  async getPosts(params?: {
    category?: string;
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponse<Post>> {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.set('category', params.category);
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());

    return this.request<PaginatedResponse<Post>>(
      `/posts?${searchParams.toString()}`
    );
  }

  async getPost(slug: string): Promise<ApiResponse<Post>> {
    return this.request<ApiResponse<Post>>(`/posts/${slug}`);
  }

  // Training endpoints
  async getTrainings(): Promise<ApiResponse<Training[]>> {
    return this.request<ApiResponse<Training[]>>('/trainings');
  }

  async getTraining(id: string): Promise<ApiResponse<Training>> {
    return this.request<ApiResponse<Training>>(`/trainings/${id}`);
  }

  // Visa endpoints
  async submitVisaRequest(visaData: Partial<VisaRequest>): Promise<ApiResponse<VisaRequest>> {
    return this.request<ApiResponse<VisaRequest>>('/visa-requests', {
      method: 'POST',
      body: JSON.stringify(visaData),
    });
  }

  // Ticket endpoints
  async submitTicketRequest(ticketData: Partial<TicketRequest>): Promise<ApiResponse<TicketRequest>> {
    return this.request<ApiResponse<TicketRequest>>('/ticket-requests', {
      method: 'POST',
      body: JSON.stringify(ticketData),
    });
  }

  // Auth endpoints (stubs)
  async login(email: string, password: string): Promise<ApiResponse<{ user: any; token: string }>> {
    return this.request<ApiResponse<{ user: any; token: string }>>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: any): Promise<ApiResponse<{ user: any; token: string }>> {
    return this.request<ApiResponse<{ user: any; token: string }>>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async me(): Promise<ApiResponse<any>> {
    return this.request<ApiResponse<any>>('/auth/me');
  }
}

// Export singleton instance
export const api = new ApiClient();
export default api;