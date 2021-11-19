import React from 'react';
//import styled from 'styled-components';
//import { css } from "styled-components";
import "./BirthLagna.css";
import DateTimePicker from 'react-datetime-picker';
//import LocationPicker from 'react-location-picker';

import {calPlanetPosition2} from './js_astro/src/astronomy.js'; 

/*
const defaultPosition = {
    lat: 27.9878,
    lng: 86.9250
  };
*/

class BirthLagna extends React.Component {

    constructor(props){
        super(props);
        this.state = {date: new Date(), gmtOffset: 0};
        this.handler = this.handler.bind(this)
    }
    handler(date) {
        console.log(date);
        this.setState({
            date: date
        })
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var longitude = 82;
        var latitude = 16;
        var planetPosition = new Array();
        //planetPosition1 = calPlanetPosition2( 1964, 6, 25, 20, 0, 16, 82 );        
        planetPosition = calPlanetPosition2( year, month, day, hours, minutes, longitude, latitude );        

        this.props.handler(date, planetPosition)

    }    
    componentDidMount() {
      console.log('componentDidMount() lifecycle');
      //const script = document.createElement("script");
      //script.src="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places";
      //script.async = true;
      //document.body.appendChild(script);      
    }
    render() {
      return (
        <div className="BirthLagna">
            <div className="BirthLagnaBody">
                <DateTimePicker className="CustomDatePicker" onChange={this.handler} value={this.state.date} />

                {/*<LocationPicker 
                    containerElement={ <div style={ {height: '100%'} } /> }
                    mapElement={ <div style={ {height: '400px'} } /> }
                    defaultPosition={defaultPosition}
                />*/}
            </div>
        </div>
      );
    }
  }
  
  export { BirthLagna };
  