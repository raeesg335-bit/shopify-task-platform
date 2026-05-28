import React, { createContext, useContext, useState, useCallback } from 'react';

const AppConfigContext = createContext();

export const AppConfigProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    // User Status
    userStatus: 'active', // 'active', 'frozen', 'pending'
    isVerified: false,
    
    // Balance & Financial
    totalBalance: 0,
    availableBalance: 0,
    frozenBalance: 0,
    totalEarnings: 0,
    todaysEarnings: 0,
    
    // Task Controls
    activeMembershipPlan: null,
    tasksUnlocked: false,
    maintenanceMode: false,
    
    // VIP & Permissions
    vipTier: 'basic',
    withdrawalApproved: false,
    
    // Match Duration
    matchDuration: 5,
    noRepeatWindow: 24, // hours
    
    // Notifications
    notifications: [],
  });

  const updateAppState = useCallback((updates) => {
    setAppState((prev) => ({
      ...prev,
      ...updates,
    }));
  }, []);

  const addNotification = useCallback((notification) => {
    const id = Date.now();
    const notif = { id, ...notification };
    setAppState((prev) => ({
      ...prev,
      notifications: [...prev.notifications, notif],
    }));
    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setAppState((prev) => ({
      ...prev,
      notifications: prev.notifications.filter((n) => n.id !== id),
    }));
  }, []);

  const value = {
    appState,
    updateAppState,
    addNotification,
    removeNotification,
  };

  return (
    <AppConfigContext.Provider value={value}>
      {children}
    </AppConfigContext.Provider>
  );
};

export const useAppConfig = () => {
  const context = useContext(AppConfigContext);
  if (!context) {
    throw new Error('useAppConfig must be used within AppConfigProvider');
  }
  return context;
};
