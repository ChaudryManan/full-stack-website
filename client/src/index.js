import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import SellingAccount from './component/SellingAcoount';
import AddToCart from './component/Addtocart';
import Login from './component/Login';
import Signup from './component/Signup'; // Fixed component name
import { SearchProvider } from './component/SearchContext';
import { AuthProvider } from './component/AuthContext';
import Order from './component/Order';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />, // Removed handleClick prop
  },
  {
    path: '/signup',
    element: <Signup />, // Capitalized component name
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'selling', element: <SellingAccount /> },
      { path: 'cart', element: <AddToCart /> },
      {path:'order',element:<Order/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SearchProvider>
        <RouterProvider router={router} />

      </SearchProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();