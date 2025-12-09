import React from "react";
import { ChevronDown } from "lucide-react";

const SelectField = ({ label, value, options }) => (
  <div className="flex flex-col space-y-1.5 mb-6">
    <label className="text-sm font-medium text-gray-700">{label}</label>

    <div className="relative">
      <select
        defaultValue={value}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg
                   appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      <ChevronDown
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />
    </div>
  </div>
);

export default SelectField;
