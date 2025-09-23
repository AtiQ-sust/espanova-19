import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
  requireAuth?: boolean;
  fallbackPath?: string;
}

export function ProtectedRoute({ 
  children, 
  allowedRoles = [], 
  requireAuth = true,
  fallbackPath = '/login' 
}: ProtectedRouteProps) {
  const { isAuthenticated, role, isLoading } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If authentication is required but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    return <Navigate to={fallbackPath} state={{ from: location }} replace />;
  }

  // If specific roles are required, check if user has permission
  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            You don't have permission to access this page.
          </p>
          <button 
            onClick={() => window.history.back()}
            className="btn-hero"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

// Convenience components for common role combinations
export function AdminRoute({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={['Admin']}>
      {children}
    </ProtectedRoute>
  );
}

export function EditorRoute({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={['Admin', 'Editor']}>
      {children}
    </ProtectedRoute>
  );
}

export function RecruiterRoute({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={['Admin', 'Editor', 'Recruiter']}>
      {children}
    </ProtectedRoute>
  );
}

export function TravelAgentRoute({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={['Admin', 'Editor', 'TravelAgent']}>
      {children}
    </ProtectedRoute>
  );
}

export function CandidateRoute({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={['Admin', 'Editor', 'Recruiter', 'Candidate']}>
      {children}
    </ProtectedRoute>
  );
}

export default ProtectedRoute;