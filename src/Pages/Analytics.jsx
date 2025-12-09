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
import SummaryBar from '../Components/Analytics/SummaryBar';
import IncomeExpenseChart from '../Components/Analytics/IncomeExpenseChart';
import StatCard from '../Components/Analytics/StatCard';
import SpendingPieChart from '../Components/Analytics/SpendingPieChart';


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

const Analytics = () => {
  return (
   <div className="min-h-screen bg-gray-50 font-sans p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-500 mt-1">Visualize your spending patterns and financial insights</p>
        </div>

        {/* Top Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard 
            title="Top Category" 
            amount="$450.00" 
            icon={Activity} 
            type="positive" // Using positive for generic specific category
          />
          <StatCard 
            title="Total Income (YTD)" 
            amount="$20,940.00" 
            icon={TrendingUp} 
            type="positive" 
          />
          <StatCard 
            title="Total Expense (YTD)" 
            amount="$10,606.00" 
            icon={TrendingDown} 
            type="negative" 
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <IncomeExpenseChart />
          <SpendingPieChart />
        </div>

        {/* Bottom Summary */}
        <SummaryBar />

      </div>
    </div>
  )
}

export default Analytics