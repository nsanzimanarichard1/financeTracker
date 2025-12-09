import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const CategoryItem = ({ color, name, type, onEdit, onDelete }) => {

  const isIncome = type === "Income";
  const badgeClass = isIncome
    ? "bg-green-100 text-green-700"
    : "bg-red-100 text-red-700";

  return (
    <div className="flex justify-between items-center bg-gray-50 py-2 px-3 rounded-lg 
                    hover:bg-gray-100 transition shadow-sm">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">

        {/* Perfect Circle Color Dot */}
        <span
          className="w-4 h-4 rounded-full border border-gray-300"
          style={{ backgroundColor: color }}
        />

        <span className="font-medium text-gray-800">{name}</span>

        {/* TYPE BADGE */}
        <span className={`${badgeClass} text-xs px-2 py-1 rounded-full`}>
          {type}
        </span>
      </div>

      {/* ACTION ICONS */}
      <div className="flex items-center gap-4">

        {/* Edit Icon */}
        <FiEdit2
          onClick={onEdit}
          className="cursor-pointer text-gray-600 hover:text-blue-600 
                     transition-transform hover:scale-110"
        />

        {/* Delete Icon */}
        <FiTrash2
          onClick={onDelete}
          className="cursor-pointer text-gray-600 hover:text-red-600 
                     transition-transform hover:scale-110"
        />
      </div>
    </div>
  );
};

export default CategoryItem;
