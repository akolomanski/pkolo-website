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
				allSitePage(
					filter: {
						component: {
							eq: "/home/andrzej/Documents/Code/pkolo page/pkolo-website/src/templates/workTemplate.js"
						}
					}
				) {
					edges {
						node {
							path
							context {
								data {
									name
									thumbnail {
										url
									}
								}
							}
						}
					}
				}
			}
		`}
		render={({ allSitePage: { edges } }) => (
			<StyledWrapper>
				<ul className="container">
					{edges.map((work) => (
						<li className="item">
							<Link key={work.node.path} to={work.node.path}>
								<img src={work.node.context.data.thumbnail.url} className="thumbnail" alt="thumbnail" />
							</Link>
						</li>
					))}
				</ul>
			</StyledWrapper>
		)}
	/>
);
export default Works;
