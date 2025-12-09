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

const SpendingPieChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-[400px] flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Spending by Category</h3>
      
      <div className="flex-1 flex items-center justify-center relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Custom Legend to match image style closely */}
        <div className="absolute w-full h-full pointer-events-none flex items-center justify-between px-2">
           {/* This is a visual trick to emulate floating labels, 
               in production a standard Legend is better for responsiveness */}
        </div>
      </div>

      {/* Manual Legend List for Clarity */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        {pieData.map((item) => (
          <div key={item.name} className="flex items-center text-xs">
             <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
             <span className="text-gray-600 mr-1">{item.name}:</span>
             <span className="font-medium text-gray-900" style={{ color: item.color }}>${item.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpendingPieChart;