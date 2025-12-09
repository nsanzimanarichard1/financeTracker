import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const colorOptions = [
    { value: '#22c55e', label: 'Emerald' },
    { value: '#ef4444', label: 'Red' },
    { value: '#3b82f6', label: 'Blue' },
    { value: '#eab308', label: 'Yellow' },
    { value: '#8b5cf6', label: 'Violet' },
    { value: '#6b7280', label: 'Gray' },
];

const EditCategoryModal = ({ isOpen, onClose, category, onUpdate }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('Income');
    const [color, setColor] = useState('#22c55e');

    useEffect(() => {
        if (category) {
            setName(category.name);
            setType(category.type);
            setColor(category.color);
        }
    }, [category]);

    const handleSave = () => {
        if (!name.trim() || !category) return;

        onUpdate({
            ...category,
            name: name.trim(),
            type,
            color,
            prevType: category.type  // track original type
        });

        onClose();
    };

    if (!isOpen || !category) return null;

    const buttonColor = type === 'Income' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">

                {/* Header */}
                <div className="flex justify-between items-center mb-5">
                    <h3 className="text-xl font-semibold text-gray-800">Edit Category</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Category name"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                        <select
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        >
                            {colorOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <div className="flex items-center mt-2">
                            <span className="text-sm text-gray-500 mr-2">Preview:</span>
                            <span className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></span>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className={`px-4 py-2 text-white rounded-lg shadow transition ${buttonColor} disabled:opacity-50`}
                        disabled={!name.trim()}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditCategoryModal;
