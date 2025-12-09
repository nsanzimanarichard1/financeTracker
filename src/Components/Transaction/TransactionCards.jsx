import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

const TransactionCards = ({
  id,
  title,
  category,
  date,
  amount,
  type,
  onEdit,
  onDelete
}) => {
  
  const isIncome = type === "income";

  // Data object to pass to edit/delete handlers
  const transactionData = { id, title, category, date, amount, type };

  return (
    <div className="w-full bg-white shadow-sm rounded-xl px-5 py-4 flex justify-between items-center border border-gray-100">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* Color dot */}
        <div
          className={`w-3 h-3 rounded-full ${
            isIncome ? "bg-green-500" : "bg-red-500"
          }`}
        />

        {/* Text */}
        <div>
          <p className="font-semibold text-gray-800">{title}</p>

          <div className="flex items-center gap-3 mt-1">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                isIncome
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {category}
            </span>

            <span className="text-xs text-gray-500">{date}</span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* Amount */}
        <div className="flex flex-col items-end">
          <p
            className={`text-sm font-semibold ${
              isIncome ? "text-green-600" : "text-red-600"
            }`}
          >
            {isIncome ? "+" : "-"}${amount}
          </p>

          <span
            className={`text-xs px-2 py-1 rounded-full mt-1 ${
              isIncome
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {type}
          </span>
        </div>

        {/* Edit / Delete Icons */}
        <FiEdit
          onClick={() => onEdit && onEdit(transactionData)}
          className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
        />

        <FiTrash
          onClick={() => onDelete && onDelete(transactionData)}
          className="text-red-500 cursor-pointer hover:text-red-700 transition"
        />
      </div>
    </div>
  );
};

export default TransactionCards;
