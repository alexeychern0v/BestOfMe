import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

// Wrap any route element with this to require login
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}