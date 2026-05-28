import React, { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateUserID = useCallback(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }, []);

  const register = useCallback(async (userData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const newUser = {
        id: generateUserID(),
        username: userData.username,
        email: userData.email,
        fullName: userData.fullName || 'User',
        createdAt: new Date(),
        avatar: null,
        isVerified: false,
        membershipTier: 'basic',
      };
      
      setUser(newUser);
      localStorage.setItem('shopify_user', JSON.stringify(newUser));
      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  }, [generateUserID]);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const mockUser = {
        id: 'USER12AB',
        username: 'premium_user',
        email: email,
        fullName: 'Alex Premium',
        createdAt: new Date('2024-01-15'),
        avatar: null,
        isVerified: true,
        membershipTier: 'premium',
      };
      
      setUser(mockUser);
      localStorage.setItem('shopify_user', JSON.stringify(mockUser));
      return { success: true, user: mockUser };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('shopify_user');
  }, []);

  const restoreSession = useCallback(() => {
    const stored = localStorage.getItem('shopify_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to restore session:', error);
      }
    }
  }, []);

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    restoreSession,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
