// Chartjs
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
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function BookingTarget({ data }) {
  const bookingData = Array.from({ length: 12 }, (_, i) => data.Booking[i + 1]);
  const targetData = Array.from({ length: 12 }, (_, i) => data.Target[i + 1]);

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agt",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "Target",
        data: targetData,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "Booking",
        data: bookingData,
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
          color: "#fff",
          padding: 20,
        },
      },
      title: {
        display: true,
        text: `Perbandingan Data Target dan Data Target Booking - Cabang ${
          data.cabang
        } Perumahan ${data.perumahan || ""}`,
        color: "#fff",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        padding: 10,
        backgroundColor: "#1f2937",
        titleColor: "#fff",
        bodyColor: "#d1d5db",
      },
    },
    scales: {
      x: {
        ticks: { color: "#d1d5db" },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#d1d5db",
          stepSize: 10,
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl p-6 my-8 w-full max-w-5xl mx-auto h-[400px] sm:h-[450px] md:h-[500px]">
      <Line data={chartData} options={options} />
    </div>
  );
}
