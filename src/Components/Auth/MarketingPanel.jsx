// src/components/Auth/MarketingPanel.jsx

import React from 'react';
import { TrendingUp, CheckCircle } from 'lucide-react';

const MarketingPanel = () => {
    return (
        <div className="flex flex-col justify-center items-start p-16 w-1/2">
            <div className="mb-8">
                {/* Logo Icon */}
                <TrendingUp size={48} className="text-emerald-500 mb-2" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Manage Your Money
            </h1>
            <p className="text-gray-600 max-w-sm mb-8">
                Track expenses, visualize spending patterns, and take control of your finances with our intuitive personal finance tracker.
            </p>

            {/* Feature List */}
            <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                    <CheckCircle size={18} className="text-emerald-500 mr-2" />
                    Real time expense tracking
                </li>
                <li className="flex items-center text-gray-700">
                    <CheckCircle size={18} className="text-emerald-500 mr-2" />
                    Smart analytics & insights
                </li>
                <li className="flex items-center text-gray-700">
                    <CheckCircle size={18} className="text-emerald-500 mr-2" />
                    Export & backup your data
                </li>
            </ul>
        </div>
    );
};

export default MarketingPanel;