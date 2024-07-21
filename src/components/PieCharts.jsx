import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieCharts = () => {
  const expenseData = {
    labels: ['Food', 'Housing', 'Transport', 'Others'],
    datasets: [
      {
        label: 'Expenses',
        data: [300, 500, 200, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverOffset: 4,
      },
    ],
  };

  const incomeData = {
    labels: ['Salary', 'Freelance', 'Investments', 'Others'],
    datasets: [
      {
        label: 'Income',
        data: [1500, 700, 400, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-8  bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <h3 className="text-center font-bold mb-4 text-gray-900 dark:text-gray-100">Expense Breakdown</h3>
          <Pie data={expenseData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <h3 className="text-center font-bold mb-4 text-gray-900 dark:text-gray-100">Income Breakdown</h3>
          <Pie data={incomeData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
