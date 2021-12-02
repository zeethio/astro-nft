import React from 'react';
import styled from 'styled-components';
//import { css } from "styled-components";
import "./BirthLagna.css";
import DateTimePicker from 'react-datetime-picker';

import {calPlanetPosition2} from './js_astro/src/astronomy.js'; 
import {GoogleMapWrapper} from './maps_wrapper/GoogleMapWrapper';
import TimezoneSelect from "react-timezone-select";
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz'

const mapStyles = {
    width: '100%',
    height: '100%'
};

class BirthLagna extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date(), 
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            longitude:0, 
            latitude: 0,
            useGoogleMap: false, 
        };
        this.handlerDateTime = this.handlerDateTime.bind(this);
        this.handlerLocatoin = this.handlerLocatoin.bind(this);
        this.handlerMapLocatoin = this.handlerMapLocatoin.bind(this);
        this.togleMap = this.togleMap.bind(this);
        this.setSelectedTimezone = this.setSelectedTimezone.bind(this);
        this.updatePlanets = this.updatePlanets.bind(this);
        this.getLatitude = this.getLatitude.bind(this);
        this.getLongitude = this.getLongitude.bind(this);
        this.validateInputs = this.validateInputs.bind(this);
    }

    togleMap(){
        this.setState({ useGoogleMap: !this.state.useGoogleMap})
    }

    tzOffsetMinutes(timeZone, date) {
        var offset = 0;
        if (timeZone && timeZone.offset) {
            offset =  timeZone.offset * 60;
        } else {
            // ate.getTimezoneOffset() returns negative values in munutes for positive GMT offset and vice versa
            // GMT-8 returns 480
            offset = -date.getTimezoneOffset();
        }
        return offset;
    }
    
    validateInputs(date, timeZone, latitude, longitude) {

        if(date == null) {
            console.log("Invalid Date:" + date)
            return false; 
        }

        if(latitude === null) {
            console.log("Invalid Latitude:" + latitude);
            //Fallthrough
        }
        if(longitude === null) {
            console.log("Invalid longitude:" + longitude)
            //Fallthrough
        }
        return true;
    }
    getLatitude(latitude) {
        var value = 0.0;
        try {
            value = parseFloat(latitude);
        } catch(error) {
            console.log(error);
        }
        return value;
    }
    getLongitude(longitude) {
        var value = 0.0;
        try {
            value = parseFloat(longitude);
        } catch(error) {
            console.log(error);
        }
        return value;
    }    
    adjustTimeZone(date, timeZone) {
        // pickerTime localTime - Timezone offset equalent to time calculated from picker display
        // equivalent to UTC time
        var pickerTime = date.getTime() - date.getTimezoneOffset()*60*1000;
        //var zoneTime = pickerTime - timeZone.offset*60*60*1000;
        var jstTime = pickerTime  - this.tzOffsetMinutes(timeZone, date) *60*1000 ;

        var jstZonedDate = utcToZonedTime(jstTime, "Asia/Seoul")
        console.log("jstTime:" + jstTime + " jstZonedDate:" + jstZonedDate)
        return jstZonedDate;
    }

    updatePlanets(localDate, timeZone, latitude, longitude) {
        var date = this.adjustTimeZone(localDate, timeZone)
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var latitude = this.getLatitude(latitude);
        var longitude = this.getLongitude(longitude);
        console.log(localDate);
        console.log(date);
        console.log("year:" + year + " month:" + month + " day:" + day + " hour:" + hours + " minutes:" + minutes + " lat:"+  latitude + " long:" + longitude);
        var planetPosition = new Array();
        //planetPosition1 = calPlanetPosition2( 1964, 6, 25, 20, 0, 16, 82 );    
        planetPosition = calPlanetPosition2( year, month, day, hours, minutes, longitude, latitude );        

        this.props.handler(date, planetPosition);
    }
    
    handlerDateTime(date) {
        console.log(date);
        if ( this.validateInputs(date, this.state.timeZone, this.state.latitude, this.state.longitude)) {
            this.setState({
                date: date
            })
            this.updatePlanets(date, this.state.timeZone, this.state.latitude, this.state.longitude );
        }
    } 

    handlerLocatoin(event){
        console.log(event.target.name + " : " + event.target.value);
        var latitude = this.state.latitude;
        var longitude = this.state.longitude;

        if(event.target.name == "longitude") {
            longitude = event.target.value;
            this.setState({longitude: longitude })
        } if(event.target.name == "latitude") {
            latitude = event.target.value;
            this.setState({latitude: latitude })
        }
        if ( this.validateInputs(this.state.date, this.state.timeZone, latitude, longitude)) {
            this.updatePlanets( this.state.date, this.state.timeZone, latitude, longitude );
        }
    }        

    handlerMapLocatoin(longitude, latitude, timeZone){
        console.log("longitude: " + longitude + " latitude:" + latitude );
        this.setState({longitude: longitude,  latitude: latitude});
        if ( this.validateInputs(this.state.date, this.state.timeZone, latitude, longitude)) {
            this.updatePlanets( this.state.date, this.state.timeZone, latitude, longitude );
        }        
    }

    setSelectedTimezone(timeZone) {
        console.log(timeZone);
        this.setState({timeZone: timeZone});
        if ( this.validateInputs(this.state.date, timeZone, this.state.latitude, this.state.longitude)) {
            this.updatePlanets(this.state.date, timeZone, this.state.latitude, this.state.longitude)
        }        
    }

    componentDidMount() {
        console.log('componentDidMount() lifecycle');
        const success = position => {
            this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
            this.updatePlanets(this.state.date, this.state.timeZone, position.coords.latitude, position.coords.longitude);
         }
        const error = ()  => {
            this.setState({lat: 0, long: 0});
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }
    render() {
        const useMap = this.state.useGoogleMap;
        return (
            <div className="BirthLagna">
                <div className="BirthLagnaBody">
                    <DateTimePicker className="CustomDatePicker" onChange={this.handlerDateTime} value={this.state.date} />
                    <div className="TimezoneWrapper">
                        <TimezoneSelect value={this.state.timeZone} placeholder="Select Time Zone" onChange={this.setSelectedTimezone} />
                    </div>            
                    <div>
                        <div>
                        <Input value={this.state.latitude} name="latitude" placeholder="Latitude" onChange={this.handlerLocatoin}/>                                
                        <Input value={this.state.longitude} name="longitude" placeholder="Longitude" onChange={this.handlerLocatoin} />                    
                        <Button onClick= {this.togleMap}>Google Map</Button>
                        </div>
                    <div>
                        {useMap && 
                            <div className="GoogleMapContainer">
                                <GoogleMapWrapper onChangeLocation = {this.handlerMapLocatoin}/>
                            </div>
                        }
                    </div>  
                    </div>
                </div>
            </div>
      );
    }
  }
  
  const Input = styled.input`
  font-size: 20px;
  padding: 0.5em;
  margin: 0.5em;
  width: 20%;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 24px;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


  export { BirthLagna };
  