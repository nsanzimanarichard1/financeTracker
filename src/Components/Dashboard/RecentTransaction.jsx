import React from 'react';
import { FiTrendingUp } from "react-icons/fi";

const RecentTransaction = ({ transactions }) => {
  return (
    <div className="flex flex-col gap-5 w-full">

      {transactions.length === 0 && (
        <p className="text-gray-500 text-center">No recent transactions.</p>
      )}

      {transactions.map((t, index) => (
        <div
          key={index}
          className="w-full rounded-2xl shadow-md bg-white flex justify-between px-5 py-5"
        >
          <div className="flex gap-4">
            <div className="p-3 bg-green-50 rounded-full inline-flex">
              <FiTrendingUp className="text-emerald-500 text-2xl" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold">{t.title}</p>
              <p className="text-gray-500 text-sm">{t.category}</p>
            </div>
          </div>

          <div className="flex flex-col text-right">
            <p className={`font-semibold ${t.type === "income" ? "text-emerald-500" : "text-red-500"}`}>
              {t.type === "income" ? "+" : "-"}{t.amount}
            </p>
            <p className="text-gray-500 text-sm">{t.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTransaction;
