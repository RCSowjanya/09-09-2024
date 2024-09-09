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
import CustomLegend from "./CustomLegend"; // Adjust the import path as needed

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AverageDealChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Reality Sales",
        data: [8800, 7200, 9500, 11000, 12300, 14000, 16500], // Sample data for reality sales
        backgroundColor: "rgba(255, 99, 71, 0.6)", // Tomato color
        borderColor: "rgba(255, 99, 71, 1)",
      },
      {
        label: "Target Sales",
        data: [12212, 10800, 13000, 14500, 15800, 17500, 20000], // Sample data for target sales
        backgroundColor: "rgba(128, 128, 128, 0.6)", // Grey color
        borderColor: "rgba(128, 128, 128, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disable default legend
      },
      labels: {
        font: {
          size: 9, // Adjust the font size of the legend labels
        },
        color: "#000", // Set the color of the legend labels
      },

      title: {
        display: true,
        text: "Average Deal Size",
        font: {
          size: 20, // Adjust the font size of the title
          family: "Poppins",
          weight: 600,
        },
        color: "#000", // Set the color of the title
      },
      padding: {
        bottom: 20, // Adjust the bottom padding as needed
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
    <div className="px-3 py-5  bg-white shadow-lg rounded-lg h-80 w-full">
      <Bar data={data} options={options} />
      <CustomLegend data={data} />
    </div>
  );
};

export default AverageDealChart;
