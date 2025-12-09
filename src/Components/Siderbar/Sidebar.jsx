import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Send, Tag, BarChart3, Settings, LogOut } from 'lucide-react';
import SignOutModal from '../Auth/SignOutModal';


const Sidebar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Dashboard", icon: LayoutDashboard },
    { to: "/transactions", label: "Transactions", icon: Send },
    { to: "/categories", label: "Categories", icon: Tag },
    { to: "/analytics", label: "Analytics", icon: BarChart3 },
    { to: "/setting", label: "Settings", icon: Settings },
  ];

  const getNavLinkClasses = ({ isActive }) =>
    `flex items-center space-x-3 px-5 py-3 rounded-xl transition-all font-medium text-sm
    ${isActive ? "bg-emerald-500 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`;

  const handleSignOut = () => {
    setIsModalOpen(true);
  };

  const confirmSignOut = () => {
    setIsModalOpen(false);
    // Clear tokens/session if needed
    navigate('/login'); // Redirect to login
  };

  return (
    <div className="flex flex-col h-screen w-60 bg-white shadow-xl p-5 border-r border-gray-100">
      <div className='mx-0 mb-6 px-2'>
        <h2 className="text-xl font-bold text-gray-800">Finance Tracker</h2>
        <p className='text-xs text-gray-400'>Personal Portfolio</p>
      </div>

      <nav className="flex flex-col flex-1 space-y-2">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink key={link.to} to={link.to} className={getNavLinkClasses}>
              <Icon size={18} />
              <span>{link.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <button
          onClick={handleSignOut}
          className="flex items-center space-x-3 px-5 py-3 rounded-xl transition-all text-sm font-medium text-red-500 hover:bg-red-50 hover:text-red-600 w-full"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>

      <SignOutModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmSignOut}
      />
    </div>
  );
};

export default Sidebar;
