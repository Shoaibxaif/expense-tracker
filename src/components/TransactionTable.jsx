// src/components/TransactionTable.jsx
import React from "react";

const transactions = [
  {
    date: "July 18, 2024",
    time: "9:00 AM",
    title: "Groceries",
    amount: 50,
    category: "Food",
  },
  {
    date: "July 18, 2024",
    time: "1:00 PM",
    title: "Salary",
    amount: 1000,
    category: "Income",
  },
  {
    date: "July 17, 2024",
    time: "2:00 PM",
    title: "Rent",
    amount: 500,
    category: "Housing",
  },
  {
    date: "July 17, 2024",
    time: "5:00 PM",
    title: "Freelance",
    amount: 200,
    category: "Income",
  },
];

const TransactionTable = () => {
  const handleEdit = (id) => {
    // Implement edit logic here
    console.log(`Edit transaction with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete logic here
    console.log(`Delete transaction with id: ${id}`);
  };

  const dates = Array.from(new Set(transactions.map((t) => t.date))); // Unique dates

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900">
      {dates.map((day) => (
        <div key={day} className="mb-6">
          <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
            {day}
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
            <div className="grid grid-cols-5 gap-4 p-4 border-b font-semibold text-gray-900 dark:text-gray-100">
              <div className="text-xs sm:text-sm md:text-base">Time</div>
              <div className="text-xs sm:text-sm md:text-base">Title</div>
              <div className="text-xs sm:text-sm md:text-base">Amount</div>
              <div className="text-xs sm:text-sm md:text-base">Category</div>
              <div className="text-xs sm:text-sm md:text-base">Actions</div> {/* Actions column */}
            </div>

            {transactions
              .filter((transaction) => transaction.date === day)
              .map((transaction, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-4 p-4 border-b border-gray-300 dark:border-gray-700"
                >
                  <div className="text-sm sm:text-base dark:text-gray-100">{transaction.time}</div>
                  <div className="text-sm sm:text-base dark:text-gray-100">{transaction.title}</div>
                  <div className="text-sm sm:text-base dark:text-gray-100">${transaction.amount}</div>
                  <div className="text-sm sm:text-base dark:text-gray-100">{transaction.category}</div>
                  <div className="text-sm sm:text-xs dark:text-gray-100">
                    <span
                      onClick={() => handleEdit(transaction.id)}
                      className="cursor-pointer text-blue-500 hover:underline"
                    >
                      Edit
                    </span>
                    <span
                      onClick={() => handleDelete(transaction.id)}
                      className="cursor-pointer text-red-500 hover:underline ml-1 pr-1"
                    >
                      Delete
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionTable;
