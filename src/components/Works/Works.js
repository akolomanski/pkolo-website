import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	text-align: center;

	.container {
		margin-top: 100px;
		display: inline-grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
		grid-gap: 50px 100px;
		list-style: none;
		justify-items: space-around;

		img {
			height: 300px;
		}
	}
`;

const Works = () => (
	<StaticQuery
		query={graphql`
			query {
				works: allContentfulWork {
				  edges {
					node {
					  slug
					  thumbnail {
						file {
						  url
						}
					  }
					}
				  }
				}
			  }
			  
			  
		`}
		render={({ works: { edges } }) => (
			<StyledWrapper>
				<ul className="container">
					{edges.map((work) => (
						<li className="item">
							<Link key={`/${work.node.slug}`} to={`/${work.node.slug}`}>
								<img src={work.node.thumbnail.file.url} className="thumbnail" alt="thumbnail" />
							</Link>
						</li>
					))}
				</ul>
			</StyledWrapper>
		)}
	/>
);
export default Works;
