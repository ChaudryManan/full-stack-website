


import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Responsivenavbar from './Responsivenavbar';
import { useAuth } from './AuthContext';
import FetchData from './FetchData';
const Layout = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <>
    <Responsivenavbar/>
      <Navbar />
      <FetchData/>
      <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;