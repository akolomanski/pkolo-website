import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	margin-top: 50px;
	margin-right: 100px;
	margin-left: 100px;
	img{
		max-width: 800px;
		float: right;
	}
`;

const workTemplate = ({ pageContext: { data } }) => (
	<StyledWrapper>
		<Link to="/works">Go Back</Link>

		<h1>{data.name}</h1>

		{data.photos.map((photo) => <img src={photo.url} alt="thumbnail" />)}

		{console.log(data.name)}
	</StyledWrapper>
);
export default workTemplate;
