import React, { useState } from 'react';
import CategorySection from '../Components/Categories/CategorySection';
import AddCategoryModal from '../Components/Categories/AddCategoryModal';
import EditCategoryModal from '../Components/Categories/EditCategoryModal';
import DeleteCategoryModal from '../Components/Categories/DeleteCategoryModal';

const initialIncomeCategories = [
    { id: 1, name: "Salary", type: "Income", color: "#22c55e" },
    { id: 2, name: "Freelance", type: "Income", color: "#3b82f6" }
];

const initialExpenseCategories = [
    { id: 3, name: "Food", type: "Expense", color: "#ef4444" },
    { id: 4, name: "Entertainment", type: "Expense", color: "#eab308" },
    { id: 5, name: "Transportation", type: "Expense", color: "#dc2626" },
    { id: 6, name: "Utilities", type: "Expense", color: "#6b7280" }
];

const Categories = () => {
    const [incomeCategories, setIncomeCategories] = useState(initialIncomeCategories);
    const [expenseCategories, setExpenseCategories] = useState(initialExpenseCategories);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(null);

    // CREATE
    const handleAddCategory = (newCategory) => {
        const nextId = incomeCategories.length + expenseCategories.length + 1;

        if (newCategory.type === 'Income') {
            setIncomeCategories(prev => [...prev, { ...newCategory, id: nextId }]);
        } else {
            setExpenseCategories(prev => [...prev, { ...newCategory, id: nextId }]);
        }
        setIsAddModalOpen(false);
    };

    // OPEN EDIT MODAL
    const handleOpenEditModal = (category) => {
        setSelectedCategory(category);
        setIsEditModalOpen(true);
    };

    // UPDATE
    const handleUpdateCategory = (updatedCategory) => {
        const { id, name, color, type: newType, prevType } = updatedCategory;

        // Remove from previous type array
        if (prevType === 'Income') {
            setIncomeCategories(prev => prev.filter(c => c.id !== id));
        } else {
            setExpenseCategories(prev => prev.filter(c => c.id !== id));
        }

        // Add to new type array
        if (newType === 'Income') {
            setIncomeCategories(prev => [...prev, { id, name, type: newType, color }]);
        } else {
            setExpenseCategories(prev => [...prev, { id, name, type: newType, color }]);
        }

        setSelectedCategory(null);
        setIsEditModalOpen(false);
    };

    // OPEN DELETE MODAL
    const handleOpenDeleteModal = (category) => {
        setSelectedCategory(category);
        setIsDeleteModalOpen(true);
    };

    // DELETE
    const handleDeleteCategory = (id, type) => {
        if (type === 'Income') {
            setIncomeCategories(prev => prev.filter(c => c.id !== id));
        } else {
            setExpenseCategories(prev => prev.filter(c => c.id !== id));
        }
        setSelectedCategory(null);
        setIsDeleteModalOpen(false);
    };

    // MODAL CLOSERS
    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setSelectedCategory(null);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setSelectedCategory(null);
    };

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold">Categories</h1>
                    <p className="text-gray-500">Manage your transaction categories</p>
                </div>

                <button 
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-emerald-500 text-white px-4 py-2 rounded-md shadow hover:bg-emerald-600 transition"
                >
                    + Add Category
                </button>
            </div>

            {/* Income & Expense Columns */}
            <div className="flex flex-col lg:flex-row gap-8">
                <CategorySection
                    title="Income Categories"
                    count={incomeCategories.length}
                    titleColor="text-green-600"
                    items={incomeCategories.map(c => ({
                        ...c,
                        onEdit: () => handleOpenEditModal(c),
                        onDelete: () => handleOpenDeleteModal(c),
                    }))}
                />
                <CategorySection
                    title="Expense Categories"
                    count={expenseCategories.length}
                    titleColor="text-red-500"
                    items={expenseCategories.map(c => ({
                        ...c,
                        onEdit: () => handleOpenEditModal(c),
                        onDelete: () => handleOpenDeleteModal(c),
                    }))}
                />
            </div>

            {/* Modals */}
            <AddCategoryModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSave={handleAddCategory}
            />

            <EditCategoryModal
                isOpen={isEditModalOpen}
                onClose={closeEditModal}
                category={selectedCategory}
                onUpdate={handleUpdateCategory}
            />

            <DeleteCategoryModal
                isOpen={isDeleteModalOpen}
                onClose={closeDeleteModal}
                category={selectedCategory}
                onDelete={handleDeleteCategory}
            />
        </div>
    );
};

export default Categories;
