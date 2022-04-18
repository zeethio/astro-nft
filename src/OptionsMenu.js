import React, { Component } from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const StyledLi = styled.li`
  float: left;
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

  handleClick = action => {
    if (!action) return;
    if (this.props.handler) this.props.handler(action);
  };

  render = () => {
    return (
      <StyledUl>
        <StyledLi>
          <StyledA onClick={() => this.handleClick("navamsha")}>Navamsha</StyledA>
        </StyledLi>
        <DropDownLi>
          <Dropbtn onClick={() => this.handleClick("Exaltation")}>
            Exaltations
          </Dropbtn>
          <DropDownContent>
            {" "}
            <SubA onClick={() => this.handleClick("sun")}>Sun</SubA>
            <SubA onClick={() => this.handleClick("moon")}>Moon</SubA>
            <SubA onClick={() => this.handleClick("mercury")}>Mercury</SubA>
            <SubA onClick={() => this.handleClick("venus")}>Venus</SubA>
            <SubA onClick={() => this.handleClick("mars")}>Mars</SubA>                                    
            <SubA onClick={() => this.handleClick("jupiter")}>Jupiter</SubA>                                    
            <SubA onClick={() => this.handleClick("saturn")}>Saturn</SubA>                                    

            <SubA onClick={() => this.handleClick("off")}>Off</SubA>            
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
    );
  };
}

export default OptionsMenu;