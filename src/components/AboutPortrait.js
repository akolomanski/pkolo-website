import React from 'react';
import { StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const AboutPortrait = () => (
	<StaticQuery
		query={graphql`
			query {
				file(relativePath: { eq: "portrait-bg.png" }) {
					childImageSharp {
						fluid {
                            
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`}
		render={({ file }) => <Img fluid={file.childImageSharp.fluid} alt="portret" />}
	/>
);

export default AboutPortrait;
