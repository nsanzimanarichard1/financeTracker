import React, { useState } from 'react';
import DashboardCards from '../Components/Dashboard/DashboardCards';
import Charts from '../Components/Dashboard/Chart';
import RecentTransaction from '../Components/Dashboard/RecentTransaction';
import AddTransactionModal from '../Components//Dashboard/AddTransactionModal';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-20">

      <DashboardCards />

      <div className="w-11/12 max-w-5xl mx-auto flex flex-col gap-5">
        <Charts />

        <div className="flex justify-between">
          <h1 className="text-left font-semibold">Recent Transactions</h1>

          <button
            className="text-white bg-emerald-500 hover:bg-emerald-400 p-2 rounded-md cursor-pointer w-44"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Transaction
          </button>
        </div>

        <RecentTransaction transactions={transactions} />
      </div>

      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddTransaction}
      />
    </div>
  );
};

export default Dashboard;
