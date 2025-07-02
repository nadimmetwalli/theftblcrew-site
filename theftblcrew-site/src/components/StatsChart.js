import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './StatsChart.css';
import StatCard from './StatCard';
import '@fortawesome/fontawesome-free/css/all.min.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const stats = [
  {
    iconClass: "fab fa-instagram",
    value: "77.6K",
    label: "Followers",
  },
  {
    iconClass: "fas fa-play",
    value: "330K",
    label: "Avg Daily Views",
  },
  {
    iconClass: "fas fa-calendar-alt",
    value: "10M",
    label: "Avg Monthly Views",
  },
  {
    iconClass: "fas fa-globe",
    value: ["1. UK", "2. USA", "3. India"],
    label: "Demographics",
  },
  {
    iconClass: "fas fa-user-friends",
    value: "18-34",
    label: "Top Age Range",
  },
];


const chartData = {
  labels: ["Feb 5", "Feb 6", "Feb 7", "Feb 8", "Feb 9", "Feb 10"],
  datasets: [
    {
      label: "Followers Gained",
      data: [30, 45, 60, 20, 70, 50],
      backgroundColor: "#8B5CF6",
      borderRadius: 5,
      barPercentage: 0.5,
    },
    {
      label: "Followers Lost",
      data: [-10, -20, -5, -15, -10, -25],
      backgroundColor: "#EC4899",
      borderRadius: 5,
      barPercentage: 0.5,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#ccc",
      },
    },
    y: {
      grid: {
        color: "rgba(255,255,255,0.1)",
      },
      ticks: {
        color: "#ccc",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "#ccc",
        font: {
          size: 14,
        },
      },
    },
  },
};

function StatsChart() {
  return (
    <div className="stats-section">
      <h2 className="stats-heading">Instagram Subscribers</h2>
      <div className="stats-chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="stats-cards-container">
  {stats.map((stat, idx) => (
    <StatCard
      key={idx}
      iconClass={stat.iconClass}
      value={stat.value}
      label={stat.label}
    />
  ))}
</div>
    </div>
  );
}

export default StatsChart;
