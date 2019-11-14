import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import backgroundImage from '../images/pkolo_logo.png';
import GlobalStyles from '../components/Global';


const StyledWrapper = styled.div`
	width: 100%;
	height: 100vh;
	float: right;
	font-family: 'Barlow';
	font-size: 2.5vw;
	background-image: url(${backgroundImage});
	background-color: #444444;
	background-position: bottom left;
	background-repeat: no-repeat;
	background-size: 50%;
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
		background-size: 60%;
	}
	@media only screen and (max-width: 400px) {
		font-size: 5.5vw;
		background-size: 80%;
	}
`;

const IndexPage = () => (
	<div>
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
	</div>
);

export default IndexPage;
