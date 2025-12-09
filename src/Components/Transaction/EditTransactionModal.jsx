
import React from 'react';
import { X } from 'lucide-react';

// This is a simplified modal. In a real app, you would use state for the form fields.
const CATEGORIES = ["Other", "Salary", "Food", "Transportation", "Entertainment", "Utilities"];

const EditTransactionModal = ({ isOpen, onClose, transaction, onUpdate }) => {
    
    // Use transaction prop to pre-fill the form, or default values if none is provided
    const initialData = transaction || {
        title: "",
        amount: "",
        category: CATEGORIES[0],
        type: "expense",
    };

    if (!isOpen) return null;

    const handleUpdate = (e) => {
        e.preventDefault();
        // 💡 In a real app, collect form data (title, amount, etc.) here.
        const updatedData = {
            id: initialData.id, // Assuming the transaction has an ID
            title: e.target.description.value,
            amount: e.target.amount.value,
            category: e.target.category.value,
            type: e.target.type.value,
            // ... other fields like date
        };
        console.log("Updating transaction:", updatedData);
        onUpdate(updatedData); // Call the update handler passed from Transactions page
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 z-50 flex justify-center items-center">
            
            {/* Modal Content */}
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm mx-4">
                
                {/* Header */}
                <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-900">Edit Transaction</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>
                
                <form onSubmit={handleUpdate} className="p-5 space-y-4">
                    
                    {/* Description Field (matching title from image_46dff5.png) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input
                            type="text"
                            name="description"
                            defaultValue={initialData.title}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Amount Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            step="0.01"
                            defaultValue={initialData.amount.replace(/,/, '')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                            name="category"
                            defaultValue={initialData.category}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-white appearance-none"
                        >
                            {CATEGORIES.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    {/* Type Dropdown (Expense/Income) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <select
                            name="type"
                            defaultValue={initialData.type}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-white appearance-none"
                        >
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-colors"
                        >
                            Update Transaction
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTransactionModal;