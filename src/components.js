import React from 'react';
import styled from 'styled-components';
import { css, createGlobalStyle } from "styled-components";
import './components.css';
import {getHouseDetails, HousesIntro} from "./HouseDetails.js"
import {BirthLagna} from  "./BirthLagna.js"
import parse from "html-react-parser";
import {loadAstroNlg, loadRosaeNlg, renderHouseDetail} from "./AstroNlg"
import { useParams } from "react-router-dom";
/* global BigInt */
const HOUSE_POS = "400px"

const HousesNum = {
  "house1": 0, "house2": 1, "house3": 2, "house4": 3, "house5": 4, "house6": 5,
  "house7": 6, "house8": 7, "house9": 8, "house10": 9, "house11": 10, "house12": 11,
}

const PlanetsEnum = {
  "sun": 0, "moon": 1, "mercury": 2, "venus": 3, "mars": 4, "jupiter": 5, "saturn": 6, "rahu": 7, "ketu": 8,
}

const SIZES = {
  chart_width: "980px",
  chart_height: "980px",
  space_width: "700px",
  space_height: "700px",
  space_x: "140px",
  space_y: "140px",
  zodiac_width: "582px",
  zodiac_height: "582px",
  zodiac_x: "59px",
  zodiac_y: "59px",
  planet_width: "80px",
  planet_height: "50px",
  planet_x: "310px",
  planet_y: "325px",
  house_width: "180px",
  house_height: "90px",
  house_x: "400px",
  house_y: "445px",
  sun_offset: 8,
  moon_offset: 16,
  mercury_offset: 24,
  venus_offset: 32,
  mars_offset: 40,
  jupiter_offset: 40,
  saturn_offset: 40,
  rahu_offset: 40,    
};

function ChartWithId() {
  let  params =  useParams();
  if("id" in params) {
    let chartData = getChartData(params.id)
    return (<Chart {...chartData} />);
  } else {
    return (<Chart {...chartData} />);
  }
}

class Chart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(), 
      houseDetail: HousesIntro,
      sunProps: props.sunProps,
      mercuryProps: props.mercuryProps,
      venusProps: props.venusProps,
      rahuProps: props.rahuProps,
      marsProps: props.marsProps,
      jupiterProps: props.jupiterProps,
      moonProps: props.moonProps,
      ketuProps: props.ketuProps,
      saturnProps: props.saturnProps,
      ascProps: props.ascProps,
      housesProps: props.housesProps,  
      planetData: [],
      astroNlgLoaded: false, 
      rosaeNlgLoaded: false,
      enableBirthLagna: props.enableBirthLagna,           
    };
    this.handler = this.handler.bind(this);
    this.handlerBirthLagna = this.handlerBirthLagna.bind(this);
  }

  angleToSign(angle) {
    var signNum = Math.round((angle%360)/30);
    return signNum;
  }

  getPlanetPos(planetsData) {
    var planetsPos = {}
    if(this.state.planetData.length >= 9) {
      for (var planet in  PlanetsEnum) {
        var angle = planetsData[PlanetsEnum[planet] + 1];
        planetsPos[planet] = this.angleToSign(angle);
      }
    }
    return planetsPos;
  }

  handler(className) {
    var houseDetail = "";
    var houseNum = HousesNum[className];
    var planetsPos = this.getPlanetPos( this.state.planetData );
    var signNum = this.angleToSign(this.state.planetData && this.state.planetData.length > 0 ? this.state.planetData[13] : 0);
    var inputData = { 
      houseNum: houseNum, 
      signNum: signNum, 
      planetsPos: planetsPos
    }

    if(this.state.rosaeNlgLoaded && this.state.astroNlgLoaded) {
      houseDetail = renderHouseDetail(inputData);
    }
    console.log(houseDetail);

    this.setState({
      houseDetail: houseDetail
    })
  }

  handlerBirthLagna(date, planetData) {
    console.log("date, asc planets: ", date, planetData);

    this.setState({
        date: date,
        sunProps: {"name": "Sun", "angle": planetData[1] - 90},
        moonProps: {"name": "Moon", "angle": planetData[2] - 90},
        mercuryProps: {"name": "Mercury", "angle": planetData[3] - 90},
        venusProps: {"name": "Venus", "angle": planetData[4] - 90},
        marsProps: {"name": "Mars", "angle": planetData[5] - 90},
        jupiterProps: {"name": "Jupiter", "angle": planetData[6] - 90},
        saturnProps: {"name": "Saturn", "angle": planetData[7] - 90},
        rahuProps: {"name": "Rahu", "angle": planetData[11] - 90},
        ketuProps: {"name": "Ketu", "angle": 180 + planetData[11] - 90},
        ascProps: {"name": "ASC", "angle": planetData[13] - 90},
        planetData: planetData,
    })
  } 


  componentDidMount() {
    console.log('componentDidMount() Chart');
    loadRosaeNlg(() => {
      this.setState({rosaeNlgLoaded: true});
    });
    loadAstroNlg(() => {
      this.setState({astroNlgLoaded: true});
    });      

  }  
  render() {
    const {
      zodiac,
      housesProps,
      sunProps,
      mercuryProps,
      venusProps,
      rahuProps,
      marsProps,
      jupiterProps,
      moonProps,
      ketuProps,
      saturnProps,
    } = this.props;
    console.log(this.props)
    console.log("planetaryData: " + this.state.planetData);
    return (
      <div className="container-center-vertical">
          <OverlapGroupChart>
            <Space angle={this.state.ascProps.angle}>
              <Zodiac style={{ backgroundImage: `url(${zodiac})` }}></Zodiac>
              <Planets>
                <OverlapGroup13>
                  <Sun {...this.state.sunProps} />
                  <Mercury {...this.state.mercuryProps} />
                  <Venus {...this.state.venusProps} />
                  <Rahu {...this.state.rahuProps} />
                  <Mars {...this.state.marsProps} />
                  <Jupiter {...this.state.jupiterProps} />
                  <Moon {...this.state.moonProps} />
                  <Ketu {...this.state.ketuProps} />
                  <Saturn {...this.state.saturnProps} />
                </OverlapGroup13>
              </Planets>
            </Space>
            <Asc {...this.state.ascProps}/>            
            <Houses handler = {this.handler} data = {this.state.housesProps} />

          </OverlapGroupChart>
        <div className="side-panel">
          { this.state.enableBirthLagna ? 
            <BirthLagna handler={this.handlerBirthLagna} ></BirthLagna> : <div />
          }
          <HouseDetailContainer> {parse(this.state.houseDetail)}</HouseDetailContainer>
        </div>
      </div>
    );
  }
}


export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RobotoNormalWhite176px = css`
  color: var(--white);
  font-family: var(--font-family-roboto);
  font-size: 20px;//var(--font-size-m2);
  font-weight: 400;
  font-style: normal;
`;

export const RobotoNormalWhite131px = css`
  color: rgb(200,200,0);
  font-family: var(--font-family-roboto);
  font-size: 16px; //var(--font-size-xs);
  font-weight: 400;
  font-style: normal;
`;

export const RobotoNormalWhite175px = css`
  color: var(--white);
  font-family: var(--font-family-roboto);
  font-size: 16px;//var(--font-size-s);
  font-weight: 400;
  font-style: normal;
`;

export const Border03pxTundora = css`
  border: 0.3px solid var(--tundora);
`;

export const Border14pxTundora = css`
  border: 1.4px solid var(--tundora);
`;

export const Border397pxBlack = css`
  border: 39.7px solid var(--black);
`;

export const Border14pxAuChico = css`
  border: 1.4px solid var(--au-chico);
`;

const OverlapGroupChart = styled.div`
  width: 980px;
  height: 980px;
  position: relative;
  //margin-top: 15.52px;
  align-items: center;
`;

const Space = styled.div`
  position: absolute;
  width:  ${SIZES.space_width};//642px;
  height: ${SIZES.space_height};//642px;
  top: ${SIZES.space_y}; //168px;
  left: ${SIZES.space_x}; //168px;
  background-size: cover;
  background-position: 50% 50%;
  transform: rotate(${props => props.angle ? -props.angle +"deg": "0deg"});  
`;


const Zodiac = styled.div`
  position: absolute;
  width: ${SIZES.zodiac_width};//582px;
  height: ${SIZES.zodiac_height};//582px;
  top: ${SIZES.zodiac_x};//30px;
  left: ${SIZES.zodiac_y};//30px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Planets = styled.div`
  position: absolute;
  width: ${SIZES.space_width};//642px;
  height: ${SIZES.space_height};//642px;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

const OverlapGroup13 = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-left: 0px;
  margin-top: 0px;
`;


class Houses extends React.Component {
  render() {
    return (
      <HousesStyle>
        <OverlapGroup12>
          {this.props.data.map((props) => {
            return (
            <House angle={this.props.angle} handler = {this.props.handler} {...props}/>)
          })}
        </OverlapGroup12>
      </HousesStyle>);
  }
}

const HousesStyle = styled.div`
  position: relative;
  width:  ${SIZES.chart_width}; //980px;
  height: ${SIZES.chart_height}; //980px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const OverlapGroup12 = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;  
`;


class House extends React.Component {
  render() {
    const { angle, handler, caption, attrib1, value1, attrib2, value2, className } = this.props;

    return (
      <HouseStyle handler= {handler}  angle={angle} className={`house ${className}`}>
        <OverlapGroupHouseAtrib  onClick= {() => handler(className) } className="atrib-overlap-group">
          <HouseCaption>
            {caption}
          </HouseCaption>
          <Attrib2>
            <AttribStrength bgcolor="#6a1b9a"  completed={value1*10} attrib={attrib1}></AttribStrength>
          </Attrib2>
          <Attrib3>
            <AttribStrength bgcolor="#6a1b9a"  completed={value2*10} attrib={attrib2}></AttribStrength>
          </Attrib3>
        </OverlapGroupHouseAtrib>
      </HouseStyle>
    );
  }
}


const HouseStyle = styled.div`
  position: absolute;
  width: ${SIZES.house_width};
  height: ${SIZES.house_height};;
  top: ${SIZES.house_y};;
  left: ${SIZES.house_x};
  display: flex;
  padding: 0 0;
  align-items: center;
  justify-content: space-between;
  //overflow: hidden;
  transform: unset;

  &.house.house1 {
    transform:   rotate(${props => props.angle ? (props.angle + 0) + "deg": "0deg"}) rotate(0deg)  translate(${SIZES.house_x});
  }
  &.house.house2 {
    transform:  rotate(${props => props.angle ? (props.angle + 30) + "deg": "30deg"})   translate(${SIZES.house_x});
  }
  &.house.house3 {
    transform:  rotate(${props => props.angle ? (props.angle + 60) + "deg": "60deg"})  translate(${SIZES.house_x});
  }
  &.house.house4 {
    transform:  rotate(${props => props.angle ? (props.angle + 90) + "deg": "90deg"})  translate(${SIZES.house_x});
  }

  &.house.house5 {
    transform:  rotate(${props => props.angle ? (props.angle + 120) + "deg": "120deg"})  translate(${SIZES.house_x});
  }

  &.house.house6 {
    transform:  rotate(${props => props.angle ? (props.angle + 150) + "deg": "150deg"})  translate(${SIZES.house_x});
  }


  &.house.house7 {
    transform:  rotate(${props => props.angle ? (props.angle + 180) + "deg": "180deg"})  translate(${SIZES.house_x});
  }

  &.house.house8 {
    transform:  rotate(${props => props.angle ? (props.angle  -150) + "deg": "-150deg"})  translate(${SIZES.house_x});
  }

  &.house.house9 {
    transform:  rotate(${props => props.angle ? (props.angle -120) + "deg": "-120deg"})  translate(${SIZES.house_x});
  }

  &.house.house10 {
    transform:  rotate(${props => props.angle ? (props.angle - 90) + "deg": "-90deg"})  translate(${SIZES.house_x});
  }

  &.house.house11 {
    transform:  rotate(${props => props.angle ? (props.angle - 60) + "deg": "-60deg"})  translate(${SIZES.house_x});
  }

  &.house.house12 {
    transform:  rotate(${props => props.angle ? (props.angle - 30) + "deg": "-30deg"})  translate(${SIZES.house_x});
  }
`;


const OverlapGroupHouseAtrib = styled.div`
  //${RobotoNormalWhite176px}
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  border:  2px solid palevioletred;
  border-radius: 10px;
  flex-grow: 0;
  overflow-x: hidden;
  overflow-y: hidden;

  &:hover {
    background: rgba(144, 144, 144, 0.1);
  }
  transform: rotate(90.0deg);
`;

const AttribStrength = (props) => {
  const { bgcolor, completed, attrib } = props;

  const containerStyles = {
    display: "flex",
    flexDirection: "row",
    height: 20,
    width: "100%",
    borderRadius: 10,
    margin: 5,
    flex: 1
  };

  const keyContainerStyles = {
    height: 20,
    width: "60%",
    margin: 0,
    textAlign: "left",
  };

  const valueContainerStyles = {
    height: 20,
    right: 0,
    height: "80%",
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    margin: 0,
    flex: 0.7,
  };

  const fillerStyles = {
    height: "100%",
    width: "100%",

    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "left",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={keyContainerStyles}>
        <span>{`${attrib}`}</span>
      </div>
      <div style={valueContainerStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
    </div>
  );
};

const Attrib3 = styled.div`
  //${ValignTextMiddle}
  font-size: 16px;
  position: relative;
  width: 100%;
  letter-spacing: 0;
`;

const Attrib2 = styled.div`
  //${ValignTextMiddle}
  font-size: 16px;
  position: relative;
  width: 100%;
  text-align: left;
  letter-spacing: 0;
  padding: 0px;
  justify-content: left;
`;

const HouseCaption = styled.div`
  font-family: var(--font-family-roboto);
  color: rgb(190, 190, 0); 
  font-size: 20px;//var(--font-size-s);
  font-weight: 600;
  font-style: normal;
  position: relative;
  letter-spacing: 0;
`;


class Asc extends React.Component {
  render() {
    return (
      <Asc1>
        <ASC>ASC</ASC>
      </Asc1>
    );
  }
}

const Asc1 = styled.div`
  position: absolute;
  width: 80px;
  height: 40px;
  top: 470px;
  left: 450px;
  display: flex;
  align-items: flex-start;
  background-color: #Ac4040;
  border-radius: 38.89px;
  overflow: hidden;
  opacity: 0.7;
  //transform: rotate(${props => props.angle ? props.angle +"deg": "0deg"}) translate(300px);
  transform: translateX(300px);
`;

const ASC = styled.div`
  ${ValignTextMiddle}
  ${RobotoNormalWhite175px}
  width: 66px;
  height: 44px;
  text-align: center;
  letter-spacing: 0;
`;

const IconPlanet = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 20px;
  left: 24px;
`;

const PlanetLabel = styled.div`
  ${ValignTextMiddle}
  ${RobotoNormalWhite131px}
  position: absolute;
  width: 100%;
  height: 21px;
  text-align: center;
  justify-content: center;
  letter-spacing: 0;
  overflow: hidden;
`;

const Planet = styled.div`
  position: absolute;
  height: ${SIZES.planet_height};//642px;
  width: ${SIZES.planet_width};//642px;
  left: ${SIZES.planet_x};//272px; // 624/2-80/2
  top: ${SIZES.planet_y};//287px;    
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${props => props.angle ? props.angle + "deg": "0deg"}) translate(280px) translate(${props => props.offset ? props.offset + "px": "0px"}) rotate(${props => props.angle ? 90 + "deg": "0deg"});
`;

const OverlapGroupPlanet = styled.div`
  ${RobotoNormalWhite176px}
  width: 100%;
  height: 100%; // 297
  position: relative;
  display: flex;
`;


class Sun extends React.Component {
  render() {
    return (
      <Planet className="Sun" angle={this.props.angle} offset={SIZES.sun_offset}>
        <Sun2 {...this.props}></Sun2>
      </Planet>
    );
  }
}

class Sun2 extends React.Component {
  render() {
    const { name } = this.props;

    return (
        <OverlapGroupPlanet>
          <PlanetLabel>{name}</PlanetLabel>
          <IconPlanet src="icon-sun.svg" />
        </OverlapGroupPlanet>
    );
  }
}


class Moon extends React.Component {
  render() {

    return (
      <Planet angle = {this.props.angle} offset={SIZES.moon_offset}>
        <Moon2 {...this.props} />
      </Planet>
    );
  }
}

class Moon2 extends React.Component {
  render() {
    const { name } = this.props;

    return (
        <OverlapGroupPlanet>
          <PlanetLabel>{name}</PlanetLabel>

          <IconPlanet
            src="icon-moon.svg"
          />
        </OverlapGroupPlanet>
    );
  }
}
class Mercury extends React.Component {
  render() {
    return (
      <Planet angle={this.props.angle} offset={SIZES.mercury_offset}>
        <Mercury2 {...this.props} />
      </Planet>
    );
  }
}


class Mercury2 extends React.Component {
  render() {
    const { name, angle } = this.props;

    return (

        <OverlapGroupPlanet>
          <PlanetLabel>{name}</PlanetLabel>
          <IconPlanet src="icon-mercury.svg" />
        </OverlapGroupPlanet>
    );
  }
}

class Venus extends React.Component {
  render() {

    return (
      <Planet angle={this.props.angle} offset={SIZES.venus_offset}>
        <Venus2 {...this.props} />
      </Planet>
    );
  }
}


class Venus2 extends React.Component {
  render() {
    const { name } = this.props;

    return (
        <OverlapGroupPlanet>
          <PlanetLabel>{name}</PlanetLabel>
          <IconPlanet src="icon-venus.svg" />
        </OverlapGroupPlanet>
    );
  }
}

class Mars extends React.Component {
  render() {


    return (
      <Planet angle = {this.props.angle} offset={SIZES.mars_offset}>
        <Mars2 {...this.props} />
      </Planet>
    );
  }
}



class Mars2 extends React.Component {
  render() {
    const { name } = this.props;

    return (
        <OverlapGroupPlanet>
          <PlanetLabel>{name}</PlanetLabel>
          <IconPlanet src="icon-mars.svg" />
        </OverlapGroupPlanet>
    );
  }
}

class Jupiter extends React.Component {
  render() {
    return (
      <Planet angle = {this.props.angle} offset={SIZES.jupiter_offset}>
        <Jupiter2 {...this.props} />
      </Planet>
    );
  }
}

class Jupiter2 extends React.Component {
  render() {
    const { name } = this.props;

    return (
        <OverlapGroupPlanet>
          <IconPlanet
            src="icon-jupiter.svg"
          />
          <PlanetLabel>{name}</PlanetLabel>
        </OverlapGroupPlanet>
    );
  }
}


class Saturn extends React.Component {
  render() {
    return (
      <Planet angle = {this.props.angle} offset={SIZES.saturn_offset}>
        <Saturn2 {...this.props} />
      </Planet>
    );
  }
}

class Saturn2 extends React.Component {
  render() {
    const { name } = this.props;

    return (
        <OverlapGroupPlanet>
          <PlanetLabel>{name}</PlanetLabel>

          <IconPlanet src="icon-saturn.svg" />
        </OverlapGroupPlanet>
    );
  }
}


class Rahu extends React.Component {
  render() {

    return (
      <Planet angle = {this.props.angle} offset={SIZES.rahu_offset}>
        <Rahu2 {...this.props} />
      </Planet>
    );
  }
}



class Rahu2 extends React.Component {
  render() {
    const { name } = this.props;

    return (

        <OverlapGroupPlanet>
          <PlanetLabel>{name}</PlanetLabel>
          <IconPlanet src="icon-rahu.svg" />

        </OverlapGroupPlanet>

    );
  }
}

class Ketu extends React.Component {
  render() {

    return (
      <Planet angle = {this.props.angle} offset={SIZES.rahu_offset}>
        <Ketu2 {...this.props} />
      </Planet>
    );
  }
}


class Ketu2 extends React.Component {
  render() {
    const { name } = this.props;

    return (
        <OverlapGroupPlanet>      
          <PlanetLabel>{name}</PlanetLabel>
          <IconPlanet src="icon-ketu.svg" />          
        </OverlapGroupPlanet>
    );
  }
}


const HouseDetailContainer = styled.div`
  font-family: var(--font-family-roboto);
  font-size: 30px; //var(--font-size-m2);
  text-align: justify;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 1em 1em;
  margin: 1em;
`;

const SidePanel = styled.div`
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m2);
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1em;
  &:hover ${Houses} {
    display: none;
  }
`;

const house1Data = {
    caption: "House-1",
    attrib1: "Charisma",
    attrib2: "Confidence",

    value1: 3,
    value2: 1,

    className: "house1",
};

const house2Data = {
    caption: "House-2",
    attrib2: "Inheritance",
    attrib1: "Speech",

    value1: 3,
    value2: 1,

    className: "house2",
};

const house3Data = {
  caption: "House-3",
  attrib1: "Journeys",
  attrib2: "Skills",

    value1: 3,
    value2: 1,

    className: "house3",
};

const house4Data = {
    caption: "House-4",
    attrib1: "Education",
    attrib2: "Home",

    value1: 10,
    value2: 1,

    className: "house4",
};

const house5Data = {
    caption: "House-5",
    attrib2: "Children",
    attrib1: "Recreation",

    value1: 3,
    value2: 1,

    className: "house5",
};

const house6Data = {
    caption: "House-6",
    attrib1: "Enemies",
    attrib2: "Diseases",

    value1: 3,
    value2: 1,

    className: "house6",
};

const house7Data = {
    caption: "House-7",
    attrib1: "Longevity",
    attrib2: "Passion",
    className: "house7",

    value1: 3,
    value2: 1,

};

const house8Data = {
    caption: "House-8",
    attrib2: "Inheritance",
    attrib1: "Suffering",
    value1: 3,
    value2: 1,

    className: "house8",
};

const house9Data = {
    caption: "House-9",
    attrib1: "Career",
    attrib2: "Prosperity",
    value1: 3,
    value2: 1,

    className: "house9",
};

const house10Data = {
    caption: "House-10",
    attrib1: "Fame",
    attrib2: "Power",
    value1: 3,
    value2: 1,

    className: "house10",
};

const house11Data = {
    caption: "House-11",
    attrib2: "Friends",
    attrib1: "Earnings",
    value1: 5,
    value2: 1,

    className: "house11",
};

const house12Data = {
    caption: "House-12",
    attrib2: "Expenses",
    attrib1: "Pleasures",
    value1: 5,
    value2: 5,

    className: "house12",
};

const housesData = [
    house1Data,
    house2Data,
    house3Data,
    house4Data,
    house5Data,
    house6Data,
    house7Data,
    house8Data,
    house9Data,
    house10Data,
    house11Data,
    house12Data,
];

const sunData = {
    name: "Sun",
    angle: 0,
};


const mercuryData = {
    name: "Mercury",
    angle: 30,
};


const venusData = {
    name: "Venus",
    angle: 60,
};


const rahuData = {
    name: "Rahu",
    angle: 6,
};


const marsData = {
    name: "Mars",
    angle: 90,
};

const jupiterData = {
    name: "Jupiter",
    angle: 120,
};


const moonData = {
    name: "Moon",
    angle: 150,
};


const ketuData = {
    name: "Ketu",
    angle: "180deg",
};


const saturnData = {
    name: "Saturn",
    angle: "210deg",

};


const ascData = {
  name: "ASC",
  angle: 0,
};


const chartData = {
    zodiac: "zodiac@1x.png",
    housesProps: housesData,
    sunProps: sunData,
    mercuryProps: mercuryData,
    venusProps: venusData,
    rahuProps: rahuData,
    marsProps: marsData,
    jupiterProps: jupiterData,
    moonProps: moonData,
    ketuProps: ketuData,
    saturnProps: saturnData,
    ascProps: ascData,
    enableBirthLagna: true,
};

function hexToBytes(hex) {
  var bytes = [0,0,0,0,0,0,0,0,0];
  let posNum = BigInt(hex);
  for (var i=0; i <= 8; i++) {
      bytes[8-i] = Number(posNum % 1000n);
      posNum =  posNum / 1000n;
  }
  return bytes;
}

function getChartData(id) {
  let hex = id.toString(10);
  let posNum = BigInt(id);
  let planetData = hexToBytes(hex);
  console.log(planetData); 


  let chartData = {
    zodiac: "zodiac@1x.png",
    housesProps: housesData,
    sunProps: {"name": "Sun", "angle": planetData[1] - 90},
    moonProps: {"name": "Moon", "angle": planetData[2] - 90},
    mercuryProps: {"name": "Mercury", "angle": planetData[3] - 90},
    venusProps: {"name": "Venus", "angle": planetData[4] - 90},
    marsProps: {"name": "Mars", "angle": planetData[5] - 90},
    jupiterProps: {"name": "Jupiter", "angle": planetData[6] - 90},
    saturnProps: {"name": "Saturn", "angle": planetData[7] - 90},
    rahuProps: {"name": "Rahu", "angle": planetData[8] - 90},
    ketuProps: {"name": "Ketu", "angle": 180 + planetData[8] - 90},
    ascProps: {"name": "ASC", "angle": planetData[0] - 90},
    enableBirthLagna: false,
  };  
  return chartData;
}

export {
  Chart,
  chartData,
  ChartWithId
}
