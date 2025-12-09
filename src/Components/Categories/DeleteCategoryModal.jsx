import React from 'react';
import { X } from 'lucide-react';

const DeleteCategoryModal = ({ isOpen, onClose, category, onDelete }) => {
    
    const handleDelete = () => {
        if (category) {
            onDelete(category.id, category.type);
        }
        onClose();
    };

    if (!isOpen || !category) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6">
                
                {/* Modal Header/Content */}
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Delete Category?</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={20} />
                    </button>
                </div>

                <p className="text-gray-700 mb-6">
                    Are you sure you want to delete the **"{category.name}"** category? 
                    <br />
                    <span className='font-semibold text-red-600'>This action cannot be undone.</span>
                </p>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteCategoryModal;