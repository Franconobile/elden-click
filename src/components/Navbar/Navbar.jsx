import React from 'react';
import styled from 'styled-components';
import runeIcon from '../../assets/runes-icon.webp';

// Estilos para el header see
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #0e0d0d;
  color: #947f6e;
  padding: 10px;
`;

// Estilos para las secciones dentro del header seeee
const HeaderSection = styled.div`
  display: flex;
  align-items: center;


&.header-center {
    position: relative; 

    img {
      height: auto;
      width: 100%;
      max-width: 50px;
      position: relative;
      z-index: 1; 
      
    }
`;

const InfoButton = styled.button`
  padding: 7px;
  width: 30px;
  background-color: #68420F;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 16px;
        &:hover {
    background-color: #A56B1B;

`;


// Estilos para el contador :v
const Counter = styled.h3`
  color: white;
`;


const Navbar = ({clickCount, onInfoClick }) => {
    return (
      <Header>
        <HeaderSection className="header-left">ELDEN CLICK</HeaderSection>
        <HeaderSection className="header-center">
          <img src={runeIcon} alt="Runitas" />
          <Counter id="contador">{clickCount}</Counter>
        </HeaderSection>
        <HeaderSection className="header-right">
          <InfoButton onClick={onInfoClick}>?</InfoButton>
        </HeaderSection>
      </Header>
      );
    };

export default Navbar