import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieCharts = () => {
  const [expenseData, setExpenseData] = useState({ labels: [], datasets: [] });
  const [incomeData, setIncomeData] = useState({ labels: [], datasets: [] });
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    // Fetch expenses data
    fetch('https://expense-tracker-backend-eac1.onrender.com/api/expenses')
      .then(response => response.json())
      .then(data => {
        setExpenseData({
          labels: data.labels,
          datasets: [
            {
              label: 'Expenses',
              data: data.values,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              hoverOffset: 4,
            },
          ],
        });
        setTotalExpenses(data.values.reduce((a, b) => a + b, 0));
      });

    // Fetch income data
    fetch('https://expense-tracker-backend-eac1.onrender.com/api/income')
      .then(response => response.json())
      .then(data => {
        setIncomeData({
          labels: data.labels,
          datasets: [
            {
              label: 'Income',
              data: data.values,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              hoverOffset: 4,
            },
          ],
        });
        setTotalIncome(data.values.reduce((a, b) => a + b, 0));
      });
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <h3 className="text-center font-bold mb-4 text-gray-900 dark:text-gray-100">Expense Breakdown</h3>
          <Pie
            data={expenseData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ₹${tooltipItem.raw}`,
                  },
                },
              },
            }}
          />
          <div className="mt-4 text-gray-900 dark:text-gray-100">
            <p className="text-lg text-center font-semibold">Total Expenses: ₹{totalExpenses}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <h3 className="text-center font-bold mb-4 text-gray-900 dark:text-gray-100">Income Breakdown</h3>
          <Pie
            data={incomeData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ₹${tooltipItem.raw}`,
                  },
                },
              },
            }}
          />
          <div className="mt-4 text-gray-900 dark:text-gray-100">
            <p className="text-lg text-center font-semibold">Total Income: ₹{totalIncome}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
