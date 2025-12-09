

import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

const ChangePasswordModal = ({ isOpen, onClose }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    // Simple validation (can be expanded)
    const passwordMatch = newPassword === confirmNewPassword;
    const isNewPasswordValid = newPassword.length >= 8;
    const canUpdate = currentPassword.length > 0 && isNewPasswordValid && passwordMatch;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (canUpdate) {
            console.log("Password Change Requested:", { 
                current: currentPassword, 
                new: newPassword 
            });
            // In a real app, you would send this to your backend API
            alert("Password update simulated! Check console for details.");
            
            // Reset and Close
            setCurrentPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
            onClose();
        }
    };

    if (!isOpen) return null;

    const PasswordInput = ({ value, onChange, placeholder, isVisible, toggleVisibility }) => (
        <div className="relative">
            <input
                type={isVisible ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition"
            />
            <button
                type="button"
                onClick={toggleVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
                {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
        </div>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6">
                
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-5">
                    <h3 className="text-lg font-semibold text-gray-900">Change Password</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={20} />
                    </button>
                </div>

                <p className='text-sm text-gray-600 mb-4'>
                    Enter your current password and choose a new password
                </p>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Current Password */}
                    <div className='space-y-1'>
                        <label className="text-sm font-medium text-gray-700">Current Password</label>
                        <PasswordInput
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="••••••••"
                            isVisible={showCurrent}
                            toggleVisibility={() => setShowCurrent(!showCurrent)}
                        />
                    </div>

                    {/* New Password */}
                    <div className='space-y-1'>
                        <label className="text-sm font-medium text-gray-700">New Password</label>
                        <PasswordInput
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="••••••••"
                            isVisible={showNew}
                            toggleVisibility={() => setShowNew(!showNew)}
                        />
                        <p className={`text-xs ${isNewPasswordValid ? 'text-green-600' : 'text-red-500'}`}>
                            At least 8 characters required
                        </p>
                    </div>

                    {/* Confirm New Password */}
                    <div className='space-y-1'>
                        <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                        <PasswordInput
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            placeholder="••••••••"
                            isVisible={showConfirm}
                            toggleVisibility={() => setShowConfirm(!showConfirm)}
                        />
                        {!passwordMatch && confirmNewPassword.length > 0 && (
                            <p className="text-xs text-red-500">Passwords do not match</p>
                        )}
                    </div>
                
                    {/* Footer Buttons */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-emerald-500 text-white px-4 py-2 rounded-lg shadow hover:bg-emerald-600 transition disabled:opacity-50"
                            disabled={!canUpdate}
                        >
                            Update Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePasswordModal;