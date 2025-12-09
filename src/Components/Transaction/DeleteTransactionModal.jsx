

import React from 'react';

const DeleteTransactionModal = ({ isOpen, onClose, transaction, onDelete }) => {
    
    // Default title for confirmation
    const transactionTitle = transaction?.title || 'this item'; 

    if (!isOpen) return null;

    const handleDelete = () => {
        console.log(`Deleting transaction: ${transactionTitle}`);
        onDelete(transaction.id); // Assuming we pass the ID to delete
        onClose();
    };

    return (
        // Modal Overlay
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 z-50 flex justify-center items-center">
            
            {/* Modal Content */}
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm mx-4 p-8 text-center">
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Delete Transaction?</h3>
                
                <p className="text-sm text-gray-600 mb-6">
                    Are you sure you want to delete **"{transactionTitle}"**? This action cannot be undone.
                </p>
                
                {/* Footer Buttons */}
                <div className="flex justify-center gap-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteTransactionModal;