import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TotalCommissionChart = () => {
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
        label: "Last Month",
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: "rgba(255, 99, 71, 0.6)",
        borderColor: "rgba(255, 99, 71, 1)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "This Month",
        data: [8, 11, 6, 9, 7, 5, 4],
        backgroundColor: "rgba(128, 128, 128, 0.6)",
        borderColor: "rgba(128, 128, 128, 1)",
        borderWidth: 2,
        fill: false,
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
        text: "Total Commission Earned",
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
      x: {
        display: false, // Hide x-axis labels
      },
      y: {
        display: false, // Hide y-axis labels
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg h-80 w-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default TotalCommissionChart;
