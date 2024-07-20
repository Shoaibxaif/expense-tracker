import React, { useState } from 'react';
import CustomDropdown from './Customdropdownn';

const Filters = () => {
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [expense, setExpense] = useState('');

  return (
    <div className="flex flex-col p-4 bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 sm:justify-between">
        <CustomDropdown
          options={['Type1', 'Type2', 'Type3', 'Type4']}
          selected={type}
          onSelect={setType}
          placeholder="Select Type"
          className="w-full sm:w-1/3"
        />
        <CustomDropdown
          options={['Category1', 'Category2', 'Category3', 'Category4']}
          selected={category}
          onSelect={setCategory}
          placeholder="Select Category"
          className="w-full sm:w-1/3"
        />
        <CustomDropdown
          options={['Expense1', 'Expense2', 'Expense3', 'Expense4']}
          selected={expense}
          onSelect={setExpense}
          placeholder="Select Expense"
          className="w-full sm:w-1/3"
        />
      </div>
    </div>
  );
};

export default Filters;
