import React from "react";
import { FiSearch } from "react-icons/fi";

const TransactionFilters = ({ filters, onFilterChange, onClear }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md mt-5 mb-20 ">
      <h3 className="font-semibold text-lg mb-3">Filters</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Search */}
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400 cursor-pointer" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={filters.search}
            onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
            className="w-full bg-gray-50 pl-10 p-2 rounded-md border border-gray-200 cursor-pointer"
          />
        </div>

        {/* Type Filter */}
        <select
          value={filters.type}
          onChange={(e) => onFilterChange({ ...filters, type: e.target.value })}
          className="p-2 rounded-md border border-gray-200 cursor-pointer"
        >
          <option value="All">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {/* Category Filter */}
        <select
          value={filters.category}
          onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
          className="p-2 rounded-md border border-gray-200 cursor-pointer"
        >
          <option value="All">All Categories</option>
          <option value="Salary">Salary</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transport">Transport</option>
          <option value="Other">Other</option>
        </select>

        {/* Clear Button */}
        <button
          onClick={onClear}
          className="bg-gray-100 hover:bg-emerald-500 hover:text-white cursor-pointer p-2 rounded-md text-sm"
        >
          Clear Filters
        </button>

      </div>
    </div>
  );
};

export default TransactionFilters;
