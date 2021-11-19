import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Chart, chartData} from './components.js'
class App extends React.Component {

  componentDidMount() {
    console.log('componentDidMount() lifecycle');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Chart {...chartData} />
        </header>
      </div>
    );
  }
}

export default App;
