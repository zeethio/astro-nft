import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Chart, ChartWithId, chartData} from './components.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    console.log('componentDidMount() lifecycle');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <BrowserRouter>
        {/*<Chart {...chartData} />*/}
        
          <Routes>
            <Route path="/" element={<Chart {...chartData} />} />
            <Route path="view" element={<ChartWithId />} />
            <Route path="view/:id" element={<ChartWithId />} />
          </Routes>
          
        </BrowserRouter>
    
        </header>
      </div>
    );
  }
}

export default App;
