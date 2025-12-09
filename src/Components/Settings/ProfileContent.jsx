import React from "react";
import InputField from "./InputField";
import { Lock } from "lucide-react";

// 💡 Import useAuth to get logged-in user data
import { useAuth } from '../context/AuthContext';

// ⬇️ Updated version with all features from Version One
const ProfileContent = ({ onOpenChangePassword }) => {
  // Retrieve user info from context (localStorage)
  const { user } = useAuth();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-8">Profile Information</h2>

      {/* User Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* User Full Name */}
        <InputField
          label="Full Name"
          value={user?.name || ""}
          readOnly={true}
        />

        {/* User Email */}
        <InputField
          label="Email"
          value={user?.email || ""}
          type="email"
          readOnly={true}
        />
      </div>

      {/* Password Section */}
      <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-gray-900">Password</h3>
          <p className="text-sm text-gray-500">Change your password</p>
        </div>

        <button
          onClick={onOpenChangePassword}
          className="flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:text-white cursor-pointer hover:bg-emerald-500"
        >
          <Lock size={16} className="mr-2" />
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ProfileContent;
