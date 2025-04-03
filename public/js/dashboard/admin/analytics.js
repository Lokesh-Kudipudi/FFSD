// Revenue Chart

const revenueCtx = document.getElementById("revenue-chart").getContext("2d");
const revenueChart = new Chart(revenueCtx, {
  type: "line",
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Revenue",
        data: [29450, 34210, 31760, 32072],
        borderColor: "#3498db",
        backgroundColor: "rgba(52, 152, 219, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Last Month",
        data: [24850, 29210, 26760, 27072],
        borderColor: "rgba(189, 195, 199, 0.8)",
        backgroundColor: "rgba(189, 195, 199, 0.1)",
        tension: 0.4,
        fill: true,
        borderDash: [5, 5],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          callback: function (value) {
            return "$" + value.toLocaleString();
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});

const categoryCtx = document.getElementById("category-chart").getContext("2d");
const categoryChart = new Chart(categoryCtx, {
  type: "doughnut",
  data: {
    labels: [
      "Beach Vacations",
      "Adventure Tours",
      "Cultural Experiences",
      "Cruises",
      "Urban Gateways",
    ],
    datasets: [
      {
        data: [37, 25, 18, 12, 8],
        backgroundColor: [
          "#3498db",
          "#2ecc71",
          "#f39c12",
          "#e74c3c",
          "#9b59b6",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    cutout: "70%",
  },
});
