// src/App.jsx
import React from 'react';
import './index.css';
import Header from './components/Header';
import Filters from './components/Filters';
import TransactionTable from './components/TransactionTable';
import PieCharts from './components/PieCharts';
import AddTransactionButton from './components/AddTransactionButton';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto ">
        <Navbar />
        <Header />
        <Filters />
        <TransactionTable />
        <PieCharts />
        <AddTransactionButton />
      </div>
    </div>
  );
};

export default App;
