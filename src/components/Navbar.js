import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import About from './About';
import Contact from './Contact';


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
	
	height: 50px;
	margin-top: 0;
  	display: flex;
	justify-items: flex-end;
	ul {
		list-style: none;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 300px;
		margin-top: 0;
		
		
        
	}
`;

const Navbar = ({props}) => {


	return (
		<div>
			{console.log(props)}
			<GlobalStyles />
			<StyledWrapper>
				<ul>
					<li key="about">
						<About />
					</li>
					<li key="contact">
						<Contact />
					</li>
				</ul>
			</StyledWrapper>
		</div>
	);
};

export default Navbar;
