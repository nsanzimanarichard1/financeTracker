import React from "react";

const InputField = ({ label, value, placeholder, type = "text" }) => (
  <div className="flex flex-col space-y-1.5 mb-6">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
                 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 transition-all"
    />
  </div>
);

export default InputField;
