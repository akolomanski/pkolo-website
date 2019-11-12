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

	ul {
		list-style: none;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 300px;
		margin-top: 0;
		margin-left: auto;
		margin-right: 100px;
        
	}
`;

const Navbar = () => {
	return (
		<div>
			<GlobalStyles />
			<StyledWrapper>
				<ul>
					<li>
						<About />
					</li>
					<li>
						<Contact />
					</li>
				</ul>
			</StyledWrapper>
		</div>
	);
};

export default Navbar;
