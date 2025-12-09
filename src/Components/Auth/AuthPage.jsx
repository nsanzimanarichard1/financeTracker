// src/components/Auth/AuthPage.jsx

import React from 'react';
import AuthCard from './AuthCard';
import MarketingPanel from './MarketingPanel';

const AuthPage = () => {
    return (
        <div className="min-h-screen flex font-sans">
            <div className="flex w-full max-w-7xl mx-auto">
                {/* Left Panel: Marketing/Features */}
                <div className="w-1/2 flex items-center justify-center bg-white">
                    <MarketingPanel />
                </div>

                {/* Right Panel: Form Card Container */}
                <div className="w-1/2 flex items-center justify-center bg-linear-to-br from-white via-gray-50 to-emerald-50/1">
                    <AuthCard />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;