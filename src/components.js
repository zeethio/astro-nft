import React from 'react';
import styled from 'styled-components';
import { css, createGlobalStyle } from "styled-components";
import './components.css';
import {getHouseDetails, HousesIntro} from "./HouseDetails.js"
import {BirthLagna} from  "./BirthLagna.js"
import parse from "html-react-parser";

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
    };
    this.handler = this.handler.bind(this);
    this.handlerBirthLagna = this.handlerBirthLagna.bind(this);
  }
  handler(className) {
    this.setState({
      houseDetail: getHouseDetails(className)
    })
  }

  handlerBirthLagna(date, planetData) {
    console.log("date, asc planets: ", date, planetData);

    this.setState({
        date: date,
        sunProps: {"name": "Sun", "angle": planetData[1]+"deg"},
        moonProps: {"name": "Moon", "angle": planetData[2]+"deg"},
        mercuryProps: {"name": "Mercury", "angle": planetData[3]+"deg"},
        venusProps: {"name": "Venus", "angle": planetData[4]+"deg"},
        marsProps: {"name": "Mars", "angle": planetData[5]+"deg"},
        jupiterProps: {"name": "Jupiter", "angle": planetData[6]+"deg"},
        saturnProps: {"name": "Saturn", "angle": planetData[7]+"deg"},
        rahuProps: {"name": "Rahu", "angle": planetData[11]+"deg"},
        ketuProps: {"name": "Ketu", "angle": planetData[12]+"deg"},
        ascProps: {"name": "ASC", "angle": planetData[13]},
    })
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
    return (
      <div className="container-center-horizontal">
        <div className="chart">
          <OverlapGroupChart>
            <Zodiac style={{ backgroundImage: `url(${zodiac})` }}></Zodiac>
            <Houses handler = {this.handler} angle={this.state.ascProps.angle} data = {this.state.housesProps} />
            <Asc {...this.state.ascProps}/>
            <Planets>
              <OverlapGroup13>
                <Zone></Zone>
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
          </OverlapGroupChart>
        </div>
        <div className="side-panel">
          <BirthLagna handler={this.handlerBirthLagna} ></BirthLagna>
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
  color: var(--white);
  font-family: var(--font-family-roboto);
  font-size: 12px; var(--font-size-xs);
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

const Zodiac = styled.div`
  position: absolute;
  width: 582px;
  height: 582px;
  top: 207px;
  left: 199px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Planets = styled.div`
  position: absolute;
  width: 642px;
  height: 642px;
  top: 176px;
  left: 169px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  transform: rotate(0deg);
`;

const OverlapGroup13 = styled.div`
  width: 642px;
  height: 642px;
  position: relative;
  margin-left: 0px;
  margin-top: 0px;
`;

const Zone = styled.div`
  ${Border397pxBlack}
  position: absolute;
  width: 642px;
  height: 642px;
  top: 0px;
  left: 0px;
  border-radius: 320.5px;
`;



class Houses extends React.Component {
  render() {
    return (
      <HousesStyle>
        <OverlapGroup12>
          {this.props.data.map((props) => {
            return (
            <HouseV2 angle={this.props.angle} handler = {this.props.handler} {...props}/>)
          })}
          </OverlapGroup12>
          </HousesStyle>);
  }
}

const HousesStyle = styled.div`
  position: relative;
  width: 980px;
  height: 980px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const OverlapGroup12 = styled.div`
  width: 980px;
  height: 980px;
  position: relative;
  align-items: center;  
`;


class HouseV2 extends React.Component {
  render() {
    const { angle, handler, attrib1, value1, attrib2, value2, attrib3, value3, className } = this.props;

    return (
      <HouseStyle handler= {handler}  angle={angle} className={`house ${className}`}>
        <OverlapGroupHouseAtrib  onClick= {() => handler(className) } className="overlap-group">
          <Attrib1 className="attrib1">
            {attrib1}
          </Attrib1>

          <Attrib2 className="attrib2">
            {attrib2 + ":" + value2}
          </Attrib2>
          <Attrib3 className="attrib3">
            {attrib3 + ":" + value3}
          </Attrib3>
          {/*
          <Zone
            className="zone-1"
            src="zone-1@1x.svg"
          />*/}
        </OverlapGroupHouseAtrib>
      </HouseStyle>
    );
  }
}


const HouseStyle = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  top: 400px;
  left: 400px;
  display: flex;
  padding: 0 0;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  //transform: rotate(30deg);
  transform: unset;

  &.house.house1 {
    transform:   rotate(${props => props.angle ? (props.angle + 0) + "deg": "0deg"}) rotate(0deg)  translate(-400px);
  }
  &.house.house2 {
    transform:  rotate(${props => props.angle ? (props.angle + 30) + "deg": "0deg"})  translateX(-400px);
  }
  &.house.house3 {
    transform:  rotate(${props => props.angle ? (props.angle + 60) + "deg": "0deg"}) translateX(-400px);
  }
  &.house.house4 {
    transform:  rotate(${props => props.angle ? (props.angle + 90) + "deg": "0deg"}) translateX(-400px);
  }

  &.house.house5 {
    transform:  rotate(${props => props.angle ? (props.angle + 120) + "deg": "0deg"}) translateX(-400px);
  }

  &.house.house6 {
    transform:  rotate(${props => props.angle ? (props.angle + 150) + "deg": "0deg"}) translateX(-400px);
  }


  &.house.house7 {
    transform:  rotate(${props => props.angle ? (props.angle + 180) + "deg": "0deg"}) translateX(-400px);
  }

  &.house.house8 {
    transform:  rotate(${props => props.angle ? (props.angle  -150) + "deg": "0deg"}) translateX(-400px);
  }

  &.house.house9 {
    transform:  rotate(${props => props.angle ? (props.angle -120) + "deg": "0deg"}) translateX(-400px);
  }

  &.house.house10 {
    transform:  rotate(${props => props.angle ? (props.angle - 90) + "deg": "0deg"}) translateX(-400px);
  }

  &.house.house11 {
    transform:  rotate(${props => props.angle ? (props.angle - 60) + "deg": "0deg"}) translateX(-400px);
  }

  &.house.house12 {
    transform:  rotate(${props => props.angle ? (props.angle - 30) + "deg": "0deg"}) translateX(-400px);
  }
`;

const OverlapGroupPlanet = styled.div`
  ${RobotoNormalWhite176px}
  width: 80px;
  height: 297px;
  position: relative;
  left: 280px;
`;

const OverlapGroupHouseAtrib = styled.div`
  ${RobotoNormalWhite176px}
  width: 150px;
  height: 80px;
  position: relative;
  z-index: 2;
  border:  2px solid palevioletred;
  border-radius: 10px;
  flex-flow: column wrap;
  flex-grow: 0;
  justify-content: space-between;
  padding: 1em;
  overflow-x: hidden;
  overflow-y: hidden;

  &:hover {
    background: rgba(144, 144, 144, 0.1);
  }
  transform: rotate(-90.0deg);
`;

const Attrib3 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  //width: 106px;
  //height: 37px;
  /*top: 5px;
  left: 80px;*/
  //transform: rotate(-90.0deg);
  text-align: center;
  letter-spacing: 0;
`;

const Attrib2 = styled.div`
  ${ValignTextMiddle}
  font-size: 18px;//var(--font-size-s);
  position: relative;
  //width: 106px;
  //height: 37px;
  /*top: 5px;
  left: 50px; */
  //transform: rotate(-90.0deg);
  text-align: center;
  letter-spacing: 0;
`;

const Attrib1 = styled.div`
  ${ValignTextMiddle}
  font-family: var(--font-family-roboto);
  color: rgb(190, 190, 0); 
  font-size: 20px;//var(--font-size-s);
  font-weight: 600;
  font-style: normal;

  position: relative;
  //width: 106px;
  //height: 47px;
  /*top: 5px;
  left: 20px;*/
  //transform: rotate(-90deg);
  text-align: center;
  letter-spacing: 0;
`;
/*
const Zone = styled.img`
  position: absolute;
  width: 171px;
  height: 244px;
  top: 26px;
  left: 50px;
  transform: rotate(30deg);
`;
*/


class Asc extends React.Component {
  render() {
    return (
      <Asc1 angle= {this.props.angle}>
        <ASC>ASC</ASC>
      </Asc1>
    );
  }
}

const Asc1 = styled.div`
  position: absolute;
  width: 80px;
  height: 44px;
  top: 480px;
  left: 450px;
  display: flex;
  align-items: flex-start;
  background-color: #5c1010;
  border-radius: 38.89px;
  overflow: hidden;
  opacity: 0.7;
  transform: rotate(${props => props.angle ? props.angle +"deg": "0deg"}) translate(-300px);
  //transform: rotate(${props => "0deg"}) translate(-300px);

`;

const ASC = styled.div`
  ${ValignTextMiddle}
  ${RobotoNormalWhite175px}
  width: 66px;
  height: 44px;
  text-align: center;
  letter-spacing: 0;
`;


const Planet = styled.div`
  position: absolute;
  height: 642px;
  width: 642px;
  //top: 133px;
  //left: 133px;
  display: flex;
  //padding: 302.1px 8.6px;
  //justify-content: flex-end;
  //align-items: flex-end;
  //min-width: 642px;
  //transform: rotate(0deg);
  transform: rotate(${props => props.angle ? props.angle : "0deg"});
`;

class Sun extends React.Component {
  render() {
    return (
      <Planet angle = {this.props.angle}>
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
          <Circle2></Circle2>
          <Circle1></Circle1>
          <PlanetLabel>{name}</PlanetLabel>
        </OverlapGroupPlanet>
    );
  }
}

const Circle2 = styled.div`
  ${Border03pxTundora}
  position: absolute;
  width: 6px;
  height: 6px;
  top: 9px;
  left: 18px;
  background-color: var(--falcon);
  border-radius: 2.98px;
`;

const Circle1 = styled.div`
  ${Border14pxTundora}
  position: absolute;
  width: 25px;
  height: 25px;
  top: 0;
  left: 7px;
  border-radius: 12.5px;
`;

const PlanetLabel = styled.div`
  ${ValignTextMiddle}
  ${RobotoNormalWhite131px}
            position: absolute;
  width: 40px;
  height: 21px;
  top: 1px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;



class Mercury extends React.Component {
  render() {
    return (
      <Planet angle = {this.props.angle}>
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
          <Icon></Icon>
          <PlanetLabel>{name}</PlanetLabel>
          <Line1
            src="line-1.svg"
          />
          <Line3
            src="line-3.svg"
          />
          <Line6
            src="line-6.svg"
          />
          <Line2
            src="line-2.svg"
          />
        </OverlapGroupPlanet>
    );
  }
}

const Icon = styled.div`
  ${Border14pxTundora}
  position: absolute;
  width: 25px;
  height: 25px;
  top: 4px;
  left: 12px;
  border-radius: 12.5px;
`;

const Line1 = styled.img`
  position: absolute;
  width: 6px;
  height: 3px;
  top: 4px;
  left: 30px;
  transform: rotate(-45deg);
`;

const Line3 = styled.img`
  position: absolute;
  width: 9px;
  height: 9px;
  top: 30px;
  left: 21px;
  transform: rotate(-45deg);
`;

const Line6 = styled.img`
  position: absolute;
  width: 9px;
  height: 9px;
  top: 29px;
  left: 20px;
  transform: rotate(-45deg);
`;

const Line2 = styled.img`
  position: absolute;
  width: 4px;
  height: 7px;
  top: 0;
  left: 17px;
  transform: rotate(-45deg);
`;



class Venus extends React.Component {
  render() {

    return (
      <Planet angle = {this.props.angle}>
        <Venus2 {...this.props} />
      </Planet>
    );
  }
}

const Venus1 = styled.div`
  position: absolute;
  width: 642px;
  height: 642px;
  top: 133px;
  left: 133px;
  display: flex;
  padding: 299.4px 3.3px;
  align-items: flex-end;
  transform: rotate(-15deg);
`;



class Venus2 extends React.Component {
  render() {
    const { name } = this.props;

    return (
        <OverlapGroupPlanet>
          <Line5
            src="line-5.svg"
          />
          <Line6
            src="line-6-1.svg"
          />
          <Icon></Icon>
          <Icon1></Icon1>
          <PlanetLabel>{name}</PlanetLabel>
        </OverlapGroupPlanet>
    );
  }
}

const Line5 = styled.img`
  position: absolute;
  width: 9px;
  height: 9px;
  top: 25px;
  left: 17px;
  transform: rotate(-45deg);
`;

const Icon1 = styled.div`
  ${Border14pxTundora}
  position: absolute;
  width: 25px;
  height: 25px;
  top: 0;
  left: 7px;
  border-radius: 12.5px;
`;


class Rahu extends React.Component {
  render() {

    return (
      <Planet angle = {this.props.angle}>
        <Rahu2 {...this.props} />
      </Planet>
    );
  }
}

const Rahu1 = styled.div`
  position: absolute;
  width: 642px;
  height: 642px;
  top: 133px;
  left: 133px;
  display: flex;
  padding: 300px 15.9px;
  align-items: flex-end;
  transform: rotate(-20deg);
`;



class Rahu2 extends React.Component {
  render() {
    const { name } = this.props;

    return (

        <OverlapGroupPlanet>
          <Union
            src="union.svg"
          />
          <PlanetLabel>{name}</PlanetLabel>
        </OverlapGroupPlanet>

    );
  }
}

const Union = styled.img`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 7px;
  left: 7px;
  transform: rotate(-45deg);
`;


class Mars extends React.Component {
  render() {


    return (
      <Planet angle = {this.props.angle}>
        <Mars2 {...this.props} />
      </Planet>
    );
  }
}

const Mars1 = styled.div`
  position: absolute;
  width: 642px;
  height: 642px;
  top: 133px;
  left: 133px;
  display: flex;
  padding: 285.1px 17.9px;
  align-items: flex-end;
  transform: rotate(-45deg);
`;



class Mars2 extends React.Component {
  render() {
    const { name } = this.props;

    return (
        <OverlapGroupPlanet>
          <Icon></Icon>
          <Arrow
            src="arrow.svg"
          />
          <PlanetLabel>{name}</PlanetLabel>
        </OverlapGroupPlanet>
    );
  }
}

const Arrow = styled.img`
  position: absolute;
  width: 11px;
  height: 15px;
  top: 1px;
  left: 18px;
  transform: rotate(-15deg);
`;



class Jupiter extends React.Component {
  render() {
    return (
      <Planet angle = {this.props.angle}>
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
          <Vector3
            src="vector-3.svg"
          />
          <Line8
            src="line-8.svg"
          />
          <PlanetLabel>{name}</PlanetLabel>
        </OverlapGroupPlanet>
    );
  }
}

const Vector3 = styled.img`
  position: absolute;
  width: 37px;
  height: 27px;
  top: 4px;
  left: 3px;
  transform: rotate(15deg);
`;

const Line8 = styled.img`
  position: absolute;
  width: 10px;
  height: 28px;
  top: 7px;
  left: 24px;
  transform: rotate(15deg);
`;


class Moon extends React.Component {
  render() {

    return (
      <Planet angle = {this.props.angle}>
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
          <Circle2
            src="circle2.svg"
          />
          <Circle1
            src="circle1.svg"
          />
          <PlanetLabel>{name}</PlanetLabel>
        </OverlapGroupPlanet>
    );
  }
}


class Ketu extends React.Component {
  render() {

    return (
      <Planet angle = {this.props.angle}>
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
          <Union
            src="union-1.svg"
          />
          <PlanetLabel>{name}</PlanetLabel>
        </OverlapGroupPlanet>
    );
  }
}


class Saturn extends React.Component {
  render() {
    return (
      <Planet angle = {this.props.angle}>
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
          <Icon></Icon>
          <Line4
            src="line-4.svg"
          />
          <Line7
            src="line-7.svg"
          />
          <Vector1
            src="vector-1.svg"
          />
          <Vector2
            src="vector-2.svg"
          />
          <PlanetLabel>{name}</PlanetLabel>
        </OverlapGroupPlanet>
    );
  }
}
const Line4 = styled.img`
  position: absolute;
  width: 10px;
  height: 9px;
  top: 2px;
  left: 11px;
  transform: rotate(45deg);
`;

const Line7 = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  left: 5px;
  transform: rotate(45deg);
`;

const Vector1 = styled.img`
  position: absolute;
  width: 20px;
  height: 11px;
  top: 19px;
  left: 11px;
  transform: rotate(45deg);
`;

const Vector2 = styled.img`
  position: absolute;
  width: 5px;
  height: 3px;
  top: 30px;
  left: 26px;
  transform: rotate(45deg);
`;

const HouseDetailContainer = styled.div`
  font-family: var(--font-family-roboto);
  font-size: 18px; //var(--font-size-m2);
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 2px 2px;
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
    attrib1: "House-1",
    attrib2: "Charisma",
    attrib3: "Confidence",
    value1: 5,
    value2: 3,
    value3: 1,

    className: "house1",
};

const house2Data = {
    attrib1: "House-2",
    attrib3: "Inheritance",
    attrib2: "Speech",
    value1: 5,
    value2: 3,
    value3: 1,

    className: "house2",
};

const house3Data = {
  attrib1: "House-3",
  attrib2: "Journeys",
  attrib3: "Skills",
    value1: 5,
    value2: 3,
    value3: 1,

    className: "house3",
};

const house4Data = {
    attrib1: "House-4",
    attrib2: "Education",
    attrib3: "Home",

    value1: 5,
    value2: 3,
    value3: 1,

    className: "house4",
};

const house5Data = {
    attrib1: "House-5",
    attrib3: "Children",
    attrib2: "Recreation",
    value1: 5,
    value2: 3,
    value3: 1,

    className: "house5",
};

const house6Data = {
    attrib1: "House-6",
    attrib2: "Enemies",
    attrib3: "Diseases",
    value1: "",
    value2: 3,
    value3: 1,

    className: "house6",
};

const house7Data = {
    attrib1: "House-7",
    attrib2: "Longevity",
    attrib3: "Passion",
    className: "house7",
    value1: "",
    value2: 3,
    value3: 1,

};

const house8Data = {
    attrib1: "House-8",
    attrib3: "Inheritance",
    attrib2: "Suffering",
    value1: 5,
    value2: 3,
    value3: 1,

    className: "house8",
};

const house9Data = {
    attrib1: "House-9",
    attrib2: "Career",
    attrib3: "Prosperity",
    value1: 5,
    value2: 3,
    value3: 1,

    className: "house9",
};

const house10Data = {
    attrib1: "House-10",
    attrib2: "Fame",
    attrib3: "Power",
    value1: 5,
    value2: 3,
    value3: 1,

    className: "house10",
};

const house11Data = {
    attrib1: "House-11",
    attrib3: "Friends",
    attrib2: "Earnings",
    value1: 5,
    value2: 3,
    value3: 1,

    className: "house11",
};

const house12Data = {
    attrib1: "House-12",
    attrib3: "Expenses",
    attrib2: "Pleasures",
    value1: 5,
    value2: 3,
    value3: 1,

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
    angle: "0deg",
};


const mercuryData = {
    name: "Mercury",
    angle: "30deg",
};


const venusData = {
    name: "Venus",
    angle: "60deg",
};


const rahuData = {
    name: "Rahu",
    angle: "60deg",
};


const marsData = {
    name: "Mars",
    angle: "90deg",
};

const jupiterData = {
    name: "Jupiter",
    angle: "120deg",
};


const moonData = {
    name: "Moon",
    angle: "150deg",
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
  angle: 180,
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
};

export {
  Chart,
  chartData
}