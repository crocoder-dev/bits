import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: ${(props) => props.logoWidth}px;
`;


const Logo = ({ logo, logoWidth }) => (
  <StyledLogo src={logo} logoWidth={logoWidth} alt="logo" />
);

export default Logo;
