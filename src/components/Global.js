import React from 'react';
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  body {
    
    padding: 0;
    margin: 0;
    font-family: 'Barlow';
    color: white;
    background-color: #444444;
    
  }
  *, *::before, *::after{
    box-sizing: border-box;
  }
`;

const Global = () => {
	return <GlobalStyles />;
};

export default Global;
