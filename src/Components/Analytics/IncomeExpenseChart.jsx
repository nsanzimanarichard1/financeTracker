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

const IncomeExpenseChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-[400px]">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Income vs Expense</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#6B7280', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#6B7280', fontSize: 12 }} 
          />
          <Tooltip 
            cursor={{ fill: '#F3F4F6' }}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Bar dataKey="income" fill="#10B981" radius={[4, 4, 0, 0]} barSize={30} name="Income" />
          <Bar dataKey="expense" fill="#EF4444" radius={[4, 4, 0, 0]} barSize={30} name="Expense" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;