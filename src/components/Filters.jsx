import React, { useState } from 'react';
import CustomDropdown from './Customdropdownn';

const Filters = () => {
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [expense, setExpense] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col p-4 bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 sm:justify-between">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Title"
          className="w-full sm:w-1/4 p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
        />
        <CustomDropdown
          options={['Type1', 'Type2', 'Type3', 'Type4']}
          selected={type}
          onSelect={setType}
          placeholder="Select Type"
          className="w-full sm:w-1/4"
        />
        <CustomDropdown
          options={['Category1', 'Category2', 'Category3', 'Category4']}
          selected={category}
          onSelect={setCategory}
          placeholder="Select Category"
          className="w-full sm:w-1/4"
        />
        <CustomDropdown
          options={['Expense1', 'Expense2', 'Expense3', 'Expense4']}
          selected={expense}
          onSelect={setExpense}
          placeholder="Select Expense"
          className="w-full sm:w-1/4"
        />
      </div>
    </div>
  );
};

export default Filters;
