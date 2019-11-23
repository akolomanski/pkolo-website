import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/Layout';

const StyledWrapper = styled.div`
	margin-top: 50px;
	margin-right: 1vw;
	margin-left: 1vw;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 5vh 3vw;
	align-items: center;
	justify-content: center;
	margin-bottom: 50px;
	background-color: #444444;
	p {
		padding-right: 100px;
	}
	.photo {
		width: 65%;
		margin: auto;
	}
	.container {
		font-size: 1.2em;
		font-family: 'Barlow';
	}
	a{
		font-size: 1.8rem;
		font-family: 'Barlow';
		text-decoration: none;
		color: white;
		position: absolute;
		top: 8px;

	}

	@media only screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-gap: 50px;
		margin-right: 30px;
		margin-left: 30px;
		.container {
			font-size: 1.5em;
		}
		p {
			padding: 0;
		}
		a{
			top: 45px;
			left: 40vw;
		}
		.photo{
			width: 100%;
		}
	}
`;

const workTemplate = ({ data: { work } }) => (
	<Layout work={true}>
		<StyledWrapper>
			<div className="container">
				<div className="photo">
					<Link to="/works">Wstecz</Link>
					<h2>{work.title}</h2>
					<p>{work.description.description}</p>
				</div>
			</div>
			{work.photos.map((photo) => {
				return (
					<div className="container">
						<div className="photo">
							<Img key={photo.fluid.src} fluid={photo.fluid} />
						</div>
					</div>
				);
			})}
		</StyledWrapper>
	</Layout>
);

export const query = graphql`
	query($slug: String!) {
		work: contentfulWork(slug: { eq: $slug }) {
			description {
				description
			}
			title
			photos {
				fluid {
					...GatsbyContentfulFluid_withWebp_noBase64
				}
			}
		}
	}
`;

export default workTemplate;
