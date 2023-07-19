import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import axios from 'axios';
import '../styles/chart.css';

const CoinChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',
          {
            params: {
              vs_currency: 'inr',
              days: 7, 
            },
          }
        );

        const coinData = response.data;

       
        const timestamps = coinData.prices.map((entry) => entry[0]);
        const prices = coinData.prices.map((entry) => entry[1]);

       
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: timestamps,
            datasets: [
              {
                label: 'Coin Price (INR)',
                data: prices,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: false, 
              },
            },
          },
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='chart'>

      <canvas ref={chartRef} width={400} height={300} />
    </div>
  );
};

export default CoinChart;
