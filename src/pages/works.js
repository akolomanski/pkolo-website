import React from 'react';
import Works from '../components/Works/Works'
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after{
    box-sizing: border-box;
  }
`;


const works = () => (
    <>  
      <GlobalStyles />
      <Works />
      
    </> 
  )
  
  
  export default works
  