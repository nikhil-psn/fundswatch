import React from 'react'
import {  Bar, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

// const [hello, sethello] = useState("Abhishek");
// sethello ()=>{

// }

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['I1', 'I2', 'I3', 'I4', 'I5', 'I6'],
          datasets: [
            {
              label: "AUM vs Investor",
              data: [1200.9, 1912, 334.2, 521.1, 1102, 768],
              backgroundColor: [
                'rgba(44, 130, 201, 1)',
                'rgba(0, 181, 204, 1)',
                'rgba(44, 130, 201, 1)',
                'rgba(0, 181, 204, 1)',
                'rgba(44, 130, 201, 1)',
                'rgba(0, 181, 204, 1)',
                
              ],
              // borderColor: [
              //   'rgba(255, 99, 132, 1)',
              //   'rgba(54, 162, 235, 1)',
              //   'rgba(255, 206, 86, 1)',
              //   'rgba(75, 192, 192, 1)',
              //   'rgba(153, 102, 255, 1)',
              //   'rgba(255, 159, 64, 1)',
              // ],
              // borderWidth: 1,
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
        // height={250}
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

export default BarChart
// npm install --save react-chartjs-2 chart.js