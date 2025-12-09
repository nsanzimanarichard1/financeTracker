import React, { useState, useMemo } from "react"; 
import TransactionFilters from "../Components/Transaction/TransactionFilters";
import SummaryCard from "../Components/Transaction/SummaryCard";
import AddTransactionModal from "../Components/Transaction/AddTransactionModal"; 
import EditTransactionModal from "../Components/Transaction/EditTransactionModal";
import DeleteTransactionModal from "../Components/Transaction/DeleteTransactionModal";
import TransactionCards from "../Components/Transaction/TransactionCards";
import { FaDownload } from "react-icons/fa6";

const initialTransactions = [
    { id: 1, title: "car", category: "Other", date: "2025-12-08", amount: "400.00", type: "expense" },
    { id: 2, title: "Monthly Salary", category: "Salary", date: "2025-12-08", amount: "5000.00", type: "income" },
    { id: 3, title: "Coffee Shop", category: "Food", date: "2025-12-07", amount: "4.50", type: "expense" },
];

const Transactions = () => {
    const [transactions, setTransactions] = useState(initialTransactions);
    const [filters, setFilters] = useState({ search: "", type: "All", category: "All" });
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    // Add transaction at top
    const handleAddTransaction = (newTransaction) => {
        const nextId = transactions.length > 0 ? Math.max(...transactions.map(t => t.id)) + 1 : 1;
        setTransactions([ { ...newTransaction, id: nextId }, ...transactions ]);
        setIsAddModalOpen(false);
    };

    // Edit
    const handleOpenEditModal = (t) => { setSelectedTransaction(t); setIsEditModalOpen(true); };
    const handleUpdateTransaction = (updatedTransaction) => {
        setTransactions(transactions.map(t => t.id === updatedTransaction.id ? updatedTransaction : t));
        setIsEditModalOpen(false); setSelectedTransaction(null);
    };

    // Delete
    const handleOpenDeleteModal = (t) => { setSelectedTransaction(t); setIsDeleteModalOpen(true); };
    const handleDeleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
        setIsDeleteModalOpen(false); setSelectedTransaction(null);
    };

    // Clear filters
    const handleClearFilters = () => setFilters({ search: "", type: "All", category: "All" });

    // Filtered Transactions
    const filteredTransactions = useMemo(() => {
        return transactions.filter(t => {
            const matchesSearch = t.title.toLowerCase().includes(filters.search.toLowerCase());
            const matchesType = filters.type === "All" || t.type === filters.type.toLowerCase();
            const matchesCategory = filters.category === "All" || t.category === filters.category;
            return matchesSearch && matchesType && matchesCategory;
        });
    }, [transactions, filters]);

    // CSV Download
    const handleDownloadCSV = () => {
        const headers = ["ID", "Title", "Category", "Date", "Amount", "Type"];
        const rows = transactions.map(t => [t.id, t.title, t.category, t.date, t.amount, t.type]);
        let csvContent = "data:text/csv;charset=utf-8," 
            + [headers, ...rows].map(e => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "transactions.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="p-5">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Transactions</h1>
                    <p className="text-gray-500">View and manage all your financial transactions</p>
                </div>

                <div className="flex gap-4">
                    <div onClick={handleDownloadCSV} className="flex gap-1 rounded-md shadow text-black bg-white items-center p-2 cursor-pointer hover:bg-emerald-500 hover:text-white">
                        <FaDownload className=" hover:text-white"/>
                        <button className="text-sm cursor-pointer">Export CSV</button>
                    </div>

                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-emerald-500 text-white px-4 py-2 rounded-full shadow hover:bg-emerald-300 cursor-pointer"
                    >
                        + Add Transaction
                    </button>
                </div>
            </div>

            {/* SUMMARY CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                <SummaryCard title="Total Income" amount="$6,200.00" amountColor="text-green-600" badgeValue="+2" badgeColor="bg-green-100 text-green-600" />
                <SummaryCard title="Total Expense" amount="$154.81" amountColor="text-red-500" badgeValue="4" badgeColor="bg-red-100 text-red-500" />
                <SummaryCard title="Net Balance" amount="$6,045.19" amountColor="text-green-600" badgeValue="6 total" badgeColor="bg-green-100 text-green-600" />
            </div>

            {/* FILTERS */}
            <TransactionFilters filters={filters} onFilterChange={setFilters} onClear={handleClearFilters} />

            {/* TRANSACTIONS */}
            <div className="space-y-3 mt-4">
                {filteredTransactions.length > 0 ? (
                    filteredTransactions.map(t => (
                        <TransactionCards key={t.id} {...t} onEdit={handleOpenEditModal} onDelete={handleOpenDeleteModal} />
                    ))
                ) : (
                    <p className="text-gray-500">No transactions found.</p>
                )}
            </div>

            {/* MODALS */}
            <AddTransactionModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onSave={handleAddTransaction} />
            <EditTransactionModal isOpen={isEditModalOpen} onClose={() => { setIsEditModalOpen(false); setSelectedTransaction(null); }} transaction={selectedTransaction} onUpdate={handleUpdateTransaction} />
            <DeleteTransactionModal isOpen={isDeleteModalOpen} onClose={() => { setIsDeleteModalOpen(false); setSelectedTransaction(null); }} transaction={selectedTransaction} onDelete={handleDeleteTransaction} />
        </div>
    );
};

export default Transactions;
