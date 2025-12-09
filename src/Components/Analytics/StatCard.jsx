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


const StatCard = ({ title, amount, icon: Icon, trend, type }) => {
  const isPositive = type === 'positive';
  const isNegative = type === 'negative';
  
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className={`p-2 rounded-full ${
          isPositive ? 'bg-emerald-100 text-emerald-600' : 
          isNegative ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
        }`}>
          <Icon size={20} />
        </div>
      </div>
      <div>
        <span className="text-2xl font-bold text-gray-900">{amount}</span>
      </div>
    </div>
  );
};

export default StatCard;