// import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
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
const labels= ['1920', '1930', '1940', '1950', '1955', '1960', '1965', '1970',
'1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010'];

class LineChart extends Component{
  constructor(props){
    super(props);
  };
  render(){
    let passingData;
    let obj = [];
    let year= [];
    const dataHandler= async () =>{
      passingData = await this.props.data;
      year = Object.values(passingData.Age.age[0]);
      console.log(passingData);
      for (let i = 0; i< year.length; i++)
      {
        obj.push(parseFloat(year[i]));
      }
  }
  dataHandler();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Japan's Average age 1920-2010`,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: 'All Japan',
        data: obj,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ]
  };
    return <Line options={options} data={data}/>
  }
}
export default LineChart;