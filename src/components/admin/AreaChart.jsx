import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { MdArrowDropDown } from 'react-icons/md';

const AreaChart = () => {
  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    colors: ['#8884d8'],
  };

  const series = [
    {
      name: 'Series 1',
      data: [
        30, 40, 25, 50, 49, 80, 30, 40, 35, 70, 50, 65, 70, 90, 85, 60, 65, 75,
        70, 75,
      ],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-gray-800 mr-3">Graph</h2>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-1.5"></div>
            <span className="text-sm font-medium text-emerald-400">
              On track
            </span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-400 font-medium">
          Monthly
          <MdArrowDropDown className="ml-1 text-lg" />
        </div>
      </div>
      <div className="flex justify-around mb-8">
        <div className="w-1/3">
          <p className="text-sm text-gray-500 mb-1">Successful</p>
          <p className="text-2xl font-bold text-gray-800 mb-1">43.50%</p>
          <span className="text-sm font-medium text-emerald-400">+2.45%</span>
        </div>
        <div className="w-1/3 text-right">
          <p className="text-sm text-gray-500 mb-1">Rejected</p>
          <p className="text-2xl font-bold text-gray-800 mb-1">22.50%</p>
          <span className="text-sm font-medium text-red-400">-4.75%</span>
        </div>
      </div>
      <div className="h-40">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height="100%"
        />
      </div>
    </div>
  );
};

export default AreaChart;
