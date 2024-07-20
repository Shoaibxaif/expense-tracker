import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-4 border-b border-gray-700 dark:border-gray-300">
      <button className="text-sm sm:text-base md:text-xl bg-gray-800 dark:bg-gray-200 p-1 sm:p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-300">
        {"< Previous Month"}
      </button>
      <div className="text-lg sm:text-xl md:text-2xl">
        July 2024
      </div>
      <button className="text-sm sm:text-base md:text-xl bg-gray-800 dark:bg-gray-200 p-1 sm:p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-300">
        {"Next Month >"}
      </button>
    </div>
  );
};

export default Header;
