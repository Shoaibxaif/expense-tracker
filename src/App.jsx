import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Filters from './components/Filters';
import TransactionTable from './components/TransactionTable';
import AddTransactionButton from './components/AddTransactionButton';
import Navbar from './components/Navbar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto ">
        <Navbar />
        <Header />
        <Filters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TransactionTable searchTerm={searchTerm} />
        <AddTransactionButton />
      </div>
    </div>
  );
};

export default App;
