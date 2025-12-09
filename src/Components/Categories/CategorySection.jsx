import React from "react";
import CategoryItem from "./CategoryItem";
import { FiTag } from "react-icons/fi";

const CategorySection = ({ title, count, titleColor, items }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1">
      
      {/* Section header */}
      <div className="flex items-center gap-2 mb-5">
        <FiTag className={`${titleColor} text-lg`} />
        <h2 className={`font-semibold text-lg ${titleColor}`}>
          {title} ({count})
        </h2>
      </div>

      {/* Category rows */}
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <CategoryItem
            key={item.id}       // use unique id as key
            name={item.name}
            type={item.type}
            color={item.color}
            onEdit={item.onEdit}     // use parent logic
            onDelete={item.onDelete} // use parent logic
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
