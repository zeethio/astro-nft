import React from 'react';
import styled from 'styled-components';
//import { css } from "styled-components";
import "./BirthLagna.css";
import DateTimePicker from 'react-datetime-picker';
import tzlookup from 'tz-lookup'
import moment from 'moment-timezone'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import {calPlanetPosition2} from './js_astro/src/astronomy.js'; 
import {GoogleMapWrapper} from './maps_wrapper/GoogleMapWrapper';

const mapStyles = {
    width: '100%',
    height: '100%'
};

class BirthLagna extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date(), 
            longitude:0, 
            latitude: 0,
            useGoogleMap: false, 
        };
        this.handlerDateTime = this.handlerDateTime.bind(this);
        this.handlerLocatoin = this.handlerLocatoin.bind(this);
        this.handlerMapLocatoin = this.handlerMapLocatoin.bind(this);
        this.togleMap = this.togleMap.bind(this);
        this.updatePlanets = this.updatePlanets.bind(this);
        this.getLatitude = this.getLatitude.bind(this);
        this.getLongitude = this.getLongitude.bind(this);
        this.validateInputs = this.validateInputs.bind(this);
    }

    togleMap(){
        this.setState({ useGoogleMap: !this.state.useGoogleMap})
    }
    
    validateInputs(date, _latitude, _longitude) {
        let latitude = parseFloat(_latitude);
        let longitude = parseFloat(_longitude);
        if(date == null) {
            console.log("Invalid Date:" + date)
            return false; 
        }

        if(!(latitude >= -90 && latitude <= 90)) {
            console.log("Invalid Latitude:" + latitude);
            return false;
        }
        if (!(longitude >= -180 && longitude <= 180)) {
            console.log("Invalid longitude:" + longitude)
            return false;
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

    getJstTime(date, latitude, longitude) {
        let timeObject = { year: date.getFullYear(), month: date.getMonth(), date: date.getDate(), 
            hours: date.getHours(), minute: date.getMinutes(),
            second: 0, millisecond: 0
        }
        let timezone = moment.tz.zone(tzlookup(latitude, longitude));
        let localTime = moment.tz(timeObject, timezone.name);
        let jstTime = localTime.clone().tz("Asia/Seoul");

        let utcTime = moment.tz(timeObject, timezone.name).utc(); 
        console.log("timezone: " + JSON.stringify(timezone));
        console.log("localTime: " + JSON.stringify(localTime));
        console.log("utcTime: " + JSON.stringify(utcTime));
        console.log("jstTime: " + JSON.stringify(jstTime));
        console.log("jstTime: day:" + jstTime.year(), jstTime.month(), jstTime.date(), jstTime.hour(), jstTime.minute());

        return [jstTime.year(), jstTime.month(), jstTime.date(), jstTime.hour(), jstTime.minute()]
    }

    updatePlanets(localDate, _latitude, _longitude) {
        let year, month, day, hours, minutes;
        let latitude = parseFloat(_latitude);
        let longitude = parseFloat(_longitude);
        [year, month, day, hours, minutes] = this.getJstTime(localDate, latitude, longitude); 

        console.log("year:" + year + " month:" + month + " day:" + day + " hour:" + hours + " minutes:" + minutes + " lat:"+  latitude + " long:" + longitude);
        var planetPosition = new Array();
        //planetPosition1 = calPlanetPosition2( 1964, 6, 25, 20, 0, 16, 82 );    
        planetPosition = calPlanetPosition2( year, month + 1, day, hours, minutes, longitude, latitude );        

        this.props.handler(localDate, planetPosition);
    }
    
    handlerDateTime(date) {
        console.log(date);
        if ( this.validateInputs(date, this.state.latitude, this.state.longitude)) {
            this.setState({
                date: date
            })
            this.updatePlanets(date, this.state.latitude, this.state.longitude );
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
        if ( this.validateInputs(this.state.date, latitude, longitude)) {
            this.updatePlanets( this.state.date,  latitude, longitude );
        }
    }        

    handlerMapLocatoin(longitude, latitude){
        console.log("longitude: " + longitude + " latitude:" + latitude );
        this.setState({longitude: longitude,  latitude: latitude});
        if ( this.validateInputs(this.state.date, latitude, longitude)) {
            this.updatePlanets( this.state.date, latitude, longitude );
        }        
    }
    componentDidMount() {
        console.log('componentDidMount() lifecycle');
        const success = position => {
            this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
            this.updatePlanets(this.state.date,  position.coords.latitude, position.coords.longitude);
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
                     <BirthTime>
                         <div style={{ width: "100%", fontSize: "20px" }}>Birth Time</div>
                        <DateTimePicker className="CustomDatePicker" disableCalendar="true" disableClock="true" onChange={this.handlerDateTime} value={this.state.date} />
                    </BirthTime>         
                    <div>
                        <div>
                            <BirthPlace>
                                <div style={{ width: "100%", fontSize: "20px" }}>Birth Place</div>
                                <LatLongInput>
                                    <LatLongLabel>Latitude</LatLongLabel>
                                    <Input value={this.state.latitude} name="latitude" placeholder="Latitude" onChange={this.handlerLocatoin}/>                                
                                </LatLongInput>
                                <LatLongInput>
                                    <LatLongLabel>Longitude</LatLongLabel>
                                    <Input value={this.state.longitude} name="longitude" placeholder="Longitude" onChange={this.handlerLocatoin} />                    
                                </LatLongInput>
                                <ButtonGMap onClick= {this.togleMap}>Get with Google Map{ useMap ? <BsChevronUp>:</BsChevronUp> : <BsChevronDown />}</ButtonGMap>
                            </BirthPlace>
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
  

const ButtonGMap = styled.button`
  color: palevioletred;
  font-size: 16px;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const BirthPlace = styled.div`
  color: palevioletred;
  font-size: 24px;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;




const LatLongInput = styled.div`
  color: palevioletred;
  font-size: 16px;
  margin: 0.5em;
  box-sizing: border-box;
  //padding: 0.25em 0.5em;
  //border: 2px solid palevioletred;
  //border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LatLongLabel = styled.div`
  position: relative;
  margin: 0.5em;
  align-items: center;
  color: palevioletred;
  font-size: 16px;
  box-sizing: border-box;
  flex-grow: 0;
  flex-shrink: 0;  
  flex-basis:80px
`;

const Input = styled.input`
position: relative; 
font-size: 20px;
padding: 0.5em;
//margin: 0.5em;
color: ${props => props.inputColor || "palevioletred"};
background: #282C34;
border: none;
border-radius: 3px;
box-sizing: border-box;
flex-grow: 0;
flex-shrink: 0;
max-width: 160px;
`;


const BirthTime = styled.div`
  color: palevioletred;
  font-size: 24px;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
  export { BirthLagna };
  