import axios from 'axios';
import React, {useState, useEffect, Component} from 'react';
import LineChart from '../components/LineChart';
// async function fetchData(){
//   let db = await axios.get('/fetch-averageAge'); 
//   return db;
// }
class Population extends Component{
  constructor(props){
    super(props);
  };
  componentDidMount() {
    fetch('/fetch-population')
    .then(resp => resp.json())
    .then(data => this.setState(data))
  }
  render() {
    return (
      <LineChart data={this.state}></LineChart>
    )
  }
}
export default Population;
