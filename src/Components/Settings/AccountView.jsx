import React, { useState } from "react";
import DeleteAccountModal from "./DeleteAccountModal"; // 💡 Import the new modal

const AccountView = () => {
    // 💡 State to manage the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-red-900 mb-6">Danger Zone</h2>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h3 className="font-semibold text-red-900">Delete Account</h3>
                        <p className="text-sm text-red-700">This action cannot be undone</p>
                    </div>

                    <button 
                        // 💡 Open the modal on click
                        onClick={() => setIsModalOpen(true)}
                        className="bg-red-500 hover:bg-red-300 text-white px-6 py-2.5 rounded-lg shadow cursor-pointer"
                    >
                        Delete Account
                    </button>
                </div>
            </div>

            {/* 💡 Render the Delete Account Modal */}
            <DeleteAccountModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default AccountView;