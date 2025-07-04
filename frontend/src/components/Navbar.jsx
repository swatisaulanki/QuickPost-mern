import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  let user = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      user = decoded;
    } catch (err) {
      localStorage.removeItem('token');
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-richblack-900 text-white px-6 py-4 shadow-md font-poppins">
      {/* Top Row */}
      <div className="flex justify-between items-center">
        {/* Brand + Hi (Mobile Only) */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-4xl font-bold bg-gradient-to-r from-pink-100 via-blue-200 to-pink-200 bg-clip-text text-transparent"
          >
            QuickPost
          </Link>

          {/*  on mobile */}
          {token && (
            <span className="text-sm italic md:hidden">
              Hi, {user?.email?.split('@')[0]}
            </span>
          )}
        </div>

        {/*  (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          {token && <Link to="/create" className="hover:underline">Create</Link>}

          {!token ? (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          ) : (
            <>
              <span className="text-sm italic text-center ">Hi, {user?.email?.split('@')[0]}</span>
              <button
                onClick={handleLogout}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded text-sm"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Links */}
      {isOpen && (
        <div className="flex flex-col gap-3 mt-4 md:hidden">
          <Link to="/" className="hover:underline">Home</Link>
          {token && <Link to="/create" className="hover:underline">Create</Link>}
          {!token ? (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded text-sm w-fit"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
