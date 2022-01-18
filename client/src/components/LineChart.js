// import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// ChartJS.register( ArcElement, Tooltip, Legend);
class LineChart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let passingData = this.props.data;
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: `Japan's Average age 1920-2010`,
        },
      },
    };
    let years = Object.keys(passingData.ageData[0].data);
    // console.log(years);
    let averageAge = Object.values(passingData.ageData[0].data).map(
      (age) => +age
    );
    // console.log(averageAge);
    let arr = ["this", "that"];
    const data = {
      arr,
      datasets: [
        {
          label: "All Japan",
          data: [1, 2],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
    return <Line options={options} data={data} />;
  }
}
export default LineChart;
