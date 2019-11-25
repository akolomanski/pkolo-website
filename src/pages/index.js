import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import backgroundImage from '../images/pkolo_logo.svg';
import GlobalStyles from '../components/Global';
import {useSpring, animated} from 'react-spring'


const StyledWrapper = styled.div`
	width: 100%;
	height: 100vh;
	float: right;
	font-family: 'Montserrat';
	font-size: 2.5vw;
	background-image: url(${backgroundImage});
	background-color: #444444;
	background-position: 10% 90%;
	background-repeat: no-repeat;
	background-size: 30%;
	.flex-container {
		display: flex;
		align-items: flex-end;
		flex-direction: column;
		margin-top: 8vh;
		h1,
		p,
		a {
			margin-right: 10vw;
			margin-top: 0;
			margin-bottom: 0;
			margin-left: 0;
		}
		a {
			// text-decoration: none;
			color: white;
			margin-top: 2vw;
		}
	}

	@media only screen and (max-width: 800px) {
		font-size: 4.0vw;
		background-size: 45%;
		background-position: 5% 90%;
	}
	@media only screen and (max-width: 400px) {
		font-size: 4.6vw;
		background-size: 80%;
		background-position: 10% 90%;
	}
`;

const IndexPage = () =>{ 
	const props = useSpring(
		
		{
		config:{
			mass: 100,
			clamp:true
		},
		to: async (next, cancel) => {
		  await next({opacity: 1})
		  
		},
		from: {opacity: 0}
	  })
	
	return(
		<animated.div style={props}>
			<GlobalStyles />
			<StyledWrapper>
				<div class="flex-container">
					<h1>Piotr Kołomański</h1>
					<p>Art | Ceramics | Design</p>
					<Link to="/works">
						Portfolio 
					</Link>
				</div>
			</StyledWrapper>
		</animated.div>)
};

export default IndexPage;
