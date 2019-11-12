import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Slider from '../components/Slider';
import  Layout  from '../components/Layout';

const StyledWrapper = styled.div`
	margin-top: 50px;
	margin-right: 100px;
	margin-left: 100px;
	img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}
	.text-container {
		font-size: 2.5em;
		font-family: 'Barlow';
	}
`;

const workTemplate = ({ data: { work } }) => (
	<Layout>
		<StyledWrapper>
			<Link to="/works">Go Back</Link>
			<Slider props={work.photos} />
			<div className="text-container">
				<h2>{work.title}</h2>
				<p>{work.description.description}</p>
			</div>
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
