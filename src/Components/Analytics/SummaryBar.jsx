import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';

// --- Mock Data (Based on your image) ---
const barData = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Apr', income: 2780, expense: 3908 },
  { name: 'May', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
];

const pieData = [
  { name: 'Food', value: 450, color: '#10B981' }, // Emerald
  { name: 'Transportation', value: 320, color: '#0EA5E9' }, // Sky Blue
  { name: 'Entertainment', value: 280, color: '#F59E0B' }, // Amber
  { name: 'Utilities', value: 200, color: '#EF4444' }, // Red
  { name: 'Other', value: 150, color: '#8B5CF6' }, // Violet
];

const SummaryBar = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-6">
       <h3 className="text-lg font-semibold text-gray-800 mb-6">Summary</h3>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-gray-500 text-sm mb-1">Savings Rate</p>
            <p className="text-3xl font-bold text-emerald-500">52%</p>
          </div>
          <div className="border-l border-gray-100 pl-8 md:pl-8 sm:border-l-0 sm:pl-0">
            <p className="text-gray-500 text-sm mb-1">Average Monthly Expense</p>
            <p className="text-3xl font-bold text-gray-900">$1,767.67</p>
          </div>
          <div className="border-l border-gray-100 pl-8 md:pl-8 sm:border-l-0 sm:pl-0">
            <p className="text-gray-500 text-sm mb-1">Average Monthly Income</p>
            <p className="text-3xl font-bold text-gray-900">$3,490.00</p>
          </div>
       </div>
    </div>
  );
};

export default SummaryBar;