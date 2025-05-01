// component/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = (userData) => {
    const user = {
      _id: userData.data._id,
      email: userData.data.email,
      name: `${userData.data.firstName} ${userData.data.lastName}`,
      token: userData.token // Ensure your API returns this
    };

    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};