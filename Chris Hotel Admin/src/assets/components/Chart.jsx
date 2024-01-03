// import { useEffect } from "react";
import Chart from "react-apexcharts";

const MyChart = () => {
  const options = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100, 120],
      },
    ],
    colors: ["#1d4014"],
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
        "2018-09-19T07:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <Chart options={options} series={options.series} type="area" width="680" />
  );
};

export default MyChart;
