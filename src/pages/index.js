import React from "react"
import {Link} from 'gatsby'
import styled, {createGlobalStyle} from 'styled-components';
import backgroundImage from '../images/Teksty-cut.png';

const GlobalStyles = createGlobalStyle`
  body {
    
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after{
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  float: right;
  font-family: 'Barlow';
  font-size: 2.5vw;
  background-image: url(${backgroundImage});
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 53%;
  .flex-container{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 5vh;
    h1,p,a{
      margin-right: 10vw;
      margin-top: 0;
      margin-bottom: 0;
      margin-left:0;
    }
    a{
      // text-decoration: none;
      color: black;
      margin-top: 2vw;
    }
    
    
  }
  
  
`;

const IndexPage = () => (
  <>  
    <GlobalStyles/>
    <StyledWrapper>
      
      <div class="flex-container">
        <h1>Piotr Kołomański</h1>
        <p>Art | Ceramics | Design</p>
        <Link to="/works">Portfolio</Link>
      </div>
    </StyledWrapper>
    
  </> 
)


export default IndexPage
