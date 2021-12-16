import React from 'react';
import styled from 'styled-components';
import { css, createGlobalStyle } from "styled-components";
import './components.css';
import {HousesIntro} from "./HouseDetails.js";
import {BirthLagna} from  "./BirthLagna.js";
import {PlanetTable} from  "./PlanetTable.js";
import { BsChevronDown, BsChevronUp } from "react-icons/bs"; //react-icon

import parse from "html-react-parser";
import {loadAstroNlg, loadRosaeNlg, renderHouseDetail} from "./AstroNlg"
import { useParams } from "react-router-dom";

import Minter from "./nft-minter/Minter";
import {HousesNum, PlanetsEnum, getPlanetPos, getCloseConjuctions} from "./AstroCalc"
  /* global BigInt */
const HOUSE_POS = "400px"



var SIZES = {
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
  planet_width: "100px",
  planet_height: "100px",
  planet_x: "300px", // (space_width - planet_width)/2 
  planet_y: "300px",
  house_width: "180px",
  house_height: "90px",
  house_x: "400px",
  house_y: "445px",
  house_offset: "400px",   
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
      houseDetail: HousesIntro ,
      housesProps: props.housesProps,  
      planetData: props.planetData ? props.planetData : [],
      chartId: 0,
      astroNlgLoaded: false, 
      rosaeNlgLoaded: false,
      enableBirthLagna: props.enableBirthLagna,
      enableMintNft: props.enableMintNft,
      mintFragOpen: false,    
      planetTableFragOpen: true,    
      vedicChartFragOpen: true,
      sideralOffset: 24,      
    };
    this.handlerHouseDetail = this.handlerHouseDetail.bind(this);
    this.handlerBirthLagna = this.handlerBirthLagna.bind(this);
    this.toggleMintFrag = this.toggleMintFrag.bind(this);
    this.togglePlanetTableFrag = this.togglePlanetTableFrag.bind(this);
    this.toggleVedicChartFrag = this.toggleVedicChartFrag.bind(this);
    this.adjustPlanetPos = this.adjustPlanetPos.bind(this); 
  }

  toggleMintFrag() {
    this.setState({ mintFragOpen: !this.state.mintFragOpen });
  }
  togglePlanetTableFrag() {
    this.setState({ planetTableFragOpen: !this.state.planetTableFragOpen });
  }
  toggleVedicChartFrag() {
    this.setState({ vedicChartFragOpen: !this.state.vedicChartFragOpen });
  }

  getFee() {
    // 0.01eth
    return 1*10**16;
  }
  handlerHouseDetail(className) {
    var houseDetail = "";
    var houseNum = HousesNum[className];
    var signNum, planetsPos;
    //var planetsPos = this.getPlanetPos( this.state.planetData, this.state.sideralOffset );
    //var signNum = this.angleToSign(this.state.planetData && this.state.planetData.length > 0 ? this.state.planetData[0] - this.state.sideralOffset: 0);
    planetsPos = getPlanetPos(this.state.planetData, this.state.sideralOffset);
    var inputData = { 
      houseNum: houseNum, 
      signNum: planetsPos["asc"], 
      planetsPos: planetsPos,
    }

    if(this.state.rosaeNlgLoaded && this.state.astroNlgLoaded) {
      houseDetail = renderHouseDetail(inputData);
    }
    //console.log(houseDetail);
    console.log(`${className}: signNum: ${signNum} planetPos: ${JSON.stringify(planetsPos)}`);

    this.setState({
      houseDetail: houseDetail
    })
  }

  handlerBirthLagna(date, _planetData) {
    console.log("date, asc planets: ", date, _planetData);
    let planetData = [];
    try {
      var chartId = BigInt(parseInt(_planetData[13]));
      planetData.push(_planetData[13]);
      // Calculate chartId for blockchain
      for (var i=1; i < 8; i++) {
        chartId = chartId * BigInt(1000) + BigInt(parseInt(_planetData[i]));
        planetData.push(_planetData[i]);
      }
      chartId = chartId * BigInt(1000) + BigInt(parseInt(_planetData[11]));
      planetData.push(_planetData[11]);
      planetData.push(_planetData[11]+180);

      this.setState({
          date: date,
          planetData: planetData,
          chartId: chartId,
      })
    } catch (e) {

    }
  } 
  adjustPlanetPos(groups) {
    let planetOffsets = Array(10).fill(0);;
    for (var i =0; i < groups.length; i++) {
      var group = groups[i];
      for(var j=1; j < group.length; j++) {
        if(planetOffsets[group[j]] == 0) {
          planetOffsets[group[j]]=-32*j;
        }
        console.log(group[j]);
      }
    }
    console.log(`planetOffsets ${JSON.stringify(planetOffsets)}`);
    return planetOffsets;
  }
  
  adjustHousePos(asc, sign, sideralOffset) {
    // asc symbold position + advance by half house size + advance by fraction of sign
    return 30 - (asc - sign * 30 - sideralOffset);
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
    } = this.props;
    console.log(this.props)
    console.log("planetaryData: " + this.state.planetData);

    var signNum, planetsPos;
    var groups = getCloseConjuctions(this.state.planetData, this.state.sideralOffset);
    var planetOffsets = this.adjustPlanetPos(groups);
    planetsPos = getPlanetPos(this.state.planetData, this.state.sideralOffset);
    console.log(JSON.stringify(planetsPos));
    var house_angle_adj = this.adjustHousePos(this.state.planetData[PlanetsEnum["asc"]], planetsPos["asc"], this.state.sideralOffset);
    let minter;
    if(this.state.enableMintNft)      
    minter = 
      <FragContainer>
        <FragHeading className="MintFrag" onClick={this.toggleMintFrag}>Mint on Blockchain {this.state.mintFragOpen ? <BsChevronUp>:</BsChevronUp> : <BsChevronDown />}</FragHeading>
          {this.state.mintFragOpen ? <Minter className="Minter" url ="https://astronft.zeeth.io/view" tokenId = {this.state.chartId} weiValue={this.getFee()}/>: <div />} 
      </FragContainer>
    else minter = <div />;
    /*

    let planetTable = 
      <FragContainer>
        <FragHeading className="PlanetTableFrag" onClick={this.togglePlanetTableFrag}>Show Planet Table {this.state.planetTableFragOpen ? "-" : "+"}</FragHeading>
          {this.state.planetTableFragOpen ? <PlanetTable planetData={this.state.planetData}/>: <div />} 
    </FragContainer>

    let vedicChart = 
      <FragContainer>
        <FragHeading className="vedicChartFrag" onClick={this.toggleVedicChartFrag}>Show Chart {this.state.vedicChartFragOpen ? "-" : "+"}</FragHeading>
          {this.state.vedicChartFragOpen ? <VedicChartS style={{ backgroundImage: `url(vedic-chart-s.png)`, backgroundPosition: 'center', backgroundSize: 'cover', width: 270, height: 270,}}/>: <div />} 
    </FragContainer>
  */
    return (
      <div className="container-main">
          <OverlapGroupChart>
            <Space angle={-this.state.planetData[0] + 90 }>
              <Zodiac angle={this.state.sideralOffset} style={{ backgroundImage: `url(${zodiac})` }}></Zodiac>
              <Planets>
                <OverlapGroup13>
                  <Sun name="Sun" angle={-this.state.planetData[1]} offset={planetOffsets[1]}/>
                  <Moon name="Moon" angle={-this.state.planetData[2]}  offset={planetOffsets[2]} />
                  <Mercury name="Merc" angle={-this.state.planetData[3]}  offset={planetOffsets[3]}/>
                  <Venus name="Venus" angle={-this.state.planetData[4]}  offset={planetOffsets[4]}/>
                  <Mars name="Mars" angle={-this.state.planetData[5]} offset={planetOffsets[5]}/>
                  <Jupiter name="Jup" angle={-this.state.planetData[6]} offset={planetOffsets[6]}/>
                  <Saturn name="Sat" angle={-this.state.planetData[7]} offset={planetOffsets[7]}/>
                  <Rahu name="A.Ndde" angle={-this.state.planetData[8]} offset={planetOffsets[8]}/>
                  <Ketu name="D.Node" angle={-this.state.planetData[9]} offset={planetOffsets[9]}/>
                </OverlapGroup13>
              </Planets>
            </Space>
            <Asc {...this.state.ascProps}/>            
            <Houses handler = {this.handlerHouseDetail}  angle={180 + 15 - house_angle_adj} data = {this.state.housesProps} />

          </OverlapGroupChart>
        <div className="side-panel">
          { this.state.enableBirthLagna ? 
            <BirthLagna handler={this.handlerBirthLagna} ></BirthLagna> : <div />
          }
          {minter}
          {/*
          {planetTable}
          {vedicChart}
          */}
          <HouseDetailContainer> {parse(this.state.houseDetail)}</HouseDetailContainer>
        </div>
      </div>
    );
  }
}

const ButtonMintWrap = styled.button`
  color: palevioletred;
  font-size: 16px;
  margin: 0.5em;
  padding: 0.25em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

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
  width:  ${SIZES.space_width};
  height: ${SIZES.space_height};
  top: ${SIZES.space_y};
  left: ${SIZES.space_x};
  background-size: cover;
  background-position: 50% 50%;
  transform: rotate(${props => props.angle ? -props.angle +"deg": "0deg"});  
`;


const Zodiac = styled.div`
  position: absolute;
  width: ${SIZES.zodiac_width};
  height: ${SIZES.zodiac_height};
  top: ${SIZES.zodiac_x};
  left: ${SIZES.zodiac_y};
  background-size: cover;
  background-position: 50% 50%;
  transform: rotate(${props => props.angle ? -props.angle +"deg": "0deg"});  
`;

const VedicChartS = styled.div`
  position: relative;
  width: 270;
  height: 270;
  background-size: cover;
  //background-position: 50% 50%;
`;


const Planets = styled.div`
  position: absolute;
  width: ${SIZES.space_width};
  height: ${SIZES.space_height};
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
  width:  ${SIZES.chart_width};
  height: ${SIZES.chart_height};
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
    transform:   rotate(${props => props.angle ? (props.angle + 0) + "deg": "0deg"}) rotate(0deg)  translate(${SIZES.house_offset});
  }
  &.house.house2 {
    transform:  rotate(${props => props.angle ? (props.angle - 30) + "deg": "30deg"})   translate(${SIZES.house_offset});
  }
  &.house.house3 {
    transform:  rotate(${props => props.angle ? (props.angle - 60) + "deg": "60deg"})  translate(${SIZES.house_offset});
  }
  &.house.house4 {
    transform:  rotate(${props => props.angle ? (props.angle - 90) + "deg": "90deg"})  translate(${SIZES.house_offset});
  }

  &.house.house5 {
    transform:  rotate(${props => props.angle ? (props.angle - 120) + "deg": "120deg"})  translate(${SIZES.house_offset});
  }

  &.house.house6 {
    transform:  rotate(${props => props.angle ? (props.angle - 150) + "deg": "150deg"})  translate(${SIZES.house_offset});
  }


  &.house.house7 {
    transform:  rotate(${props => props.angle ? (props.angle - 180) + "deg": "180deg"})  translate(${SIZES.house_offset});
  }

  &.house.house8 {
    transform:  rotate(${props => props.angle ? (props.angle  + 150) + "deg": "-150deg"})  translate(${SIZES.house_offset});
  }

  &.house.house9 {
    transform:  rotate(${props => props.angle ? (props.angle + 120) + "deg": "-120deg"})  translate(${SIZES.house_offset});
  }

  &.house.house10 {
    transform:  rotate(${props => props.angle ? (props.angle + 90) + "deg": "-90deg"})  translate(${SIZES.house_offset});
  }

  &.house.house11 {
    transform:  rotate(${props => props.angle ? (props.angle + 60) + "deg": "-60deg"})  translate(${SIZES.house_offset});
  }

  &.house.house12 {
    transform:  rotate(${props => props.angle ? (props.angle + 30) + "deg": "-30deg"})  translate(${SIZES.house_offset});
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
    width: "80%",
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
  transform: translateX(-300px);
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
  top: 34px;  //(planet_height=50 - 32) /2
  left: 34px; //(planet_width - 32) /2
`;

const PlanetLabel = styled.div`
  ${ValignTextMiddle}
  ${RobotoNormalWhite131px}
  position: absolute;
  width: 100%;
  height: 100%px;
  top: 0px;
  left: 0px;
  text-align: center;
  justify-content: center;
  letter-spacing: 0;
  //overflow: hidden;
  transform: rotate(-90deg);
`;

const Planet = styled.div`
  position: absolute;
  height: ${SIZES.planet_height};
  width: ${SIZES.planet_width};
  left: ${SIZES.planet_x};
  top: ${SIZES.planet_y};    
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${props => props.angle ? props.angle + "deg": "0deg"}) translateY(-280px) translateY(${props => props.offset ? -props.offset + "px": "0px"}) rotate(${props => props.offset != 0 ? 90 + "deg" : "0deg"});
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
      <Planet className="Sun" angle={this.props.angle} offset={this.props.offset}>
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
      <Planet angle = {this.props.angle} offset={this.props.offset}>
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
      <Planet angle={this.props.angle} offset={this.props.offset}>
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
      <Planet angle={this.props.angle} offset={this.props.offset}>
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
      <Planet angle = {this.props.angle} offset={this.props.offset}>
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
      <Planet angle = {this.props.angle} offset={this.props.offset}>
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
      <Planet angle = {this.props.angle} offset={this.props.offset}>
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
      <Planet angle = {this.props.angle} offset={this.props.offset}>
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
      <Planet angle = {this.props.angle} offset={this.props.offset}>
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

  @media ( max-width: 1200px) {
    font-size: 20px; //var(--font-size-m2);
  }
  @media ( min-width: 1200px) {
    font-size: 16px; //var(--font-size-m2);
  }

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

const FragContainer = styled.div`
  width: 100%;
  max-width: 600px;
  //background: #482c34;
  background: #2F333D;
  border: 2px;
  border-color: rgb(255,255,255);
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
`;

const FragHeading = styled.div`
  //border: 1px solid #ddd;
  //background: rebeccapurple;
  color: palevioletred;
  padding: 0.5em;
  margin-bottom: 10;
  font-size: 16px;
  //width: 100%;
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

// Defualt chart data. It will be overridden durting initialization. Kept it here as a template
const chartData = {
    //zodiac: "zodiac@1x.png",
    zodiac: "zodiac-s.png",
    housesProps: housesData,
    enableBirthLagna: true,
    enableMintNft: true,
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

  // Ketu data derived from rahu
  planetData.push(planetData[8]+180);

  let chartData = {
    //zodiac: "zodiac@1x.png",
    zodiac: "zodiac-s.png",
    housesProps: housesData,
    planetData: planetData,
    enableBirthLagna: false,
    enableMintNft: false,
  };  
  return chartData;
}

export {
  Chart,
  chartData,
  ChartWithId
}
