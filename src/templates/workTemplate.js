import React from 'react';
import { Link } from 'gatsby';

const workTemplate = ({ pageContext: { data } }) => (
	<div>
		<Link to="/works">Go Back</Link>

		<h1>{data.name}</h1>

		{data.photos.map((photo) => <img src={photo.url} alt="thumbnail" />)}

		{console.log(data.name)}
	</div>
);
export default workTemplate;
