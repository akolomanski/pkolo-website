const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const workTemplate = path.resolve(`src/templates/workTemplate.js`);

	const { data } = await graphql(`
  
  query{
    works:allContentfulWork {
      edges {
        node {
          slug
          
        }
      }
    }
  }
  
  `);

	data.works.edges.forEach((work) => {
		createPage({
			path: work.node.slug,
			component: workTemplate,
			context: {
				slug: work.node.slug
			}
		});
	});
};
