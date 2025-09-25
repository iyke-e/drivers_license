import React from 'react';
import ReactApexChart from 'react-apexcharts';

const WeeklyApplicantChart = () => {
  const options = {
    chart: {
      type: 'bar',
      stacked: false,
      toolbar: {
        show: false,
      },
      fontFamily: 'Arial, sans-serif',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        endingShape: 'rounded',
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
      tickAmount: 5,
      min: 0,
      max: 500,
    },
    grid: {
      borderColor: '#f1f1f1',
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetY: -10,
      markers: {
        width: 8,
        height: 8,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
      },
    },
    colors: ['#4338ca', '#10b981', '#f472b6'],
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  const series = [
    {
      name: 'New',
      data: [470, 340, 315, 470, 150, 380, 380],
    },
    {
      name: 'Renewal',
      data: [240, 140, 270, 370, 250, 230, 330],
    },
    {
      name: 'Reissue',
      data: [130, 210, 130, 190, 120, 130, 220],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Weekly Applicant
      </h2>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default WeeklyApplicantChart;
