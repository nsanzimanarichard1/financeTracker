// src/components/Auth/AuthCard.jsx

import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthCard = () => {
  // Tabs: login / register
  const [activeTab, setActiveTab] = useState("login");

  // Controlled input states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = activeTab === "login";

  const navigate = useNavigate();
  const { login } = useAuth(); // 💡 import login()

  // ----------------------------
  // HANDLE EMAIL/PASSWORD SIGN-IN
  // ----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    // Correct user name depending on login/register
    const userName = isLogin ? (fullName || "User") : fullName;

    // Save user to context/localStorage
    login({
      name: userName,
      email: email,
    });

    console.log(isLogin ? "User Signed In" : "User Registered");

    navigate("/"); // redirect to dashboard
  };

  // ----------------------------
  // HANDLE GOOGLE SIGN-IN
  // ----------------------------
  const handleGoogleSignIn = () => {
    console.log("Starting Google Sign-In...");

    // Simulate Google auth
    setTimeout(() => {
      const googleUser = {
        name: "Google User",
        email: "user@google.com",
      };

      login(googleUser); // Save user globally
      console.log("Google Sign-In success");

      navigate("/");
    }, 500);
  };

  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm border border-gray-100">
      
      {/* ---------- TABS ---------- */}
      <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab("login")}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
            isLogin
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
            !isLogin
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          Create Account
        </button>
      </div>

      {/* ---------- FORM ---------- */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Full Name (Register only) */}
        {!isLogin && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="John Doe"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        )}

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              placeholder={isLogin ? "user@example.com" : "you@example.com"}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="password"
              placeholder="********"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />

            {!isLogin && (
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 8 characters long
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg 
          hover:bg-emerald-600 transition-colors duration-200"
        >
          {isLogin ? "Sign In" : "Create Account"}
        </button>

        {/* Footer Area */}
        {isLogin ? (
          <>
            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">Or continue with</span>
              <div className="grow border-t border-gray-300"></div>
            </div>

            {/* GOOGLE SIGN-IN BUTTON */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full py-3 flex items-center justify-center gap-2 
              border bg-emerald-400 text-gray-700 rounded-lg font-medium 
              hover:bg-emerald-500 hover:text-white transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
                className="w-5 h-5"
              />
              Google
            </button>
          </>
        ) : (
          <p className="text-center text-xs text-gray-500 pt-1">
            By signing up, you agree to our{" "}
            <a href="#" className="underline">Terms of Service</a> and{" "}
            <a href="#" className="underline">Privacy Policy</a>.
          </p>
        )}
      </form>
    </div>
  );
};

export default AuthCard;
