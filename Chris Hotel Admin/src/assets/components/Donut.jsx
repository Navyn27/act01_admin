// import { useEffect } from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  var options = {
    series: [74, 26],
    chart: {
      width: 380,
      type: "donut",
    },
    colors: ["#d6c983", "#1d4014"],
    labels: ["Pending Orders", "Unpaid Orders"],
    dataLabels: {
      enabled: true,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  };

  return (
    <Chart options={options} series={options.series} type="donut" width="400" />
  );
};

export default DonutChart;
