import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { User, UserRole, AuthState, LoginCredentials, RegisterData } from '@/types';

// Auth actions
type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'LOGOUT' }
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_TOKEN'; payload: string };

// Auth context type
interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  role: 'Visitor',
  isLoading: true,
  isAuthenticated: false,
};

// Auth reducer
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.user.role,
        isAuthenticated: true,
        isLoading: false,
      };
    
    case 'LOGOUT':
      return {
        ...initialState,
        isLoading: false,
      };
    
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        role: action.payload.role,
        isAuthenticated: true,
      };
    
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    
    default:
      return state;
  }
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Mock API calls - replace with real API endpoints
  const login = async (credentials: LoginCredentials) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock response - replace with real API
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: 'John Doe',
        role: credentials.email.includes('admin') ? 'Admin' : 'Candidate',
        verified: true,
        createdAt: new Date().toISOString(),
      };
      
      const mockToken = 'mock-jwt-token-' + Date.now();
      
      // Store token in localStorage (development only)
      localStorage.setItem('auth_token', mockToken);
      
      dispatch({ 
        type: 'LOGIN_SUCCESS', 
        payload: { user: mockUser, token: mockToken } 
      });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('Login failed');
    }
  };

  const register = async (data: RegisterData) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock response
      const mockUser: User = {
        id: '2',
        email: data.email,
        name: data.name,
        role: data.role || 'Candidate',
        phone: data.phone,
        verified: false,
        createdAt: new Date().toISOString(),
      };
      
      const mockToken = 'mock-jwt-token-' + Date.now();
      
      localStorage.setItem('auth_token', mockToken);
      
      dispatch({ 
        type: 'LOGIN_SUCCESS', 
        payload: { user: mockUser, token: mockToken } 
      });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    dispatch({ type: 'LOGOUT' });
  };

  const refreshUser = async () => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      dispatch({ type: 'SET_LOADING', payload: false });
      return;
    }

    try {
      // Mock API call to verify token and get user data
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock user data - replace with real API
      const mockUser: User = {
        id: '1',
        email: 'user@example.com',
        name: 'John Doe',
        role: 'Candidate',
        verified: true,
        createdAt: new Date().toISOString(),
      };
      
      dispatch({ type: 'SET_TOKEN', payload: token });
      dispatch({ type: 'SET_USER', payload: mockUser });
    } catch (error) {
      localStorage.removeItem('auth_token');
      dispatch({ type: 'LOGOUT' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  // Check for existing token on mount
  useEffect(() => {
    refreshUser();
  }, []);

  const value: AuthContextType = {
    ...state,
    login,
    register,
    logout,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;