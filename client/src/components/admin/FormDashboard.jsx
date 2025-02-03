import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

// Registering required components for chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const FormDashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
    datasets: [
      {
        label: 'My Data',
        data: [65, 59, 80, 81, 56, 55], // Data points for the graph
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <Line data={data} options={options} />
    </div>
  )
}

export default FormDashboard
