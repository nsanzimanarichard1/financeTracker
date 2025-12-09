import React from "react";

const SummaryCard = ({ title, amount, amountColor, badgeValue, badgeColor }) => {
  return (
    <div className="flex flex-col p-5 bg-white shadow-sm rounded-xl border border-gray-100 w-full">
      {/* Title */}
      <span className="text-gray-500 font-medium">{title}</span>

      {/* Amount & badge */}
      <div className="flex items-center gap-3 mt-2">
        <h2 className={`text-2xl font-semibold ${amountColor}`}>
          {amount}
        </h2>

        <span
          className={`text-sm px-3 py-1 rounded-full ${badgeColor}`}
        >
          {badgeValue}
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
