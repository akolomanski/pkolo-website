import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Slider from '../components/Slider';
import Layout from '../components/Layout';

const StyledWrapper = styled.div`
	margin-top: 50px;
	margin-right: 100px;
	margin-left: 100px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 50px 100px;
	
	img {
		
		margin: auto;

	}
	.container {
		font-size: 1.5em;
		font-family: 'Barlow';
	}
	.photo {
		
	}
`;

const workTemplate = ({ data: { work } }) => (
	<Layout>
		<StyledWrapper>
			
			<div className="container">
				<h2>{work.title}</h2>
				<p>{work.description.description}</p>
			</div>
			{work.photos.map((photo) => {
				return (
					<div className="container">
						<div className="photo">
							<Img fluid={photo.fluid} />
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
