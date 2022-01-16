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
  console.log('start');
  const passingData = this.props.data
  console.log(passingData);
  console.log(passingData.Age.age[0]);
  // console.log(labels.map(() => passingData.Age.age[0]));
  const data = {
    labels,
    datasets: [
      {
        label: 'All Japan',
        // data: labels.map(() => passingData.Age.age[0]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

    return <div>test</div>
  }
}
export default LineChart;