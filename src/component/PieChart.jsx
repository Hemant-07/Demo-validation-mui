import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && data) {
      const options = {
        chart: {
          width: 340,
          type: 'pie',
        
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D'],
        series: data,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
              
            },
          
            legend: {
              position: 'bottom',
            },
          },
        }],
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return <div ref={chartRef} />;
};

export default PieChart;