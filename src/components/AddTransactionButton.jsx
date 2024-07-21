import React, { useState } from 'react';

const AddTransactionButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formType, setFormType] = useState('expense'); // 'expense' or 'income'

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleFormTypeChange = (type) => {
    setFormType(type);
  };

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={toggleFormVisibility}
        className="bg-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl fixed bottom-4 right-4 shadow-lg"
      >
        +
      </button>

      {/* Form Container */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80 border border-white dark:border-white">
            <div className="mb-4">
              <button
                onClick={() => handleFormTypeChange('expense')}
                className={`w-full p-2 rounded ${formType === 'expense' ? 'bg-green-700 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
              >
                Expense
              </button>
              <button
                onClick={() => handleFormTypeChange('income')}
                className={`w-full p-2 rounded ${formType === 'income' ? 'bg-green-700 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
              >
                Income
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {formType.charAt(0).toUpperCase() + formType.slice(1)} Transaction
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Transaction Title"
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Amount</label>
                <input
                  type="number"
                  placeholder="Amount"
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded">
                  <option value="" disabled selected>Select Category</option>
                  {formType === 'expense' ? (
                    <>
                      <option>Food</option>
                      <option>Housing</option>
                      <option>Utilities</option>
                      <option>Other</option>
                    </>
                  ) : (
                    <>
                      <option>Salary</option>
                      <option>Freelance</option>
                      <option>Investment</option>
                      <option>Other</option>
                    </>
                  )}
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleFormVisibility}
                  className="bg-gray-500 text-white rounded px-4 py-2 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-700 text-white rounded px-4 py-2"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTransactionButton;
