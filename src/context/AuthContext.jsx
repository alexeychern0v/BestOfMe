import { createContext, useContext, useState } from 'react';
import { api } from '../api/client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Initialize from localStorage so refreshing the page doesn't log the user out
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  const login = async (email, password) => {
    const data = await api.login(email, password);
    // Adjust "data.token" to match whatever key your backend actually returns
    localStorage.setItem('token', data.token);
    setToken(data.token);
  };

  const register = async (email, password) => {
    await api.register(email, password);
    // After registering, log the user in immediately for a smoother flow
    await login(email, password);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const value = {
    token,
    isAuthenticated: !!token,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook so components just call useAuth() instead of useContext(AuthContext)
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}