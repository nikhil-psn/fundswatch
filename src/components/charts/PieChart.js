import React from 'react'
import {  Bar, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const PieChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['Axis', 'Others'],
          datasets: [
            {
              label: 'AUM vs All Investor (in Cr.)',
              data: [1200,3322],
              backgroundColor: [
                'rgba(44, 130, 201, 1)',
                'rgba(0, 181, 204, 1)',
                
              ],
            //   borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
                
            //   ],
            //   borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        backgroundColor = "red"
        // height={300}
        // width={100}
        options={{
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 14,
            },
          },
        }}
      />
    </div>
  )
}

export default PieChart
// npm install --save react-chartjs-2 chart.js