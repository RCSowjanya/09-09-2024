import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalleadsChart = () => {
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Online Leads",
        data: [0, 5000, 10000, 15000, 20000, 25000, 30000],
        backgroundColor: "tomato", // Blue
      },
      {
        label: "Offline Leads",
        data: [0, 4000, 9000, 12000, 18000, 22000, 28000],
        backgroundColor: "grey", // Green
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Total Leads Generated",
        font: {
          size: 20, // Adjust the font size of the title
          family: "Poppins",
          weight: 600,
        },
        color: "#000", // Set the color of the title
        padding: {
          bottom: 20, // Adjust the bottom padding as needed
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value >= 1000 ? `${value / 1000}k` : value;
          },
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg h-80 w-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default TotalleadsChart;
