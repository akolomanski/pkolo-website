import React from 'react';
import { Link} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	margin-top: 50px;
	margin-right: 100px;
	margin-left: 100px;
	
	
`;

const workTemplate = ({data:{work}}) => (
	<StyledWrapper>
		<Link to="/works">Go Back</Link>
		<h2>{work.title}</h2>
		<p>{work.description.description}</p>

		{work.photos.map((photo, index)=>{
			return <Img key={index} fluid={photo.fluid}></Img>
		})}
		

		

		
	</StyledWrapper>
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
