import React, { useState } from 'react';
import { X, UploadCloud, ChevronDown } from 'lucide-react';

const CATEGORIES = ["Salary", "Food", "Transportation", "Entertainment", "Utilities", "Other"];

const AddTransactionModal = ({ isOpen, onClose, onSave }) => {
    const [transactionType, setTransactionType] = useState('Expense');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [description, setDescription] = useState('');

    if (!isOpen) return null;

    const handleAddTransaction = (e) => {
        e.preventDefault();
        if (!amount || !category || !date) return;

        // Create new transaction object
        const newTransaction = {
            title: description || category,
            category,
            date,
            amount,
            type: transactionType.toLowerCase()
        };

        onSave(newTransaction); // Pass new transaction to parent
        // Reset form
        setAmount('');
        setCategory('');
        setDate(new Date().toISOString().split('T')[0]);
        setDescription('');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 z-50 flex justify-center items-center">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-900">Add Transaction</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>
                
                <form onSubmit={handleAddTransaction} className="p-6 space-y-5">
                    {/* Expense / Income Toggle */}
                    <div className="flex bg-gray-100 p-1 rounded-lg w-fit">
                        {['Expense', 'Income'].map(type => (
                            <button
                                key={type}
                                type="button"
                                onClick={() => setTransactionType(type)}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                    transactionType === type 
                                    ? 'bg-white shadow text-gray-900' 
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Amount */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Amount *</label>
                        <input
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            required
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full pl-2 pr-2 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>

                    {/* Category */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                        <select
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                        >
                            <option value="" disabled>Select Category</option>
                            {CATEGORIES.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                        <input
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input
                            type="text"
                            placeholder="Optional description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>

                    {/* Buttons */}
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
                            className="px-4 py-2 bg-emerald-500 text-white font-semibold rounded-full shadow-md hover:bg-emerald-600 transition-colors"
                        >
                            Add Transaction
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTransactionModal;
