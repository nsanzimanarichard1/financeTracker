import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SignOutModal from '../Auth/SignOutModal';

// 💡 Use global authentication context
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // 💡 Retrieve user data + logout() from context
  const { user, logout } = useAuth();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const handleSignOutClick = () => {
    setIsDropdownOpen(false);
    setIsModalOpen(true);
  };

  const confirmSignOut = () => {
    setIsModalOpen(false);

    console.log("User signed out!");
    logout(); // 💡 Clears user + localStorage
    navigate('/login'); // Redirect
  };

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white border-b border-gray-100 shadow-sm">
      <h1 className="text-xl text-gray-800 font-bold">Dashboard</h1>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <div className="flex flex-col text-right">
            {/* 💡 Dynamic user info */}
            <h1 className="text-gray-700 font-semibold text-sm">{user?.name}</h1>
            <h2 className="text-gray-500 text-xs">{user?.email}</h2>
          </div>

          <div className="bg-gray-100 text-gray-500 rounded-full p-1 text-2xl w-8 h-8 flex items-center justify-center border border-gray-200">
            <User size={18} />
          </div>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl py-1 border border-gray-100 z-10">
            <button
              onClick={handleSignOutClick}
              className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition-colors"
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        )}
      </div>

      {/* Sign Out Modal */}
      <SignOutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmSignOut}
      />
    </div>
  );
};

export default Header;
