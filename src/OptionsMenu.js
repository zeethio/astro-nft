import React, { Component } from "react";
import styled from "styled-components";
import { BsChevronDown, BsChevronUp, BsCheckSquare, BsSquare } from "react-icons/bs"; 

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const StyledLi = styled.li`
  //float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  font-size: 16px;
  text-align: center;
  padding: 6px 6px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: red;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  color: white;
  font-size: 16px;
  text-align: center;
  padding: 6x 6px;
  text-decoration: none;
  &:hover {
    background-color: red;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 6px 6px;
  font-size: 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f100;
  }
`;

class OptionsMenu extends Component {

  handleClick = (action, arg1, arg2) => {
    if (!action) return;
    if (this.props.handler) this.props.handler(action, arg1, arg2);
  };

  render = () => {
    let showNavamsha = this.props.showNavamsha;
    let showExaltation = true;
    let showCharts = true;

    return (
      <StyledUl>
        <StyledLi>
          <StyledA onClick={() => this.handleClick("navamsha")}>Navamsha { showNavamsha ? <BsCheckSquare />:<BsSquare />}</StyledA>
        </StyledLi>
        <DropDownLi>
          <Dropbtn onClick={() => this.handleClick("Charts", null, null)}>
          Charts{showCharts ? <BsChevronDown />:<BsChevronUp />}
          </Dropbtn>
          <DropDownContent>
            {" "}
            <SubA onClick={() => this.handleClick("chart", "2", "D2 Hora")}>D2 Hora</SubA>
            <SubA onClick={() => this.handleClick("chart", "3", "D3 Drekkana")}>D3 Drekkana</SubA>
            <SubA onClick={() => this.handleClick("chart", "4", "D4 Chaturthamsa")}>D4 Chaturthamsa</SubA>
            <SubA onClick={() => this.handleClick("chart", "7", "D7 Sapthamsa")}>D7 Sapthamsa</SubA>
            <SubA onClick={() => this.handleClick("chart", "9", "D9 Navamsa")}>D9 Navamsa</SubA>                                    
            <SubA onClick={() => this.handleClick("chart", "10", "D10 Dasamamsa")}>D10 Dasamamsa</SubA>                                    
            <SubA onClick={() => this.handleClick("chart", "12", "D12 Dvadasamsa")}>D12 Dvadasamsa</SubA>                                    
            <SubA onClick={() => this.handleClick("chart", "16", "D16 Shodasamsa")}>D16 Shodasamsa</SubA>                                    
            <SubA onClick={() => this.handleClick("chart", "20", "D20 Vimsamsa")}>D20 Vimsamsa</SubA>                                    
            <SubA onClick={() => this.handleClick("chart", "24", "D24 Chaturvimsa")}>D24 Chaturvimsa</SubA>                                    
            <SubA onClick={() => this.handleClick("chart", "27", "D27 Saptavimsa")}>D27 Saptavimsa</SubA>                                    
            <SubA onClick={() => this.handleClick("chart", "30", "D30 Trimsamsa")}>D30 Trimsamsa</SubA>                                    
            <SubA onClick={() => this.handleClick("chart", "40", "D40 Chatvarimsamsa")}>D40 Chatvarimsamsa</SubA>                                    
            <SubA onClick={() => this.handleClick("chart", "45", "D45 Akshavedamsa")}>D45 Akshavedamsa</SubA>                                    
            <SubA onClick={() => this.handleClick("chart", "60", "D60 Shashtiamsa")}>D60 Shashtiamsa</SubA>                                               
          </DropDownContent>
        </DropDownLi>        
        <DropDownLi>
          <Dropbtn onClick={() => this.handleClick("Exaltation", null)}>
          Exaltations{showExaltation ? <BsChevronDown />:<BsChevronUp />}
          </Dropbtn>
          <DropDownContent>
            {" "}
            <SubA onClick={() => this.handleClick("sun", null)}>Sun</SubA>
            <SubA onClick={() => this.handleClick("moon", null)}>Moon</SubA>
            <SubA onClick={() => this.handleClick("mercury", null)}>Mercury</SubA>
            <SubA onClick={() => this.handleClick("venus", null)}>Venus</SubA>
            <SubA onClick={() => this.handleClick("mars", null)}>Mars</SubA>                                    
            <SubA onClick={() => this.handleClick("jupiter", null)}>Jupiter</SubA>                                    
            <SubA onClick={() => this.handleClick("saturn", null)}>Saturn</SubA>                                    

            <SubA onClick={() => this.handleClick("off", null)}>Off</SubA>            
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
    );
  };
}

export default OptionsMenu;